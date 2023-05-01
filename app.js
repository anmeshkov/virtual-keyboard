/* английская раскладка */
const keyboardLayoutEN = {
  Backquote: ['`', '~'],
  Digit1: ['1', '!'],
  Digit2: ['2', '@'],
  Digit3: ['3', '#'],
  Digit4: ['4', '$'],
  Digit5: ['5', '%'],
  Digit6: ['6', '^'],
  Digit7: ['7', '&'],
  Digit8: ['8', '*'],
  Digit9: ['9', '('],
  Digit0: ['0', ')'],
  Minus: ['-', '_'],
  Equal: ['=', '+'],
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
  Semicolon: [';', ':'],
  Quote: ['\'', '"'],
  // Backslash: ['\\', '|'],
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
  Comma: [',', '<'],
  Period: ['.', '>'],
  Slash: ['/', '?'],
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  AltLeft: 'Alt',
  MetaLeft: 'Cmd',
  Space: ' ',
  Lang: 'EN',
  MetaRight: 'Cmd',
  AltRight: 'Alt',
  ArrowLeft: '◀',
  ArrowDown: '▼',
  ArrowRight: '▶',
};

/* русская раскладка */
const keyboardLayoutRU = {
  Backquote: ['`', '~'],
  Digit1: ['1', '!'],
  Digit2: ['2', '@'],
  Digit3: ['3', '#'],
  Digit4: ['4', '$'],
  Digit5: ['5', '%'],
  Digit6: ['6', '^'],
  Digit7: ['7', '&'],
  Digit8: ['8', '*'],
  Digit9: ['9', '('],
  Digit0: ['0', ')'],
  Minus: ['-', '_'],
  Equal: ['=', '+'],
  Backspace: 'Backspace',
  Tab: 'Tab',
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Delete: 'DEL',
  CapsLock: 'Caps Lock',
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: ['ж', ''],
  Quote: ['э', ''],
  // Backslash: ['\\', '|'],
  Enter: 'Enter',
  ShiftLeft: 'Shift',
  IntlBackslash: '\\',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: ['б', ''],
  Period: ['ю', ''],
  Slash: ['.', ','],
  ArrowUp: '▲',
  ShiftRight: 'Shift',
  ControlLeft: 'Ctrl',
  AltLeft: 'Alt',
  MetaLeft: 'Cmd',
  Space: ' ',
  Lang: 'RU',
  MetaRight: 'Cmd',
  AltRight: 'Alt',
  ArrowLeft: '◀',
  ArrowDown: '▼',
  ArrowRight: '▶',
};

function createTextarea() {
  const textarea = document.createElement('textarea');
  textarea.className = 'input-textarea';
  textarea.placeholder = 'To switch to a different keyboard layout, press left CTRL+ALT \nThe keyboard was created in the Windows operating system'
  document.body.appendChild(textarea);
}

function createKeyboard(keyboardLayout) {
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

    if (Array.isArray(keyboardLayout[key])) {
      keyboardButton.innerHTML = `<span>${keyboardLayout[key][0]}</span><span class="alt-key">${keyboardLayout[key][1]}</span>`;
    } else {
      keyboardButton.innerHTML = `<span>${keyboardLayout[key]}</span>`;
    }

    keyboardWrapper.append(keyboardButton);
  }

  document.body.appendChild(keyboardWrapper);
}

createTextarea();

function renderKeyboard(lang) {
  if (document.querySelector('.keyboard__wrapper')) {
    document.querySelector('.keyboard__wrapper').remove()
  };

  if (lang.toUpperCase() === 'EN') {
    currentKeyboardLang = 'EN';
    createKeyboard(keyboardLayoutEN);
  } else if (lang.toUpperCase() === 'RU') {
    currentKeyboardLang = 'RU';
    createKeyboard(keyboardLayoutRU);
  } else {
    console.error('Unsupported language');
  }

  localStorage.setItem('keboardLanguage', currentKeyboardLang);

  const switchLangKey = document.querySelector('.keyboard-button[key-code="Lang"]');
  switchLangKey.addEventListener('click', (event) => {
    // document.querySelector('.keyboard__wrapper').remove();

    if (event.target.innerText.toUpperCase() === 'EN') {
      renderKeyboard('RU');
    } else if (event.target.innerText.toUpperCase() === 'RU') {
      renderKeyboard('EN');
    } else {
      console.error('Unsupported language');
    }
  })

  const keys = document.querySelectorAll('.keyboard-button');
  for (const key of keys) {
    key.addEventListener('click', (event) => {
      const inputTextarea = document.querySelector('.input-textarea');
      inputTextarea.value += returnCurrenChar(key.children[0].textContent);
    })
  }
}

/* first render */
let currentKeyboardLang = (localStorage.getItem('keboardLanguage') ? localStorage.getItem('keboardLanguage') : 'EN');
renderKeyboard(currentKeyboardLang);


function returnCurrenChar(char) {
  let currentChar = '';
  switch (char) {
    case 'Enter':
      currentChar = '\n'
      break;
    case 'Tab':
      currentChar = '\t'
      break;
    case 'Backspace':
    case 'Delete':
    case 'DEL':
    case 'CapsLock':
    case 'Caps Lock':
    case 'Shift':
    case 'Cmd':
    case 'Meta':
    case 'Alt':
    case 'Ctrl':
    case 'Control':
    case 'ShiftLeft':
    case 'ControlLeft':
    case 'AltLeft':
    case 'MetaLeft':
    case 'ShiftRight':
    case 'MetaRight':
    case 'EN':
    case 'RU':
      currentChar = '';
      break;
    default:
      currentChar = char;
      break;
  }

  return currentChar;
}

document.addEventListener('keydown', (event) => {
  console.log(event.code);

  if (event.ctrlKey && event.altKey) {
    renderKeyboard((
      currentKeyboardLang === 'EN' ? 'RU' : 'EN'
    ));
  }


  const keyboarActiveButton = document.querySelector(`.keyboard-button[key-code="${event.code}"]`);
  keyboarActiveButton.classList.add('active');

  const inputTextarea = document.querySelector('.input-textarea');

  inputTextarea.value += returnCurrenChar(event.key);
});

document.addEventListener('keyup', (event) => {
  const keyboarActiveButton = document.querySelector(`.keyboard-button[key-code="${event.code}"]`);
  keyboarActiveButton.classList.remove('active');
})


