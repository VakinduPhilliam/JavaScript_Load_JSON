/*The script below uses JQuery and Ajax to load a local JSON file into HTML DOM*/
/*Ajax then iterates through the values and displays the results*/
/*The JSON file is a record of weather forecasts for selected cities*/
/*Written by Vakindu Philliam*/
 
  $( function() {
 
    $('#getForecast').click( function() {
      var data = {};
      $.ajax( "getForecast.txt", {
        cache: false,
        data: data,
        dataType: "json",
        error: errorHandler,
        success: success
      } );
    } );
 
    function success(feed) {
     $.each(feed, function(){
		 document.write("City: "+this.city+"<p>");
		 document.write("Date: "+this.date+"<p>");
		 document.write("Weather Forecast: "+this.forecast+"<p>");
		 document.write("Maximum Temperature: "+this.maxTemp+"<p>");
		 });
    
		}
 
    function errorHandler() {
      document.write( "There was a problem retrieving the forecast." );
    }
 
  } );