var arr=[
    {name:"Aj Bhi 2",image:"https://i.pinimg.com/736x/23/b9/c2/23b9c2c61342fb33e1ee1f486b5ac801.jpg",
        url:"Aaj Bhi 2(KoshalWorld.Com).mp3"
    },
    {name:"Mitti Di khusbu",image:"https://i.pinimg.com/736x/37/a2/7a/37a27a6d616d41b35fdb56a22cf39b86.jpg",
        url:"mitti.mp3"
    },
    {name:"Ei Brishti tomay dilam",image:"https://i.pinimg.com/736x/e1/f7/18/e1f7181b35df9e8620f94192d13fdcba.jpg",
        url:"srikanta.mp3"
    },
    {name:"Pal Pal dil k pass",image:"https://i.pinimg.com/736x/93/9c/36/939c36e2d7475dc583feb4055c8b535f.jpg",
        url:"palpal.mp3"
    },
    {name:"Tum Hi ho",image:"https://i.pinimg.com/736x/21/ed/af/21edaf324107cfb6c13a570ebf357099.jpg",
        url:"tum.mp3"
    }

]
var box=document.querySelector(".music-container");
var img = document.querySelector(".left img")
var play = document.querySelector(".play")
var backward = document.querySelector(".backward")
var forward = document.querySelector(".forward")
var selected=0
var audio=new Audio;
function addsongs(){
    var add=""
arr.forEach(function(element,index){
    add+=`<div class="music-box" id=${index}>
                  <div class="part1">
                    <img src="${element.image}" alt="">
                    <h6>${element.name}</h6>
                    </div>
                </div>`
})
      box.innerHTML=add;
      audio.src=arr[selected].url
      let mlink=arr[selected].image
      img.setAttribute("src",mlink)
      
}
var flag = 0
//here we can see the part of hoisting
function changesong(){
    box.addEventListener("click", function (dets) {
        selected=dets.target.id
        addsongs()
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1
        audio.play()
     })
}


function playsong(){
    play.addEventListener("click", function () {    
        if (flag == 0) {
            play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
            // addsongs()
            audio.play()
            flag = 1
        } else {
            play.innerHTML = `<i class="ri-play-mini-fill"></i>`
            // addsongs()
            audio.pause()
            flag = 0
        }
    })
}
function backforw(){
    forward.addEventListener("click", function () {
        if (selected < arr.length - 1) {
            selected++
            addsongs()
            audio.play()
        }
    })
    backward.addEventListener("click", function () {
        if (selected > 0) {
            selected--
            addsongs()
            audio.play()
        }
    })
}

backforw()
changesong()
playsong()
addsongs()



