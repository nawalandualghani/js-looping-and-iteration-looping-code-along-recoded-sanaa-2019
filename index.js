// Code your solutions in this file

const name = ["Ada", "Brendan", "Ali"];
const birthday = [
  "Thank you, Ada, for the wonderful birthday gift!",
  "Thank you, Brendan, for the wonderful birthday gift!",
  "Thank you, Ali, for the wonderful birthday gift!"
];
function wrapGifts(name,birthday) {
  for (let i = 0; i < name.length; i++)
  for (let j=0; j<birthday.length;j++ ){
    console.log(`Wrapped ${name[i]} and added a bow!`);
    console.console.log(` ${birthday[i]}`);
  }

}

wrapGifts(name,birthday);
