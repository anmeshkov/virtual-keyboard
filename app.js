const keyboardLayout = [
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
    Minus: '-',
    Equal: '+',
    Backspace: 'Backspace'
  },
  {
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
    Delete: 'DEL'
  },
  {
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
    Quote: '\'',
    Backslash: '\\',
    Enter: 'Enter',
  },
  {
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
    ShiftRight : 'Shift'
  },
  {
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
  }
]

function createTextarea() {
  const textarea = document.createElement('textarea');
  textarea.className = 'input-textarea';
  document.body.appendChild(textarea);
}

function createKeyboard() {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard__wrapper';

  for (const keyboardLines of keyboardLayout) {
    const keyboardRow = document.createElement('ul');
    keyboardRow.className = 'keyboard-row';

    for (const value in keyboardLines) {
      const keyboardButton = document.createElement('li');
      keyboardButton.className = 'keyboard-button';
      keyboardButton.setAttribute('key-code', value)
      keyboardButton.innerHTML = `<span>${keyboardLines[value]}</span>`;

      keyboardRow.append(keyboardButton)
    }

  keyboard.appendChild(keyboardRow)
  }


  document.body.appendChild(keyboard);  
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