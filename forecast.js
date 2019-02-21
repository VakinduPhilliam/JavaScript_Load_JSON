var forecasts = [{
  "city": "Rome",
  "date": "18 March 2012",
  "forecast": "Warm and sunny",
  "maxTemp": 28
},
{
  "city": "Kampala",
  "date": "18 March 2012",
  "forecast": "Sunny",
  "maxTemp": 32
},
{
  "city": "New York",
  "date": "18 March 2012",
  "forecast": "Cloudy",
  "maxTemp": 19
},
{
  "city": "London",
  "date": "18 March 2012",
  "forecast": "Warm and sunny",
  "maxTemp": 17
},
{
  "city": "Nairobi",
  "date": "18 March 2012",
  "forecast": "Rainy",
  "maxTemp": 23
},
{
  "city": "Cairo",
  "date": "18 March 2012",
  "forecast": "Sunny",
  "maxTemp": 22
},
{
  "city": "Mombasa",
  "date": "18 March 2012",
  "forecast": "Warm",
  "maxTemp": 33
},
{
  "city": "Kinshasha",
  "date": "18 March 2012",
  "forecast": "Rainy",
  "maxTemp": 29
},
{
  "city": "Cape Town",
  "date": "18 March 2012",
  "forecast": "Warm",
  "maxTemp": 26
},
{
  "city": "Dodoma",
  "date": "18 March 2012",
  "forecast": "sunny",
  "maxTemp": 25
},
{
  "city": "Abuja",
  "date": "18 March 2012",
  "forecast": "Warm",
  "maxTemp": 20
},
{
  "city": "Lagos",
  "date": "18 March 2012",
  "forecast": "Rainy",
  "maxTemp": 30
},
{
  "city": "Kigali",
  "date": "18 March 2012",
  "forecast": "Warm and sunny",
  "maxTemp": 31
}
];


$.each(forecasts,function(){

document.write("City: "+this.city+"<p>");
document.write("Date: "+this.date+"<p>");
document.write("Forecast: "+this.forecast+"<p>");
document.write("Maximum Temperature: "+this.maxTemp+"<p>");

});
