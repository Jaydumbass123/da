/* tslint:disable:no-console */
import { IgApiClient } from 'instagram-private-api';
import { readFile } from 'fs';
import { promisify } from 'util';
import out from './out.json';
import fs from "fs"
const readFileAsync = promisify(readFile);

const ig = new IgApiClient();

async function login() {
  ig.state.generateDevice("mispbot__");
  await ig.account.login("mispbot__", "BobTheBuilder71");
}
(async () => {
  await login();

  const path = "C:/Users/Jay/Desktop/DANDD/misp.jpg";
  const misp = require("./misp.json")
  


  const publishResult = await ig.publish.photo({
    file: await readFileAsync(path),
    caption: misp.cap + out.emoji + "\n" + "Show the post some love ♥️" ,
    

  });

  
var jsonData = `{\"id\":\"${publishResult.media.id}\"}`;
 
var jsonObj = JSON.parse(jsonData);
 
var jsonContent = JSON.stringify(jsonObj);
 
fs.writeFile("c:/Users/Jay/Desktop/Insta p l/id.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
});


})();

