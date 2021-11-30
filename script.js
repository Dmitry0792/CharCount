let inputIn = document.getElementById('input_in');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let divOut = document.querySelector('.win_out');

btn1.onclick = function () {
  let a = '';
  inputIn.value = a;
  divOut.innerHTML = a;
  
};

btn2.onclick = function () {
  let b = charCounter(inputIn.value);
  divOut.innerHTML = b;
};
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    let b = charCounter(inputIn.value);
    divOut.innerHTML = b;
  }
});

const charCounter = (str1) => {
  const arr = [];
  let res = "";
  for (let i = 0; i < str1.length; i++) {
    res = findSym(str1, str1[i]);

    if (!arr.includes(res)) {
      arr.push(res);
    }
  }

  return arr.join(' | ');
};

const findSym = (str, sym) => {
  let count1 = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sym) {
      
      count1++;
    }
  }
  if(sym === ' ') {
    sym = "space";
  }
  return sym + ' - ' + count1;
};
