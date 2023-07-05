const axios = require('axios').default;
function everyTime() {
  var pst = require("./posted.json")
  
var array = ["Izlam","halalmemes"]
var red = array[Math.floor(Math.random() * array.length)]
axios.get('https://meme-api.herokuapp.com/gimme/'+ red)
  .then(function (response) {
    var ups = response.data.ups
    var url = response.data.url
    var cap = response.data.title
    console.log(JSON.stringify(cap).length)
    if(!parseInt(JSON.stringify(cap).length) < 145){
    if(!JSON.stringify(response.data.url).includes("gif")){
    if(!response.data.nsfw === true){
      var sio = JSON.stringify(response.data).split("/")
      var ido = sio[3].split('"')
      console.log(ido[0])

      var ar = [pst.ID]
      console.log(ar.length)
      var f = 0
      ar.forEach(DD => {

        if (DD === ido[0]){

        const f = 1
        console.log("ID is DD")


          
        }




      })

      








    if (ups> 100 ){
      const fs = require('fs');





     

      if(pst.ID ){
        var jsonData = `{ \"ID\":\"${pst.ID},${id[0]}\"}`;
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
        
            var jsonData = `{ \"ID\":\"${id[0]}\"}`;
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

        if(cap > 130){


        
            var text = argss[11].substring(0, 130)//cuts to 1024
             var last = text.lastIndexOf(" ")//gets last space (to avoid cutting the middle of a word)
             var text = text.substring(0, last)//cuts from last space (to avoid cutting the middle of a word)
             var cap = text
        }else{
        var cap = cap}

        var array = ["😂","🤣","👌","❤️"]
        const rando = array[Math.floor(Math.random() * array.length)]; + array[Math.floor(Math.random() * array.length)];

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
        
          }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              height: 608
          
            }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
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
        
          }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              height: 1350
          
            }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()

      
        })})

        }else{
          sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
          .resize({
            fit: sharp.fit.fill,
            width: 1080,
            height: 1080
        
          }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              width: 1080
          
            }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
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
            
                  
              
  //               }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
  //               const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  // process.exit()
  //               .catch(function(err) {
  //                 sharp("C:/Users/Jay/Desktop/DANDD/meme.jpg")
  //                 .resize({
  //                   fit: sharp.fit.fill,
  //                   width: 1080,
  //                   height: 608
                
  //                 }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
  //             .then(function(newFileInfo) {
  //               const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
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
         
  //         }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
  //         const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  // process.exit()
  //         .catch(function(err) {
  //           sharp("C:/Users/Jay/Desktop/DANDD/meme.jpg")
  //           .resize({
  //             fit: sharp.fit.fill,
  //             width: 1080,
  //             height: 1350
          
  //           }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
  //       .then(function(newFileInfo) {
  //         const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
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
        
          }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()
          .catch(function(err) {
            sharp("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              width: 1080
          
            }).toFile("C:/Users/Jay/Desktop/DANDD/meme.jpg")
            
        .then(function(newFileInfo) {
          const dimensions3 = sizeOf('C:/Users/Jay/Desktop/DANDD/meme.jpg')
  console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
  process.exit()

      
        })})

        // }






















        


    })
  }
  


            }}}})
}

var myInterval = setInterval(everyTime, 5000);