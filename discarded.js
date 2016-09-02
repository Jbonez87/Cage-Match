// basically I want this to give the opponent a random amount of damage
// hitOpponent() {
//   const player = document.querySelector('john');
//   if(player.punch() || player.kick()) {
//     this.Opponent().hitpoints -= Math.floor(Math.random()) * 10;
//   }
//   else if(!player.punch() || !player.kick()) {
//     alert('Missed');
//   }
// }

// let a = document.querySelector('.punch-button');
// a.addEventListener('click', hitOpponent => {
//   alert('hit');
//   this.Opponent().hitpoints -= Math.floor(Math.random()) *10;
// });

//subfunctions to be added as object methods later
// function getCurrentPosition(person) {
//   let elem = document.querySelectorAll(person)[0];
//   let howRight = elem.getAttribute('style').split('left: ')[1]; // left: 0px
//   let extractedPixels = Number(howRight.replace('px', ''));
//   return {
//     elem: elem,
//     position: extractedPixels
//   };
// }

// function move(elemObject) {
//   let elem = elemObject.elem;
//   let position = elemObject.position;
//   console.log(elem, position);
//   elem.setAttribute('style', `left: ${position + 15}px`);
//   return elem;
// }

// const john = new Player('john');
// john.render();
// john.punch();

// attempting to make a fighters array to store the different cages.

// class Fighters () {
//   constructor(player) {
//     this.name = player;
//     this.choices = [];
//   }
//   loadCage(fighter) {
//     this.choices.push(fighter);
//   }
// }
// const cages = new Fighters('cages');
// cages.loadCage(new Player('john'));
// cages.loadCage(new Opponent('opponent'));
