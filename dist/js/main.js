// Toggle Menu Button
const menuBtn = document.querySelector('.menu__btn');
const navItems = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');

function toggle() {
    menuBtn.classList.toggle("open");
    navItems.classList.toggle("open");
};

menuBtn.addEventListener('click', () => {
    toggle();
});

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if(menuBtn.classList.contains('open')) {
            toggle();
        }

        
    })
});

// Nav menu item active

// Parallax body bg
window.onload=function(){
    window.onscroll=function () {
      document.body.style.backgroundPosition = "0px " + (0 + (Math.max(document.documentElement.scrollTop, document.body.scrollTop) / 8)) + "px";
    }
};

