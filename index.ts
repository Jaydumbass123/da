/* tslint:disable:no-console */
import { IgApiClient } from 'instagram-private-api';
import { readFile } from 'fs';
import { promisify } from 'util';
import * as out from './out.json';
import * as fs from 'fs';
let date = new Date();

if (date.getDay() == 0){
  var td = "Sunday"
}else {
}if (date.getDay() == 1){
  var td = "Monday"
}else {
}if (date.getDay() == 2){
  var td = "Tuesday"
}else {
}if (date.getDay() == 3){
  var td = "Wednesday"
}else {
}if (date.getDay() == 4){
  var td = "Thursday"
}else {
}if (date.getDay() == 5){
  var td = "Friday"
}else {
}if (date.getDay() == 6){
  var td = "Saturday"
}

const emoji = ["😂","😆","🤣","😅","😬","😂😂","😂🤣","😅😅","😬😬","🤣🤣","🤣😅","😆😆","😆🤣","😆😅"];

const emojis1 = Math.floor(Math.random() * emoji.length);

const pt = [1,2];

const pt1 = Math.floor(Math.random() * pt.length);

// Read the contents of the file into a string
const jsonDataString = fs.readFileSync('C:/Users/jayor/Desktop/AOP/finder/posted.json', 'utf8');

// Parse the JSON string into a JavaScript object
const jsonData = JSON.parse(jsonDataString);

// Use the parsed object as needed
if(1 == pt[pt1]){
  var posttype = "Dank"
  var Hash = "#deepfriedmemes #sledgang #stolenmemes #wholesomememes #dankmemes #darkmemes #memecucks #dadjokes #memedaily #memes #memestar #memestagram #funnymemes #ironicmemes #memes4days #nicememes #instagrammemes #cringememes #redditmemes #lmaomemes #memedealer #pewdiepie #shitposts #darkhumour #memesforlife #edgymemesforedgyteens"
}

if(2 == pt[pt1]){
  var posttype = "Me IRL"
  var Hash = "#deepfriedmemes #sledgang #stolenmemes #wholesomememes #dankmemes #darkmemes #memecucks #dadjokes #memedaily #memes #memestar #memestagram #funnymemes #ironicmemes #memes4days #nicememes #instagrammemes #cringememes #redditmemes #lmaomemes #memedealer #pewdiepie #shitposts #darkhumour #memesforlife #edgymemesforedgyteens"
}


const cap2 = "\n" + posttype + " " + td + "s! " + emoji[emojis1] + "\nLike & Share❤️\nFollow for the next Post🤝\n\n**IGNORE THESE **\n " + Hash + " ";
  const readFileAsync = promisify(readFile);

  const ig = new IgApiClient();
  
  async function login() {
    // basic login-procedure
    ig.state.generateDevice("dumbass_kingg");
    await ig.account.login("dumbass_kingg", "J@hangir!@#456");
  }
  (async () => {
    await login();
  
    const path = "C:/Users/jayor/Desktop/AOP/finder/meme.jpg";
  
    const publishResult = await ig.publish.photo({
      file: await readFileAsync(path),
      caption: out.cap + out.emoji + cap2, 
  
    });
    var jsonData = `{\"id\":\"${publishResult.media.id}\", \"code\":\"${publishResult.media.code}\"}`;
  
  // parse json
  var jsonObj = JSON.parse(jsonData);
   
  // stringify JSON Object
  var jsonContent = JSON.stringify(jsonObj);
   
  fs.writeFile("c:/Users/jayor/Desktop/AOP/id.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
   
  });
  
  await ig.media.save(
     publishResult.media.id
    );
  
    process.exit()
  
  
  })();


