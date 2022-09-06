const contactsLink = document.querySelector(".button-contacts");
const contactsPopup = document.querySelector(".appointment");
const modalClose = contactsPopup.querySelector(".close-button");
const form = contactsPopup.querySelector(".appointment-form");
const namePopup = contactsPopup.querySelector("[name=name]");
const emailPopup = contactsPopup.querySelector("[name=email]");
const commentPopup = contactsPopup.querySelector("[name=comment]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");

  if (storage) {
    namePopup.value = storage;
    emailPopup.value = storage;
    commentPopup.focus();
  } else {
    namePopup.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!namePopup.value || !emailPopup.value) {
    evt.preventDefault();
    contactsPopup.classList.remove("modal-error");
    contactsPopup.offsetWidth = contactsPopup.offsetWidth;
    contactsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", namePopup.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactsPopup.classList.remove("modal-show");
      contactsPopup.classList.remove("modal-error");
    }
  }
});
