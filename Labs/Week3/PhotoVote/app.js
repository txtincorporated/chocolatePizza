//IMG ASSETS
var divImgs = ['8.560.jpg',
'8xyK_lCSWpE.jpg',
'17s4k1mttx0yvjpg.jpg',
'45.jpg',
'159sdsd579732.jpg',
'29713ABD00000578-0-image-a-35_1433784542952.jpg',
'256301bbc32e36e302204d159610a9f5.jpg',
'1482942_pic_970x641.jpg',
'beard.-reason-razor-sales-are-down-449x600.jpg',
'beardyguy1.jpeg',
'crayon-hipster.jpeg',
'flower-beards-trend-18.jpg',
'free-your-skin-schick-09.jpg',
'Fudgy-the-BeardMan.jpg',
'hipster-beards.jpg',
'lbq_CLM201512200003_05_l.jpg',
'men-looks-beards-flannels-lumbersexuals.jpg',
'merman-trend-colored-hair-beards-0.jpg',
'merman-trend-colored-hair-beards-18.jpg',
'tumblr_nl2xsiq9AI1upbk6jo1_500.jpg',
'world-beard-moustache-championship-photography-austria-fb1.jpg',
'knit-beard-hat2-e1344992057708.jpg'];//images to populate imgDivs

//IMG DEFAULTS
var thisDiv = document.getElementsByClassName('imgDiv');
var picDivIds = ['pc1', 'pc2', 'pc3'];
var picDivs = [];
var thisImg;
var idx;

var picDivver = function () {
  for (var i = 0; i < picDivIds.length; i++) {
    var divObj = document.getElementById(picDivIds[i]);
    picDivs.push(divObj);
  }
};
picDivver();

var imageObjs = [];
var userClicks = 0;
var imgScores = [];

//IMG OBJ CONSTRUCTOR
var Image = function (name) {
  this.name = name;
  this.src = 'assets/' + name;
  this.votes = 0;
  this.views = 0;
  this.score = 0;

  //set this.votes
  this.tallyvote = function () {
    this.votes++;
  };

  //set this.views
  this.tallyview = function () {
    this.views++;
  };

  //set this.score
  this.scoring = function () {
    var pctVotes = ((this.votes/this.views) * 100);
    if (pctVotes) {
      this.score = pctVotes;
    }
  };
};

//GENERATE IMG OBJS.
var imagator = function () {
  for (var i = 0; i<divImgs.length; i++) {
    imgObj = new Image (divImgs[i]);
    imageObjs.push(imgObj);
  };
};
imagator ();

var imgCaptions = [];

var captionator = function () {
  for (var i = 0; i < divImgs.length; i++) {
    var caption = 'Picture ' + [i+1];
    imgCaptions.push(caption);
  }
};
captionator ();

// for (var i = 0; i < imageObjs.length; i++) {
//   imageObjs[i].scoring();
//   imgScores.push(Math.round(imageObjs[i].score));
// };

for (var i = 0; i<thisDiv.length; i++) {
  picDivs[i].addEventListener('click',function (e) {
    scoreKeeper(e);
  }, false);
};

//initialize page content, then on call, for each picDiv in the array, reset to next pic
function goPics () {
  for (var i = 0; i < picDivs.length; i++){
    var next = Math.floor(divImgs.length * Math.random());
    thisImg = imageObjs[next].src;
    picDivs[i].style['background-image'] = 'url' + '("' + thisImg + '")';
    picDivs[i].idx = next;
    thisImg = imageObjs[next];
    thisImg.tallyview();
  }
};
goPics();

//log image ids in pc1-pc3
function scoreKeeper(e) {
  targetDiv = e.target;
  imageObjs[targetDiv.idx].tallyvote();
  imageObjs[targetDiv.idx].scoring();
  imgScores[targetDiv.idx]=Math.round(imageObjs[targetDiv.idx].score);
  userClicks += 1;
  countClicks();
  function checkButtons () {
    if (buttons.style.display = 'block') {
      return;
    }
  }
  goPics();
};


// function showChart () {
//   document.getElementById('tbl');
//   tbl.visibility = 'visible';
// };

// function keepGoing () {
//   document.getElementsByTagName('button');
//   button.visibility = 'hidden';
// };

function countClicks () {
  var resultsBttn = document.getElementById('littleMask');
  var showResults = document.getElementById('button1');
  var eightsEnuff = document.getElementById('button2');
  if (userClicks >= 5) {
    resultsBttn.style.display = 'block';
    showResults.style.display = 'block';
    button1.addEventListener('click', showChart);
    // button2.addEventListener('click', keepGoing);
  }
};

function showChart () {
  var chartView = document.getElementById('chartDiv');
  chartView.style.display = 'block';
};

//Add animation

addEventListener('load', drawRandomData);

function draw(numArray, pcntArray, labelArray) {
  var canvas = document.getElementsByTagName('canvas');

// thanks to Chart.js
  var statsView = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: 'Score',
        data: pcntArray
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: { beginAtZero:true }
        }]
      }
    }
  });
}

//draw(getRandomData());
function drawRandomData() {
  var data = [];
  var percents = imgScores;
  var labels = imgCaptions;

  draw(data, percents, labels);
}

//GENERATE TABLE FOR THUMBS AND RESULTS
// function tableMaker () {
//   var statsTable = document.getElementById('tbl');
//   var newTable = document.createElement('table');
//   var newTr = document.createElement('tr');
//   var newTd1 = document.createElement('td');
//   var newTd2 = document.createElement('td');
//   newTr.appendChild(newTd1);
//   newTr.appendChild(newTd2);
//   newTable.appendChild(newTr);
//   statsTable.appendChild(newTable);
// };
// tableMaker();
