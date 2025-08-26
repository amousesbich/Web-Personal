// Contoh kode JavaScript untuk progress bar
const progressBar = document.querySelector('.progress-bar');
const submitBtn = document.querySelector('.submit-btn');
const downloadLink = document.querySelector('.download-link');

let progress = 0;

submitBtn.addEventListener('click', () => {
  const interval = setInterval(() => {
    if (progress < 100) {
      progress++;
      progressBar.textContent = `${progress}%`;
      progressBar.style.width = `${progress}%`;
    } else {
      clearInterval(interval);
      downloadLink.style.display = 'block';
    }
  }, 50);
});