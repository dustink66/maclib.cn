// ==== for menu scroll
const pageLink = document.querySelectorAll(".ud-menu-scroll");

pageLink.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const href = elem.getAttribute("href");
    // 只处理锚点跳转
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    // 外链或非锚点不做处理，交给浏览器默认行为
  });
});

// section menu active
function onScroll(event) {
  const sections = document.querySelectorAll(".ud-menu-scroll");
  const scrollPos =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  for (let i = 0; i < sections.length; i++) {
    const currLink = sections[i];
    const val = currLink.getAttribute("href");
    if (val && val.startsWith('#')) {
      const refElement = document.querySelector(val);
      if (!refElement) continue;
      const scrollTopMinus = scrollPos + 73;
      if (
        refElement.offsetTop <= scrollTopMinus &&
        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
      ) {
        document
          .querySelector(".ud-menu-scroll")
          .classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    } else {
      currLink.classList.remove("active");
    }
  }
}

window.document.addEventListener("scroll", onScroll);
