document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk memulai proses redirect dengan spinner
    function showLoadingAndRedirect() {
       const spinner = document.getElementById('loading-spinner');
       spinner.style.display = 'block';  // Tampilkan spinner loading

       // Pilih waktu delay acak antara 2, 4, dan 7 detik
       const randomDelay = [2000, 4000, 7000][Math.floor(Math.random() * 3)];

       // Redirect setelah waktu delay acak
       setTimeout(() => {
           window.location.href = '/home.html';  // Redirect ke home.html
       }, randomDelay);
   }
   
   // Generate CAPTCHA secara acak
   function generateCaptcha() {
     const num1 = Math.floor(Math.random() * 10) + 1;
     const num2 = Math.floor(Math.random() * 10) + 1;
     const captchaQuestion = `${num1} + ${num2} = ?`;
     const captchaAnswer = num1 + num2; // Jawaban yang benar
   
     // Simpan jawaban yang benar di localStorage
     localStorage.setItem('captchaAnswer', captchaAnswer);
   
     // Update tampilan soal CAPTCHA dan tambahkan animasi loading
     const captchaElement = document.getElementById('captcha-question');
     captchaElement.innerText = captchaQuestion;
     captchaElement.classList.add('loading'); // Tambahkan class loading
   }
   
   // Generate CAPTCHA saat halaman dimuat
   generateCaptcha();
   
   // Event listener untuk form submit
   document.getElementById('login-form').addEventListener('submit', function(event) {
     event.preventDefault();
     
     // Ambil nilai dari semua inputan
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const age = document.getElementById('age').checked;
     const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
     const terms = document.getElementById('terms').checked;
     const captchaAnswer = parseInt(document.getElementById('captcha-answer').value);
     const warning = document.getElementById('warning-message');
     const form = document.getElementById('container-v');
     const btn = document.getElementById('btn-0');

     // Ambil jawaban CAPTCHA yang benar dari localStorage
     const correctCaptcha = parseInt(localStorage.getItem('captchaAnswer'));
   
     // Validasi input
     if (username.length >= 5 && username.length <= 7 &&
         password === "pendulum" &&
         age && gender && terms && captchaAnswer === correctCaptcha) {
           
       // Simpan semua data ke localStorage
       localStorage.setItem('username', username);
       localStorage.setItem('password', password);
       localStorage.setItem('age', age);
       localStorage.setItem('gender', gender);
       localStorage.setItem('terms', terms);

       btn.style.display = "none"; 
       const textA = `Welcome, ${username}!`;
       setTimeout(() => {
         console.info('[LOG] Data login telah disimpan...');
         window.alert(textA || textA.trim());
       }, 1000);

       setTimeout(() => {
           form.style.display = 'none';
           showLoadingAndRedirect();
       }, 1500);
     } else {
       // Tampilkan pesan peringatan
       warning.classList.add('show');
       
       // Hide warning setelah 2.5 detik
       setTimeout(() => {
         warning.classList.remove('show');
         document.getElementById('password').value = '';
         document.getElementById('captcha-answer').value = '';
         generateCaptcha();
       }, 2500); // 2500ms = 2.5 detik
     }
   });
 });

 function btnadmin() {
  document.getElementById("btn-1").style.display = "none";
  setTimeout(() => {
    window.location.href = "/admin.html";
  }, 1200);
 }

// © 2025 Putra - Unauthorized use is strictly prohibited.