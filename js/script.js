// Think about adding "password strength" at a later date

function password() {
  // Starting variables and characters to generate password
  let checkedBoxes = document.querySelectorAll(`input[type="checkbox"]:checked`).length;
  let passwordLength = document.getElementById('passwordLength').value;
  let specialChar = "!\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~";
  let numericChar = "1234567890";
  let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let additionalChar = "";
  let basePassword = [];
  let passDiv = document.getElementById("completedPassword");


  // Password Character Selector

  function passChar(charType, _idName) {
    if (document.getElementById(_idName).checked) {
      basePassword.push(charType[Math.floor(Math.random() * charType.length)]);
      additionalChar = additionalChar += charType;
    };
  };

  // add to array until length = password length
  function passComleter() {
    for (i = basePassword.length; i < passwordLength; i++) {
      basePassword.push(additionalChar[Math.floor(Math.random() * additionalChar.length)]);
    };
  };

  // randomize/shuffle basePassword array

  function passShuffe(array) {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  // show password to user

  function passShow() {
    document.querySelector(`.paneltitlegray`).classList.remove(`paneltitlegray`);
    document.querySelector(`.copyBtn`).classList.remove(`disabled`);
    passDiv.innerHTML = `${basePassword.join("")}`;
  };

  // Input Validation & Generate Complete Password

  if (checkedBoxes < 1) {
    let elem = document.querySelector('.modal');
    let instance = M.Modal.init(elem);
    instance.open();
  }

  else {
    passChar(uppercaseChar, "uppercaseChar");
    passChar(lowercaseChar, "lowercaseChar");
    passChar(numericChar, "numericChar");
    passChar(specialChar, "specialChar");
    passComleter();
    passShuffe(basePassword);
    passShow();
  };
};

// copy password to clipboard

function copyPassword() {
  let passPhraseOrg = document.getElementById('completedPassword').innerHTML;
  let placeHolder = document.createElement(`textarea`);
  document.body.appendChild(placeHolder);
  placeHolder.value = passPhraseOrg;
  placeHolder.select();
  document.execCommand(`copy`);
  document.body.removeChild(placeHolder);
};