var loadFile = function(event) {
  var imgicon = document.getElementById('resumeImgIcon');
  var output = document.getElementById('resumeImgOutput');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
    imgicon.style.display = "none";
    resumeImgOutput.style.display = "block";
  }
};

