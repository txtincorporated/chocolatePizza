//VARIABLES
var pizzaBounds = /*Hillsboro*/[[[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
[[0,4],[0,7],[2,15],[15,35],[12,31],[5,20]],
/*Buckman*/[[0,4],[0,7],[5,15],[25,39],[22,36],[5,21]],
/*Dntn.*/[[0,4],[0,7],[2,15],[10,26],[8,22],[0,2]],
/*PDXairport*/[[0,4],[0,7],[2,15],[6,9],[4,8],[2,4]],
/*Clackamas*/[[2,7],[3,8],[1,5],[5,13],[22,41],[15,20]]];

//pizzaBounds[pizzaBounds.length-1]//use instead of number in userShops

var dlvyBounds = /*Hillsboro*/[[[0,4],[0,4],[1,4],[3,8],[5,12],[5,11]],
/*Beav.*/[[0,4],[0,4],[1,4],[3,8],[5,12],[6,11]],
/*Buckman*/[[0,4],[0,4],[0,4],[13,18],[5,22],[16,31]],
/*Dntn.*/[[0,4],[0,4],[1,4],[4,6],[7,15],[2,8]],
/*PDXairport*/[[0,4],[0,4],[1,4],[5,18],[2,5],[3,1]],
/*Clackamas*/[[3,5],[3,9],[1,4],[2,4],[15,42],[6,21]]];

var odysseys = [];//Add total pizzas made systemwide for the week

//--FOR POPULATING OBJECTS
//Store output from hrlyPies in an array
var dailyMade;

//Store output from hrlyDelivs in an array
var dailyDelivs;

//Store hourly drivers needed in an array
var driverHours;

//--FOR POPULATING INDEX.HTML
var daysPies;

//FUNCTIONS
//Generate random data for pizzas made each hour
var hrlyPies = function (pizzaBounds) {
  var piesPerHour = [];
  for (var i=0; i<6; i++) {
    for (var k=0; k<3; k++){
      var number = Math.floor(Math.random () * (pizzaBounds[i][1] - pizzaBounds[i][0])) + pizzaBounds[i][0];
      piesPerHour.push(number);
    }
  }
  return piesPerHour;
};
var pizzasMade = hrlyPies(pizzaBounds);

//Add up total pizzas made for the day from hrly. array
var dailyPizzas = function(arr) {
  var dailyTotal = 0;
  for (var i = 0; i<18; i++) {
    dailyTotal += arr[i];
    //console.log(dailyTotal);
  }
  return dailyTotal;
};
var piesToday = dailyPizzas(pizzasMade);
daysPies = piesToday;

//Generate random number array for deliveries made each hour
var hrlyDelivs = function (dlvyBounds) {
  var delivsPerHour = [];
  for (i=0; i<6; i++) {
    for (j=0; j<3; j++){
      var number = Math.floor(Math.random () * (dlvyBounds[i][1] - dlvyBounds[i][0])) + dlvyBounds[i][0];
      if (number>pizzasMade[i][j]) {
        delivsPerHour.push(0);
      }
      delivsPerHour.push(number);
    }
  }
  return delivsPerHour;
};
var dlvyTrend = hrlyDelivs(dlvyBounds);
//console.log(dlvyTrend);
dailyDelivs = dlvyTrend;

//Determine no. dlvy. drivers needed for each hour
var hrlyDrivers = function (dTrend) {
  var driversNeeded = [];
  for (var i = 0; i < dTrend.length; i++) {
    var drvNeed = Math.round(dTrend[i]/3);
    if (drvNeed < 3) {
      driversNeeded.push(0);
    }
    driversNeeded.push(drvNeed);
  }
  return driversNeeded;
};
var driverTrend = hrlyDrivers(dlvyTrend);
driverHours = driverTrend;
