function removeClass(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('active');
}

function main() {
    const keyArr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const buttonArr = document.getElementsByClassName('button');
    const audioArr = document.getElementsByClassName('sound');
    const label = document.querySelector('.labelText');

    document.addEventListener('keydown', event => {
        for (let i = 0; i < keyArr.length; i++) {
            if (event.key === keyArr[i]) {
                buttonArr[i].click();
                buttonArr[i].classList.add('active');
            } else {
                buttonArr[i].classList.remove('active');
            }
        }
    });

    for (let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].addEventListener('transitionend', removeClass);
    }

    for (let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].addEventListener('click', () => {
            audioArr[i].pause();
            audioArr[i].currentTime = 0;
            audioArr[i].volume = .3;
            audioArr[i].play();

            label.innerHTML = `${audioArr[i].id.toUpperCase()}`;
        });
    }
}

main();