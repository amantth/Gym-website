/*=============== SHOW MENU ===============*/
const navTogle = document.getElementById("nav-toggle"),
    navclose = document.getElementById("nav-close"),
    navmenu = document.getElementById("nav-menu");


if (navTogle) {
    navTogle.addEventListener("click", () => {
        navmenu.classList.add("showmenu");
    })
}

if (navclose) {
    navclose.addEventListener("click", () => {
        navmenu.classList.remove("showmenu");
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navlinks = document.querySelectorAll(".nav__link"); 
navlinks.forEach(a => a.addEventListener("click", () => {
      navmenu.classList.remove("showmenu");
 }))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) {
        header.classList.add("bg-header")
    } else {
             header.classList.remove("bg-header")
    }
}
window.addEventListener("scroll",scrollHeader)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollY = window.pageYOffset
    
    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionid = current.getAttribute("id"),
              sectionClass = document.querySelector(".nav__menu a[href*=" + sectionid + "]")
        
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link")
        } else {
            sectionClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll",scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
                     : scrollUp.classList.remove("show-scroll")
        

}
window.addEventListener("scroll",scrollUp)
/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateform = document.getElementById("calculate__form"),
    calculatecm = document.getElementById("calculate-cm"),
    calculatekg = document.getElementById("calculate-kg"),
    calculatemessage = document.getElementById("calculate-message");




const calculatebmi = (e) => {
    e.preventDefault()
    
    if (calculatecm.value === "" || calculatekg.value === "") {
        calculatemessage.classList.remove("color-green")
        calculatemessage.classList.add("color-red")

        calculatemessage.textContent = "Fill in the height and weight 😎"
        setTimeout(() => {
            calculatemessage.textContent=""
        },3000)

    } else {
        const cm = calculatecm.value / 100,
            kg = calculatekg.value,
            bmi = Math.round(kg / (cm * cm));
        
        if (bmi < 18.5) {
                  calculatemessage.classList.remove("color-green")
        calculatemessage.classList.add("color-red")
            calculatemessage.textContent=`Your bmi is ${bmi} and you are skinny 😔`
        } else if (bmi < 25) {
            calculatemessage.classList.add("color-green")
            calculatemessage.textContent=`Your bmi is ${bmi} and you are healthy😁`
            
        }else{
            calculatemessage.classList.remove("color-green")
        calculatemessage.classList.add("color-red")
            calculatemessage.textContent=`Your bmi is ${bmi} and you are overweight😪`
        }

        calculatecm.value = ""
        calculatekg.value = ""
        
        setTimeout(() => {
            calculatemessage.textContent=""
        },4000)
    }
}


calculateform.addEventListener("submit", calculatebmi);  


/*=============== EMAIL JS ===============*/
const contactform = document.getElementById("contact-form"),
    contactuser = document.getElementById("contact-user"),
    contactmessage = document.getElementById("contact-message");


const sendemail = (e) => {
    e.preventDefault()

    if (contactuser.value === "") {
        contactmessage.classList.remove("color-green");
        contactmessage.classList.add("color-red");

        contactmessage.textContent = "please enter email";

        setTimeout(() => {
            
        contactmessage.textContent=""
        },3000)
    } else {
        emailjs.sendForm("service_3jo65y1", "template_slim00r", "#contact-form", "a72hW5b1VlMCkZjya")
            .then(() => {               
                contactmessage.classList.add("color-green");
                contactmessage.textContent = "your registered succesfully 💪"
                
                setTimeout(() => {
                    contactmessage.textContent=""
                },3000)
            }, (error) => {
                alert("	OOPS! SOMETHING HAS FAILED...",error)
            })
        contactuser.value=""


    }
}

contactform.addEventListener("submit",sendemail)