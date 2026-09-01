/**
 * Three.js 3D Distributed Node Network & Mesh Topology
 * Simulates a dynamic, responsive distributed Kubernetes/microservice cluster.
 */
(function () {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 85;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Node Points and Connections
  const nodeCount = 75;
  const positions = new Float32Array(nodeCount * 3);
  const velocities = [];
  const radius = 65;

  for (let i = 0; i < nodeCount; i++) {
    const x = (Math.random() - 0.5) * radius * 2.2;
    const y = (Math.random() - 0.5) * radius * 1.5;
    const z = (Math.random() - 0.5) * radius * 1.2;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    velocities.push({
      x: (Math.random() - 0.5) * 0.035,
      y: (Math.random() - 0.5) * 0.035,
      z: (Math.random() - 0.5) * 0.02
    });
  }

  // Node Particles Geometry & Material
  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Create subtle circular texture for points
  const createCircleTexture = () => {
    const cvs = document.createElement('canvas');
    cvs.width = 64;
    cvs.height = 64;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(52, 211, 153, 1)');
    grad.addColorStop(0.4, 'rgba(16, 185, 129, 0.7)');
    grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(cvs);
  };

  const pointMaterial = new THREE.PointsMaterial({
    size: 4.5,
    map: createCircleTexture(),
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const pointCloud = new THREE.Points(nodeGeometry, pointMaterial);
  scene.add(pointCloud);

  // Line Mesh for connections
  const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
  const linePositions = new Float32Array(maxConnections * 6);
  const lineColors = new Float32Array(maxConnections * 6);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

  const lineMaterial = new THREE.LineSegmentsMaterial
    ? new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    : new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

  const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(linesMesh);

  // Floating Data Packets (Pulsing glowing packets along the topology)
  const packetCount = 8;
  const packets = [];
  const packetGeo = new THREE.SphereGeometry(0.5, 8, 8);
  const packetMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
  });

  for (let i = 0; i < packetCount; i++) {
    const pMesh = new THREE.Mesh(packetGeo, packetMat);
    scene.add(pMesh);
    packets.push({
      mesh: pMesh,
      fromIdx: Math.floor(Math.random() * nodeCount),
      toIdx: Math.floor(Math.random() * nodeCount),
      progress: Math.random(),
      speed: 0.006 + Math.random() * 0.008
    });
  }

  // Mouse Interaction & Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - windowHalfX) * 0.015;
    mouseY = (e.clientY - windowHalfY) * 0.015;
  }, { passive: true });

  // Scroll Interaction
  let scrollY = 0;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY * 0.02;
  }, { passive: true });

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  // Animation Loop
  let frame = 0;
  const maxDistance = 26;

  function animate() {
    requestAnimationFrame(animate);
    frame++;

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    camera.position.x = targetX;
    camera.position.y = -targetY - scrollY * 0.3;
    camera.lookAt(0, -scrollY * 0.3, 0);

    // Update node positions
    const posArr = nodeGeometry.attributes.position.array;
    for (let i = 0; i < nodeCount; i++) {
      const idx = i * 3;
      posArr[idx] += velocities[i].x;
      posArr[idx + 1] += velocities[i].y;
      posArr[idx + 2] += velocities[i].z;

      // Bounce at boundary limits
      if (Math.abs(posArr[idx]) > radius * 1.1) velocities[i].x *= -1;
      if (Math.abs(posArr[idx + 1]) > radius * 0.75) velocities[i].y *= -1;
      if (Math.abs(posArr[idx + 2]) > radius * 0.6) velocities[i].z *= -1;
    }
    nodeGeometry.attributes.position.needsUpdate = true;

    // Update connection lines
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

        if (dist < maxDistance) {
          linePositions[lineIdx++] = x1;
          linePositions[lineIdx++] = y1;
          linePositions[lineIdx++] = z1;
          linePositions[lineIdx++] = x2;
          linePositions[lineIdx++] = y2;
          linePositions[lineIdx++] = z2;

          const alpha = 1.0 - dist / maxDistance;
          // Gradient between emerald green and cyan
          lineColors[colorIdx++] = 0.06 * alpha;
          lineColors[colorIdx++] = 0.72 * alpha;
          lineColors[colorIdx++] = 0.5 + (0.5 * alpha);

          lineColors[colorIdx++] = 0.02 * alpha;
          lineColors[colorIdx++] = 0.85 * alpha;
          lineColors[colorIdx++] = 0.8 * alpha;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx / 3);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    // Update packets
    for (let p = 0; p < packets.length; p++) {
      const pkt = packets[p];
      pkt.progress += pkt.speed;
      if (pkt.progress >= 1) {
        pkt.progress = 0;
        pkt.fromIdx = pkt.toIdx;
        pkt.toIdx = Math.floor(Math.random() * nodeCount);
      }

      const fX = posArr[pkt.fromIdx * 3];
      const fY = posArr[pkt.fromIdx * 3 + 1];
      const fZ = posArr[pkt.fromIdx * 3 + 2];

      const tX = posArr[pkt.toIdx * 3];
      const tY = posArr[pkt.toIdx * 3 + 1];
      const tZ = posArr[pkt.toIdx * 3 + 2];

      pkt.mesh.position.x = fX + (tX - fX) * pkt.progress;
      pkt.mesh.position.y = fY + (tY - fY) * pkt.progress;
      pkt.mesh.position.z = fZ + (tZ - fZ) * pkt.progress;
    }

    // Subtle global rotation
    pointCloud.rotation.y = frame * 0.0006;
    linesMesh.rotation.y = frame * 0.0006;

    renderer.render(scene, camera);
  }

  animate();
})();
