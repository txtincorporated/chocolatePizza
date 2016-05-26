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
'world-beard-moustache-championship-photography-austria-fb1.jpg'];//images to populate imgDivs

var imgCaptions = [];

var captionator = function () {
  for (var i = 0; i < divImgs.length; i++) {
    var caption = 'Picture ' + [i];
    imgCaptions.push(caption);
  }
};
captionator();


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

//IMG OBJ CONSTRUCTOR
var Image = function (name) {
  this.name = name;
  this.src = 'assets/' + name;
  this.votes = 0;
  this.views = 0;

  this.tallyvote = function () {
    this.votes++;
  };
  this.tallyview = function () {
    this.views++;
  };

  this.score = function () {
    var pctVotes = ((this.votes/this.views) * 100) + '%';
  };
};

//GENERATE IMG OBJS.
for (var i = 0; i<divImgs.length; i++) {
  imgObj = new Image (divImgs[i]);
  imageObjs.push(imgObj);
  // imageViews.push(imgObj.views);
}

//for each picture in the array...reset to next pic
function goPics () {
  console.log(thisImg);
  for (var i = 0; i < picDivs.length; i++){
    var next = Math.floor(divImgs.length * Math.random());
    thisImg = imageObjs[next].src;
    console.log(thisImg);
    picDivs[i].style['background-image'] = 'url' + '("' + thisImg + '")';
    picDivs[i].idx = next;
    thisImg = imageObjs[next];
    thisImg.tallyview();
    console.log(thisImg.name + 'views:' + thisImg.views);
    console.log(imageObjs[i].name + 'votes: ' + imageObjs[i].votes);
  }
  for (var i = 0; i<thisDiv.length; i++) {
    picDivs[i].addEventListener('click',function (e) {
      scoreKeeper(e);
    }, false);
    console.log(thisDiv[i]);
// function switchPic () {
    // };
    // console.log(switchPic);
    // switchPic();
  }
};
goPics();

//log image ids in pc1-pc3
function scoreKeeper(e) {
  console.log(e);
  targetDiv = e.target;
  imageObjs[targetDiv.idx].tallyvote();
  userClicks += 1;
  goPics();
};
console.log(userClicks);

function showChart () {
  document.getElementById('tbl');
  tbl.visibility = 'visible';
};

function keepGoing () {
  document.getElementsByTagName('button');
  button.visibility = 'hidden';
};

function countClicks () {
  var bigSixteen = document.getElementsByTagName('button');
  var showResults = document.getElementById('button1');
  var showResults = document.getElementById('button2');
  if (userClicks >= 5) {
    bigSixteen.visibility = 'visible';
    button1.addEventListener('click', showChart);
    button2.addEventListener('click', keepGoing);
  }
};

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

// addEventListener('load', drawRandomData);
//
// function draw(numArray, pcntArray, labelArray) {
//   var canvas = document.getElementById('canvas');
//
//
// // thanks to Chart.js
//   var statsView = new Chart(canvas, {
//     type: 'bar',
//     data: {
//       labels: labelArray,
//       datasets: [{
//         label: 'Views',
//         data: numArray,
//         label: 'Votes',
//         data: numArray,
//       },
//         {
//           label: 'Score',
//           data: pcntArray
//         }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: { beginAtZero:true }
//         }]
//       }
//     }
//   });
// }
//
// //draw(getRandomData());
// function drawRandomData() {
//   var data = [];
//   var percents = [];
//   for (var ii = 0; ii < productNames.length; ii++) {
//     data.push(Math.ceil(Math.random() * 100));
//     percents.push(Math.ceil(Math.random() * 100));
//   }
//   console.log(data);
//   draw(data, percents, productNames);
// }
