$("#searchBtn").on("click",function(){
    console.log("search")
  
    var cur1 = $("#name").val() /*currency 1 from search input*/;
    var cur2 = $("#destination").val() /*currency 2 from search input*/;
  
    var date = "2018-03-12" /*date from search input, yyyy-mm-dd format*/;
      
    var queryURL ="https://api.exchangeratesapi.io/history?start_at=" + date + "&end_at=" + date + "&base=" + cur1 + "&symbols=" + cur2
  
    $.ajax({
      url:queryURL,
      method: "GET"
      })
      .then(function(response) {
        console.log(response);
  
  
      })
  })