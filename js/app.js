
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
  var count = 0;
  $("#guessButton").click(function() {
    var userGuess = $("#userGuess").val();

    // feedback logic
    var result = checkNumber(randomNumber, userGuess);
    $("#feedback").html(result);

    // count logic
    count++;
    $("#count").html(count);

    // add guess number as list
    $("ul#guessList").append("<li>" + userGuess + "</li>");

  });

  function checkNumber (randomNumber, userGuess) {
    // checks to see how close user is to random #
    var diff = Math.abs(randomNumber - userGuess);
    if ( diff > 50 ){
      return "Ice cold";
    } else if ( diff > 30 ) {
      return "Cold";
    } else if ( diff > 20) {
      return "Warm";
    } else if ( diff > 10) {
      return "Hot";
    } else if ( diff >= 1) {
      return "Very Hot";
    } else if (diff === 0) {
      return "Just right!!!";
    } else {
      return "Keep Guessing...";
    }
  }

});



