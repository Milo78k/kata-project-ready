const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  observer: true,
  observeParents: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    spaceBetween: 30,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 0,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    497: {
      slidesPerView: 2.1,
      spaceBetween: 15,
    },

    530: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },

    650: {
      slidesPerView: 2.6,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: false,
      enabled: false,
    },
  },
});

const actionButton = document.querySelector("#toggle-brands");
const brandsList = document.querySelector(".brand-list__items");
const iconBrands = document.querySelector("#icon-brands");
let isHided = true;

const burgerBtn = document.querySelector(".rounded-icon--burger-menu");
const asidePage = document.querySelector(".aside-page");
const closeBtn = document.querySelector(".rounded-icon--close-btn");
const overlay = document.querySelector(".overlay");
let asideHided = true;

const toggleDevicesButton = document.querySelector("#toggle-devices");
const devicesList = document.querySelector(".devices-list__items");
const devicesIcon = document.querySelector(".device-expand-icon");
const iconDevices = document.querySelector("#icon-devices");
let isDevicesHided = true;

const btnReadMore = document.querySelector("#toggle-text");
const readMoreText = document.querySelector(
  ".abt-company__wrapper p:nth-child(4)"
);
const iconText = document.querySelector("#icon-text");
let textWrapper = document.querySelector(".abt-company__wrapper");
let textHided = true;

// Modal window-feedback

const messageBtns = document.querySelectorAll(".modal-feedback-icon");
const modalCloseBtn = document.querySelector("#modal-feedback");
const modalFeedback = document.querySelector(".modal-feedback");

function closeAllModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.remove(
      "modal-feedback--active",
      "modal-call--active",
      "aside-page--active"
    );
  });
  overlay.classList.remove("overlay--active");
}
messageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeAllModals();
    modalFeedback.classList.add("modal-feedback--active");
    overlay.classList.add("overlay--active");
  });
});

modalCloseBtn.addEventListener("click", () => {
  closeAllModals();
});

//Modal window-call

const modalCall = document.querySelector(".modal-call");
const callBtns = document.querySelectorAll(".rounded-icon--call");
const modalCallCloseBtn = document.querySelector("#modal-call");

callBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeAllModals();
    modalCall.classList.add("modal-call--active");
    overlay.classList.add("overlay--active");
  });
});

modalCallCloseBtn.addEventListener("click", () => {
  closeAllModals();
});

////////////////////////////////
let showMoreText = () => {
  readMoreText.classList.add("visible");
  textWrapper.classList.add("visible");
  // textWrapper.style.height = "100%";
  textHided = false;
  btnReadMore.innerText = "Скрыть";
  iconText.style = "transform:rotate(180deg)";
};
let hideMoreText = () => {
  readMoreText.classList.remove("visible");
  textWrapper.classList.remove("visible");
  textHided = true;
  btnReadMore.innerText = "Показать все";
  iconText.style = "transform: rotate(0deg)";
};

let showBrands = () => {
  brandsList.classList.add("visible");
  isHided = false;
  actionButton.innerText = "Скрыть";
  iconBrands.style = "transform:rotate(180deg)";
};
let hideBrands = () => {
  brandsList.classList.remove("visible");
  isHided = true;
  actionButton.innerText = "Показать все";
  iconBrands.style = "transform: rotate(0deg)";
};

actionButton.addEventListener("click", () => {
  if (isHided) {
    showBrands();
  } else {
    hideBrands();
  }
});

let showDevices = () => {
  devicesList.classList.add("visible");
  isDevicesHided = false;
  toggleDevicesButton.innerText = "Скрыть";
  iconDevices.style = "transform:rotate(180deg)";
};
let hideDevices = () => {
  devicesList.classList.remove("visible");
  isDevicesHided = true;
  toggleDevicesButton.innerText = "Показать все";
  iconDevices.style = "transform: rotate(0deg)";
};

toggleDevicesButton.addEventListener("click", () => {
  if (isDevicesHided) {
    showDevices();
  } else {
    hideDevices();
  }
});

burgerBtn.addEventListener("click", () => {
  closeAllModals();
  asidePage.classList.add("aside-page--active");
  overlay.classList.add("overlay--active");
});

closeBtn.addEventListener("click", () => {
  asidePage.classList.remove("aside-page--active");
  overlay.classList.remove("overlay--active");
});

overlay.addEventListener("click", () => {
  asidePage.classList.remove("aside-page--active");
  modalFeedback.classList.remove("modal-feedback--active");
  modalCall.classList.remove("modal-call--active");
  overlay.classList.remove("overlay--active");
});

btnReadMore.addEventListener("click", () => {
  if (textHided) {
    showMoreText();
  } else {
    hideMoreText();
  }
});
