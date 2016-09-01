// this is where all the click events will go.
// punch will go here and damage will be logged when
// the button is pressed.

class Gameview {
  constructor() {
    this.el = document.createElement('li');
    this.el.className = 'punch';
  }
  render() {
    this.el.innerHTML = `
    <button class='punch'>Punch!</button>`;
  }
}
