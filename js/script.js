// Interaktivitas Sederhana

// Fungsi saat formulir kontak dikirim
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Mengambil nilai input
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    
    // Sederhana: Tampilkan alert konfirmasi
    alert(`Terima kasih, ${nama}! Pesan Anda telah terkirim. Kami akan menghubungi Anda melalui email (${email}).`);
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Fungsi tombol pesan pada card produk
function pesanProduk(namaProduk) {
    alert(`Anda memilih produk: ${namaProduk}. Silakan isi form kontak di bawah untuk melanjutkan pemesanan.`);
    // Scroll otomatis ke form kontak
    const kontakSection = document.getElementById('kontak');
    kontakSection.scrollIntoView({ behavior: 'smooth' });
}