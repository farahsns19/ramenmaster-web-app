# 🍜 Ramen Master — Web Ordering & Restaurant Landing Page

Sebuah website landing page restoran dan sistem pemesanan online interaktif untuk **Ramen Master**. Dibangun menggunakan HTML5, CSS3 kustom, Bootstrap 5, dan **Alpine.js** untuk manajemen state keranjang belanja secara real-time.

---

## ✨ Fitur Utama

- 🍱 **Katalog Menu Interaktif:** Menampilkan 12 varian menu ramen lengkap dengan foto, deskripsi bahan, harga, dan rating.
- 🛒 **Dynamic Shopping Cart (Alpine.js):** 
  - Tambah menu ke keranjang (*Add to Cart*).
  - Tambah/kurang kuantitas pesanan secara instan.
  - Perhitungan subtotal dan total harga secara otomatis.
  - Format mata uang Rupiah (`Rp...`) secara real-time.
- 📋 **Form Checkout Pesanan:** Form input data pelanggan (nama, email, nomor telepon) saat menyelesaikan pesanan.
- 📱 **Desain Responsif & Modern:** Menggunakan Bootstrap 5 dan flexbox/grid kustom agar nyaman dibuka di desktop, tablet, maupun smartphone.
- 🔍 **Fitur Pendukung:** Popup pencarian menu (*Search bar*), navigasi halus (*Smooth scroll*), modal login/register, dan integrasi Google Maps lokasi cabang.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **UI Framework & Icons:** [Bootstrap 5](https://getbootstrap.com/), [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Reactive State Management:** [Alpine.js](https://alpinejs.dev/)
- **Fonts:** Google Fonts (*Poppins*)

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/farahsns19/ramenmaster-web-app.git
   cd ramenmaster-web-app
   ```

2. **Jalankan website:**
   - **Opsi 1 (Langsung):** Buka file `index.html` langsung di browser Anda (klik ganda atau klik kanan -> *Open With Browser*).
   - **Opsi 2 (Live Server di VS Code):** Klik kanan pada `index.html` lalu pilih **Open with Live Server**.
   - **Opsi 3 (Terminal Python):**
     ```bash
     python3 -m http.server 3000
     ```
     Lalu akses di browser: `http://localhost:3000`

---

## 📂 Struktur Folder

```text
├── css/
│   └── style.css        # Custom styles & layout
├── js/
│   └── script.js       # Interaktivitas UI & navigation
├── src/
│   └── app.js          # Alpine.js logic & Shopping Cart Store
├── img/                # Asset gambar background & logo
│   └── products/       # Foto produk menu ramen
├── index.html          # Halaman utama website
└── README.md
```

---

## 👤 Author
- **Farah Hasna**
- GitHub: [@farahsns19](https://github.com/farahsns19)
