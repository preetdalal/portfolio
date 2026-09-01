/**
 * Subtle Navy Blue & Slate Mesh Background
 */
(function () {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 75;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const nodeCount = 55;
  const positions = new Float32Array(nodeCount * 3);
  const velocities = [];
  const radius = 55;

  for (let i = 0; i < nodeCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * radius * 2.2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * radius * 1.5;
    positions[i * 3 + 2] = (Math.random() - 0.5) * radius;

    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.015
    });
  }

  const nodeGeometry = new THREE.BufferGeometry();
  nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const createDotTexture = () => {
    const cvs = document.createElement('canvas');
    cvs.width = 32;
    cvs.height = 32;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 15);
    grad.addColorStop(0, 'rgba(96, 165, 250, 0.9)');
    grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.5)');
    grad.addColorStop(1, 'rgba(59, 130, 246, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 15, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(cvs);
  };

  const pointMaterial = new THREE.PointsMaterial({
    size: 3.5,
    map: createDotTexture(),
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const points = new THREE.Points(nodeGeometry, pointMaterial);
  scene.add(points);

  const maxConnections = (nodeCount * (nodeCount - 1)) / 2;
  const linePositions = new Float32Array(maxConnections * 6);
  const lineColors = new Float32Array(maxConnections * 6);

  const lineGeometry = new THREE.BufferGeometry();
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.01;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.01;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const maxDist = 24;

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

      if (Math.abs(posArr[idx]) > radius * 1.1) velocities[i].x *= -1;
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

          const alpha = 1.0 - dist / maxDist;
          // Navy / cobalt blue gradient
          lineColors[colorIdx++] = 0.23 * alpha;
          lineColors[colorIdx++] = 0.51 * alpha;
          lineColors[colorIdx++] = 0.96 * alpha;

          lineColors[colorIdx++] = 0.11 * alpha;
          lineColors[colorIdx++] = 0.3 * alpha;
          lineColors[colorIdx++] = 0.85 * alpha;
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx / 3);
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();
})();
