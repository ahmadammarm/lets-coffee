// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar supaya navnya hilang
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();

}


// Klik di luar search form supaya formnya hilang
const searchBtn = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
})

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const alamat = document.getElementById('alamat').value;

  // Menggunakan format tautan WhatsApp
  const baseUrl = 'https://api.whatsapp.com/send?phone=';
  const phoneNumber = '6281217952403'; // Ganti dengan nomor WhatsApp Anda

  // Pesan yang akan dikirimkan
  const message = encodeURIComponent(`Halo, nama saya ${nama}. Email saya: ${email}. Nomor Handphone saya: ${alamat}`);

  // Membuat tautan WhatsApp dengan nomor dan pesan yang sudah ditentukan
  const whatsappUrl = `${baseUrl}${phoneNumber}&text=${message}`;

  // Membuka tautan WhatsApp pada tab atau jendela baru
  window.open(whatsappUrl, '_blank');
});

