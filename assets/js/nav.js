// Scrolled menu bar /　scrollする時に、navの形が変わる
//必要：<nav></nav>と言うセクション
//必要：CSSで　”.scrolled” クラスの設定　ー＞scroll後の形
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 30) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
})

// Mobile Nav
// 必要：.menu-btnクラス付いているのボタン（モバイルスクリーン時表示の）
// 必要：.close-btnクラス付いているのボタン（モバイルスクリーン時表示の）
// 必要：.mobile-navクラス付いているparent　→ 内容：navigationボタン
// 
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

// Opening mobile menu
menuBtn.addEventListener ("click", function() {
    mobileNav.classList.add("active");
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
})

// Closing mobile menu
// Not required when closing menu by clicking any area is activated
closeBtn.addEventListener ("click", function() {
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})

// Close menu by clicking any area
mobileNav.addEventListener ("click", function() {
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
})

// Mobile Nav Menu Links
// On click mobile nav disappears
mobileNavLinks.forEach(link => (link.addEventListener("click", 
function(){
    mobileNav.classList.remove("active");
    menuBtn.style.display = "block";
    closeBtn.style.display = "none";
    
})))
