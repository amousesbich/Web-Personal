// Simulasi data pengguna yang disimpan dengan tambahan properti 'portal'
const users = [
    { username: 'user82638380', password: '82638380', portal: 'portal_user1.html' },
    { username: 'user82648383', password: '82648383', portal: 'portal_user2.html' },
    { username: 'user82537481', password: '82537481', portal: 'portal_user3.html' },
    { username: 'user82638363', password: '82638363', portal: 'portal_user4.html' },
    { username: 'user82102735', password: '82102735', portal: 'portal_user5.html' },
    { username: 'user82601839', password: '82601839', portal: 'portal_user6.html' },
    { username: 'user82649104', password: '82649104', portal: 'portal_user7.html' },
    { username: 'user82613956', password: '82613956', portal: 'portal_user8.html' },
    { username: 'admin', password: 'admin', portal: 'portal_admin.html' },
    { username: 'user82688193', password: '82688193', portal: 'portal_user9.html' }
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
        // Jika login berhasil, arahkan ke halaman portal yang sesuai
        window.location.href = user.portal; 
    } else {
        // Jika login gagal, tampilkan pesan kesalahan
        messageDiv.textContent = 'ADA YANG SALAH NIH!!.';
    }
});
