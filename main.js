Status = "";
objects = [];
object_name = 0;

function setup(){
     canvas = createCanvas(360,360);
     canvas.center();

     video = createCapture();
     video.hide();
}


function start(){
    object = ml5.objectDetector("cocossd", modelLoded);
    document.getElementById("status").innerHTML = "status : Detecting objects";
    object_name = document.getElementById("Object_name").value;
}

function draw(){
    image(video, 0, 0, 360, 360);
    
}

function gotresult(error, results) {
    if (error) {
         console.error(error);
    }
    else {
         console.log(results);
         objects = results;
    }
}