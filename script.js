const tl = gsap.timeline();
tl.from(".projects-contain",{
    y: "-150%",
    duration: 5,
    opacity: 0
})
.from(".contain",{
    scale: .7,
    duration: 2,
    stagger: {
        amount: .4
    }
},"-=3")