shopTable = function () {
  var storeStats = document.getElementById('locations');
  var elShopname = document.createElement('h3');
  elShopname.setAttribute('class', 'newClass');
  elShopname.textContent = 'H3 HEADER';
  console.log('Created h3');
  storeStats.appendChild(elShopname);
};
shopTable();
