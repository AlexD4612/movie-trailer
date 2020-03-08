console.log('OK');
const player = new Plyr('#player', {
  // Turn on/off conrols. Array data type
  controls: ['play-large'],

  // Turn on keyboard. Boolean data type
  keyboard: { focused: true, global: true },

  // Increase/Decrease seek time. Integer data type
  seekTime: 15,


});



document.querySelector("img#max1.movie").addEventListener("click", change1); // When mad max clicked
document.querySelector("img#max2.movie").addEventListener("click", change2); // When road warrior clicked
document.querySelector("img#max3.movie").addEventListener("click", change3); // When thunderdome clicked
document.querySelector("img#max4.movie").addEventListener("click", change4); // When fury road clicked

//Variables to change pictures and names
let title = document.querySelector("header h2");
let cast1Char = document.querySelector("figure#cast1 h4");
let cast3Char = document.querySelector("figure#cast3 h4");
let cast3Img = document.querySelector("figure#cast3 img");
let cast2Img = document.querySelector("figure#cast2 img");
let cast1Img = document.querySelector("figure#cast1 img");
let cast1Actor = document.querySelector("figure#cast1 h3");
let cast3Actor = document.querySelector("figure#cast3 h3");
let tagline = document.querySelector("#slogan");
let cast2Actor = document.querySelector("figure#cast2 h3");

//Changes when Mad Max is clicked
function change1() {
  player.source = { //Changes video source
    type: 'video',
    sources: [
      {
        src: 'caHnaRq8Qlg',
        provider: 'youtube',
      },
    ],
  };
  title.innerHTML = "Mad Max";
  cast1Char.innerHTML = "Toecutter";
  cast1Actor.innerHTML = "Hugh Keayes Byrne"
  cast3Char.innerHTML = "Jessie Rockatansky";
  cast3Img.src = "https://previews.agefotostock.com/previewimage/medibigoff/ddced8c9498d13d2bfa1cfb52bb7f0f7/zuj-19790412-clg-g90-054.webp"
  cast2Img.src = "https://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2016/05/anglo_2000x1125_melgibson_madmax.jpg"
  cast1Img.src = "https://gamepedia.cursecdn.com/madmax_gamepedia/7/7e/Toecutterbw2.jpg"
  cast3Actor.innerHTML = "Joanne Samuel";
  cast2Actor.innerHTML = "Mel Gibson";

  gsap.to("img#max1", { opacity: .5, duration: .5 }); //Fade effect on currently selected
  gsap.to("img#max2", { opacity: 1, duration: .5 });
  gsap.to("img#max3", { opacity: 1, duration: .5 });
  gsap.to("img#max4", { opacity: 1, duration: .5 });
}

//Changes when Road Warrior is clicked
function change2() {
 
  player.source = {
    type: 'video',
    sources: [
      {
        src: 'UlwtiOyaoo0',
        provider: 'youtube',
      },
    ],
  };

  title.innerHTML = "Mad Max The Road Warrior";
  cast1Char.innerHTML = "Papagallo";
  cast1Actor.innerHTML = "Mike Preston";
  cast3Char.innerHTML = "The Humungus";
  cast3Actor.innerHTML = "Kjell Nilsson";
  cast3Img.src = "https://patricksponaugle.files.wordpress.com/2015/09/road-warrior-3.png"
  cast2Img.src = "https://m.media-amazon.com/images/M/MV5BNmM3NDgxM2ItYWYwMi00OWZmLTk5ZGYtYjcwNDM4MDhmMzgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY1000_CR0,0,856,1000_AL_.jpg"
  cast1Img.src = "https://patricksponaugle.files.wordpress.com/2015/09/roadwarrior_063pyxurz.jpg?w=768&h=582"
  tagline.innerHTML = "Ruthless... Savage... Spectacular"
  gsap.to("img#max1", { opacity: 1, duration: .5 });
  gsap.to("img#max2", { opacity: .5, duration: .5 });
  gsap.to("img#max3", { opacity: 1, duration: .5 });
  gsap.to("img#max4", { opacity: 1, duration: .5 });
}

//Changes when Beyond Thunderdome is clicked
function change3() {
 
  player.source = {
    type: 'video',
    sources: [
      {
        src: '9JKZKjFjHDM',
        provider: 'youtube',
      },
    ],
  };
  
  title.innerHTML = "Mad Max Beyond Thunderdome";
  cast2Actor.innerHTML = "Mel Gibson";
  cast3Actor.innerHTML = "Tina turner";
  cast1Actor.innerHTML = "Frank Thring";
  cast1Char.innerHTML = "The Collector";
  cast3Char.innerHTML = "Aunt Entity";
  cast1Img.src = "https://vignette.wikia.nocookie.net/roadwarrior/images/5/52/The_collector.png/revision/latest/scale-to-width-down/340?cb=20131120224328"
  cast2Img.src = "https://i.pinimg.com/originals/76/3f/f4/763ff4ed6d966d122ed97f1cfe0d7486.jpg"
  cast3Img.src = "https://vignette.wikia.nocookie.net/villains/images/6/6f/Auntyentity.png/revision/latest/top-crop/width/360/height/450?cb=20100415171904"
  tagline.innerHTML = " Two men enter. One man leaves.";
  gsap.to("img#max1", { opacity: 1, duration: .5 });
  gsap.to("img#max2", { opacity: 1, duration: .5 });
  gsap.to("img#max3", { opacity: .5, duration: .5 });
  gsap.to("img#max4", { opacity: 1, duration: .5 });
}

//Changes when Fury Road clicked, this is default
function change4() {
  
  player.source = {
    type: 'video',
    sources: [
      {
        src: 'hEJnMQG9ev8',
        provider: 'youtube',
      },
    ],
  };
  
  title.innerHTML = "Mad Max Fury Road";
  cast2Actor.innerHTML = "Tom Hardy";
  cast1Char.innerHTML = "Immortan Joe";
  cast1Actor.innerHTML = "Hugh Keayes Byrne";
  cast3Char.innerHTML = "Imperator Furiousa";
  cast3Actor.innerHTML = "Charlize Theron";
  cast1Img.src = "assets/joe.jpg";
  cast2Img.src = "assets/madmax.jpg";
  cast3Img.src = "assets/furiosa.jpg";
  tagline.innerHTML = "The Future Belongs to the Mad";
  gsap.to("img#max1", { opacity: 1, duration: .5 });
  gsap.to("img#max2", { opacity: 1, duration: .5 });
  gsap.to("img#max3", { opacity: 1, duration: .5 });
  gsap.to("img#max4", { opacity: .5, duration: .5 });
}
