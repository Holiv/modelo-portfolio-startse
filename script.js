const btnToggle = document.getElementById('btn');


function toggleMenu(){
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
    const psuedonav = document.getElementById('pseudo-nav');
    psuedonav.classList.toggle('active');
}

btnToggle.addEventListener('click', toggleMenu);