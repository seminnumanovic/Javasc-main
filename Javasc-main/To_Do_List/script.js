function add() {
    let inputElement = document.getElementById('input');
    let inputText = inputElement.value.trim();
    if (inputText !== '') {
        let listElement = document.createElement('li');
        let textNode = document.createTextNode(inputText);
        listElement.appendChild(textNode);
        document.querySelector('#tasks').appendChild(listElement);
        inputElement.value = '';
        let removeBtn = document.createElement('button');
        function remove(){
            
        }
        removeBtn.addEventListener('click', remove)
    }
}
