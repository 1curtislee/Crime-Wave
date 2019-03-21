

function onBodyLoad(){
  const time = document.getElementById('time');
  const now = moment();
  const readable = now.format('Y-MM-D');
  console.log(readable);
  console.log(time.placeholder);
  time.value = readable;
 
//  time.innerText = readable;

 // time.textContent = readable;

//function updateTime(){
  //const now = moment();
  //const readable = now.format('Y/MM/D');
 // time.textContent = readable;

//}

     //setInterval(updateTime,1000);
    //updateTime();

}

$("#searchBtn").on("click",function(){
  console.log("search")

  var cur1 = $("#cur1").val(); /*currency 1 from search input*/
  var cur2 = $("#cur2").val(); /*currency 2 from search input*/
  var date = $("#date").val().trim(); /*date from search input, yyyy-mm-dd format*/
  var queryURL = "https://api.exchangeratesapi.io/" + date + "?base=" + cur1 + "&symbols=" + cur1 + "," + cur2;

  $.ajax({
    url:queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response);
      //console.log(queryURL);
      $("#ex1").text(cur1 + ": " + response.rates[cur1]);
      $("#ex2").text(cur2 + ": " + response.rates[cur2]);
  })
})

/*
'enter' event runs search/function
date auto run as today, or run with historical date
error messages
*/
