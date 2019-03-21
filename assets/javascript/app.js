
function onBodyLoad(){
    const time = document.getElementById('time');
    const now = moment();
    const readable = now.format('Y-MM-D');
    console.log(readable);
    console.log(time.placeholder);
    time.placeholder = readable;
   
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
  
    var cur1 = $("#cur1").val() /*currency 1 from search input*/;
    var cur2 = $("#cur2").val() /*currency 2 from search input*/;
    var date = "2018-03-12" /*date from search input, yyyy-mm-dd format*/;

   // var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    //console.log(time);

    

    var queryURL ="https://api.exchangeratesapi.io/history?start_at=" + date + "&end_at=" + date + "&base=" + cur1 + "&symbols=" + cur1 + "," + cur2
  
    $.ajax({
      url:queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        //let exchange = response.rates.date;
  
  
        $("#ex1").text(response.rates[date][cur1]);
     $("#ex2").text(response.rates[date][cur2]);


        
    
    })
  })