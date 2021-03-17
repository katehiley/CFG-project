const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to(".text", {y:"0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1.5");
tl.fromTo(".nav-div", {opacity:0}, {opacity:1, duration: 1});

var i = 0;
var images = [];
var time = 4000;

images[0]= document.createElement("img");

images[0].src = "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c0ac3afa7ea437059199fdd%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000";

images[1]= document.createElement("img");

images[1].src = "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c0abea231358e5b43390dfa%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000";

images[2]= document.createElement("img");

images[2].src = "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c0ac1af4bbe6f0f2aa19c59%2F0x0.jpg%3Ffit%3Dscale%26background%3D000000";


//document.getElementById("image-div").appendChild(images[1]);

function changeImg(){
  document.getElementById("image-div").src = images[i].src;
  
  if(i < images.length - 1){
    i++;
  } else{
    i=0;
  }
  setTimeout("changeImg()", time);
};

window.onload = changeImg; //sets function to run when page loads 

console.log("this works?")