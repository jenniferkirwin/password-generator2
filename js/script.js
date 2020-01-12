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

  // Password Character Selector

  function passChar(charType, _idName) {
    if (document.getElementById(_idName).checked) {
      basePassword.push(charType[Math.floor(Math.random() * charType.length)]);
      additionalChar = additionalChar += charType;
    };
  };

  // add to array until length = password length
  function passComleter(){
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
        currentIndex --;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  };

  // show password to user

  // Input Validation & Generate Complete Password

  if (checkedBoxes < 1) {
    alert(`Please select alteast one Character Type`)
    // const elem = document.getElementById('modal id here');
    // const instance = M.Modal.init(elem, {dismissible: false});
    // instance.open();
  }

  else {
    passChar(uppercaseChar, "uppercaseChar");
    passChar(lowercaseChar, "lowercaseChar");
    passChar(numericChar, "numericChar");
    passChar(specialChar, "specialChar");
    passComleter();
    passShuffe(basePassword);
    document.getElementById("completedPassword").innerHTML = `${basePassword.join("")}`;
    
  
    console.log(basePassword.join(""));
    console.log(basePassword.join("").length);
  };
};

function copyPassword(){
  let passPhraseOrg = document.getElementById('passwordPhrase').value;
  document.execCommand('copy');
};

