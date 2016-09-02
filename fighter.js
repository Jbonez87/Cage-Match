/*pseudo code section:
What does the player need to do?
-Player should have a name.
-Player needs a block function.
-Player needs a punch method (round house kick and special move will be bonus moves for later if I have time)
-Player needs a health meter (an actual bar will a bonus later)
-Player needs a render function
-I'll need to know the player's position when a punch is thrown and then render the animation
then I will need to have them move back into position once the punch is thrown.
-The ability to choose between ConAir Nicolas Cage and The Wicker Man Nicolas Cage
-Set hit points(health) and random damage points for punches
*Bonuses:
-A moving animation
-A kick and special move animation/methods
-A health bar and a special move bar
-More Cages: Ghost Rider, Castor Troy and Lord of War editions are top candidates if time allows
-Sound clips for the two Cages:
Conair: "This ain't happening. Not here, not now."
        "I said... Put. The bunny. Back. In the box."
        "Hoo-ray for the sounds of fucking silence!"

The Wicker Man:
        "How'd it get burned? How'd it get burned? HOW'D IT GET BURNED? HOW'D IT GET BURNED?!"
        "KILLING ME WON'T BRING BACK YOUR GODDAMN HONEY!"
        "No! Not the bees! NOT THE BEES! AHHHHH!"*/

class Fighter {
  constructor(name) {
    this.name = name;
    this.hitpoints = 1000;
    this.special = 0;
    this.currentPositionOfFist = currentPositionOfFist;
  }
  makePlayer() {
    const player = document.createElement('div');
    player.setAttribute('id', this.name);
    const ringSide = document.querySelector('.container');
    ringSide.appendChild(player).setAttribute('style', 'left: 0px');
  }

  // <ul class="button-list">
  //   <li="button-list-item">
  //   </li>
  //   <li="button-list-item">
  //   </li>
  // attacks needs to create both punch and kick buttons and append them to the
  // button list items
  attacks() {
    const punch = document.createElement('button');
    punch.setAttribute('punch-button');
    punch.innerHTML = 'Punch';
    const kick = document.createElement('button');
    kick.setAttribute('kick-button');
    kick.innerHTML = 'Kick';

  }
  render() {
    // const renderArray =
    return this.attacks(), this.makePlayer();
  }
  getCurrentPosition(person) {
    let elem = document.querySelectorAll(person)[0];
    let howRight = elem.getAttribute('style').split('left: ')[1]; // left: 0px
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
    elem.setAttribute('style', `left: ${position + 15}px`);
    return elem;
  }
}
