var myStorage = window.localStorage;

var getEx1 = localStorage.getItem('cur1');
var getEx2 = localStorage.getItem('cur2');
var getCur1Lable = localStorage.getItem('cur1Lable');
var getCur2Lable = localStorage.getItem('cur2Lable');
function onBodyLoad(){
  $("#ex2").text(getCur2Lable + ": " + getEx2);
  $("#ex1").text(getCur1Lable + ": " + getEx1);


  const time = document.getElementById('date');
  const now = moment();
  const readable = now.format('Y-MM-D');
  console.log(readable);
  console.log(time.placeholder);
  time.placeholder = readable;  
}

  $("#searchBtn").on("click",function(){
    console.log("search")

    var cur1 = $("#cur1").val(); /*currency 1 from search input*/
    var cur2 = $("#cur2").val(); /*currency 2 from search input*/
    var date = $("#date").val().trim(); /*date from search input, yyyy-mm-dd format*/

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
        localStorage.setItem("cur1Lable", JSON.stringify(cur1));
        localStorage.setItem("cur2Lable", JSON.stringify(cur2));
      })

    })