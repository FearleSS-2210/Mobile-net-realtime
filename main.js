function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modalLoaded)
}

function draw(){
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

function modalLoaded() {
  console.log("Model is loaded..")
}

function gotResult(error, results) {

  if (error) {
    console.error(error);
  }

  else {
    console.log(results);
    document.getElementById("OBJECT").innerHTML=results[0].label;
    document.getElementById("ACCURACY").innerHTML=(results[0].confidence.toFixed(2))*100+"%";
  }

}