$(document).ready(function () {

  alert("Choose between Simple Color and Hex Color, then click the button ;)");

  $("#simpleColor").click(function () {
    $("#btn1").removeClass("d-none");
    $("#simpleColor").addClass("text-primary");
    $("#hexColor").removeClass("text-primary");
    if (!$("#btn2").hasClass("d-none")) {
      $("#btn2").addClass("d-none");
    } else {
      return;
    }
  });

  $("#hexColor").click(function () {
    $("#btn2").removeClass("d-none");
    $("#hexColor").addClass("text-primary");
    $("#simpleColor").removeClass("text-primary");
    if (!$("#btn1").hasClass("d-none")) {
      $("#btn1").addClass("d-none");
    } else {
      return;
    }
  });

  $("#btn1").click(function () {
    var randomColor = getRandomColor()
    $("body").css("background-color", randomColor);
  });


  $("#btn2").click(function () {
    var randomColor = getRandomColor()
    $("body").css("background-color", getRandomHexColor);
  });


  function getRandomHexColor() {
    var letters = "0123456789ABCDEF"
    var hexColor = "#"
    for (let i = 0; i < 6; i++) {
      hexColor += letters[Math.floor(Math.random() * 16)];
    }
    $("#color").text(hexColor);
    return hexColor;
  }

  function getRandomColor() {
    var colors = ['red', 'green', 'blue', 'white', 'black', 'yellow', 'purple'];
    var color = colors[Math.floor(Math.random() * 7)]
    $("#color").text(color);
    return color;
  }


});

