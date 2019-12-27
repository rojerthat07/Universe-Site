const tl = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
const tl4 = new TimelineMax();
const tl5 = new TimelineMax();
const controller = new ScrollMagic.Controller();

//Scences from index.html
    //1
tl2.from("#imageCaption__image",3, {opacity:0});
tl2.from("#imageCaption__head",2, {opacity:0});

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#imageCaptionLeft__container"
})
.setTween(tl2)
.addTo(controller)
//Scences from start.html
    //Universe Background Section
tl3.from("#universe__content--left",3, {opacity:-0.5});
const scene3 = new ScrollMagic.Scene({
    triggerElement: "#universe__background--section"
})
.setTween(tl3)
.addTo(controller)
    //Galaxy Section
tl4.from(".galaxy__image--second",2, {x:-400,opacity:-0.5});
tl4.from(".galaxy__image--fourth",2, {x:400,opacity:-0.5},'=-1');
tl4.from(".galaxy__image--third",2, {x:400,opacity:-0.5},'=-1');
tl4.from(".galaxy__text",3, {x:-700,opacity:-0.5},'=-3');
tl4.from(".galaxy__header",2, {opacity:-1},'=-4');
tl4.from(".galaxy__image",3, {opacity:-0.5},'=-4');


const scene4 = new ScrollMagic.Scene({
    triggerElement: ".galaxy__section"
})
.setTween(tl4)
.addTo(controller)
    //Stars Section
tl5.from("#star1",1, {scale:0});
tl5.from("#star1-description",1, {opacity:0}, '=-1');
tl5.from("#star2",1, {scale:0});
tl5.from("#star2-description",1, {opacity:0}, '=-1');
tl5.from("#star3",1, {scale:0});
tl5.from("#star3-description",1, {opacity:0}, '=-1');
tl5.from("#star4",1, {scale:0});
tl5.from("#star4-description",1, {opacity:0}, '=-1');
tl5.from("#star5",1, {scale:0});
tl5.from("#star5-description",1, {opacity:0}, '=-1');
tl5.from("#star6",1, {scale:0});
tl5.from("#star6-description",1, {opacity:0}, '=-1');
tl5.from("#star7",1, {scale:0});
tl5.from("#star7-description",1, {opacity:0}, '=-1');
tl5.from("#star8",1, {scale:0});
tl5.from("#star8-description",1, {opacity:0}, '=-1');
tl5.from("#star9",1, {scale:0});
tl5.from("#star9-description",1, {opacity:0}, '=-1');


const scene5 = new ScrollMagic.Scene({
    triggerElement: "#star1"
})
.setTween(tl5)
.addTo(controller)


//About Section
const abouttl = new TimelineMax();

abouttl.from(".about__heading",3, {opacity:0});
abouttl.from(".about__image",3, {opacity:0});
abouttl.from("#about__paragraph-1",3, {opacity:0});
abouttl.from("#about__paragraph-2",3, {opacity:0});
abouttl.from("#about__paragraph-3",3, {opacity:0});
abouttl.from("#about__paragraph-4",3, {opacity:0});
abouttl.from(".about__quotation",3, {opacity:0}, '-=2');

const aboutScene1 = new ScrollMagic.Scene({
    triggerElement: ".about__heading"
})
.setTween(abouttl)
.addTo(controller)



//Typing Effect
const TypeWriter = function(txtElement,words,wait = 5000){
    this.txtElement = txtElement;
    this.words = words; 
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

    //Type Method
    TypeWriter.prototype.type = function(){
        //Current index of word
        const current = this.wordIndex % this.words.length;
        //Get full text of current
        const fullTxt = this.words[current];

        if(this.isDeleting){
            //Remove Char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //Add Char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }


        //Insert txt into element
        this.txtElement.innerHTML = `<span class="pointer">${this.txt}</span>`;

        //Initial Type Speed
        typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /= 2;
        }

        if(!this.isDeleting && this.txt === fullTxt){
            //Makes pause at end
            typeSpeed = this.wait;
            document.querySelector(".pointer").style.animationName = "pointer-blink-stop"
            //Set delete to true
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
            this.typeSpeed = 500;
        }

 
        setTimeout(()=> this.type(), typeSpeed)
    }


   
    //Init on DOM Load
document.addEventListener("DOMContentLoaded",init);
    //Init App
function init(){
    const txtElement = document.querySelector(".universe-txt");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Initialize Typewriter
    new TypeWriter(txtElement,words,wait)
}


//Planets
function descriptionAppear(id){
    document.getElementById(id).style.opacity = "1";
}

function descriptionDAppear(id){
    document.getElementById(id).style.opacity = "0";
}


