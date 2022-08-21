// Remember to import the data and Dog class!

import dogs from './data.js'
import Dog from './Dog.js'

let currentDog = 0
let dogPage = new Dog(dogs[currentDog]);

render()

document.querySelector(".btnRed").addEventListener("click", ()=>{
    document.querySelector(".badge2").style.display = "block"
    document.querySelector(".badge2").classList.add("badge-nope")
    document.querySelector(".badge1").classList.remove("badge-like")
    document.querySelector(".badge1").style.display = "none"
    setTimeout(changeDog, 5000)
})

function changeDog (){
    document.querySelector(".badge2").style.display = "none"
    document.querySelector(".badge2").classList.remove("badge-nope")
    document.querySelector(".badge1").classList.remove("badge-like")
    document.querySelector(".badge1").style.display = "none"
    if(currentDog == dogs.length - 1){
       currentDog = -1
    }
    getNewDog()
}

document.querySelector(".btnGreen").addEventListener("click", ()=>{
    document.querySelector(".badge1").style.display = "block"
    document.querySelector(".badge1").classList.add("badge-like")
    dogLoveActivated ()
})

let photo = true

function dogLoveActivated (){
    if(photo == true){
        photo = false
        document.querySelector(".main-photo").src = "https://media0.giphy.com/media/M90mJvfWfd5mbUuULX/giphy.gif?cid=790b7611ee6d5a9c1b244b2b4d10076c7ff648e08a0c87a8&rid=giphy.gif&ct=g"
    } else if(photo==false){
        photo = true
        document.querySelector(".main-photo").src = dogs[currentDog].avatar
    }
}

function render() {
document.querySelector(".container").innerHTML = dogPage.getDogInfo();
}


function getNewDog(){
    currentDog += 1
    dogPage = new Dog(dogs[currentDog])
    render()
    buttonEffect()
}

function buttonEffect(){
document.querySelector(".btnRed").addEventListener("mouseover", ()=>{
document.querySelector(".redeffect").classList.add('red')
});

document.querySelector(".btnRed").addEventListener("mouseout", ()=>{
    document.querySelector(".redeffect").classList.remove('red')
});

document.querySelector(".btnGreen").addEventListener("mouseover", ()=>{
    document.querySelector(".greeneffect").classList.add('green')
});

document.querySelector(".btnGreen").addEventListener("mouseout", ()=>{
    document.querySelector(".greeneffect").classList.remove('green')
});
}
buttonEffect()







// const navLogo = document.querySelector(".nav-logo")
// let photo = true
// navLogo.addEventListener("click", ()=>{
//     if(photo == true){
//         photo = false
//         document.querySelector(".main-text").style.color = "black";
//         document.querySelector(".main-photo").src = "https://media0.giphy.com/media/M90mJvfWfd5mbUuULX/giphy.gif?cid=790b7611ee6d5a9c1b244b2b4d10076c7ff648e08a0c87a8&rid=giphy.gif&ct=g";
//         } else if (photo == false){
//             photo = true
//             document.querySelector(".main-text").style.color = "white";
//             document.querySelector(".main-photo").src = "images/dog-teddy.jpg";
//         }
// })
