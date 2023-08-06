// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// grab heart glyph elements
const hearts = document.querySelectorAll('.like-glyph');
// create event listener that performs callback when any heart glyph is clicked
for (let heart of hearts ) {
  heart.addEventListener('click', serverRequest);
}

// perform server call; change heart glyph if successful, else show error modal
function serverRequest(e) {
  mimicServerCall()
    .then(changeHeart(e.target))
    .catch(function(error) {
      const modalVis = document.querySelector('.hidden');
      modalVis.className = 'visible'
      document.querySelector('#modal h2').textContent = error;
      setTimeout(() => modalVis.className = 'hidden', 3000)
    })
}

// swap heart glyph color and content
function changeHeart(heartIcon) {
  if (heartIcon.textContent === FULL_HEART) {
    heartIcon.classList.remove('activated-heart');
    heartIcon.textContent = EMPTY_HEART;
  } else {
    heartIcon.classList.add('activated-heart');
    heartIcon.textContent = FULL_HEART;
  }
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
