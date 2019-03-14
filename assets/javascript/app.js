var cur1 = /*currency 1 from search input*/;
var cur2 = /*currency 2 from search input*/;
var dateStart = /*date from search input, yyyy-mm-dd format*/;
var dateEnd = dateStart + 1; /* day + 1 */

var rateURL = "https://api.exchangeratesapi.io/latest?symbols=" + cur1 + "," + cur2
var dateURL = "https://api.exchangeratesapi.io/history?start_at=" + dateStart + "&end_at=" + dateEnd + "&symbols=" + cur1 + "," + cur2

if (dateInput = null) {
  
}



  // ajax request:
  $.ajax({
    url: queryURL,
    method: "GET"
  })