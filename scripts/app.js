$(document).ready(function() {
  var lastNum = null;
  var randomNum, randomColor;
  var randomQuote = "Random Quote Generator";
  var randomAuthor = "-Author";
  
  function getQuote() {
    var quotes = ["Hello World!", "This isnt even my final form!", "Don't work for money, make money work for you.", "Work, work.", "An expert in anything, was once just a beginner.", "C's get degrees, D's get academic suspension."];
    var authors = ["-Every CS Prof", "-Freiza", "-Robert Kiyosaki", "-Orc Peon", "-Some wise guy", "-Every CS student"];
    var colors = ["#375D96", "#5BC7AB", "#203F49", "#DE7921", "#742907", "#739E3C"];

    randomNum = Math.floor(Math.random() * quotes.length);
    if(randomNum === lastNum) {
      getQuote();
    } else {
      lastNum = randomNum;
    }
    
    randomQuote = quotes[randomNum];
    randomAuthor = authors[randomNum];
    randomColor = colors[randomNum];

    $(".quote").fadeIn(1000, function() {
      $(this).text(randomQuote);
    });
    $(".author").fadeIn(1000, function() {
      $(this).text(randomAuthor);
    });
    $("body, .button").animate({
      backgroundColor: randomColor
    }, 1000);
    $("span").animate({
      color: randomColor
    }, 1000);
  };

  $("#new-quote").click(function() {
    getQuote();
  });
  
  $("#twitter").click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + randomAuthor);
  });
});