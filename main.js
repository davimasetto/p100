const SpeechRecognition = webkitSpeechRecognition;
var Content ;
var recognition = new SpeechRecognition;


function start(){

    recognition.start()
    
}

recognition.onresult = function(e) {
    console.log(e);
    const fala =  e.results[0][0].trancript

    console.log();
    txtFala.value = fala;

    //webcam.attach(camera);

    if (fala == "tire minha selfie") {
        console.log("tirando minha selfie...")
        Webcam.attach(camera);
        txtFala.blur();
        sepak();
        //executar função intervalo(nome da função, intervalo(ms)//
        setTimeout(takeSelfie, 5000);
    }
}
setTimeout(function() {
    imgId= selfie2;
    speakData = "Tirando a fotinha em 15 secs";
    takeSelfie();
}, 15000);

setTimeout(function() {
    imgId= selfie3;

    takeSelfie();
}, 15000);

function takeSelfie() {
    Webcam.snap(function (datURI) {
        if(imgId=="selfie1"){
            document.getElementById("result1").innerHTML = ' <img = id="selfie1" src="'+data_uri+'"/>';
        }
        
        if(imgId=="selfie2"){
            document.getElementById("result1").innerHTML = ' <img = id="selfie2" src="'+data_uri+'"/>';
        }
         if(imgId=="selfie3"){
            document.getElementById("result1").innerHTML = ' <img = id="selfie3" src="'+data_uri+'"/>';
        }
    });
}

function save() {
    const link = document.getElementById("link");
    const imagem = document.getElementById("imagemSelfie").src;
    link.href = imagem;
    link.click()
}