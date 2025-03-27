const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// Object containing animal sounds
const farmSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken",
};

// Destructuring animal sounds
const { moo, neigh, baa, oink, cluck } = farmSounds;

// Object containing traditional animal names
const animals = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken",
};

// Destructuring traditional animal names
const { bessie, dolly, babe, little } = animals;

// Object containing animal colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig",
};

// Destructuring animal colors
const { blackAndWhite, black, pink } = animalColors;

// Array of rainbow colors
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Destructuring rainbow colors using full names
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;

// Destructuring rainbow colors using initials
const [r, o, y, g, b, , v] = rainbow; // Skipping indigo

// Destructuring indigo separately
const [, , , , , indg] = rainbow;

// Destructuring Muppet details
const { muppetName, color, song, job, partner } = muppet;

// Object containing Muppet songs
const muppetSongs = {
  song1: "Rainbow Connection",
  song2: "Moving Right Along",
  song3: "Bein' Green",
  song4: "I Hope That Something Better Comes Along",
};

// Destructuring selected songs
const { song2, song4 } = muppetSongs;

// Object containing Kermit's details
const kermit = {
  job: "Host of The Muppet Show",
  partner: "Miss Piggy",
};

// Destructuring Kermit's job and partner with new variable names
const { job: nestedJob, partner: nestedPartner } = kermit;
