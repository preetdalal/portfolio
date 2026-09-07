/**
 * Preet Dalal — Kubernetes & Cloud Network Topology 3D Canvas
 * Renders an active distributed mesh of compute nodes, data packet pulses, and cluster links.
 */
(function () {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 80;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Compute Nodes Configuration
  const nodeCount = 48;
  const positions = new Float32Array(nodeCount * 3);
  const nodeTypes = []; // 0 = standard pod (cyan), 1 = gateway/ingress (blue), 2 = ml worker (purple)
  const velocities = [];
  const radius = 58;

  for (let i = 0; i < nodeCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * radius * 2.4;
    positions[i * 3 + 1] = (Math.random() - 0.5) * radius * 1.6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * radius * 1.1;

    nodeTypes.push(Math.random() > 0.8 ? 2 : (Math.random() > 0.6 ? 1 : 0));

    velocities.push({
      x: (Math.random() - 0.5) * 0.025,
      y: (Math.random() - 0.5) * 0.025,
      z: (Math.random() - 0.5) * 0.018
    });
  }

  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Circular glowing dot texture
  const createDotTexture = () => {
    const cvs = document.createElement('canvas');
    cvs.width = 64;
    cvs.height = 64;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(56, 189, 248, 1)');
    grad.addColorStop(0.3, 'rgba(59, 130, 246, 0.8)');
    grad.addColorStop(0.7, 'rgba(30, 64, 175, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(cvs);
  };

  const pointMaterial = new THREE.PointsMaterial({
    size: 4.8,
    map: createDotTexture(),
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const points = new THREE.Points(nodeGeometry, pointMaterial);
  scene.add(points);

  // Mesh Connection Lines
  const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
  const linePositions = new Float32Array(maxConnections * 6);
  const lineColors = new Float32Array(maxConnections * 6);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  // Animated Data Packets (flowing along edges)
  const packetCount = 20;
  const packetPositions = new Float32Array(packetCount * 3);
  const packetGeometry = new THREE.BufferGeometry();
  packetGeometry.setAttribute('position', new THREE.BufferAttribute(packetPositions, 3));

  const createPacketTexture = () => {
    const cvs = document.createElement('canvas');
    cvs.width = 32;
    cvs.height = 32;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 15);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.4, 'rgba(56, 189, 248, 0.9)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 15, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(cvs);
  };

  const packetMaterial = new THREE.PointsMaterial({
    size: 5.5,
    map: createPacketTexture(),
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const packetPoints = new THREE.Points(packetGeometry, packetMaterial);
  scene.add(packetPoints);

  const packets = [];
  for (let p = 0; p < packetCount; p++) {
    packets.push({
      sourceNode: Math.floor(Math.random() * nodeCount),
      targetNode: Math.floor(Math.random() * nodeCount),
      progress: Math.random(),
      speed: 0.008 + Math.random() * 0.012
    });
  }

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.012;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.012;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const maxDist = 26;

  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX - targetX) * 0.04;
    targetY += (mouseY - targetY) * 0.04;

    camera.position.x = targetX;
    camera.position.y = -targetY;
    camera.lookAt(0, 0, 0);

    const posArr = nodeGeometry.attributes.position.array;
    for (let i = 0; i < nodeCount; i++) {
      const idx = i * 3;
      posArr[idx] += velocities[i].x;
      posArr[idx + 1] += velocities[i].y;
      posArr[idx + 2] += velocities[i].z;

      if (Math.abs(posArr[idx]) > radius * 1.2) velocities[i].x *= -1;
      if (Math.abs(posArr[idx + 1]) > radius * 0.8) velocities[i].y *= -1;
      if (Math.abs(posArr[idx + 2]) > radius * 0.6) velocities[i].z *= -1;
    }
    nodeGeometry.attributes.position.needsUpdate = true;

    let lineIdx = 0;
    let colorIdx = 0;

    for (let i = 0; i < nodeCount; i++) {
      const x1 = posArr[i * 3];
      const y1 = posArr[i * 3 + 1];
      const z1 = posArr[i * 3 + 2];

      for (let j = i + 1; j < nodeCount; j++) {
        const x2 = posArr[j * 3];
        const y2 = posArr[j * 3 + 1];
        const z2 = posArr[j * 3 + 2];

        const dx = x1 - x2;
        const dy = y1 - y2;
        const dz = z1 - z2;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDist) {
          linePositions[lineIdx++] = x1;
          linePositions[lineIdx++] = y1;
          linePositions[lineIdx++] = z1;
          linePositions[lineIdx++] = x2;
          linePositions[lineIdx++] = y2;
          linePositions[lineIdx++] = z2;

          const alpha = (1 - dist / maxDist) * 0.7;

          // Cyan to deep royal blue gradients
          lineColors[colorIdx++] = 0.22 * alpha;
          lineColors[colorIdx++] = 0.55 * alpha;
          lineColors[colorIdx++] = 0.95 * alpha;

          lineColors[colorIdx++] = 0.15 * alpha;
          lineColors[colorIdx++] = 0.40 * alpha;
          lineColors[colorIdx++] = 0.90 * alpha;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx / 3);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    // Update Data Packets
    const pktArr = packetGeometry.attributes.position.array;
    for (let p = 0; p < packetCount; p++) {
      const pkt = packets[p];
      pkt.progress += pkt.speed;
      if (pkt.progress >= 1) {
        pkt.progress = 0;
        pkt.sourceNode = Math.floor(Math.random() * nodeCount);
        pkt.targetNode = Math.floor(Math.random() * nodeCount);
      }

      const sIdx = pkt.sourceNode * 3;
      const tIdx = pkt.targetNode * 3;

      const sx = posArr[sIdx], sy = posArr[sIdx + 1], sz = posArr[sIdx + 2];
      const tx = posArr[tIdx], ty = posArr[tIdx + 1], tz = posArr[tIdx + 2];

      pktArr[p * 3] = sx + (tx - sx) * pkt.progress;
      pktArr[p * 3 + 1] = sy + (ty - sy) * pkt.progress;
      pktArr[p * 3 + 2] = sz + (tz - sz) * pkt.progress;
    }
    packetGeometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();
})();
