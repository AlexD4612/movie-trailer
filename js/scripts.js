console.log('OK');
const player1 = new Plyr('#player', {
  // Turn on/off conrols. Array data type
  controls : [ 'play-large'],
  
  // Turn on keyboard. Boolean data type
  keyboard : { focused: true, global: true },
  
  // Increase/Decrease seek time. Integer data type
  seekTime : 15,
  

});

function fun (){
  console.log("test");
  alert("test");
}



document.querySelector("img#max1.movie").addEventListener("click",change1); // When mad max clicked
document.querySelector("img#max2.movie").addEventListener("click",change2); // when road warrior clicked
document.querySelector("img#max3.movie").addEventListener("click",change3); // when thunderdome clicked
document.querySelector("img#max4.movie").addEventListener("click",change4); // when fury road clicked

function change1(){ //Changes whe Mad Max is clicked
  document.querySelector("figure#cast1 h4").innerHTML="Toecutter";
  document.querySelector("figure#cast3 h4").innerHTML="Jessie Rockatansky";
  document.querySelector("figure#cast3 img").src ="https://previews.agefotostock.com/previewimage/medibigoff/ddced8c9498d13d2bfa1cfb52bb7f0f7/zuj-19790412-clg-g90-054.webp"
  document.querySelector("figure#cast2 img").src ="https://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2016/05/anglo_2000x1125_melgibson_madmax.jpg"
  document.querySelector("figure#cast1 img").src ="https://gamepedia.cursecdn.com/madmax_gamepedia/7/7e/Toecutterbw2.jpg"
  gsap.to("img#max1",{opacity:.5,duration:.5});
  gsap.to("img#max2",{opacity:1,duration:.5});
  gsap.to("img#max3",{opacity:1,duration:.5});
  gsap.to("img#max4",{opacity:1,duration:.5});
}

function change2(){ //Changes when Road Warrior is clicked
  document.querySelector("section.trailer h2.title").innerHTML="Mad Max The Road Warrior";
  document.querySelector("figure#cast1 h4").innerHTML="Papagallo";
  document.querySelector("figure#cast1 h3").innerHTML="Mike Preston";
  document.querySelector("figure#cast3 h4").innerHTML="The Humungus";
  document.querySelector("figure#cast3 h3").innerHTML="Kjell Nilsson";
  document.querySelector("figure#cast3 img").src ="https://patricksponaugle.files.wordpress.com/2015/09/road-warrior-3.png"
  document.querySelector("figure#cast2 img").src ="https://m.media-amazon.com/images/M/MV5BNmM3NDgxM2ItYWYwMi00OWZmLTk5ZGYtYjcwNDM4MDhmMzgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY1000_CR0,0,856,1000_AL_.jpg"
  document.querySelector("figure#cast1 img").src ="https://patricksponaugle.files.wordpress.com/2015/09/roadwarrior_063pyxurz.jpg?w=768&h=582"
  document.querySelector("#slogan").innerHTML="Ruthless... Savage... Spectacular"
  gsap.to("img#max1",{opacity:1,duration:.5});
  gsap.to("img#max2",{opacity:.5,duration:.5});
  gsap.to("img#max3",{opacity:1,duration:.5});
  gsap.to("img#max4",{opacity:1,duration:.5});
}

function change3(){ //Changes when Beyond Thunderdome is clicked
  document.querySelector("section.trailer h2.title").innerHTML="Mad Max Beyond Thunderdome";
  document.querySelector("figure#cast2 h3").innerHTML="Mel Gibson";
  document.querySelector("figure#cast3 h3").innerHTML="Tina turner";
  document.querySelector("figure#cast1 h3").innerHTML="Frank Thring";
  document.querySelector("figure#cast1 h4").innerHTML="The Collector";
  document.querySelector("figure#cast3 h4").innerHTML="Aunt Entity";
  document.querySelector("figure#cast1 img").src ="https://vignette.wikia.nocookie.net/roadwarrior/images/5/52/The_collector.png/revision/latest/scale-to-width-down/340?cb=20131120224328"
  document.querySelector("figure#cast2 img").src ="https://i.pinimg.com/originals/76/3f/f4/763ff4ed6d966d122ed97f1cfe0d7486.jpg"
  document.querySelector("figure#cast3 img").src ="https://vignette.wikia.nocookie.net/villains/images/6/6f/Auntyentity.png/revision/latest/top-crop/width/360/height/450?cb=20100415171904"
 document.querySelector("#slogan").innerHTML=" Two men enter. One man leaves.";
  gsap.to("img#max1",{opacity:1,duration:.5});
  gsap.to("img#max2",{opacity:1,duration:.5});
  gsap.to("img#max3",{opacity:.5,duration:.5});
  gsap.to("img#max4",{opacity:1,duration:.5});
}

function change4(){
  document.querySelector("section.trailer h2.title").innerHTML="Mad Max Fury Road";
  document.querySelector("figure#cast2 h3").innerHTML="Tom Hardy";
  document.querySelector("figure#cast1 h4").innerHTML="Immortan Joe";
  document.querySelector("figure#cast1 h3").innerHTML="Hugh Keayes Byrne";
  document.querySelector("figure#cast3 h4").innerHTML="Imperator Furiousa";
  document.querySelector("figure#cast3 h3").innerHTML="Charlize Theron";
  document.querySelector("figure#cast1 img").src ="assets/joe.jpg";
  document.querySelector("figure#cast2 img").src ="assets/madmax.jpg";
  document.querySelector("figure#cast3 img").src ="assets/furiosa.jpg";
  document.querySelector("#slogan").innerHTML="The Future Belongs to the Mad";
  gsap.to("img#max1",{opacity:1,duration:.5});
  gsap.to("img#max2",{opacity:1,duration:.5});
  gsap.to("img#max3",{opacity:1,duration:.5});
  gsap.to("img#max4",{opacity:.5,duration:.5});
}

console.log(player1);

