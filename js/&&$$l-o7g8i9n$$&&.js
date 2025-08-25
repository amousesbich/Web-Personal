// Simulasi data pengguna yang disimpan
const users = [
    { username: 'user82638380', password: '82638380' },
    { username: 'user82648383', password: '82648383' },
    { username: 'user82537481', password: '82537481' },
    { username: 'user82638363', password: '82638363' },
    { username: 'user82102735', password: '82102735' },
    { username: 'user82601839', password: '82601839' },
    { username: 'user82649104', password: '82649104' },
    { username: 'user82613956', password: '82613956' },
    { username: 'user82688193', password: '82688193' }
    
    
];

// Menangani proses login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
 
    // Cek apakah username dan password cocok
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Jika login berhasil, arahkan ke halaman selanjutnya
        window.location.href = './cit-27@$$$pb7222!.html'; // Ganti dengan halaman yang diinginkan
    } else {
        // Jika login gagal, tampilkan pesan kesalahan
        messageDiv.textContent = 'Kalo masukin yang bener kontol!';
    }
});
