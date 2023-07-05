const fs = require('fs');
var pst = require("./posted.json")

if(pst.ID ){
var jsonData = `{ \"ID\":\"${pst.ID}34343,\"}`;
var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);
 
var jsonContent = JSON.stringify(jsonObj);
 
 
fs.writeFile("./posted.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
});
}else{

    var jsonData = `{ \"ID\":\"34343,\"}`;
var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);
 
var jsonContent = JSON.stringify(jsonObj);
 
 
fs.writeFile("./posted.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
});


}
