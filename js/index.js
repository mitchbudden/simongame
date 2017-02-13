$(document).ready(function(){
  
  //count display
  var count = 0;
  //for gameOver function
  var gameOn = false;
  //lets computer know it's their turn
  var cTurn = false;
  //timeout increase ever time the computer turn increases
  var compTime = 100;
  
  //track pressed colors
  var compColor = [];
  var playerColor = [];
    //Audio Noises
  var greenSound = document.getElementById("greenAudio");
  var redSound = document.getElementById("redAudio");
  var yellowSound = document.getElementById("yellowAudio");
  var blueSound = document.getElementById("blueAudio");
  function playGreen() {
    greenSound.play();
  };
  function playRed() {
    redSound.play();
  };
  function playYellow() {
    yellowSound.play();
  };
  function playBlue() {
    blueSound.play();
  };
  
  //When computer presses a button
  function greenPressed() {       
    $("#g").removeClass("green").addClass("greenActive");
  }
  function redPressed() {
    $("#r").removeClass("red").addClass("redActive");
  } 
  function yellowPressed() {
    $("#y").removeClass("yellow").addClass("yellowActive");
  }
  function bluePressed() {
    $("#b").removeClass("blue").addClass("blueActive");
  }
  
  //Color Pressing functions
  
  function pressGreen() {
    var compGreen = setInterval(greenPressed, 100);
    playGreen();
      function normalGreen() {
        clearInterval(compGreen);
        $("#g").removeClass("greenActive").addClass("green");
      };
    var stopGreen = setTimeout(normalGreen, 1000);    
  }  
  function pressRed() {
    var compRed = setInterval(redPressed, 100);
    playRed();
      function normalRed() {
        clearInterval(compRed);
        $("#r").removeClass("redActive").addClass("red");
      };
    var stopRed = setTimeout(normalRed, 1000);  
  }
  function pressYellow() {
     var compYellow = setInterval(yellowPressed, 100);
     playYellow();
      function normalYellow() {
        clearInterval(compYellow);
        $("#y").removeClass("yellowActive").addClass("yellow");
      };
      var stopYellow = setTimeout(normalYellow, 1000);  
  }
  function pressBlue() {
     var compBlue = setInterval(bluePressed, 100); 
     playBlue();
      function normalBlue() {
        clearInterval(compBlue);
        $("#b").removeClass("blueActive").addClass("blue");
      };
     var stopBlue = setTimeout(normalBlue, 1000);  
  }
  
  //Randomize color
  function randomColor() {
    var color = 0;
    color = (Math.random()*4).toFixed();
    console.log(color);
    count++;
    $("#count").html(count);
    if (color == 1 || color == 0) {
      compColor.push("green");
      pressGreen();    
    } else if (color == 2) {
      compColor.push("red");
      pressRed();
    } else if (color == 3) {
      compColor.push("yellow");
      pressYellow();
    } else if (color == 4) {
      compColor.push("blue");
      pressBlue();
      }
    cTurn = false;
    };     

  //Computer color sequence;  
  function compSequence() {
    playerColor = [];
    compTime += 1000;
    if (cTurn === true) {
      for (var i = 0; i < compColor.length; i++) {
      var timeTrack = ([i]*1000);
      if (compColor[i] === "green") {
        setTimeout(pressGreen, timeTrack);
      } else if (compColor[i] === "red") {
        setTimeout(pressRed, timeTrack);
      } else if (compColor[i] === "yellow") {
        setTimeout(pressYellow, timeTrack);
      } else if (compColor[i] === "blue") {
        setTimeout(pressBlue, timeTrack);        
      }
    }
    setTimeout(randomColor, compTime);  
    }
  };
  
  //Inital Game Functions
  $("#count").html(count);
  $("#start").on('click', function() {
    if (gameOn === false) {
      gameOn = true;
      cTurn = true;
      randomColor(); 
    } else {
      alert("Game in progress");
    }
  });  
    
  //GameOver 
  function gameOver() {
    var stringComp = compColor.toString();
    var stringPlayer = playerColor.toString();
    if (stringComp !== stringPlayer ) {
      alert("GAME OVER! You scored " + count + " points.");
      gameOn = false;
      playerColor = [];
      compColor = [];
      count = 0;
      $("#count").html(count);
    } else if (count === 20) {
      alert("GAME OVER! YOU WIN!");
      gameOn == false;
      playerColor = [];
      compColor = [];
      count = 0;
    } else {
      gameOn == true;
    }
  }
  
  //Human Turn Functions
  $("#g").on('click', function() {
    playerColor.push('green');
    playGreen();
    if (playerColor.length >= compColor.length) {
      gameOver();
      if (gameOn == true) {
        cTurn = true;
        setTimeout(compSequence, 1000);        
       };  
    }
  })
  $("#r").on('click', function() {
    playerColor.push('red');
    playRed();
    if (playerColor.length >= compColor.length) {
      gameOver();
      if (gameOn == true) {
        cTurn = true;
        setTimeout(compSequence, 1000);
       };  
    }
  })
  $("#y").on('click', function() {
    playerColor.push('yellow');
    playYellow();
    if (playerColor.length >= compColor.length) {
      gameOver();
      if (gameOn == true) {
        cTurn = true;
        setTimeout(compSequence, 1000);
       };  
    }
  })
  $("#b").on('click', function() {
    playerColor.push('blue');
    playBlue();
    if (playerColor.length >= compColor.length) {
      gameOver();
      if (gameOn == true) {
        cTurn = true;
        setTimeout(compSequence, 1000);
       };  
    }
  })
});
