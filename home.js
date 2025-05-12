document.addEventListener("DOMContentLoaded", async (e) => {
    e.preventDefault();
      const userAgent = navigator.userAgent;
      const timestamp = new Date().toISOString();
      const username = localStorage.getItem("username") || "Anonim";
    
      // ambil IP public
      let ip = "unknown";
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        ip = data.ip;
      } catch (e) {
        console.warn("Gagal ambil IP:", e);
      }
    
      const deviceData = {
        username,
        userAgent,
        ip,
        timestamp
      };
    
      fetch("https://vbe-production.up.railway.app/device-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(deviceData)
      })
        .then(res => res.json())
        .then(data => {
          console.log("Device info berhasil dikirim:", data);
        })
        .catch(err => {
          console.error("Gagal kirim device info:", err);
        });

    // sambutan user
    const user = localStorage.getItem("username") || "Pengunjung";
    document.getElementById("welcome-text").textContent = `Selamat datang, ${user}.`;
  
    // update status login/logout langsung
    updateLoginState();
  
    // toggle mobile menu (hanya untuk mobile)
    const burger = document.getElementById("burger-icon");
    const nav = document.getElementById("sub-nav");
  
    if (burger) {
      burger.addEventListener("click", () => {
        nav.classList.toggle("active");
      });
    }
  
    // tombol logout (fungsi ini bisa juga dari file terpisah kalau lu pakai navbar global)
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.clear();
        updateLoginState();
      });
    }

    const pemesananLink = document.getElementById("nav-pemesanan");
    const toolsLink = document.getElementById("nav-tools");
    const fbLink = document.getElementById("nav-fb");
    const sbLink = document.getElementById("nav-subs");

    const isLoggedIn = localStorage.getItem("password") === "pendulum";

    function cekLogin(e) {
      if (!isLoggedIn) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("successModal").style.display = "flex";
        return false;
      }
    }

    pemesananLink.addEventListener("click", cekLogin, true);
    toolsLink.addEventListener("click", cekLogin, true);
    fbLink.addEventListener("click", cekLogin, true);
    sbLink.addEventListener("click", cekLogin, true);
  });
  
  function updateLoginState() {
    const log = document.getElementById("login");
    const logg = document.getElementById("logout");
    const storedPassword = localStorage.getItem("password");
  
    if (storedPassword === "pendulum") {
      log.style.display = "none";
      logg.style.display = "block";
    } else {
      log.style.display = "block";
      logg.style.display = "none";
    }
  }
  

function login() {
    window.location.href = "/index.html";
}

function toggleDropdown(event) {
    event.preventDefault();
    const menu = document.getElementById('pemesananDropdown');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }

function toggleDropdown1(event) {
    event.preventDefault();
    const menus = document.getElementById("pemesananDropdown1");
    menus.style.display = (menus.style.display === 'block') ? 'none' : 'block';
}

  // Optional: auto-close saat klik di luar dropdown
  document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('pemesananDropdown');
    if (!e.target.closest('.dropdown-custom')) {
      dropdown.style.display = 'none';
    }
  });

  // Contoh kode untuk mendeteksi device info dan mengirim ke server
  const userAgent = navigator.userAgent;  // Mendapatkan info browser dan device
  const ip = ''; // Biasanya IP bisa didapat dari backend atau API eksternal
  const timestamp = new Date().toISOString();  // Waktu akses

  function closeModal() {
    document.getElementById("successModal").style.display = "none";
  }

particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 250,
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "color": {
          "value": "#ff5555"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#ff5555"
          }
      },
      "opacity": {
          "value": 0.6,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1
          }
      },
      "size": {
          "value": 4,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 3,
              "size_min": 0.1
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 100,
          "color": "#ff5555",
          "opacity": 0.4,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 4,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          }
      }
  },
  "retina_detect": true
});

// © 2025 Putra - Unauthorized use is strictly prohibited.