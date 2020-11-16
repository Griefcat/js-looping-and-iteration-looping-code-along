// Code your solutions in this file
names = ["Ada", "Brendan", "Ali"];
function writeCards(names) {
    for (let i = 0; i < names.length; i ++) {
        console.log(`Thank you, ${names[i]} for the wonderful birthday gift`)
    }
    return names
}

function countDown(num) {
    let count = num;
    while (count >= 0) {
      console.log(count --)
    }
  }
  
  countDown(13)