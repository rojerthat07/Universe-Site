const tl = new TimelineMax();
const tl2 = new TimelineMax();
const tl3 = new TimelineMax();
const tl4 = new TimelineMax();
const tl5 = new TimelineMax();
const controller = new ScrollMagic.Controller();

//Scences from index.html
    //1
tl.from("#ready-question", 2, { y:200,opacity:-0.5});
const scene1 = new ScrollMagic.Scene({
    triggerElement: "#ready-question"
})
.setTween(tl)
.addTo(controller)
    //2
tl2.from("#imageCaption__image",3, {opacity:0});
tl2.from("#imageCaption__head",2, {opacity:0});

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#imageCaptionLeft__container"
})
.setTween(tl2)
.addTo(controller)
//Scences from start.html
tl3.from("#universe__content--left",3, {opacity:-0.5});
const scene3 = new ScrollMagic.Scene({
    triggerElement: "#universe__background--section"
})
.setTween(tl3)
.addTo(controller)
    //
tl4.from(".galaxy__image--second",2, {x:-400,opacity:-0.5});
tl4.from(".galaxy__image--fourth",2, {x:400,opacity:-0.5},'=-1');
tl4.from(".galaxy__image--third",2, {x:400,opacity:-0.5},'=-1');
tl4.from(".galaxy__text",2, {x:400,opacity:-0.5},'=-3');
tl4.from(".galaxy__header",2, {opacity:-1},'=-4');
tl4.from(".galaxy__image",2, {y:-400,opacity:-0.5},'=-4');


const scene4 = new ScrollMagic.Scene({
    triggerElement: ".galaxy__section"
})
.setTween(tl4)
.addTo(controller)
    //
    tl5.from("#star1",1, {opacity:0});


const scene5 = new ScrollMagic.Scene({
    triggerElement: "#star1"
})
.setTween(tl5)
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


