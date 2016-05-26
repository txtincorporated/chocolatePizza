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

//IMG DEFAULTS
var thisDiv = document.getElementsByClassName('imgDiv');
var picDivIds = ['pc1', 'pc2', 'pc3'];
var picDivs = [];
var thisImg;

var picDivver = function () {
  for (var i = 0; i < picDivIds.length; i++) {
    var divObj = document.getElementById(picDivIds[i]);
    picDivs.push(divObj);
  }
};
picDivver();

var imageObjs = [];
// var imageViews = [];
// var imageVotes = [0,0,0,0,0,0,0...];

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
  //need function right here to increment picture's votes
  console.log(thisImg);
  for (var i=0; i < picDivs.length; i++){
    console.log(i);
    function switchPic () {
      var next = Math.floor(divImgs.length * Math.random());
      // console.log(picDiv);
      thisImg = imageObjs[next].src;
      console.log(thisImg);
      picDivs[i].style['background-image'] = 'url' + '("' + thisImg + '")';
      picDivs[i].idx = next;
      thisImg = imageObjs[next];
      console.log(thisImg);
      thisImg.tallyview();
      console.log(thisImg.views);
      // picDiv.addEventListener('click', tallyVote);
    }
    // console.log(switchPic);
    switchPic();
  }
};
goPics();
console.log(thisImg);

function scoreKeeper (div) {
  imageObjs[div.idx].tallyvote();
  userClicks += 1;
  console.log(userClicks);
  goPics();
  return thisImg.votes;
};

for (var i = 0; i<thisDiv.length; i++) {
  picDivs[i].addEventListener('click',function () {
    scoreKeeper(picDivs[i]);
  }, false);
  console.log(thisDiv[i]);
};

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
  if (userClicks >= 16) {
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
