let textTag = document.querySelector('.section1 h1');
let text = textTag.innerHTML;

let splittedText = text.split('');

textTag.innerHTML = '';

splittedText.forEach((char, index) => {
    if (char === " ") {
        splittedText[index] = "&nbsp;";
    }
});

textTag.innerHTML = splittedText.map(char => `<span>${char}</span>`).join("");



let k = 0;
let interval = setInterval(() =>{
    let spans = textTag.querySelectorAll('span');
    let singleSpan =spans[k];

    singleSpan.className = 'fadeMove';
    k++;
    if(k === spans.length){
        clearInterval(interval);
    }
},70);

let border = document.querySelector('.border-line');
let animationWidth = 0;

window.onscroll = () =>{
    if(this.oldScroll > this.scrollY){
        animationWidth -= 1;
    } else{
        animationWidth += 1;
    }

    if(animationWidth >=100){
        animationWidth = 100;
    }
    
    if(animationWidth <= 0){
        animationWidth = 0;
    }

    border.style.width = animationWidth + '%';

    this.oldScroll = this.scrollY;

    imageAnimation();
}


const imageAnimation = () =>{
    let sectionForAnimation = document.querySelector('.section2 .images');
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');

    if(sectionPosition < screenPosition){
        leftImage.className = 'animated';
        rightImage.className = 'animated';
    }
}
