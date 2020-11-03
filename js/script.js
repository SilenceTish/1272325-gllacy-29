  /* Login Modal */

const loginLink = document.querySelector(".login-link");
const loginPopup = document.querySelector(".login-form");
const loginForm = loginPopup.querySelector(".login-form-form");
const loginLogin = loginPopup.querySelector(".login-input");
const loginPassword = loginPopup.querySelector(".login-input-password");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  loginLogin.focus();
      
  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
    }
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
    }
});
  
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

  /* Search Modal */

const searchLink = document.querySelector(".search-link");
const searchPopup = document.querySelector(".search-form");
const searchForm = searchPopup.querySelector(".search-form-form");
const searchInput = searchPopup.querySelector(".search-input");

searchLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchPopup.classList.add("modal-show");
  searchInput.focus();
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      searchPopup.classList.remove("modal-show");
    }
  }
});

  /* Basket Modal */

  const basketLink = document.querySelector(".basket-full-link");
  const basketPopup = document.querySelector(".basket-form");
  
  basketLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
  })
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (basketPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        basketPopup.classList.remove("modal-show");
      }
    }
  });

  
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


