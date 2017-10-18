
  $(document).ready(function(){
  var randomQuote;
  
  var randomAuthor;
  
  getQuote();
  function getQuote(){

    var backgroundColors = ["rgb(255, 204, 255)", "rgb(255, 235, 204)", "rgb(204, 255, 204)", "rgb(204, 224, 255)"];
    var boxColors = ["rgb(255, 51, 255)","rgb(255, 153, 0)", "rgb(0, 204, 0)", "rgb(26, 117, 255)"];
    var randomNum = Math.floor(Math.random() * backgroundColors.length);
    var randomBackgroundColor = backgroundColors[randomNum];
    var randomBoxColor = boxColors[randomNum];
    
    
    
    
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      randomQuote = data.quoteText;
      randomAuthor = "--"+data.quoteAuthor;
      $(".quote").html(randomQuote + "<br></br>");
      
      $(".author").html(randomAuthor);
      $("body").css("background-color", randomBackgroundColor);
      $(".quotes").css("background-color", randomBoxColor);
      
      
    });
   
    
    
    
  }
  
  $("#newQuote").on("click", function(){
    getQuote();
  });
  
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " "+ randomAuthor);
  });
});

