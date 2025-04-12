// mobile menu function start
const submenus = document.querySelectorAll(".submenu");
const popup_manuBerger = document.querySelector(".popup_manuBerger");
const mobile__Manu = document.querySelector(".mobile__Manu");
const searchBox = document.querySelector(".mobile__Manu .searchBox");

// active mmenuanu for mobile
popup_manuBerger.addEventListener("click", function () {
    mobile__Manu.classList.toggle("active")
    popup_manuBerger.classList.toggle("uil-times")
})

// dropdown menu
submenus.forEach((v, i) => {
    v.previousElementSibling.addEventListener("click", function () {
        v.classList.toggle("active");
    })
})
// mobile menu function end

// banner slider
$('.mahadidev7_banner_Group').slick({
    dots: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    prevArrow:false,
    nextArrow:false,
    // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-right"></i></button>',
    // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-left"></i></button>',

});

// time count down

const countDown = () => {
    const countDate = new Date("May 17, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate the shit
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    const getDay = document.getElementById("getDay").innerText = textDay ;
    const getHour = document.getElementById("getHour").innerText = textHour;
    const getMinute = document.getElementById("getMinute").innerText = textMinute ;
    const getSecond = document.getElementById("getSecond").innerText = textSecond ;

}
setInterval(countDown, 1000);
