let list = document.createElement('ul');
list.className = 'ul';
let main = document.querySelector('.main').appendChild(list);


function addQuest(){
    let quest = document.querySelector('#quest').value;
    let newQest = document.createElement('li'); 
    let removeButton = document.createElement('button');
    removeButton.className = 'removeButton';
    removeButton.innerText = `x`;
    removeButton.addEventListener('click',removeButtonFunc);
    
    let container = document.createElement('div');
    container.className = 'container';
    container.appendChild(newQest);
    container.appendChild(removeButton);
    list.appendChild(container);  

    newQest.innerHTML = quest;
    newQest.className = 'li';
}

function removeButtonFunc(event) {
    let container = event.target.parentElement;
    list.removeChild(container);
}