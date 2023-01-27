document.addEventListener('DOMContentLoaded', function(e) {
	let button = document.querySelector('.header__nav-list-button');
    let nav_list = document.querySelector('.header__nav-list');
    let text_wrap = document.querySelector('.header__text-wrap');

    try {
        button.addEventListener('click', function(e) {

            if (nav_list.style.display !== 'flex') {
                nav_list.style.display = 'flex';
                nav_list.classList.toggle('animated');
            } else {
                nav_list.style.display = 'none';
                nav_list.classList.toggle('animated');
            }
            
        });
    } catch (e) {
        console.error(e);
    }
});