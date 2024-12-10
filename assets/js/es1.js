document.getElementById('saveButton').addEventListener('click', function () {
  let name = document.getElementById('nameInput').value;
  localStorage.setItem('savedName', name);
  document.getElementById('savedName').innerText =  `Ciao ${name}!`;
});


document.getElementById('removeButton').addEventListener('click', function () {
  localStorage.removeItem('savedName');
  document.getElementById('nameInput').value = '';
  document.getElementById('savedName').innerText = '';
});


window.onload = function () {
  let savedName = localStorage.getItem('savedName');
  if (savedName) {
    document.getElementById('savedName').innerText = savedName;
    document.getElementById('nameInput').value = savedName;
  }
};
