let div = document.querySelector('.div');
div.addEventListener('mouseenter', (event) =>{
    div.style.backgroundColor = event.type === 'mouseover' ? 'blue' : 'red';
    // div.style.backgroundColor = event.type === 'mouseover' ? 'blue' : 'red';

});
// div.addEventListener('mouseout', () =>{
//     div.style.backgroundColor = "blue";

// })