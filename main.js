function preload(){
    classifier=ml5.imageClassifier("DoodleNet")
}



function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    background("white")
canvas.mouseReleased(classify_canvas)

}

function clear_canvas(){
    background("white")
}


function classify_canvas(){
    classifier.classify(canvas,got_results)
}


function draw(){
    strokeWeight(13)
    stroke(0)
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}


function got_results(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results)
}
}