
// it can be made as much intelligent as you want by writing some if else cases

console.log("let's write our javascript");

let btn = document.querySelector(".btn");
let content = document.querySelector(".content");
let img = document.querySelector(".voice");

function speak(text) {
  let textSpeak = new SpeechSynthesisUtterance(text);
  textSpeak.rate = 1;
  textSpeak.pitch = 1;
  textSpeak.volume = 1;
  text.lang = "hi-US";
  window.speechSynthesis.speak(textSpeak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Hello Good Morning");
  } else if (hours >= 12 && hours < 16) {
    speak("Hello Good afternoon");
  } else {
    speak(" Hello Good evening");
  }
}

// window.addEventListener("load", () => {
//   wishMe();
// });

let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript; // Changed from result to results
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  img.style.display = "block"
});

function takeCommand(message) {
  btn.style.display = "block";
   img.style.display = "none"
  if (message.includes("hello") || message.includes("hey")) {
    speak("hello sir, What can I help you?");
  }
  else if(message.includes("who are you")) {
    speak("I am RaaOne created by Akshay")
  }
  else if(message.includes("your name")) {
    speak("I am RaaOne created by Akshay")
  }
  else if(message.includes("open youtube")){
    speak("opening youtube")
    window.open("https://www.youtube.com")
  }
  else if(message.includes("open instagram")){
    speak("opening instagram")
    window.open("https://www.instagram.com/")
  }
  else if(message.includes("open google")){
    speak("opening google")
    window.open("https://www.google.com")
  }
  else if(message.includes("open facebook")){
    speak("opening facebook")
    window.open("https://www.facebook.com")
  }
  else if(message.includes("open spotify")){
    speak("opening spotify")
    window.open("https://open.spotify.com/")
  }
  else if(message.includes("play music")){
    speak("playing music")
    window.open("https://open.spotify.com/")
  }
  else if(message.includes("open calculator")){
    speak("opening calculator")
    window.open("calculator://")
  }
  else if(message.includes("open notepad")){
    speak("opening notepad")
    window.open("notepad://")
  }
  else if(message.includes("time")){
   let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
   speak(time)
  }
  else if(message.includes("date")){
   let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
   speak(date)
  }
  else{
    let finalText = "this is what i found on internet regarding" + message.replace("raaone","") || message.replace("ra-one","") ||message.replace("raavan","") || message.replace("ravan","")
    speak(`this is what i found on internet regarding ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
  }
}
