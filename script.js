let cat = "cat"
let stars = document.getElementsByClassName("stars")[0]
let rotate = 0
let bunny = "bunny"
let slideshow = document.getElementsByClassName("slideshow")[0]

for (let i = 0; i < 30; i++ ) {
    
    console.log(cat);
    let img = document.createElement("img")
    img.src = "star.svg"
    let starwidth = Math.random()*200 + 20 
    let starhue = Math.random()*360
    let staropacity = Math.random()*0.7
    let starblur = Math.random()*5
    let x = Math.random()*window.innerWidth
    let y = Math.random()*window.innerHeight
    img.setAttribute("data-hue", starhue)
    img.setAttribute("data-blur", starblur)
    img.style.width = starwidth + "px"
    img.style.filter = "hue-rotate("+starhue+"deg) blur("+starblur+"px)" 
    img.style.opacity = staropacity
    img.style.left = x + "px"
    img.style.top = y + "px"
    img.classList.add("staricon")
    stars.appendChild(img)
}


// for (let i = 23; i < 93; i = i*2 ) {
//     console.log(i);
// // }

// for (let i = 2; i < 257; i = i*2){
//     console.log(i);
// }

// for (let i = 600; i > -201; i = i-400){
//     console.log(i);
// }

for (let i = 1; i < 101; i = i*10){
    console.log(i + " bunny"); 
}

// for (let i = imagenames.length - 1; i > 0; i--) {
    function repeatOften() {
        console.log(7)
        let staricons = document.getElementsByClassName("staricon")
        for (let i = 0; i < staricons.length; i = i+1){
           
            if(i < 15){
                staricons[i].style.transform = "rotate("+rotate+"deg)"
            }

            else{
                staricons[i].style.transform = "rotate(-"+rotate+"deg)"
            }
            staricons[i].style.filter = "hue-rotate("+(parseInt(staricons[i].dataset.hue)+rotate)+"deg) blur("+staricons[i].dataset.blur+"px)"
        }
        rotate = rotate + 0.4
        requestAnimationFrame(repeatOften);
    }
    requestAnimationFrame(repeatOften)
    function createCard(){
        let img = document.createElement("img")
        img.src = "cat0.gif"
        slideshow.appendChild(img)
    }
    createCard()