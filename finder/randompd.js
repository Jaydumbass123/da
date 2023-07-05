let date = new Date();





function everyTime() {
  const { toInteger } = require('lodash');
  const fs = require('fs');

  const axios = require('axios')
  var pst = require("./posted.json")
  var redsave = require("./red.json")
  

  // const filePath121 = './meme.jpg';
  // if (fs.existsSync(filePath121)) {
  //   console.log('File exists!');
    
  //   // delete file
  //   fs.unlinkSync(filePath121);
  //   console.log('File deleted!');
  // } else {
  //   console.log('File does not exist.');
  // }

  // const filePath122 = './meme.jpg';
  // if (fs.existsSync(filePath122)) {
  //   console.log('File exists!');
    
  //   // delete file
  //   fs.unlinkSync(filePath122);
  //   console.log('File deleted!');
  // } else {
  //   console.log('File does not exist.');
  // }


  
const snoowrap = require('snoowrap');

// create a Snoowrap instance
const reddit = new snoowrap({
  userAgent: 'Reddittube',
  clientId: '6u2fRYRUGysW5HCLIM4VYQ',
  clientSecret: 'JipjmRjCzsN39iE1_Cu7kgAwtFiX8g',
  username: 'JayReddit82',
  password: 'REDDIT1023'
});

// Redditube.config({
//   "userAgent": "Redditube",
//   "clientId": "6u2fRYRUGysW5HCLIM4VYQ",     // Your Client ID
//   "clientSecret": "JipjmRjCzsN39iE1_Cu7kgAwtFiX8g", // Your Client secret
//   "username": "JayReddit82",     // Your Reddit username
//   "password": "REDDIT1023"      // Your Reddit password
// });

// get the top posts from a subreddit
const subreddit = ['memes',"dankmemes","2meirl4meirl","me_irl","absolutelynotme_irl"]
var redi = subreddit[Math.floor(Math.random() * subreddit.length)]
reddit.getSubreddit(redi).getTop().then(posts => {
  var array = posts.length
      var numi = Math.floor(Math.random() * array);
  // print the titles and image URLs of the top posts
    if (posts[numi].is_self === false && posts[numi].post_hint === 'image') {
      console.log(posts[numi].title);
      console.log(posts[numi].url);

      




// const options = {
//   method: 'GET',
//   url: 'https://reddit-meme.p.rapidapi.com/memes/top',
//   headers: {
//     'X-RapidAPI-Key': '75d5ab6d5fmshc14d529896e8decp10787fjsn592fa3f30b4f',
//     'X-RapidAPI-Host': 'reddit-meme.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);

      // console.log(response.data[numi])
      // if(red == "dankmemes" && ups >2050 || red == "hmmm" && ups >3050 || red == "okbuddyretard" && ups >1000 || red == "okbuddyanarchist" && ups >1050 || red == "bonehurtingjuice" && ups >2750 || "me_irl" && ups >750 || red == "meirl" && ups >350 || red == "2meirl4meirl" && ups >750){
      var url = posts[numi].url
      console.log(url)
      var cap = posts[numi].title
      var red = redi
      console.log(JSON.stringify(cap).length)
      // if(JSON.stringify(url).includes("gif"||"jpg"||"png"||"jpeg")){
      if(!parseInt(JSON.stringify(cap).length) < 145){
      // if(!JSON.stringify(response.data[numi].url).includes("gif")){
      // if(!response.data[numi].nsfw === true){
  
          // var si = JSON.stringify(response.data[numi]).split("/")
        // var id = si[3].split('"')
        if(posts[numi].ups >= 350){
        var id = posts[numi].id
        console.log(id)
        var ar = [pst.ID]
        console.log(ar)

  
        if(!pst.ID.includes(id)){
    
          if(pst.ID ){
              const fs = require('fs');
  
              var jsonData = `{ \"ID\":\"${pst.ID},${id}\"}`;
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
                  const fs = require('fs');
  
                  var jsonData = `{ \"ID\":\"${id}\"}`;
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
            console.log("Caption is too long! Trimming it...")
          
              var text = argss[11].substring(0, 130)//cuts to 1024
               var last = text.lastIndexOf(" ")//gets last space (to avoid cutting the middle of a word)
               var text = text.substring(0, last)//cuts from last space (to avoid cutting the middle of a word)
                var cap = text  
          }else{
          var cap = cap 
          }
          var array = ["😂","🤣","👌","❤️"]
          const rando = array[Math.floor(Math.random() * array.length)]; + array[Math.floor(Math.random() * array.length)];
  
  var jsonData = `{\"cap\":\"${cap}\", \"emoji\":\"${rando}\", \"reddit\":\"${red}\"}`;
  var jsonObj = JSON.parse(jsonData);
  console.log(jsonObj);
   
  var jsonContent = JSON.stringify(jsonObj);
   
  const fs = require('fs');
  
  fs.writeFile("c:/Users/jayor/Desktop/AOP/out.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
  });
  
  
  const client = require('https');
  
  function downloadImage(url, filepath) {
      return new Promise((resolve, reject) => {
          client.get(url, (res) => {1080
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
  

  
  
  downloadImage(url, "C:/Users/jayor/Desktop/AOP/meme.jpg")
  .then( () =>{
  
  
  
    const sharp = require("sharp")
    sharp("C:/Users/jayor/Desktop/AOP/meme.jpg")
    .resize({
      fit: sharp.fit.contain,
      height: 1920,
      width: 1080
  
    }).toFile("C:/Users/jayor/Desktop/AOP/Story/post.jpg")
    .then(function(newFileInfo) {
  
  
    })
    .catch(function(err) {
        sharp("C:/Users/jayor/Desktop/AOP/Story/post.jpg")
        .resize({
          fit: sharp.fit.contain,
          height: 1920,
          width: 1080
  
      
        }).toFile("C:/Users/jayor/Desktop/AOP/Story/post.jpg")
    .then(function(newFileInfo) {
  
    })
    .catch(function(err) {
        console.log("Error occured");
    });
    
    });
    
  
  
  
  
          const sizeOf = require('image-size')
          const dimensions2 = sizeOf('C:/Users/jayor/Desktop/AOP/meme.jpg')
  
          var des = 608 % dimensions2.height === 0  
          var des2 = dimensions2.height % 608 === 0  
          
          if(des === true || des2 === true){
            sharp("C:/Users/jayor/Desktop/AOP/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              height: 608
          
            }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
            .catch(function(err) {
              sharp("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              .resize({
                fit: sharp.fit.fill,
                height: 608
            
              }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              
          .then(function(newFileInfo) {
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
  
        
          })})
  
  
  
  
  
          } else {
            var des3 = 1350 % dimensions2.height === 0  
          var des4 = dimensions2.height % 1350 === 0  
          
          if(des4 === true || des3 === true){
  
            sharp("C:/Users/jayor/Desktop/AOP/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              height: 1080
          
            }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
            .catch(function(err) {
              sharp("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              .resize({
                fit: sharp.fit.fill,
                height: 1080
            
              }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              
          .then(function(newFileInfo) {
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
  
        
          })})
  
          }else{
            sharp("C:/Users/jayor/Desktop/AOP/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              width: 1080,
              height: 1080
          
            }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
            .catch(function(err) {
              sharp("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              .resize({
                fit: sharp.fit.fill,
                width: 1080
            
              }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              
          .then(function(newFileInfo) {
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
  
        
          })})
  
  
  
  
  
  
          }
        }
  
  
    //       console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
    //       if(parseInt(dimensions2.height) < 808 && parseInt(dimensions2.height) >508){
            // const sharp = require("sharp")
    //               sharp("C:/Users/jayor/Desktop/AOP/meme.jpg")
    //               .resize({
    //                 fit: sharp.fit.fill,
    //                 width: 1080,
    //                 height: 608
              
                    
                
    //               }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
    //               const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    // process.exit()
    //               .catch(function(err) {
    //                 sharp("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
    //                 .resize({
    //                   fit: sharp.fit.fill,
    //                   width: 1080,
    //                   height: 608
                  
    //                 }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
    //             .then(function(newFileInfo) {
    //               const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    //       console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    //       process.exit()
  
              
    //             })})
  
  
  
    //       }else if(parseInt(dimensions2.height) < 1550 && parseInt(dimensions2.height) > 1250){
    //         const sharp = require("sharp")
    //         sharp("C:/Users/jayor/Desktop/AOP/meme.jpg")
    //         .resize({
    //           fit: sharp.fit.fill,
    //           width: 1080,
    //           height: 1350
           
    //         }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
    //         const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    // process.exit()
    //         .catch(function(err) {
    //           sharp("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
    //           .resize({
    //             fit: sharp.fit.fill,
    //             width: 1080,
    //             height: 1350
            
    //           }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
    //       .then(function(newFileInfo) {
    //         const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    // console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    // process.exit()
  
        
    //       })})
  
          // }else {
  
            // const sharp = require("sharp")
            sharp("C:/Users/jayor/Desktop/AOP/meme.jpg")
            .resize({
              fit: sharp.fit.fill,
              width: 1080,
              height: 1080
          
            }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
            .catch(function(err) {
              sharp("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              .resize({
                fit: sharp.fit.fill,
                width: 1080
            
              }).toFile("C:/Users/jayor/Desktop/AOP/finder/meme.jpg")
              
          .then(function(newFileInfo) {
            const dimensions3 = sizeOf('C:/Users/jayor/Desktop/AOP/finder/meme.jpg')
    console.log(parseInt(dimensions3.width), parseInt(dimensions3.height))
    process.exit()
  
        
          })})
  
          // }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
          
  
  
      })
    }else{
      console.log("This is a duplicate post!")
    }
    
  
  
  
  
  
  
  
  
  
  
        // }else{

        //   console.log("Meme is NSFW!")
        // }
       
  
  
  
  
  
  
  
  
  
      // }else{
      //   console.log("Meme is not in the correct format!")

      // }
    }else{
        console.log("Caption length is greater than 145!")
      }
    }else{console.log("The Url is Incorrect")}
  
  
  
  
  // }else{console.log(red +" does not have the sufficient amount of upvotes! RETRYING...")}
   }})}




  var myInterval = setInterval(everyTime, 5000);