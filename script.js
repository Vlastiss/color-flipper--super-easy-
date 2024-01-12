$(document).ready(function () {
  $("#btn").click(function(){
   var randomColor = getRandomColor()
   $("body").css("background-color", randomColor);
  });

  function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    $("#color").text(color);
    return color;
  }
});

