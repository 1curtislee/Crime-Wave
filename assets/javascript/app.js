var myStorage = window.localStorage;
function onBodyLoad(){
  $("#ex1").text(getEx1);
  $("#ex2").text(getEx2);
  var getEx1 = localStorage.getItem('cur1');
  var getEx2 = localStorage.getItem('cur2');
  
  const time = document.getElementById('date');
  const now = moment();
  const readable = now.format('Y-MM-D');
  time.placeholder = readable;
}
$("#searchBtn").on("click",function(){
  var cur1 = $("#cur1").val();
  var cur2 = $("#cur2").val();
  var date = $("#date").val().trim();
  if (date === ''){
    date = moment().format('Y-MM-D')
  }
  var queryURL = "https://api.exchangeratesapi.io/" + date + "?base=" + cur1 + "&symbols=" + cur1 + "," + cur2;
  $.ajax({
    url:queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(response);
      $("#ex1").text(cur1 + ": " + response.rates[cur1])
      $("#ex2").text(cur2 + ": " + response.rates[cur2])
      localStorage.setItem("cur1",JSON.stringify(response.rates[cur1]));
      localStorage.setItem("cur2",JSON.stringify(response.rates[cur2]));
  })
})