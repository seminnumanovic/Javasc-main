function testing(){
    let input = document.querySelector('#email');
    let value = input.value;

    if(value.includes('@') && value.includes('.')){
        
    } else {
        alert('Neispravno upisan email');
    }
}