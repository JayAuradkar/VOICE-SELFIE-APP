
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function webcam_on(){
    document.getElementById("text_box").innerHTML = ""
    recognition.start()
}
recognition.onresult = function run(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("text_box").innerHTML = content
    speak()
    Webcam.attach("#camera")
}
function speak(){
    var synth=window.speechSynthesis;
    speakdata= document.getElementById("text_box").value;
    utterthis = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utterthis)
}
Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
})

