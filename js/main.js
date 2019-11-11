// put all tags int array
const tags = document.querySelectorAll('.tags');
const inputBar = document.querySelector('#filter');
const resetButton = document.querySelector('.reset');


inputBar.addEventListener('input', function() {
    tags.forEach(function(element) {
        const inputStr = inputBar.value;
    
        if(!element.innerHTML.includes(inputStr)) {
            element.parentElement.classList.add('hidden');
        } else {
            element.parentElement.classList.remove('hidden');
        }
    })

    if(inputBar.value !== '') {
        resetButton.classList.remove('hidden');
    } else {
        resetButton.classList.add('hidden');
    }
})

resetButton.addEventListener('click', function() {
    inputBar.value = '';
    resetButton.classList.add('hidden');
    
    tags.forEach(function(element) {
        element.parentElement.classList.remove('hidden');
    })
})



