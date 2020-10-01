const onClickTraings = document.getElementById('training');
const onClickBlockchains = document.getElementById('blockchain');
const onClickCommunications = document.getElementById('communication');
const trainings = document.querySelector('.trainings');
const blockchains = document.querySelector('.blockchains');
const communications = document.querySelector('.communications');


onClickTraings.addEventListener('click', (e) => {
    blockchains.style.display = 'none';
    communications.style.display = 'none';
    trainings.style.display = 'grid';
    onClickTraings.classList.add('active-tab');
    onClickBlockchains.classList.remove('active-tab');
    onClickCommunications.classList.remove('active-tab');
})
onClickBlockchains.addEventListener('click', (e) => {
    blockchains.style.display = 'grid';
    trainings.style.display = 'none';
    onClickBlockchains.classList.add('active-tab');
    onClickTraings.classList.remove('active-tab');
    onClickCommunications.classList.remove('active-tab');
})

onClickCommunications.addEventListener('click', (e) => {
    communications.style.display = 'grid';
    blockchains.style.display = 'none';
    trainings.style.display = 'none';
    onClickBlockchains.classList.remove('active-tab');
    onClickTraings.classList.remove('active-tab');
    onClickCommunications.classList.add('active-tab');


})

let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.close');
let ul = document.querySelector('.nav-menu');

menu.addEventListener('click', (e) => {
    ul.style.display = 'block';
    menu.style.display = 'none';
    closeMenu.style.visibility = 'visible';
})

closeMenu.addEventListener('click', (e) => {
    ul.style.display = 'none';
    menu.style.display = 'block';
    closeMenu.style.visibility = 'hidden';
})


