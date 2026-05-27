document.getElementById('submitBtn').onclick = function () { 
  const currentYear = Number(document.getElementById('currentYear').value);
  const pastYear = Number(document.getElementById('pastYear').value);
  const currentAge = Number(document.getElementById('ageConvert').value);

  const yearsPassed = currentYear - pastYear;
  const calculation = currentAge - yearsPassed;

  window.alert(`Past Age: ${calculation}`);
}