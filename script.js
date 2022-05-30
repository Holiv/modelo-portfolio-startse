const btnToggle = document.getElementById('btn');


function toggleMenu(){
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}

btnToggle.addEventListener('click', toggleMenu);