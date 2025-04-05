document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'step2.html';
        });
    }

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    let isFirstClick = true;

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            alert('Спасибо, ваше мнение очень ценно для нас');
            const currentPage = window.location.pathname.split('/').pop();
            if (currentPage === 'step2.html') {
                window.location.href = 'step3.html';
            } else if (currentPage === 'step3.html') {
                window.location.href = 'step4.html';
            } else if (currentPage === 'step4.html') {
                window.location.href = 'questions.html';
            }
        });
    }

    if (noBtn) {
        noBtn.addEventListener('click', function(e) {
            if (isFirstClick) {
                e.preventDefault();
                isFirstClick = false;
                moveButton(noBtn);
            }
        });

        noBtn.addEventListener('mouseover', function() {
            if (!isFirstClick) {
                moveButton(noBtn);
            }
        });
    }
});

function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}