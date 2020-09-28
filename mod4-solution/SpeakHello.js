// Module 4 Assignment Instructions. Alejandro González Almazán 

(function(window){

var speakWord = "Hello";
var helloSpeaker = {};

helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);

