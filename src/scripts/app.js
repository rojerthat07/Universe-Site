const tl = new TimelineMax();
const tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

//Scences from index.html
tl.from("#ready-question", 1, { y:200,opacity:0});

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#ready-question"
})
.setTween(tl)
.addTo(controller)
//Scences from start.html
tl2.from("#universe__content--left",2.5, {x:-500,opacity:-0.5});

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#universe__background--section"
})
.setTween(tl2)
.addTo(controller)



//Typing Effect





//Planets
function descriptionAppear(id){
    document.getElementById(id).style.opacity = "1";
}

function descriptionDAppear(id){
    document.getElementById(id).style.opacity = "0";
}


