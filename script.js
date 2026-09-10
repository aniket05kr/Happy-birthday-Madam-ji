
/* =================================
   SCREEN 01 : BACKGROUND DECOR
================================= */

const background = document.querySelector(".background");

if (background) {

    const decor = document.createElement("div");

    decor.id = "bg-decor";

    background.prepend(decor);


    /* ---------- OUTLINE HEART ---------- */

    const heartSVG = `
        <svg viewBox="0 0 24 24" fill="none">
            <path
                d="M12 20.5
                   C11.6 20.1 4 15.2 4 9.5
                   C4 6.5 6.1 4.5 8.8 4.5
                   C10.3 4.5 11.6 5.2 12 6.4
                   C12.4 5.2 13.7 4.5 15.2 4.5
                   C17.9 4.5 20 6.5 20 9.5
                   C20 15.2 12.4 20.1 12 20.5Z"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
            />
        </svg>
    `;


    /* ---------- SAFE POSITIONS ---------- */

    const heartPositions = [

        [7, 15],
        [91, 19],

        [4, 39],
        [95, 42],

        [8, 61],
        [92, 64],

        [5, 79],
        [94, 82]

    ];


    const sparklePositions = [

        [16, 11],
        [84, 13],

        [10, 28],
        [89, 31],

        [16, 46],
        [84, 49],

        [7, 56],
        [94, 57],

        [14, 70],
        [87, 72],

        [8, 89],
        [92, 91],

        [22, 94],
        [78, 94]

    ];


    /* ---------- HEARTS ---------- */

    heartPositions.forEach((position, index) => {

        const heart = document.createElement("span");

        heart.className = "bg-heart";

        heart.innerHTML = heartSVG;

        heart.style.left = position[0] + "%";
        heart.style.top = position[1] + "%";

        heart.style.animationDelay =
            (index * 0.32) + "s," +
            (2 + Math.random() * 2) + "s";

        decor.appendChild(heart);

    });


    /* ---------- SPARKLES ---------- */

    sparklePositions.forEach((position, index) => {

        const sparkle = document.createElement("span");

        sparkle.className = "bg-sparkle";

        sparkle.textContent =
            index % 3 === 0 ? "✦" : "✧";

        sparkle.style.left = position[0] + "%";
        sparkle.style.top = position[1] + "%";

        sparkle.style.animationDelay =
            (index * 0.18) + "s," +
            (Math.random() * 3) + "s";

        decor.appendChild(sparkle);

    });

}

/* =================================
   SCREEN 01 → SCREEN 02
================================= */

const letterBtn = document.getElementById("btn__letter");
const screen2 = document.getElementById("screen2");

if (letterBtn && screen2) {

    letterBtn.addEventListener("click", function () {

        screen2.classList.add("active");

    });

}



/* =================================
   SCREEN 02 : BACKGROUND DECORATION
================================= */

const screen2Decoration =
    document.getElementById("screen2Decoration");

if (screen2Decoration) {


    /* =================================
       OUTLINE HEARTS
    ================================= */

    const heartPositions = [

        [5, 19],
        [17, 27],
        [31, 15],
        [48, 25],
        [67, 17],
        [82, 28],
        [94, 20],

        [8, 39],
        [28, 43],
        [73, 39],
        [94, 44],

        [6, 58],
        [32, 58],
        [76, 57],
        [95, 61],

        [14, 76],
        [43, 76],
        [70, 74],
        [91, 78],

        [6, 91],
        [26, 88],
        [53, 92],
        [78, 89],
        [95, 93]

    ];


    heartPositions.forEach(function(position){

        const heart =
            document.createElement("span");

        heart.className =
            "screen2-bg-heart";

        heart.style.left =
            position[0] + "%";

        heart.style.top =
            position[1] + "%";

        heart.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        heart.style.animationDelay =
            (Math.random() * 4) + "s";


        screen2Decoration.appendChild(heart);

    });


    /* =================================
       SPARKLES
    ================================= */

    const sparklePositions = [

        [10, 14],
        [23, 20],
        [39, 10],
        [57, 16],
        [75, 11],
        [88, 15],

        [3, 30],
        [22, 36],
        [55, 32],
        [79, 34],
        [98, 31],

        [12, 47],
        [38, 46],
        [66, 47],
        [88, 49],

        [3, 67],
        [24, 69],
        [53, 66],
        [82, 68],
        [98, 70],

        [10, 82],
        [35, 82],
        [61, 80],
        [87, 83],

        [19, 95],
        [42, 94],
        [66, 96],
        [90, 94]

    ];


    sparklePositions.forEach(function(position){

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "screen2-bg-sparkle";

        sparkle.style.left =
            position[0] + "%";

        sparkle.style.top =
            position[1] + "%";

        sparkle.style.animationDuration =
            (2.8 + Math.random() * 3.5) + "s";

        sparkle.style.animationDelay =
            (Math.random() * 4) + "s";


        screen2Decoration.appendChild(sparkle);

    });

}

/* =================================
   SCREEN 02 : CONTINUE BUTTON
================================= */

const screen2Continue =
    document.getElementById("screen2Continue");

if (screen2Continue) {

    screen2Continue.addEventListener(
        "pointerdown",
        function () {

            this.classList.add("is-pressed");

        }
    );

    screen2Continue.addEventListener(
        "pointerup",
        function () {

            this.classList.remove("is-pressed");

        }
    );

    screen2Continue.addEventListener(
        "pointercancel",
        function () {

            this.classList.remove("is-pressed");

        }
    );

    screen2Continue.addEventListener(
        "pointerleave",
        function () {

            this.classList.remove("is-pressed");

        }
    );

}

/* =================================
   SCREEN 02 → SCREEN 03
================================= */

if (screen2Continue) {

    screen2Continue.addEventListener("click", function () {

        const screen3Element =
            document.getElementById("screen3");

        if (screen3Element) {

            screen3Element.classList.add("active");

        }

    });

}



/* =================================
   SCREEN 03 : PREMIUM DECORATIONS
================================= */

const screen3Decorations =
    document.getElementById("screen3Decorations");

if (screen3Decorations) {

    const heartSVG = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="
                M12 20.5
                C11.5 20
                4 15
                4 9.3
                C4 6.4
                6.1 4.5
                8.8 4.5
                C10.3 4.5
                11.6 5.3
                12 6.6
                C12.4 5.3
                13.7 4.5
                15.2 4.5
                C17.9 4.5
                20 6.4
                20 9.3
                C20 15
                12.5 20
                12 20.5
                Z
            "/>
        </svg>
    `;


    /* =================================
       26 SAFE POSITIONS
    ================================= */

    const positions = [

        /* LEFT */

        [4,10],
        [9,20],
        [4,31],
        [10,43],
        [5,56],
        [9,69],
        [4,82],
        [9,94],

        /* RIGHT */

        [96,11],
        [91,23],
        [96,35],
        [90,47],
        [95,59],
        [91,72],
        [96,84],
        [90,94],

        /* TOP */

        [22,8],
        [37,11],
        [63,10],
        [78,8],

        /* BOTTOM */

        [21,94],
        [36,96],
        [64,95],
        [79,93],

        /* EXTRA */

        [14,14],
        [86,15]

    ];


    /* =================================
       CREATE DECORATIONS
    ================================= */

    positions.forEach(function(position){

        const item =
            document.createElement("span");


        /* RANDOM HEART / SPARKLE */

        if (Math.random() < 0.48) {

            item.className =
                "screen3-decor-heart";

            item.innerHTML =
                heartSVG;

        } else {

            item.className =
                "screen3-decor-sparkle";

        }


        /* POSITION */

        item.style.left =
            position[0] + "%";

        item.style.top =
            position[1] + "%";


        /* LIGHT RANDOM OPACITY */

        item.style.setProperty(
            "--opacity",
            (.25 + Math.random() * .25).toFixed(2)
        );


        /* SLOW ANIMATION */

        item.style.setProperty(
            "--duration",
            (4.5 + Math.random() * 3) + "s"
        );


        /* RANDOM START */

        item.style.setProperty(
            "--delay",
            (-Math.random() * 5) + "s"
        );


        /* VERY SMALL MOVEMENT */

        item.style.setProperty(
            "--move-x",
            (-3 + Math.random() * 6) + "px"
        );

        item.style.setProperty(
            "--move-y",
            (-4 + Math.random() * 6) + "px"
        );


        screen3Decorations.appendChild(item);

    });

}

/* =========================================
   OPENING INTRO + BACKGROUND MUSIC
========================================= */

const openingIntro =
    document.getElementById("openingIntro");

const introStart =
    document.getElementById("introStart");

const birthdayMusic =
    document.getElementById("birthdayMusic");


if (openingIntro && introStart && birthdayMusic) {

    /* ---------- FIXED VOLUME ---------- */

    birthdayMusic.volume = 0.30;


    /* ---------- START EXPERIENCE ---------- */

    introStart.addEventListener("click", function () {

        /* START MUSIC */

        birthdayMusic.play()
            .then(function () {

                console.log("Birthday music started");

            })
            .catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });


        /* HIDE INTRO */

        openingIntro.classList.add(
            "is-hidden"
        );

    });

}

/* =========================================
   STOP MUSIC ON SCREEN 04
========================================= */

const musicScreen4 =
    document.getElementById("screen4");


if (musicScreen4 && birthdayMusic) {

    const screen4MusicObserver =
        new MutationObserver(function () {

            if (
                musicScreen4.classList.contains("active")
            ) {

                birthdayMusic.pause();

                birthdayMusic.currentTime = 0;

            }

        });


    screen4MusicObserver.observe(
        musicScreen4,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );

}

/* =================================
   SCREEN 03 → SCREEN 04
================================= */

const screen3Next =
    document.getElementById("screen3Next");

const screen4 =
    document.getElementById("screen4");


if(screen3Next && screen4){

    screen3Next.addEventListener(
        "pointerdown",
        function(){

            this.classList.add("is-pressed");

        }
    );


    screen3Next.addEventListener(
        "pointerup",
        function(){

            this.classList.remove("is-pressed");

        }
    );


    screen3Next.addEventListener(
        "pointercancel",
        function(){

            this.classList.remove("is-pressed");

        }
    );


    screen3Next.addEventListener(
        "pointerleave",
        function(){

            this.classList.remove("is-pressed");

        }
    );


    screen3Next.addEventListener(
        "click",
        function(){

            screen4.classList.add("active");

        }
    );

}


/* =================================
   SCREEN 04 : VIDEO SLIDER
================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const track =
            document.querySelector(
                ".screen4-video-track"
            );

        const cards =
            document.querySelectorAll(
                ".screen4-video-card"
            );

        const prevButton =
            document.querySelector(
                ".screen4-prev"
            );

        const nextButton =
            document.querySelector(
                ".screen4-next"
            );

        const dots =
            document.querySelectorAll(
                ".screen4-dots span"
            );


        if(
            !track ||
            !cards.length ||
            !prevButton ||
            !nextButton
        ){

            return;

        }


        let currentIndex = 0;


        /* =================================
           UPDATE SLIDER
        ================================= */

        function updateSlider(){

            cards.forEach(
                function(card,index){

                    card.classList.remove(
                        "active",
                        "prev",
                        "next"
                    );


                    if(index === currentIndex){

                        card.classList.add(
                            "active"
                        );

                    }
                    else if(
                        index === currentIndex - 1
                    ){

                        card.classList.add(
                            "prev"
                        );

                    }
                    else if(
                        index === currentIndex + 1
                    ){

                        card.classList.add(
                            "next"
                        );

                    }

                }
            );


            dots.forEach(
                function(dot,index){

                    dot.classList.toggle(
                        "active",
                        index === currentIndex
                    );

                }
            );


            prevButton.disabled =
                currentIndex === 0;


            nextButton.disabled =
                currentIndex === cards.length - 1;


            cards.forEach(
                function(card,index){

                    if(index !== currentIndex){

                        const video =
                            card.querySelector(
                                ".screen4-video"
                            );

                        if(video){

                            video.pause();

                        }

                    }

                }
            );


            prepareActiveScratch();

        }


        /* =================================
           SCRATCH SETUP
        ================================= */

        function setupScratch(card){

            const canvas =
                card.querySelector(
                    ".screen4-scratch-canvas"
                );

            const frame =
                card.querySelector(
                    ".screen4-video-frame"
                );

            const video =
                card.querySelector(
                    ".screen4-video"
                );


            if(
                !canvas ||
                !frame ||
                !video
            ){

                return;

            }


            const ctx =
                canvas.getContext("2d");


            let isScratching = false;

            let revealed = false;

            let lastX = 0;

            let lastY = 0;

            let lastProgressCheck = 0;


            /* =================================
               CREATE SCRATCH SURFACE
            ================================= */

            function createScratchSurface(){

                const width =
                    frame.clientWidth;

                const height =
                    frame.clientHeight;


                if(
                    width <= 0 ||
                    height <= 0
                ){

                    return;

                }


                const dpr =
                    Math.min(
                        window.devicePixelRatio || 1,
                        2
                    );


                canvas.width =
                    Math.round(
                        width * dpr
                    );

                canvas.height =
                    Math.round(
                        height * dpr
                    );


                canvas.style.width =
                    "100%";

                canvas.style.height =
                    "100%";


                ctx.setTransform(
                    dpr,
                    0,
                    0,
                    dpr,
                    0,
                    0
                );


                ctx.globalCompositeOperation =
                    "source-over";

                ctx.globalAlpha = 1;


                /* ---------- FOIL ---------- */

                const foil =
                    ctx.createLinearGradient(
                        0,
                        0,
                        width,
                        height
                    );


                foil.addColorStop(
                    0,
                    "#211517"
                );

                foil.addColorStop(
                    .18,
                    "#76553b"
                );

                foil.addColorStop(
                    .36,
                    "#382625"
                );

                foil.addColorStop(
                    .52,
                    "#a0784d"
                );

                foil.addColorStop(
                    .70,
                    "#49302b"
                );

                foil.addColorStop(
                    .88,
                    "#815b3d"
                );

                foil.addColorStop(
                    1,
                    "#201216"
                );


                ctx.fillStyle = foil;

                ctx.fillRect(
                    0,
                    0,
                    width,
                    height
                );


                /* ---------- SOFT LIGHT ---------- */

                const glow =
                    ctx.createRadialGradient(
                        width / 2,
                        height / 2,
                        10,
                        width / 2,
                        height / 2,
                        Math.max(
                            width,
                            height
                        ) * .7
                    );


                glow.addColorStop(
                    0,
                    "rgba(255,220,160,.20)"
                );

                glow.addColorStop(
                    .55,
                    "rgba(255,170,80,.05)"
                );

                glow.addColorStop(
                    1,
                    "rgba(0,0,0,.25)"
                );


                ctx.fillStyle = glow;

                ctx.fillRect(
                    0,
                    0,
                    width,
                    height
                );


                /* ---------- SCRATCH TEXTURE ---------- */

                for(
                    let i = 0;
                    i < 170;
                    i++
                ){

                    const x =
                        Math.random() * width;

                    const y =
                        Math.random() * height;

                    const length =
                        Math.random() * 30 + 5;


                    ctx.beginPath();

                    ctx.moveTo(
                        x,
                        y
                    );

                    ctx.lineTo(
                        x + length,
                        y +
                        (
                            Math.random() * 5 - 2.5
                        )
                    );


                    ctx.lineWidth =
                        Math.random() * .8 + .25;


                    ctx.strokeStyle =
                        Math.random() > .5
                            ? "rgba(255,235,190,.28)"
                            : "rgba(0,0,0,.25)";


                    ctx.stroke();

                }


                /* ---------- DIAGONAL TEXTURE ---------- */

                ctx.globalAlpha = .12;

                ctx.strokeStyle = "#ffe0a0";

                ctx.lineWidth = .7;


                for(
                    let x = -height;
                    x < width;
                    x += 16
                ){

                    ctx.beginPath();

                    ctx.moveTo(
                        x,
                        0
                    );

                    ctx.lineTo(
                        x + height,
                        height
                    );

                    ctx.stroke();

                }


                ctx.globalAlpha = 1;

                ctx.globalCompositeOperation =
                    "source-over";


                revealed = false;

                lastX = 0;

                lastY = 0;

                lastProgressCheck = 0;


                card.classList.remove(
                    "is-revealed"
                );

            }


            /* =================================
               POSITION
            ================================= */

            function getPosition(event){

                const rect =
                    canvas.getBoundingClientRect();


                return {

                    x:
                        event.clientX -
                        rect.left,

                    y:
                        event.clientY -
                        rect.top

                };

            }


            /* =================================
               SCRATCH
            ================================= */

            function scratch(event){

                if(
                    revealed ||
                    card !== cards[currentIndex]
                ){

                    return;

                }


                const point =
                    getPosition(event);

                const x = point.x;

                const y = point.y;


                const radius =
                    Math.max(
                        14,
                        frame.clientWidth * .085
                    );


                ctx.globalCompositeOperation =
                    "destination-out";

                ctx.globalAlpha = 1;

                ctx.lineCap = "round";

                ctx.lineJoin = "round";


                ctx.beginPath();

                ctx.moveTo(
                    lastX,
                    lastY
                );

                ctx.lineTo(
                    x,
                    y
                );

                ctx.lineWidth =
                    radius * 2;

                ctx.stroke();


                ctx.beginPath();

                ctx.arc(
                    x,
                    y,
                    radius,
                    0,
                    Math.PI * 2
                );

                ctx.fill();


                lastX = x;

                lastY = y;


                const now =
                    performance.now();


                if(
                    now - lastProgressCheck > 90
                ){

                    lastProgressCheck = now;

                    checkProgress();

                }

            }
            
            /* =================================
   SCRATCH PERCENTAGE
================================= */

            function getScratchPercentage(){

                const image =
                    ctx.getImageData(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );

                const data =
                    image.data;

                const step = 12;

                let total = 0;

                let scratched = 0;


                for(
                    let y = 0;
                    y < canvas.height;
                    y += step
                ){

                    for(
                        let x = 0;
                        x < canvas.width;
                        x += step
                    ){

                        const alphaIndex =
                            (
                                y *
                                canvas.width +
                                x
                            ) *
                            4 +
                            3;


                        total++;


                        if(
                            data[alphaIndex] < 128
                        ){

                            scratched++;

                        }

                    }

                }


                return (
                    scratched / total
                ) * 100;

            }


/* =================================
   CHECK 15% REVEAL
================================= */

            function checkProgress(){

                if(revealed){

                    return;

                }


                const percentage =
                    getScratchPercentage();


                if(
                    percentage >= 15
                ){

                    revealVideo();

                }

            }


/* =================================
   REVEAL VIDEO
================================= */

            function revealVideo(){

                if(revealed){

                    return;

                }


                revealed = true;


                ctx.globalCompositeOperation =
                    "destination-out";


                ctx.clearRect(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );


                card.classList.add(
                    "is-revealed"
                );


                video.play().catch(
                    function(){}
                );

            }


/* =================================
   POINTER DOWN
================================= */

            canvas.addEventListener(
                "pointerdown",
                function(event){

                    if(
                        revealed ||
                        card !== cards[currentIndex]
                    ){

                        return;

                    }


                    isScratching = true;

                    lastProgressCheck = 0;


                    const point =
                        getPosition(event);


                    lastX = point.x;

                    lastY = point.y;


                    canvas.setPointerCapture(
                        event.pointerId
                    );


                    scratch(event);

                }
            );


/* =================================
   POINTER MOVE
================================= */

            canvas.addEventListener(
                "pointermove",
                function(event){

                    if(
                        !isScratching ||
                        revealed ||
                        card !== cards[currentIndex]
                    ){

                        return;

                    }


                    scratch(event);

                }
            );


/* =================================
   POINTER UP
================================= */

            canvas.addEventListener(
                "pointerup",
                function(event){

                    if(!isScratching){

                        return;

                    }


                    isScratching = false;

                    lastX = 0;

                    lastY = 0;


                    checkProgress();


                    if(
                        canvas.hasPointerCapture(
                            event.pointerId
                        )
                    ){

                        canvas.releasePointerCapture(
                            event.pointerId
                        );

                    }

                }
            );


/* =================================
   POINTER CANCEL
================================= */

            canvas.addEventListener(
                "pointercancel",
                function(){

                    isScratching = false;

                    lastX = 0;

                    lastY = 0;

                }
            );


/* =================================
   LOST POINTER CAPTURE
================================= */

            canvas.addEventListener(
                "lostpointercapture",
                function(){

                    isScratching = false;

                    lastX = 0;

                    lastY = 0;

                }
            );


            createScratchSurface();


            window.addEventListener(
                "resize",
                function(){

                    if(!revealed){

                        createScratchSurface();

                    }

                }
            );


            card._screen4CreateScratch =
                createScratchSurface;

        }


/* =================================
   ACTIVE SCRATCH PREPARE
================================= */

        function prepareActiveScratch(){

            const activeCard =
                cards[currentIndex];


            if(
                activeCard &&
                activeCard._screen4CreateScratch
            ){

                requestAnimationFrame(
                    function(){

                        activeCard._screen4CreateScratch();

                    }
                );

            }

        }


/* =================================
   INITIALIZE SCRATCH
================================= */

        cards.forEach(
            function(card){

                setupScratch(card);

            }
        );


/* =================================
   PREVIOUS VIDEO
================================= */

        prevButton.addEventListener(
            "click",
            function(){

                if(
                    currentIndex <= 0
                ){

                    return;

                }


                currentIndex--;

                updateSlider();

            }
        );


/* =================================
   NEXT VIDEO
================================= */

        nextButton.addEventListener(
            "click",
            function(){

                if(
                    currentIndex >=
                    cards.length - 1
                ){

                    return;

                }


                currentIndex++;

                updateSlider();

            }
        );


/* =================================
   DOT NAVIGATION
================================= */

        dots.forEach(
            function(dot,index){

                dot.addEventListener(
                    "click",
                    function(){

                        if(
                            index === currentIndex
                        ){

                            return;

                        }


                        currentIndex = index;

                        updateSlider();

                    }
                );

            }
        );


/* =================================
   START
================================= */

        updateSlider();

    }
);

