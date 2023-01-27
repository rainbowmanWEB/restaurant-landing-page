document.addEventListener('DOMContentLoaded', function(e) {
	let button = document.querySelector('.header__nav-search');
    let form = document.querySelector('.header__search-form');

    try {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            if (form.style.display !== 'flex') {
                form.style.display = 'flex';
                form.classList.toggle('animated');
            } else {
                form.style.display = 'none';
                form.classList.toggle('animated');
            }
            
        });

        document.querySelector('body').addEventListener('click', function(e) {
            if (e.target.closest('.header__search-form') == null && 
            e.target.closest('.header__nav-search') == null) {
                console.log(e.target.closest('.header__search-form'));
                console.log(e.target.closest('.header__nav-search'));
                form.style.display = 'none';
            }
        });
    } catch (e) {
        console.error(e);
    }
});