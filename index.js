var dateInput = document.getElementById('date');
var utc = document.getElementById('utc');
var result = document.getElementById('result');

var today = new Date();
var todayString = dateToIso(today)
console.log(todayString)

dateInput.setAttribute('max', todayString);

function isoToBrFormat(date) {
  var splitDate = date.split('-');
  return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}}`
}

function dateToIso(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day

  return year + '-' + month + '-' + day
O}

dateInput.addEventListener('change', function(event) {
})
