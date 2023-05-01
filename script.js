const keyarr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'ShiftL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftR', 'Up', 'ControlL', 'AltL', 'Space', 'AltR', 'ControlR', 'Left', 'Down', 'Right'];

const TXTAREA = document.createElement('textarea');
document.body.append(TXTAREA);
const KEYBOARD = document.createElement('div');
document.body.append(KEYBOARD);
KEYBOARD.className = 'keyboard';
function drawKeyboard() {
  let out = '';
  for (let i = 0; i < keyarr.length; i += 1) {
    if (i === 15 || i === 29 || i === 42 || i === 55) {
      out += '<div class="new-row"></div>';
    }
    out += `<div class="key-btn id${keyarr[i]}">${keyarr[i]}</div>`;
  }
  KEYBOARD.innerHTML += out;
}
drawKeyboard();

window.addEventListener('keydown', (k) => {
  k.preventDefault();

  // console.log(document.querySelector('.ido').classList[1])
  if (k.code === 'ControlLeft') {
    document.querySelector('.idControlL').classList.add('active');
  } else if (k.code === 'ControlRight') {
    document.querySelector('.idControlR').classList.add('active');
  } else if (k.code === 'ShiftLeft') {
    document.querySelector('.idShiftL').classList.add('active');
  } else if (k.code === 'ShiftRight') {
    document.querySelector('.idShiftR').classList.add('active');
  } else if (k.code === 'AltLeft') {
    document.querySelector('.idAltL').classList.add('active');
  } else if (k.code === 'AltRight') {
    document.querySelector('.idAltR').classList.add('active');
  } else if (k.code === 'Space') {
    document.querySelector(`.id${k.code}`).classList.add('active');
  } else {
    document.querySelector(`.id${k.key}`).classList.add('active');
  }
});
window.addEventListener('keyup', (k) => {
  // console.log(document.querySelector('.ido').classList[1])
  if (k.code === 'ControlLeft') {
    document.querySelector('.idControlL').classList.remove('active');
  } else if (k.code === 'ControlRight') {
    document.querySelector('.idControlR').classList.remove('active');
  } else if (k.code === 'ShiftLeft') {
    document.querySelector('.idShiftL').classList.remove('active');
  } else if (k.code === 'ShiftRight') {
    document.querySelector('.idShiftR').classList.remove('active');
  } else if (k.code === 'AltLeft') {
    document.querySelector('.idAltL').classList.remove('active');
  } else if (k.code === 'AltRight') {
    document.querySelector('.idAltR').classList.remove('active');
  } else if (k.code === 'Space') {
    document.querySelector(`.id${k.code}`).classList.remove('active');
  } else {
    document.querySelector(`.id${k.key}`).classList.remove('active');
    if (k.key === 'Enter') {
      TXTAREA.value += '\r\n';
    } else {
      TXTAREA.value += k.key;
    }
  }
});
/* addEventListener('keyup',(k) => {
    // console.log(`id${k.key}`)
    // console.log(document.querySelector('.ido').classList[1])
    document.querySelector (`.id${k.key}`).classList.remove("active")})
/*function textInput () {
    let textout = '';
    textout += '<div class="textarea"><textarea rows="5" ></textarea></div>';
    textout.addEventListener("input", (e) => {
        console.log(`Key "${e.data}" input [event: input]`);}
    )
    document.querySelector('body').innerHTML = textout;
}
textInput(); */
