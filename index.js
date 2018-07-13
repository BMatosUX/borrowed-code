// create class (sort of blueprint) for all the suspects
class Suspect {
  // use constructor function to provide object instantiation
  //     |
  //     |    pass the object properties that each instance will have 
  constructor(firstName, lastName,occupation,color,description){
      this.firstName = firstName,
      this.lastName = lastName,
      this.occupation = occupation,
      this.color = color,
      this.description = description
  };
  // create method that simply returns properties in array
  giveSuspect(){
    return [this.firstName, this.lastName, this.occupation, this.color, this.description];
  };
};

class Weapon {

  constructor(name,weight,color,painlevel){
      this.name = name,
      this.weight = weight,
      this.color = color,
      this.painlevel = painlevel
  };

  giveWeapon(){
    return [this.name, this.weight, this.color, this.painlevel];
  }
};

// function that has purpose of returning in array whatever arguments we pass in 
// (plan is to call it after creating instances of suspects and weapons in order to prefill 
// the arrays of suspects and weapons)
const createArr = (...thing) => {
  return thing;
};

// the Game class constructor
class Game {
  // each game instance will have these 3 arrays when created
  constructor(weapons,suspects, rooms){
    this.weapons = weapons,
    this.suspects = suspects,
    this.rooms = rooms
  };
  // I found that privacy is not very well covered in ES6, and this was the only way to 
  // make methods private (using '_' before its name)
  // the purpose of this method is just to give random instance of passed array
  _randomSelector(arr){
    const random = arr[Math.floor(Math.random() * arr.length)];
    return random;
  }
  // this method calls up on _randomSelector() and returns array with random suspect, weapon and room
  _pickMystery(){
    return [this._randomSelector(this.weapons), this._randomSelector(this.suspects), this._randomSelector(this.rooms)] ;
  }
  // this method prefills mysteryEnvelope with return from _pickMystery() and simply returns the solution of the mystery
revealMystery(){
    let mysteryEnvelope = this._pickMystery();
    return `${mysteryEnvelope[1][0]} ${mysteryEnvelope[1][1]} killed Mr.Boddy using the ${mysteryEnvelope[0][0]} in the ${mysteryEnvelope[2]}`;
  }
}

// create instances of Suspect
let mrGreen = new Suspect('Jacob', 'Green','marketer', 'green','He has a lot of connections and is always willing to help people out -- for a price.');
mrGreen = mrGreen.giveSuspect();
let drOrchid = new Suspect('Sonia', 'Orchid', 'doctor', 'white', 'She is the adopted daughter of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning.');
drOrchid = drOrchid.giveSuspect();
let victorPlum = new Suspect('Victor', 'Plum', 'video game designer', 'purple', 'He is a billionaire video game designer who is embracing his new popularity.');
victorPlum = victorPlum.giveSuspect();
let kasandraScarlet = new Suspect('Kasandra', 'Scarlet', 'A-list movie star', 'red', '');
kasandraScarlet = kasandraScarlet.giveSuspect();
let eleonorePeacock = new Suspect('Eleonore', 'Peackok', 'unemployed', 'blue', 'She is from a wealthy family and uses her status and money to earn popularity.');
eleonorePeacock = eleonorePeacock.giveSuspect();
let jackMustard = new Suspect('Jack', 'Mustard', 'football player', 'yellow', 'He is a former football player who tries to get by on his former glory.');
jackMustard = jackMustard.giveSuspect();

// create instances of Weapon
let rope = new Weapon("rope", "3 pounds", "black", "hurts");
rope = rope.giveWeapon();
let knife = new Weapon('knife', '0.2 pound', 'dark brown', 'hurts bad');
knife = knife.giveWeapon();
let candlestick = new Weapon('candlestick', '4 pounds', 'gold', 'so-so');
candlestick = candlestick.giveWeapon();
let dumbbell = new Weapon('dumbbell', '50 pounds', 'black', 'hurts super bad');
dumbbell = dumbbell.giveWeapon();
let poison = new Weapon('poison', '0.001 pound', 'blue', 'no pain')
poison = poison.giveWeapon();
let axe = new Weapon('axe', '20 pounds', 'grey', 'really hurts');
axe = axe.giveWeapon();
let bat = new Weapon('bat', '10 pounds', 'black', 'so-so');
bat = bat.giveWeapon();
let trophy = new Weapon('trophy', '15 pounds', 'silver', 'so-so');
trophy = trophy.giveWeapon();
let pistol = new Weapon('pistol', '1 pound', 'black', 'hurts');
pistol = pistol.giveWeapon();



const suspects = createArr(mrGreen, drOrchid, victorPlum, kasandraScarlet, eleonorePeacock, jackMustard);
const weapons = createArr(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

// array of rooms is already given
const rooms = [
    "dining room", "conservatory", "kitchen", "study","library",
    "billiard room", "lounge", "ballroom","hall", "spa", "living room",
    "observatory", "theater", "guest house", "patio"
  ];

// create new instance of Game  
const game = new Game(weapons, suspects, rooms);

const name = prompt("Insert your name:");
const confirmName= prompt(alert("If you are seeing this message you are about to reveal confidential information regarding mysterious murder. Please confirm your name:"));
 
if (name.toUpperCase() === confirmName.toUpperCase()){
    // if true, invoke revealMystery
  game.revealMystery();
}
else {
  alert("Your identity is not confirmed. The access to the confidential information is denied!");
}