
function createCanvas() {
  // create canvass element
  const canvas = document.createElement('canvas');
  canvas.width = 700;
  canvas.height = 500;
  canvas.id = 'canvas';
  canvas.style.backgroundColor="pink"
  // find parent
  const parent = document.getElementById('Render');

  // append to dom

  parent.appendChild(canvas);
  return canvas;
}

function loadImage(src) {
  return new Promise(resolve => {
    const image = new Image(640,480);

    image.width = 640;
    image.height = 480;
    image.crossOrigin = "anonymous";
    image.src = src;

    image.addEventListener("load", function(){
      resolve(image);
    });
  }) 
}

const useCanvas = () => {
  return {
    createCanvas, loadImage
  }
}



export default useCanvas;
