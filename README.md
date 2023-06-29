# Virtual Keyboard

Виртуальная клавиатура.

[Task](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/virtual-keyboard/virtual-keyboard-en.md)  
[Demo](https://anmeshkov.github.io/virtual-keyboard/)

---
![image](https://user-images.githubusercontent.com/97451331/235474005-f11b4051-5293-4e97-bfaf-685fdf241d5e.png)
---

## Техническое задание
- design is at your discretion.
- `index.html` file should be empty (all the necessary elements are generated with the usage of JS)
- pressing a key on a physical keyboard highlights the key on the virtual keyboard

  **There may be differences in keystrokes on different operating systems (Windows, macOS). To avoid mistakes, it's necessary to specify in which OS the virtual keyboard was created**
- if several buttons are pressed, all the pressed buttons are highlighted on the virtual keyboard (there're no exceptions for `Ctrl`, `Alt` and `Shift` as well)
- the virtual keyboard is able to switch between two language layouts (English + any other language). 
    - assigning a keyboard shortcut for switching keyboard layout is up to you.
    - the buttons on the virtual keyboard display symbols of a selected language
    - the application saves a chosen language after the page is reloaded and displays the keyboard on that language
    - the keyboard shortcut for changing language should be indicated on the page so that it will be clear for a user how to switch keyboard layout
- keystrokes are animated
- clicks on the buttons with a mouse on the virtual keyboard and pressing keys on a physical keyboard should input symbols to the text area located on the page above the virtual keyboard.
    - pressing the `Up`, `Down`, `Left` or `Right` arrow key inputs an arrow symbol in the input field, or implements navigation on the text area.
    - pressing the `Enter` should move a text cursor to the next line
    - the `Tab` key creates a horizontal indent
    - pressing the rest of the function keys on a keyboard does not result in inputting symbols
    - the `Backspace` key removes character before the text cursor
    - the `Del` key removes character after the text cursor
    - the `Shift`, `Alt`, `Ctrl`, `Caps lock` and `Space` keys should work as on a real keyboard

  ## Стек
- HTML
- CSS
- no JS
