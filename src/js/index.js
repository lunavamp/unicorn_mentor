let theLoaded, isMob;

const d = document,
  body = d.body,
  bc = body.classList,
  $ = (sel, p = d) => p.querySelector(sel),
  $each = (sel, call, p = d) => p.querySelectorAll(sel).forEach(call),
  $_oo = {
    rootMargin: "0px",
    threshold: 0.2,
  },
  $o = (sel, func, c = $_oo) => {
    const el = getElement(sel);
    if (el) {
      const r = new IntersectionObserver(([e]) => {
        func(e, e.target);
      }, c);
      r.observe(el);
      return r;
    }
  },
  getElement = (sel) => (typeof sel === "string" ? $(sel) : sel),
  $e = (sel, type, call) => {
    const el = typeof sel === "string" ? $(sel) : sel;
    el && el.addEventListener(type, call);
  },
  isLoaded = new Promise((e) => (theLoaded = e)),
  $v = (sel, call, once = false) => {
    isLoaded.then(() => {
      let obs = $o(sel, (e) => {
        if (e.isIntersecting) {
          call(sel);
          if (once) {
            obs.unobserve(getElement(sel));
          }
        }
      });
    });
  };

$o(".page-top", (e) => {
  bc[e.intersectionRatio === 0 ? "add" : "remove"]("is-scroll");
});

$v(".faq-video", (el) => {
  $(el).play();
});

$each("[class*='anim-'], [class*='anim2-'], [class*='anim4-']", (el) => {
  $v(el, (el) => el.classList.add("run"));
});

$each("[class*='anim1-']", (el) => {
  const randomDelay = Math.random() * 1000;

  setTimeout(() => {
    $v(el, (el) => el.classList.add("run"));
  }, randomDelay);
});

$each("[class*='anim3-']", (el, index) => {
  setTimeout(() => {
    $v(el, (el) => el.classList.add("run"));
  }, index * 500); //
});

const preloaderText = setTimeout(() => {
  $(".preloader").textContent = "Идет загрузка...";
}, 300);

$e(window, "load", () => {
  clearTimeout(preloaderText);
  bc.add("loaded");
  setTimeout(() => {
    theLoaded();
  }, 400);
});

//responsive menu
const headerNav = document.querySelector(".header-menu");
const burgerMenu = document.querySelector(".burger-menu-container");

burgerMenu.addEventListener("click", () => {
  body.classList.toggle("menu-active");
});
document.addEventListener("click", (e) => {
  const $el = e.target;
  if ($el.tagName === "A" && $el.hash.startsWith("#")) {
    body.classList.remove("menu-active");
  }
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-color");
  } else {
    header.classList.remove("header-color");
  }
});

//modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const span = document.getElementById("closeModal");

  $e(document, 'click', (e) => {
    const el = e.target.closest('.openModal');
    if(el){
      modal.classList.add('show');
      bc.add('no-scroll')
    }
  })
  
 
  span.onclick = function () {
    modal.classList.remove("show");
    body.classList.remove("no-scroll");
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
      body.classList.remove("no-scroll");
    }
  };
});

bc.add("js");

document.addEventListener("DOMContentLoaded", function () {
  
  const buttons = document.querySelectorAll('.read-more-btn');
  
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      
      const shortText = document.querySelector(".short-text");
      const fullText = document.querySelector(".full-text");
      
      if (fullText.style.display === "none" || fullText.style.display === "") {
        fullText.style.display = "block";
        shortText.style.display = "none";
        e.target.textContent = "скрыть";
      } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
        e.target.textContent = "читать больше...";
      }
    });
  });
  
});




