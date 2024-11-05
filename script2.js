function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const hp = document.getElementById('hp').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    
    if (!nama || !email || !hp || !pesan) {
        alert("Semua field harus diisi!");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    const hpPattern = /^[0-9]{10,15}$/;
    if (!hpPattern.test(hp)) {
        alert("Format nomor HP tidak valid! Harus berupa angka 10-15 digit.");
        return false;
    }

    const message = `Nama: ${nama}\nEmail: ${email}\nNomor Telepon: ${hp}\nPesan: ${pesan}`;
    const whatsappUrl = `https://wa.me/+6285717623720?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}