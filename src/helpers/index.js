const numberOfImages = 46;

function returnRandomImage() {
   const num = (Math.random() * (numberOfImages - 0 + 1) ) << 0;
   return "00" + num + ".jpg";
}

export default { numberOfImages, returnRandomImage };