/**
 * Fungsi untuk menampilkan pesan kustom (menggantikan alert).
 * @param {string} message - Teks pesan yang akan ditampilkan.
 * @param {boolean} isSuccess - True jika pesan berhasil (hijau), False jika pesan error (merah).
 */
function showMessage(message, isSuccess) {
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    
    // Hapus kelas sebelumnya (success/error)
    messageBox.className = 'modal';
    
    // Terapkan kelas baru berdasarkan status
    if (isSuccess) {
        messageBox.classList.add('success');
    } else {
        messageBox.classList.add('error');
    }
    
    messageText.textContent = message;
    messageBox.style.display = 'flex'; // Tampilkan modal
    
    // Sembunyikan otomatis setelah 3 detik
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}

/**
 * Fungsi JavaScript untuk memvalidasi login.
 * Menggunakan showMessage() untuk notifikasi.
 */
function validasiLogin(event) {
    // Mencegah form melakukan submit default (reload halaman)
    event.preventDefault(); 
    
    const usernameInput = document.getElementById('Username').value.trim(); // Ambil nilai Username
    const passwordInput = document.getElementById('password').value;
    const passwordBenar = "12345678"; // <--- Password yang Benar
    
    // Validasi username
    if (usernameInput === "") {
        showMessage("Username tidak boleh kosong!", false);
        return false;
    }

    // Validasi password
    if (passwordInput === passwordBenar) {
        // Login Berhasil
        showMessage(`Login berhasil! Selamat datang, ${usernameInput}. Mengalihkan ke halaman...`, true); 
        
        // Tunda pengalihan (redirection) agar pengguna sempat melihat pesan
        setTimeout(() => {
            // Catatan: Pastikan file 'html2.txt' adalah file HTML yang valid di server Anda
            window.location.href = "html2.txt"; 
        }, 1500); // Tunda 1.5 detik
        
    } else {
        // Password Salah
        showMessage("Password salah! Silakan coba lagi.", false);
        return false;
    }
}

/**
 * FUNGSI: Untuk mengubah tipe input password (show/hide).
 */
function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePass');
    
    // Cek tipe input saat ini
    if (passwordField.type === "password") {
        passwordField.type = "text";
        // Ganti ikon menjadi mata terbuka (Lihat/Show)
        toggleButton.innerHTML = '&#x1F441;&#xFE0F;'; // Karakter Unicode Mata (👁️)
    } else {
        passwordField.type = "password";
        // Ganti ikon menjadi mata dicoret (Sembunyikan/Hide)
        toggleButton.innerHTML = '&#x1F576;'; // Mata dengan Ikon lain yang terlihat 'tersembunyi'
    }
}

/**
 * FUNGSI: Untuk tombol Google Login (hanya placeholder).
 */
function googleLogin() {
    showMessage("Mengalihkan ke proses Google Sign-In... (Fungsionalitas backend diperlukan)", true);
}
