{
    const bodyElement = document.querySelector(".body");
const headerElement = document.querySelector(".header");
const headerImgElement = document.querySelector(".header__img");
const headerNavigationElement = document.querySelector(".header__navigation")
const mainElement = document.querySelector(".main");
const footerElement = document.querySelector(".footer");
const footerContactElement = document.querySelector(".footer__contact")
const updateThemeButtonText = document.querySelector(".js-button--backgroundColor");
const buttonSpanBackground = document.querySelector(".js-button__span--backgroundColor");


updateThemeButtonText.addEventListener("click", () => {
    bodyElement.classList.toggle("js-body");
    headerElement.classList.toggle("js-header");
    headerImgElement.classList.toggle("js-header__img");
    headerNavigationElement.classList.toggle("js-header__navigation");
    mainElement.classList.toggle("js-main");
    footerElement.classList.toggle("js-footer");
    footerContactElement.classList.toggle("js-footer__contact");

    buttonSpanBackground.innerText = headerElement.classList.contains("js-header")
    ? "jasne" : "ciemne";
});

updateThemeButtonText();
}

