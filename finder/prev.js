const axios = require('axios').default;
function everyTime() {

    
var array = ["AdviceAnimals","MemeEconomy","MemeCemetery","memes","dankmemes","funny","teenagers","im14andthisisdeep","trippinthroughtime","madlads","devilmaycry","Animemes","PoliticalCompassMemes","2meirl4meirl","comedymemes","dogmemes","Catmemes"]
var red = array[Math.floor(Math.random() * array.length)]
axios.get('https://meme-api.herokuapp.com/gimme/'+ red)
  .then(function (response) {
    var ups = response.data.ups
    var url = response.data.url
    var cap = response.data.title
    if(!JSON.stringify(response.data.url).includes("gif")){
    if(!response.data.nsfw === true){

    if (ups> 1000){

        if(cap > 130){
        
            var text = argss[11].substring(0, 130)//cuts to 1024
             var last = text.lastIndexOf(" ")//gets last space (to avoid cutting the middle of a word)
             var text = text.substring(0, last)//cuts from last space (to avoid cutting the middle of a word)
             var cap = text
        }else{
        var cap = cap}

        var array = ["😂"]
const rando = array[Math.floor(Math.random() * array.length)]; + array[Math.floor(Math.random() * array.length)];

const fs = require('fs');
var jsonData = `{\"cap\":\"${cap}\", \"emoji\":\"${rando}\", \"reddit\":\"${red}\"}`;
var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);
 
var jsonContent = JSON.stringify(jsonObj);
 
 
fs.writeFile("c:/Users/Jay/Desktop/Insta p l/out.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
});



const client = require('https');

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        client.get(url, (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                // Consume response data to free up memory
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

            }
        });
    });
}

downloadImage(url, "C:/Users/Jay/Desktop/Insta p l/meme.jpg")
.then( () =>{



  const sharp = require("sharp")
  sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
  .resize({
    fit: sharp.fit.contain,
    height: 1920,
    width: 1080

  }).toFile("C:/Users/Jay/Desktop/Insta p l/Story/post.jpg")
  .then(function(newFileInfo) {


  })
  .catch(function(err) {
      sharp("C:/Users/Jay/Desktop/Insta p l/Story/post.jpg")
      .resize({
        fit: sharp.fit.contain,
        height: 1920,
        width: 1080

    
      }).toFile("C:/Users/Jay/Desktop/Insta p l/Story/post.jpg")
  .then(function(newFileInfo) {

  })
  .catch(function(err) {
      console.log("Error occured");
  });
  
  });
  




        const sizeOf = require('image-size')
        const dimensions2 = sizeOf('C:/Users/Jay/Desktop/Insta p l/meme.jpg')

        var des = 608 % dimensions2.height === 0  
        var des2 = dimensions2.height % 608 === 0  
        
        if(des === true || des2 === true){
          sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
          .resize({
            fit: sharp.fit.fill,
            height: 608
        
          }).toFile("./meme.jpg")
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("./meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              height: 608
          
            }).toFile("./meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()

      
        })})





        } else {
          var des3 = 1350 % dimensions2.height === 0  
        var des4 = dimensions2.height % 1350 === 0  
        
        if(des4 === true || des3 === true){

          sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
          .resize({
            fit: sharp.fit.fill,
            height: 1350
        
          }).toFile("./meme.jpg")
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("./meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              height: 1350
          
            }).toFile("./meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()

      
        })})

        }else{
          sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
          .resize({
            fit: sharp.fit.fill,
            width: 1080,
            height: 1080
        
          }).toFile("./meme.jpg")
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("./meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              width: 1080
          
            }).toFile("./meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()

      
        })})






        }
      }


  //       console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
  //       if(parseInt(dimensions2.height) < 808 && parseInt(dimensions2.height) >508){
          // const sharp = require("sharp")
  //               sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
  //               .resize({
  //                 fit: sharp.fit.fill,
  //                 width: 1080,
  //                 height: 608
            
                  
              
  //               }).toFile("./meme.jpg")
  //               const dimensions3 = sizeOf('./meme.jpg')
  // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  // process.exit()
  //               .catch(function(err) {
  //                 sharp("./meme.jpg")
  //                 .resize({
  //                   fit: sharp.fit.fill,
  //                   width: 1080,
  //                   height: 608
                
  //                 }).toFile("./meme.jpg")
  //             .then(function(newFileInfo) {
  //               const dimensions3 = sizeOf('./meme.jpg')
  //       console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  //       process.exit()

            
  //             })})



  //       }else if(parseInt(dimensions2.height) < 1550 && parseInt(dimensions2.height) > 1250){
  //         const sharp = require("sharp")
  //         sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
  //         .resize({
  //           fit: sharp.fit.fill,
  //           width: 1080,
  //           height: 1350
         
  //         }).toFile("./meme.jpg")
  //         const dimensions3 = sizeOf('./meme.jpg')
  // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  // process.exit()
  //         .catch(function(err) {
  //           sharp("./meme.jpg")
  //           .resize({
  //             fit: sharp.fit.fill,
  //             width: 1080,
  //             height: 1350
          
  //           }).toFile("./meme.jpg")
  //       .then(function(newFileInfo) {
  //         const dimensions3 = sizeOf('./meme.jpg')
  // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  // process.exit()

      
  //       })})

        // }else {

          // const sharp = require("sharp")
          sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
          .resize({
            fit: sharp.fit.fill,
            width: 1080,
            height: 1080
        
          }).toFile("./meme.jpg")
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("./meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              width: 1080
          
            }).toFile("./meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('./meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()

      
        })})

        // }






















        


    })
  }
  


  }}})
}

var myInterval = setInterval(everyTime, 5000);