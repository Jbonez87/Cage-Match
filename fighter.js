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
const ringSide = document.querySelector('.arena');

class Fighter {
  constructor(name, opponent, team, side) {
    this.name = name;
    this.opponent = opponent;
    this.team = team;
    this.hitpoints = 1000;
    this.fistOffset = 10;
    this.fighter = null;
    this.side = side;
    this.punch = this.punch.bind(this);
  }
  setOpponent(opponent) { 
    this.opponent = opponent;
  }

  takeDamage(amount) {
    this.hitpoints -= amount;
    //add code to make opponent's blood appear
    this.fighter.setAttribute('style', 'background: linear-gradient(rgba(200, 20, 20, .6), rgba(220, 20, 20 , .5)) url("http://i.imgur.com/4d4OBEe.jpg")');
    //add code to make opponent's blood disappear
    this.render();
    if(this.hitpoints <= 0) {
      alert('You lose, Cage!');
      this.totalClear();
    }
  }
  totalClear() {
    this.render();
    this.hitpoints = 1000;
    this.opponent.hitpoints = 1000;
    this.opponent.render();
  }

  punch() {
    const me = this;
    me.fistOffset -= 140;
    me.opponent.takeDamage(Math.floor(Math.random() * 300));
    me.render();

    setTimeout(
      function bringBack() {
        me.fistOffset += 140;
        //add code to make opponent's blood disappear
        me.render()
      },
      300
    );
  }

  clear() {
    if (this.fighter) {
      ringSide.removeChild(this.fighter);
      this.fighter = null;
    }
  }

  render() {
    this.clear();
    this.fighter = document.createElement('div');
    this.fighter.setAttribute('class', this.team);
    ringSide.appendChild(this.fighter);
    let fist = document.createElement('div');
    fist.setAttribute('class', 'fist');
    this.fighter.appendChild(fist);
    fist.setAttribute('style', `${this.side}: ${this.fistOffset}px`);
    let punch = this.punch;
    fist.addEventListener('click', punch);
  }
}
let j = new Fighter('john', null, 'red', 'left');
let r = new Fighter('raz', j, 'blue', 'right');
j.setOpponent(r);
j.render();
r.render();
