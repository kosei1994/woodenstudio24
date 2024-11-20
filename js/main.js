// レスポンシブ対応
const mm = gsap.matchMedia();
mm.add("(min-width: 1025px)", () => {

    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                start: "top center",
                markers: false
            }
        }
    )
    
    gsap.fromTo(
        ".column-right .column-right__photo",
        1,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".column-right .column-right__photo",
                start: "center center",
                markers: false
            }
        }
    )
    
    gsap.fromTo(
        ".concept-second .column-left",
        1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-second .column-left",
                start: "top center",
                markers: false
            }
        }
    )
    
    gsap.fromTo(
        ".concept-second .column-right",
        1,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-second .column-right",
                start: "center center",
                markers: false
            }
        }
    )
    
    gsap.fromTo(
        ".works-items .works-item",
        1,
        {
            opacity: 0
        },
        {
            opacity: 1,
            scrollTrigger: {
                trigger: ".works-items",
                start: "top center",
                markers: false
            },
            stagger:{each: 0.2}
        }
    )
    
    gsap.fromTo(
        ".news-items",
        1,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".news-items",
                start: "top center",
                markers: false
            }
        }
    )
    
})

mm.add("(max-width: 599px)", () => {
    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                start: "top center",
                markers: false
            }
        }
    )

    gsap.fromTo(
        ".column-right .column-right__photo",
        1,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".column-right .column-right__photo",
                start: "top center",
                markers: false
            }
        }
    )

    gsap.fromTo(
        ".concept-second .column-right",
        1,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-second .column-right",
                start: "center center",
                markers: false
            }
        }
    )

    gsap.fromTo(
        ".concept-second .column-left",
        1,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".concept-second .column-left",
                start: "top center",
                markers: false
            }
        }
    )

    gsap.fromTo(
        ".works-items .works-item",
        1,
        {
            opacity: 0
        },
        {
            opacity: 1,
            scrollTrigger: {
                trigger: ".works-items",
                start: "top center",
                markers: false
            },
            stagger:{each: 0.2}
        }
    )

    gsap.fromTo(
        ".news-items",
        1,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".news-items",
                start: "top center",
                markers: false
            }
        }
    )

    
})