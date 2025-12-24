
/* ============================================================
   main.js - Minimal, professional interactions
   - Smooth scroll navigation
   - Three.js demo (rotating torus knot) via CDN
   - Lightweight form validation (client-side)
   ============================================================ */

(function () {
  // -------- Smooth Scroll for in-page anchors ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // -------- Basic Contact Form UX ----------
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = (document.getElementById("name")?.value || "").trim();
      const email = (document.getElementById("email")?.value || "").trim();
      const msg = (document.getElementById("message")?.value || "").trim();

      if (!name || !email || !msg) {
        statusEl.textContent = "Please fill all fields.";
        statusEl.style.color = "rgba(255,255,255,0.75)";
        return;
      }

      // Simple email sanity check
      if (!email.includes("@") || email.length < 6) {
        statusEl.textContent = "Please enter a valid email.";
        statusEl.style.color = "rgba(255,255,255,0.75)";
        return;
      }

      // For now we just simulate a success (no backend in Step 1)
      statusEl.textContent = "Message prepared locally ✅ (Backend will be added later.)";
      statusEl.style.color = "rgba(126,231,135,0.9)";
      form.reset();
    });
  }

  // -------- Three.js mini demo ----------
  // This expects THREE to be loaded via CDN in index.html
  const wrap = document.getElementById("threeWrap");
  if (!wrap || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    55,
    wrap.clientWidth / wrap.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0.7, 2.6);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(wrap.clientWidth, wrap.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  wrap.appendChild(renderer.domElement);

  const light1 = new THREE.DirectionalLight(0xffffff, 1.0);
  light1.position.set(2, 3, 4);
  scene.add(light1);

  const light2 = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(light2);

  const geometry = new THREE.TorusKnotGeometry(0.55, 0.18, 160, 12);
  const material = new THREE.MeshStandardMaterial({
    metalness: 0.35,
    roughness: 0.25
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function animate() {
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.008;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  // Handle resize
  const onResize = () => {
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener("resize", onResize);
})();
