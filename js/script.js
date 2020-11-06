    /* Question Modal */

const commentLink = document.querySelector(".contacts-button");
const commentPopup = document.querySelector(".question-form");
const commentForm = commentPopup.querySelector(".question-form-form");
const commentName = commentPopup.querySelector(".name-input");
const commentClose = commentPopup.querySelector(".modal-close");

commentLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  commentPopup.classList.add("modal-show");
  commentName.focus();
})

commentClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  commentPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (commentPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      commentPopup.classList.remove("modal-show");
    }
  }
});


