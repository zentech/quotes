window.onload = function() { 
  //variables
  var index; //keeping track of quote index in array
  var quoteList = [];
  var quoteText = document.getElementById("content")
  var quoteAuthor = document.getElementById("author")
  var getQuoteBtn = document.getElementById("getMessage");
  var socialBtns = document.getElementById("buttons");
  var backBtn = document.getElementById("backBtn");
  var forwardBtn = document.getElementById("forwardBtn");
  var twitterBtn = document.getElementById("twitter");
  var quoteUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

  //event listener get new quote
  getQuoteBtn.addEventListener("click", getQuote);
  //event listener previous quote (backward arrow)
  backBtn.addEventListener("click", getPrevQuote);
  //event listener for moving forward (next quote)
  forwardBtn.addEventListener("click", getNextQuote);
  // //twitter event listener
  twitterBtn.addEventListener("click", postTweet);

  //function getQuote
  function getQuote() {
    $.getJSON(quoteUrl, function(json) {   
      // console.log(json.quoteText +"\n"+ json.quoteAuthor);    
      //adding quote to quote json variable
      var quote = {
        "quote": json.quoteText, 
        "author": json.quoteAuthor
      };       
      console.log(quote.quote +" \n"+quote.author);    
      //adding json quote to array
      quoteList.push(quote);
      (quoteList.length == 1) ? index = 0 : index++;
      quoteText.innerHTML = quote.quote;
      quoteAuthor.innerHTML = `-- ${quote.author}`;
      socialBtns.style.display = "inline";
    });   
  }

  //previous quote function
  function getPrevQuote() {
    if(index > 0) {
      index--;
      setQuote();
    } 
    else {
      alert("You reached first quoute");
    }   
  }

  //next quote function
  function getNextQuote() {
    if(index < quoteList.length-1) {
      index++;
      setQuote();
    }
    else {
      alert("Press \"Get quote!\"");
    }    
    
  }

  //display quote to html
  function setQuote() {
    quoteText.innerHTML = quoteList[index].quote;
    quoteAuthor.innerHTML = "-- "+quoteList[index].author;
  }

  //post to twitter function
  function postTweet() {
    /*preparing href link for twitter button*/
    var quot = 'https://twitter.com/intent/tweet?text='+ json.quoteText + " "+json.quoteAuthor;
    $(".btn-twitter").attr("href", quot);
  }

}

      