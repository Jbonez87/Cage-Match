class Player {
  constructor({name}) {
    this.name = name;
  }
  makePerson() {
    let player = document.createElement('div');
    player.setAttribute('id', this.name);
    document.body.appendChild(player).setAttribute('style', 'left: 0px');
  }
  render() {
    return this.makePerson();
  }
}
function getCurrentPosition(person) {
  let elem = document.querySelectorAll(person)[0];
  let howRight = elem.getAttribute('style').split('left: ')[1]; // left: 0px
  let extractedPixels = Number(howRight.replace('px', ''));
  return {
    elem: elem,
    position: extractedPixels
  };
}

function move(elemObject) {
  let elem = elemObject.elem;
  let position = elemObject.position;
  console.log(elem, position);
  elem.setAttribute('style', `left: ${position + 15}px`);
  return elem;
}

let john = new Player({name: 'John'});
john.render();
move(getCurrentPosition(john));
