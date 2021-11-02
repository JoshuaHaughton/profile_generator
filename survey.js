const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


let name = '';
let myActivity = '';
let music = ''
let whichMeal = ''
let food = ''
let sport = ''
let superPower = ''

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  
  console.log(`Thank you for your valuable feedback: ${answer}.`);
  name = answer;

    rl.question("What's an activity you like doing? ", (answer) => {
      

      myActivity = answer;

      rl.question('What do you listen to while doing that? ', (answer) => {
        

        music = answer

        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
          

          whichMeal = answer;


          rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
            

            food = answer;


            rl.question('Which sport is your absolute favourite? ', (answer) => {
              

              sport = answer;



              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                
                superPower = answer;
                console.log(`${name} loves listening to ${music} while coding, devouring ${food} for ${whichMeal}, prefers ${sport} over any other sport, and is amazing at ${myActivity}. Their superpower is: ${superPower}`)
                rl.close();
              });
            });
          });
        });
      });
    });
  });












