const no = document.getElementById('no');
const yes = document.getElementById('yes');

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

let clicks = 0;

no.addEventListener('click', () => {
    no.classList.add('no-active');
    no.style.left = `${Math.random() * (WIDTH - 100)}px`;
    no.style.top = `${Math.random() * (HEIGHT - 100)}px`;

    ++clicks;

    if (clicks > 4) {
        no.style.display = 'none';
    }
});

yes.addEventListener('click', () => {
    alert('Hooray! Meet you today at 6pm at Uni!');
});