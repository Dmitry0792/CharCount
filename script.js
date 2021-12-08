let inputIn = document.getElementById("input_in");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let divOut = document.querySelector(".win_out");

btn1.onclick = function () {
  let clear = "";
  inputIn.value = clear;
  divOut.innerHTML = clear;
};

btn2.onclick = function () {
  divOut.innerHTML = charCounter(inputIn.value);
};

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    divOut.innerHTML = charCounter(inputIn.value);
  }
});



const charCounter = (str1) => {          

  if (str1.length === 0) {
    return "";
  }
  const arr = [];
  let res = "";
  for (let i = 0; i < str1.length; i++) {
    res = countSym(str1, str1[i]);

    if (!arr.includes(res)) {
      arr.push(res);
    }
  }

  return arr.sort().join(" | ") + ` |  TOTAL:  ${str1.length}`;
};

const countSym = (str, sym) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sym) {
      count++;
    }
  }
  if (sym === " ") {
    sym = "space";
  }
  return sym + " - " + count;
};
