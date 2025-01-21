//Responsive menu
let mobileMenuBtn = document.querySelector('.header button');

mobileMenuBtn.addEventListener('click', () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU'){
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else{
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
});
    


//Gallery

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () =>{
    displayNone();
    imgNum++;

    if(imgNum === pictures.length){
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}
const moveLeft = () => {
    displayNone();
    imgNum--;
    if(imgNum === -1){
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';
}

rightBtn.addEventListener('click' , moveRight);
leftBtn.addEventListener('click' , moveLeft);

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}

// Portfolio Sort

let portfolioSortBtns = document.querySelectorAll('.portfolio-categories button');

portfolioSortBtns.forEach((button) =>{
    button.addEventListener('click', () => {
        let category = button.getAttribute('data-category');
        let portfolioItems = document.querySelectorAll('.portfolio-single-item');

        portfolioItems.forEach((item) => {
        item.style.display = 'none';
    })

    if(category === 'sve'){
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }
    else{
        portfolioItems.forEach((item) => {
            if(item.getAttribute('data-category').includes(category)){
                item.style.display = 'block';
                }
            });
        }
    });
});

//Modal button
let openModal = document.querySelector('#openModal');


const openModalFunc = () =>{
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';

}

openModal.addEventListener('click', openModalFunc);

let closeModal = document.querySelector('#closeModal');

const closeModalFunc = () =>{
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';

}

closeModal.addEventListener('click', closeModalFunc);