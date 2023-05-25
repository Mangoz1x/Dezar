let backToTopBtn = document.getElementsByClassName("backToTop")[0];

backToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
});

function resNav() {
    let x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

window.onscroll = function () { scrollInd(); backToTop(); };

function scrollInd() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollInd").style.width = scrolled + "%";
}

function backToTop() {
    let btn = document.getElementsByClassName("backToTop")[0];
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    if (scrolled > 0.1) {
        if (!btn.classList.contains("fadeIn")) {
            if (btn.classList.contains("fadeOut")) {
                btn.classList.remove("fadeOut");
            }

            btn.classList.add("fadeIn");
        }
    } else {
        if (btn.classList.contains("fadeIn") && !btn.classList.contains("fadeOut")) {
            btn.classList.add("fadeOut");

            setTimeout(() => {
                btn.classList.remove("fadeIn");
            }, 300);
        }
    }
}

class select {
    constructor(e) {
        this.element = e;
    }

    get id() {
        return this.getId();
    }

    get cs() {
        return this.cSelect();
    }

    cSelect() {
        return document.getElementsByClassName(this.element);
    }

    getId() {
        return document.getElementById(this.element);
    }

} 

const $ = (elm) => new select(elm)

// contact();
function contact() {
    let swipe = $("s-contact").id;
    let clsb = $("close-c-form").cs;
    clsb = clsb[0];

    swipe.style.display = "block";
    setTimeout(() => {
        clsb.style.display = "block";
        document.body.style.overflowY = "hidden";
        swipe.style.width = "100vw";
        swipe.style.opacity = "1";

        clsb.style.opacity = "1";
    }, 50)
}

function hideContact() {
    let swipe = $("s-contact").id;

    document.body.style.overflowY = "scroll";
    swipe.style.width = "0";
    swipe.style.opacity = "0";

    setTimeout(() => {
        swipe.style.display = "none";
    }, 500);
}

setYear();
function setYear() {
    let date = new Date();
    let year = null;

    year = date.getFullYear();

    document.getElementById("year").innerText = year;
}
