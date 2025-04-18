function copyEmail() {
    const email = document.getElementById('emailText').textContent;
    navigator.clipboard.writeText(email).then(() => {
        const originalText = document.getElementById('emailText').textContent;
        document.getElementById('emailText').textContent = 'Kopyalandı!';
        setTimeout(() => {
            document.getElementById('emailText').textContent = originalText;
        }, 2000);
    });
}