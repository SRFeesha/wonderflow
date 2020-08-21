gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#content",
        scrub: true,
        // markers: true
    }
});

tl.to(".skater", {x: 500, y: -300})
