document.addEventListener('DOMContentLoaded', function(e) {
	let chili_1 = document.querySelector('.statistics__decoration_chili-1');
    let chili_2 = document.querySelector('.statistics__decoration_chili-2');
    let chili_3 = document.querySelector('.statistics__decoration_chili-3');
    let chesnok = document.querySelector('.statistics__decoration_chesnok-1');
    let onion = document.querySelector('.statistics__decoration_onion-1');
    let perech_1 = document.querySelector('.statistics__decoration_perech-1');
    let perech_2 = document.querySelector('.statistics__decoration_perech-2');
    let tomat = document.querySelector('.statistics__decoration_tomat-1');
    let vetka = document.querySelector('.statistics__decoration_vetka-1');
    chili_1.style.display = 'none';

    try {
        setInterval(() => {
            if (chili_1.style.display == 'block') {
                chili_1.style.display = 'none';
                chili_2.style.display = 'block';
                chili_3.style.display = 'block';
                chesnok.style.display = 'block';
                onion.style.transform = 'rotate(0deg)';
                perech_1.style.transform = 'rotate(0deg)';
                perech_2.style.transform = 'rotate(0deg)';
                tomat.style.transform = 'rotate(0deg)';
                vetka.style.transform = 'rotate(0deg)';
            }  else {
                chili_1.style.display = 'block';
                chili_2.style.display = 'none';
                chili_3.style.display = 'none';
                chesnok.style.display = 'none';
                onion.style.transform = 'rotate(30deg)';
                perech_1.style.transform = 'rotate(45deg)';
                perech_2.style.transform = 'rotate(45deg)';
                tomat.style.transform = 'rotate(-45deg)';
                vetka.style.transform = 'rotate(20deg)';
            }
        }, 2000);
    } catch (e) {
        console.error(e);
    }
});
