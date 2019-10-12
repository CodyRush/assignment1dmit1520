// declare variables
const memeImage = document.getElementsByTagName('img');
const selectImage = document.querySelector('#meme-image');
const topTextFormEntry = document.querySelector('#meme-top-text');
const topTextImgDisplay = document.querySelector('.top-text');
const bottomTextFormEntry = document.querySelector('#meme-bottom-text');
const bottomTextImgDisplay = document.querySelector('.bottom-text');
const errorMessage = document.querySelector('.error');

// Select box picture change logic
selectImage.addEventListener('change', function() {
    if (selectImage.value === 'fry-meme') {
        memeImage[0].src = '../img/fry-meme.png';
        memeImage[0].alt = 'Fry Meme Image';
    } else if (selectImage.value === 'one-does-not-simply-meme') {
        memeImage[0].src = '../img/one-does-not-simply-meme.png';
        memeImage[0].alt = 'one does not simply meme image';
    } else if (selectImage.value === 'most-interesting-man-meme') {
        memeImage[0].src = '../img/most-interesting-man-meme.png';
        memeImage[0].alt = 'The most interesting man meme image';
    } else {
        memeImage[0].src = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown';
        memeImage[0].alt = 'Placeholder Image';
    }
});

// enter text onto Meme
topTextFormEntry.addEventListener('keyup', function() {
    topTextImgDisplay.textContent = topTextFormEntry.value;
});

bottomTextFormEntry.addEventListener('keyup', function() {
    bottomTextImgDisplay.textContent = bottomTextFormEntry.value;
});

// Button Handling
window.addEventListener('click', function(e) {
    if (e.target.type === 'submit') {
        e.preventDefault();
        submitMeme();
    } else if(e.target.type === 'reset') {
        e.preventDefault();
        resetForm();
    }
})


// button Functions
function submitMeme() {
    // validate 
    if (memeImage[0].src !== 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown'){
        if (topTextImgDisplay.textContent !== '' && bottomTextImgDisplay.textContent !== '') {
            errorMessage.textContent = 'Your Meme has been Saved';
            errorMessage.style.color = 'green';
            setTimeout(resetForm, 3000);
        } else {
            errorMessage.textContent = 'Please Enter Some Hilarious Meme Text';
        }
    } else {
        errorMessage.textContent = 'Please Select an Image';
    }
}

function resetForm() {
    errorMessage.textContent = '';
    selectImage.value = '';
    memeImage[0].src = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown';
    topTextImgDisplay.textContent = '';
    topTextFormEntry.value = '';
    bottomTextImgDisplay.textContent = '';
    bottomTextFormEntry.value = '';
}
