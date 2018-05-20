$(document).ready(function() { 
  var socialBtns = document.getElementById("buttons");
  socialBtns.style.display = "none";
  /*getting random quote on button click*/
  $('#getMessage').on("click", function() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(json) {      
      console.log(json.quoteText);
      console.log(json.quoteAuthor);
      // var quoteArr = json.contents.quotes[0])
     $("#content").html('\"'+json.quoteText+'\"');
    $("#author").html("--"+json.quoteAuthor);     
      socialBtns.style.display = "inline";
      /*preparing href link for twitter button*/
      var quot = 'https://twitter.com/intent/tweet?text='+ json.quoteText + " "+json.quoteAuthor;
      $(".btn-twitter").attr("href", quot);

});    
  });  
});