//I:  COMPANYWIDE DATA ARRAYS
//lay out 18 'tr' elements per pizzaShop, one for each operating hr. of the day
var op_hours = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am','2am'];

var branches = ['Hillsboro', 'Beaverton', 'Buckman', 'DowntownPDX', 'PDXairport', 'Clackamas'];

function Shop (br, pizzaBounds, dlvyBounds) {//OPEN SHOP OBJECT
  this.br = br;
  this.pizzaBounds = pizzaBounds;
  this.dlvyBounds = dlvyBounds;

  //SUMMATIVE STATS.
  this.todaysPies = dailyPizzas(hrlyPies(pizzaBounds));//get total pies for one day
  //ARRAYED STATS.
  this.pizzas = hrlyPies(pizzaBounds);//populate array of pies ea. hr. from app.js
  this.deliveries = hrlyDelivs(dlvyBounds);//populate array of deliveries ea. hr.
  this.driversNeeded = hrlyDrivers(hrlyDelivs(dlvyBounds));//populate array of driver need ea. hr.

//METHODS
//WEEKLY TOTALER
  this.pizzaWeek = function pizzaWeek() {
    var dailyPies = [];//build 2-D array of six sets of data from hrlyPies
    for (var i=0; i<6; i++) {
      var daily = hrlyPies(pizzaBounds);
      console.log(daily);
      var dailyTotal = daily.reduce(function(a,b) {return a + b;});
      console.log(dailyTotal);
      dailyPies.push(dailyTotal);
    }
    console.log(dailyPies);
    var weeklyTotal = dailyPies.reduce(function(a,b) {return a + b;});
    console.log(weeklyTotal);
    return weeklyTotal;
  };

  var weeksPizzas = this.pizzaWeek(this.pizzas);
  this.weeksPizzas = weeksPizzas;//get total pies for one wk.
  odysseys.push(weeksPizzas);
  console.log(weeksPizzas);
  console.log(odysseys);

//SHOP TABLE CONSTRUCTOR
  this.shopTable = function () {//OPEN TABLE (method to populate table from arrays in I.)
    var storeStats = document.getElementById('locations');
    var elShopname = document.createElement('h3');
    console.log('Created h3 with id of');

    //Append shop name h3 to #locations div as table title
    elShopname.textContent = this.br;
    elShopname.setAttribute('id', this.br);
    storeStats.appendChild(elShopname);

    //Append new store table to #locations div below table title
    var pizzaTable = document.createElement('table');
    storeStats.appendChild(pizzaTable);

    //Append top two header rows to store table
    var trA = document.createElement('tr');
    pizzaTable.appendChild(trA);
    var th1 = document.createElement('th');
    th1.setAttribute('colspan', '4');
    th1.textContent = 'Pizzas today: ' + this.todaysPies;
    trA.appendChild(th1);

    var trB = document.createElement('tr');
    pizzaTable.appendChild(trB);
    var th2 = document.createElement('th');
    th2.setAttribute('colspan', '4');
    th2.setAttribute('id','second');
    th2.textContent = 'Pizzas this week: ' + this.weeksPizzas;
    trB.appendChild(th2);

    //Add 3rd row with column headings
    var trC = document.createElement('tr');
    pizzaTable.appendChild(trC);
    var thX = document.createElement('th');
    thX.setAttribute('scope','col');
    trC.appendChild(thX);//empty column head for times
    var thA = document.createElement('th');
    thA.setAttribute('scope','col');
    thA.setAttribute('class','th-centered');
    thA.textContent = 'Pizzas made';
    trC.appendChild(thA);//column head for pizzas made

    var thB = document.createElement('th');
    thB.setAttribute('scope','col','class','th-centered');
    thB.setAttribute('class','th-centered');
    thB.textContent = 'Pizzas delivered';
    trC.appendChild(thB);//column head for deliveries made

    var thC = document.createElement('th');
    thC.setAttribute('scope','col');
    thC.setAttribute('class','th-centered');
    thC.textContent = 'Drivers needed ';
    trC.appendChild(thC);//column head for drivers needed

    for (var i=0; i<this.pizzas.length; i++) {//OPEN FOR-LOOP L1 (adds data rows)
        //Add data in successive rows equal to hrs. tracked per day
      var tr1 = document.createElement('tr');
      var th3 = document.createElement('th');
      th3.setAttribute('scope', 'row');
      th3.textContent = op_hours[i];
      tr1.appendChild(th3);//Add row and row head for one hr.'s stats

      var td1 = document.createElement('td');
      td1.textContent = this.pizzas[i];
      tr1.appendChild(td1);
      var td2 = document.createElement('td');
      td2.textContent = this.deliveries[i];
      tr1.appendChild(td2);
      var td3 = document.createElement('td');
      td3.textContent = this.driversNeeded[i];
      tr1.appendChild(td3);
      pizzaTable.appendChild(tr1);//Add one cell for each stat in row
      console.log('Added row ' + [i]);
    }//CLOSE FOR-LOOP L1

    //set page top return
    var trLast = document.createElement('tr');
    trLast.setAttribute('class','lastrow');
    var thLast = document.createElement('th');
    thLast.setAttribute('class','lastrow');
    trLast.appendChild(thLast);//Add row and row head for last row

    var tdL1 = document.createElement('td');
    tdL1.setAttribute('class','lastrow');
    trLast.appendChild(tdL1);
    var tdL2 = document.createElement('td');
    tdL2.setAttribute('class','lastrow');
    tdL2.innerHTML = '<a href=#statstop>Back to top</a>';
    trLast.appendChild(tdL2);
    var tdL3 = document.createElement('td');
    tdL3.setAttribute('class','lastrow');
    trLast.appendChild(tdL3);
    pizzaTable.appendChild(trLast);//Add one cell for each stat in row
    console.log(tdL2);

  };//CLOSE TABLE
  if (document.getElementById('locations')) {
    this.shopTable();
  };

  //TABLE LINK BUTTON CONSTRUCTOR
  //Append new store link to #storelinks div below table title
  var locLink = document.getElementById('storelinks');

  //create an anchor element, set href
  var elButtonLink = document.createElement('a');
  elButtonLink.href = '#' + this.br;

  //create a div inside anchor, set class
  elButtonLink.innerHTML = '<div class=\"linkbttn\"><h3>' + this.br + '</h3></div>';
  console.log(elButtonLink);

  //Append new anchor div to location list
  if (locLink) {
    locLink.appendChild(elButtonLink);
  }
};//CLOSE SHOP OBJECT

//POPULATOR
var makeStore = function () {
  for (var i = 0; i<branches.length; i++) {
    var newShop = new Shop (branches[i], pizzaBounds[i], dlvyBounds[i]);
    console.log(newShop);
  }
};
makeStore();

//SHOP INITIATOR
var elUnhide = document.getElementById('addBttn');
function overLays () {
  var showForm = document.getElementById('add-shop');
  showForm.style.visibility = 'visible';
  var hidePage = document.getElementById('curtain');
  hidePage.style.visibility = 'visible';
  console.log('OVERLAYS RAN');
};

var elSubmit, elName, elPies, elDlvys;
elSubmit = document.getElementById('submit');
elName = document.getElementById('brName');
elPies = document.getElementById('maxminPies');
elDlvys = document.getElementById('maxminDlvys');

function pushArrays () {
  branches.push('brName');
  pizzaBounds.push('maxminPies');
  dlvyBounds.push('maxminDlvys');
};

function hideForm () {
  var hideForm = document.getElementById('add-shop');
  var showPage = document.getElementById('curtain');
  hideForm.style.visibility = 'hidden';
  showPage.style.visibility = 'hidden';
};

if (elUnhide) {
  elUnhide.addEventListener('click',overLays, false);
  elSubmit.addEventListener('click', pushArrays, false);
  elSubmit.addEventListener('click', hideForm, false);
};


//POST WEEKLY CHAIN TOTALS TO CUSTOMER PAGE
var cheeseOdysseus = function () {
  var odysseyTotal = odysseys.reduce(function(a,b) {return a + b;});
  console.log(odysseyTotal);
  return odysseyTotal;
};
var weeklyBoast = cheeseOdysseus();
var postBoast = document.getElementById('served');
if (postBoast) {
  postBoast.textContent = weeklyBoast;
}
