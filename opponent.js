/*Pseudocode section:
What does the opponent need to do?
-the opponent should have hitpoints and random damage points for punches
-the opponent should be able to punch at set intervals
-opponent needs a render function
-opponent needs to be whichever Nicolas Cage the player didn't choose
-opponent needs to be on opposite side of arena as the player
-I need to know the opponent's position when a punch is delivered.
*/


class Opponent {
  constructor() {
    this.hitpoints = 1000;
  }
  makeOpponent() {
    const opponent = document.createElement('div');
    opponent.setAttribute('id', 'opponent');
    const ringSide = document.querySelector('.container');
    ringSide.appendChild(opponent).setAttribute('style', 'right: 0px');
  }
  render() {
    return this.makeOpponent();
  }
  getCurrentPosition(person) {
    let elem = document.querySelectorAll(person)[0];
    let howRight = elem.getAttribute('style').split('right: ')[1]; // left: 0px
    let extractedPixels = Number(howRight.replace('px', ''));
    return {
      elem: elem,
      position: extractedPixels
    };
  }
  move(elemObject) {
    let elem = elemObject.elem;
    let position = elemObject.position;
    console.log(elem, position);
    elem.setAttribute('style', `right: ${position + 15}px`);
    return elem;
  }
}
