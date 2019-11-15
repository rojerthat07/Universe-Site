const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

//Scences from index.html
tl.from("#ready-question", 1, { y:200,opacity:0});

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#ready-question"
})
.setTween(tl)
.addTo(controller)







function descriptionAppear(id){
    document.getElementById(id).style.opacity = "1";
}

function descriptionDAppear(id){
    document.getElementById(id).style.opacity = "0";
}


