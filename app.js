const keyboardLayout =
{
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '+',
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Delete: 'DEL',
  CapsLock: 'Caps Lock',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  // Quote: '\'',
  Backslash: '\\',
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  IntlBackslash: '\\',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  AltLeft: 'Alt',
  MetaLeft: 'Cmd',
  Space: '',
  MetaRight: 'Cmd',
  AltRight: 'Alt',
  // Lang: 'EN',
  ArrowLeft: '◀',
  ArrowDown: '▼',
  ArrowRight: '▶',
};

function createTextarea() {
  const textarea = document.createElement('textarea');
  textarea.className = 'input-textarea';
  document.body.appendChild(textarea);
}

function createKeyboard() {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = 'keyboard__wrapper';

  for (const key in keyboardLayout) {
    const keyboardButton = document.createElement('div');
    keyboardButton.className = 'keyboard-button';

    switch (key) {
      case 'Backquote':
      case 'Backspace':
      case 'Tab':
      case 'Delete':
      case 'Enter':
      case 'CapsLock':
      case 'ShiftLeft':
      case 'ControlLeft':
      case 'AltLeft':
      case 'MetaLeft':
      case 'ShiftRight':
      case 'MetaRight':
      case 'AltRight':
      case 'ArrowLeft':
      case 'ArrowRight':
      case 'ArrowUp':
      case 'ArrowDown':
        keyboardButton.classList.add('keyboard-button__dark')
        break;
      default:
        break;
    }

    keyboardButton.setAttribute('key-code', key);

    keyboardButton.innerHTML = `<span>${keyboardLayout[key]}</span>`;

    keyboardWrapper.append(keyboardButton);
  }

  document.body.appendChild(keyboardWrapper);
}

// createTextarea();
createKeyboard();

document.addEventListener('keydown', (event) => {
  console.log(event.code);
  const keyboarActiveButton = document.querySelector(`.keyboard-button[key-code="${event.code}"]`);
  keyboarActiveButton.classList.add('active');
});

document.addEventListener('keyup', (event) => {
  const keyboarActiveButton = document.querySelector(`.keyboard-button[key-code="${event.code}"]`);
  keyboarActiveButton.classList.remove('active');
})