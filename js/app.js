
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    // start a new game by clicking "New Game" button
    $(document).on("click", ".new", function(){
      location.reload(true);
    });

    // creates a random # 1 - 100
    function getRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
    }

    // stores the random number
    var randomNumber = getRandomNumber();
    $("#guessButton").click(function() {
      var userGuess = $("#feedback").empty();

      // checks to see how close user is to random #
      if (userGuess < randomNumber) {
        // alert("Too low");
        $("#feedback").html("Too low");
      } else if (userGuess > randomNumber) {
        // alert("Too high");
        $("#feedback").html("Too high");
      } else {
        // alert("Just right!!!");
        $("#feedback").html("Just right!!!");
      }

    // increments count when button clicked
    var count = 0;
    $("#guessButton").click(function() {
      count++;
      $("#count").html(count);
    });

  });
});


