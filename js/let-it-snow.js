// let it snow

var snowflake = document.getElementsByClassName("snow");
console.log(snowflake);

var mysnowtop = 30;

console.log('site h = ', site_h, ', site w + ', site_w);

for (var i = 0; i < snowflake.length; i++) {
    var x = w / snowflake.length;
    var z = x * i;
    snowflake[i].style.left = z + 'px'
}

var running = true;

// var wH = window.innerHeight;
// var wW = window.innerWidth;

var snow_length = Math.floor(w / 52);
console.log(snow_length);


var snowflakes = [
    {
        id: 'snow0',
        l: 'A',
        x: (window.innerWidth / snow_length) * (0),
        y: window.innerHeight - 50
    },
    {
        id: 'snow1',
        l: 'a',
        x: (window.innerWidth / snow_length) * (1),
        y: window.innerHeight - 50
    },
    {
        id: 'snow2',
        l: 'B',
        x: (window.innerWidth / snow_length) * (2),
        y: window.innerHeight - 50
    },
    {
        id: 'snow3',
        l: 'b',
        x: (window.innerWidth / snow_length) * (3),
        y: window.innerHeight - 50
    },
    {
        id: 'snow4',
        l: 'C',
        x: (window.innerWidth / snow_length) * (4),
        y: window.innerHeight - 50
    }
]
//     {
//         id: "snow1",
//         elem: null,
//         yPos: window.innerHeight + 200,
//         xPos: window.innerWidth / 9,
//         speed: 2
//     },
//     { id : "cup2",
//         elem: null,
//         yPos: window.innerHeight + 87,
//         xPos: (window.innerWidth / 9) * 2,
//         speed: 3
//     },
//     { id : "cup3",
//         elem: null,
//         yPos: window.innerHeight + 56,
//         xPos: (window.innerWidth / 9) * 3,
//         speed: 3
//     },
//     { id: "cup4",
//         elem: null,
//         yPos: window.innerHeight + 97,
//         xPos: (window.innerWidth / 9) * 4,
//         speed: 2
//     },
//     { id: "cup5",
//       elem: null,
//       yPos: window.innerHeight + 187,
//       xPos: (window.innerWidth / 9) * 5,
//       speed: 2
//     },
//     { id: "cup6",
//       elem: null,
//       yPos: window.innerHeight + 127,
//       xPos: (window.innerWidth / 9) * 6,
//       speed: 3
//     },
//     { id: "cup7",
//       elem: null,
//       yPos: window.innerHeight + 200,
//       xPos: (window.innerWidth / 9) * 7,
//       speed: 2
//     },
//     { id: "cup8",
//       elem: null,
//       yPos: window.innerHeight + 35,
//       xPos: (window.innerWidth / 9) * 8,
//       speed: 3
//     }
//]

// for(var i = 0; i < snowflakes.length; i++){
//     console.log(i);
//     drawSnowflakes(snowflakes[i])
// }
// run()

function drawSnowflakes(cup){
    var coffeeCup = document.createElement('SPAN')
    coffeeCup.id = cup.id
    coffeeCup.className = 'snow'
    coffeeCup.innerHTML = cup.l
    coffeeCup.style.left = cup.x + 'px'
    coffeeCup.style.bottom = cup.y + 'px'
    site.appendChild(coffeeCup)
    // console.log();
}

function run(){
    moveSnow()
    // movePlayer()
    // checkCollisions()
    if (running){
        window.requestAnimationFrame(run)
    }
}
  
function moveSnow(){
    for (var i=0; i<snowflakes.length; i++){
        var cup = document.getElementById(snowflakes[i].id)
        snowflakes[i].yPos -= snowflakes[i].speed
        if (snowflakes[i].yPos<-200){
            snowflakes[i].yPos = window.innerHeight
            var random = Math.random()
            if (random>0.5){
                //snowflakes[i].speed += 1
            }
        }
        cup.style.bottom = snowflakes[i].yPos + "px"
    }
}