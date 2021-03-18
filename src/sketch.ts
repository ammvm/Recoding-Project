// -------------------
//  Parameters and UI
// -------------------

// @ts-nocheck

const gui = new dat.GUI()
const params = {
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    noFill()
    background(229, 224, 205)
    beginShape()
    let x = width/2
    let y = height
    const step = 100
    for (let i = 0; i < 10; i++) {
        vertex(x, y)
        if (i % 4 < 2) {
            x += step
        }
        else {
            x -= step
        }
        if (i % 3 < 2) {
            y -= step
        }
        else {
            y += step
        }
    }
    endShape()
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas(500, 500)
    //slider = createSlider(0, 2 * PI, PI / 4, 0.01)
    //slider.position(10, height);
}

function windowResized() {
    p6_ResizeCanvas()
}