/**
Asset => 
JS audio using howlerJS:
https://howlerjs.com/
Apple Font: 
https://sf.abarba.me/SF-UI-Text-UltrathinItalic.otf ===https://gist.github.com/AndrewBarba/2c0f6612ceef30f5f55d===
iPhone signal bar: https://icons8.com/icon/set/signal/all
iPhone framework: https://preview.ibb.co/dGjspw/Untitled_1.png
**/

var d = new Date();
var dt = d.getDate();
var h = d.getHours();
var m = d.getMinutes();

function aZero(n) {
  return n.toString().length == 1 ?  n = '0' + n : n;
}

(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();
var day = d.getDayName();
var month = d.getMonthName();

var x = aZero(h)+":"+aZero(m);
var y = day+", "+month+" "+dt;
var o = "AT&T";

document.getElementById("clock-text").innerHTML = x;
document.getElementById("date-text").innerHTML = y;
document.getElementById("temp-notch").innerHTML = o;

var message = document.getElementById('message-overlay');
var mw = document.getElementById('merrywrap');
var audio = new Howl({
  src: ['https://s0.vocaroo.com/media/download_temp/Vocaroo_s0E0FP15QAsj.mp3'],
  volume: 1
});
var mcSong = new Howl({
  src: ['./img/video-1634476220 (online-audio-converter.com).mp3'],
  volume: 0.5,
  loop: true,
});

// <!-- GIFT BOX SOURCE CODE: https://tympanus.net/codrops/2013/12/24/merry-christmas-with-a-bursting-gift-box/ -->

function giftAnimation(){
  var merrywrap=document.getElementById("merrywrap");
  var box=merrywrap.getElementsByClassName("giftbox")[0];
  var step=1;
  var stepMinutes=[2000,2000,1000,1000];
  function init(){
          box.addEventListener("click",openBox,false);
  }
  function stepClass(step){
    merrywrap.className='merrywrap';
    merrywrap.className='merrywrap step-'+step;
  }
  function openBox(){
    if(step===1){
      box.removeEventListener("click",openBox,false); 
    }  
    stepClass(step); 
    if(step===3){ 
    } 
    if(step===4){ 
       return;
    }     
    setTimeout(openBox,stepMinutes[step-1]);
    step++;  
  }
   
  init();
 
}

// =====================

$(document).ready(function(){
  setTimeout(function() {
    audio.play();
    message.className += ' animated zoomIn';
    message.style.visibility = "visible";
  }, 2000);
  
  $("#message-overlay").click(function() {
    $("#lock-icon").remove();
    $("#clock-text-overlay").remove();
    $("#date-overlay").remove();
    $("#message-overlay").remove();
    $("#touch-overlay").remove();
    setTimeout(() => {
      mcSong.play();
      
    }, 2000);
    $(".content").css('background-image', 'url(https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/91393919_656745315151426_534799054136147968_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=RTJPgB7wPmIAX_2-Cle&_nc_ht=scontent.fsgn2-6.fna&oh=e88d66d70cddfb4d3592e0378a1da7fb&oe=6191E2E9)');
    $(".content").css('background-position', 'center');
    $(".content").css('background-size', 'cover');
    
    document.getElementById("temp-notch").innerHTML = x;
    mw.style.visibility = "visible";
    giftAnimation();
  });
})