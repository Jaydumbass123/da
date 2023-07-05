
function everyTime() {

    const axios = require('axios').default;

    
// Make a request for a user with a given ID
var array = ["AdviceAnimals","MemeEconomy","MemeCemetery","memes","dankmemes","PrequelMemes","funny","teenagers","im14andthisisdeep","trippinthroughtime","pewdiepiesubmissions","suicidebywords","madlads","devilmaycry","Animemes","PoliticalCompassMemes","2meirl4meirl","comedymemes","dogmemes","Catmemes"]
var red = array[Math.floor(Math.random() * array.length)]
axios.get('https://meme-api.herokuapp.com/gimme/'+ red)
  .then(function (response) {
    // handle success
    var ups = response.data.ups
    var url = response.data.url
    var cap = response.data.title
  
  if (ups> 600){
  console.log(`Meme Found: caption: ${cap} subreddit:${red} url:${url}`)

  if(cap > 125){
        
    var text = argss[11].substring(0, 125)//cuts to 1024
     var last = text.lastIndexOf(" ")//gets last space (to avoid cutting the middle of a word)
     var text = text.substring(0, last)//cuts from last space (to avoid cutting the middle of a word)
     var cap = text
 JSON.stringify(cap).length
}else{
var cap = cap}
  
 




  var array = ["😂","🤣","👌","❤️"]
const rando1 = array[Math.floor(Math.random() * array.length)];
const rando2 = array[Math.floor(Math.random() * array.length)];
const rando = rando1 + rando2



const fs = require('fs');
var jsonData = `{\"cap\":\"${cap}\", \"emoji\":\"${rando}\", \"reddit\":\"${red}\"}`;
 
// parse json
var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);
 
// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
 
fs.writeFile("c:/Users/Jay/Desktop/Insta p l/out.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
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
        const sizeOf = require('image-size')
        const dimensions = sizeOf('C:/Users/Jay/Desktop/Insta p l/meme.jpg')
        console.log(parseInt(dimensions.width), parseInt(dimensions.height))










          const sharp = require("sharp")
            sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
            .resize(1080, 1920, {
                fit: sharp.fit.inside,
              withoutEnlargement: false, 
            }).toFile("C:/Users/Jay/Desktop/Insta p l/Story/post.jpg")
            .then(function(newFileInfo) {

        
            })
            .catch(function(err) {
                sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                .resize(1080, 1920, {
                    fit: sharp.fit.inside,
                  withoutEnlargement: false, 
                }).toFile("C:/Users/Jay/Desktop/Insta p l/Story/post.jpg")
            .then(function(newFileInfo) {
        
            })
            .catch(function(err) {
                console.log("Error occured");
            });
            
            });
            
            
          










        
        if(parseInt(dimensions.height) === 800 ){

          setInterval(
              function(){ const sharp = require("sharp")
              sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
              .resize(1080, 1080, {
                fit: sharp.fit.inside,
                withoutEnlargement: false, 
              }).toFile("./meme.jpg")
              .then(function(newFileInfo) {
                  console.log("Success, Image has been resized to 1080x1080");
                  const dimensions2 = sizeOf('./meme.jpg')
      console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                  process.exit()
          
              })
              .catch(function(err) {
                  sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                  .resize(1080, 1080, {
                    fit: sharp.fit.inside,
                    withoutEnlargement: false, 
                  }).toFile("./meme.jpg")
              .then(function(newFileInfo) {
                  console.log("Success, Image has been resized to 1080x1080");
                  const dimensions2 = sizeOf('./meme.jpg')
                  console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                  process.exit()
          
              })
              .catch(function(err) {
                  console.log("Error occured");
              });
              
              });
              
              
               },
              5000
            );
              }else if(parseInt(dimensions.width) === 800 ){

          setInterval(
              function(){ const sharp = require("sharp")
              sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
              .resize(1080, 1080, {
                fit: sharp.fit.inside,
                withoutEnlargement: false, 
              }).toFile("./meme.jpg")
              .then(function(newFileInfo) {
                  console.log("Success, Image has been resized to 1080x1080");
                  const dimensions2 = sizeOf('./meme.jpg')
      console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                  process.exit()
          
              })
              .catch(function(err) {
                  sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                  .resize(1080, 1080, {
                    fit: sharp.fit.inside,
                    withoutEnlargement: false, 
                  }).toFile("./meme.jpg")
              .then(function(newFileInfo) {
                  console.log("Success, Image has been resized to 1080x1080");
                  const dimensions2 = sizeOf('./meme.jpg')
                  console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                  process.exit()
          
              })
              .catch(function(err) {
                  console.log("Error occured");
              });
              
              });
              
              
               },
              5000
            );
              }else if(parseInt(dimensions.width) > 800 && parseInt(dimensions.height) < 1100){

            setInterval(
                function(){ const sharp = require("sharp")
                sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                .resize(1080, 1080, {
                  fit: sharp.fit.inside,
                  withoutEnlargement: false, 
                }).toFile("./meme.jpg")
                .then(function(newFileInfo) {
                    console.log("Success, Image has been resized to 1080x1080");
                    const dimensions2 = sizeOf('./meme.jpg')
        console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                    process.exit()
            
                })
                .catch(function(err) {
                    sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                    .resize(1080, 1080, {
                      fit: sharp.fit.inside,
                      withoutEnlargement: false, 
                    }).toFile("./meme.jpg")
                .then(function(newFileInfo) {
                    console.log("Success, Image has been resized to 1080x1080");
                    const dimensions2 = sizeOf('./meme.jpg')
                    console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                    process.exit()
            
                })
                .catch(function(err) {
                    console.log("Error occured");
                });
                
                });
                
                
                 },
                5000
              );
                }else if(parseInt(dimensions.width) > 1100 && parseInt(dimensions.height) < 850){

                    setInterval(
                        function(){ const sharp = require("sharp")
                        sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                        .resize(1080, 1080, {
                          fit: sharp.fit.inside,
                          withoutEnlargement: false, 
                        }).toFile("./meme.jpg")
                        .then(function(newFileInfo) {
                            console.log("Success");
                            console.log("Success, Image has been resized to 1080x1080");

                            const dimensions2 = sizeOf('./meme.jpg')
                            console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                            process.exit()
                    
                        })
                        .catch(function(err) {
                            sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                            .resize(1080, 1080, {
                              fit: sharp.fit.inside,
                              withoutEnlargement: false, 
                            }).toFile("./meme.jpg")
                        .then(function(newFileInfo) {
                            console.log("Success, Image has been resized to 1080x1080");
                            const dimensions2 = sizeOf('./meme.jpg')
                            console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                            process.exit()
                    
                        })
                        .catch(function(err) {
                            console.log("Error occured");
                        });
                        
                        });
                        
                        
                         },
                        5000
                      );
                        }else if(parseInt(dimensions.width) < 600 && parseInt(dimensions.height) < 600){

                            setInterval(
                                function(){ const sharp = require("sharp")
                                sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                                .resize(1080, 1080, {
                                  fit: sharp.fit.inside,
                                  withoutEnlargement: false, 
                                }).toFile("./meme.jpg")
                                .then(function(newFileInfo) {
                                    console.log("Success");
                                    const dimensions2 = sizeOf('./meme.jpg')
                                    console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                                    process.exit()
                            
                                })
                                .catch(function(err) {
                                    sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                                    .resize(1080, 1080, {
                                      fit: sharp.fit.inside,
                                      withoutEnlargement: false, 
                                    }).toFile("./meme.jpg")
                                .then(function(newFileInfo) {
                                    console.log("Success, Image has been resized to 1080x1080");
                                    const dimensions2 = sizeOf('./meme.jpg')
                                    console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                                    process.exit()
                            
                                })
                                .catch(function(err) {
                                    console.log("Error occured");
                                });
                                
                                });
                                
                                
                                 },
                                5000
                              );
                                }

                                else if(parseInt(dimensions.width) > 1100 || parseInt(dimensions.height) < 8950){

                                    setInterval(
                                        function(){ const sharp = require("sharp")
                                        sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                                        .resize(1080, 1080, {
                                          fit: sharp.fit.inside,
                                          withoutEnlargement: false, 
                                        }).toFile("./meme.jpg")
                                        .then(function(newFileInfo) {
                                            console.log("Success");
                                            const dimensions2 = sizeOf('./meme.jpg')
                                            console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                                            process.exit()
                                    
                                        })
                                        .catch(function(err) {
                                            sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                                            .resize(1080, 1080, {
                                              fit: sharp.fit.inside,
                                              withoutEnlargement: false, 
                                            }).toFile("./meme.jpg")
                                        .then(function(newFileInfo) {
                                            console.log("Success, Image has been resized to 1080x1080");
                                            const dimensions2 = sizeOf('./meme.jpg')
                                            console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                                            process.exit()
                                    
                                        })
                                        .catch(function(err) {
                                            console.log("Error occured");
                                        });
                                        
                                        });
                                        
                                        
                                         },
                                        5000
                                      );
                                        }

        else if(parseInt(dimensions.width) > parseInt(dimensions.height)){

        setInterval(
            function(){ const sharp = require("sharp")
            sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
            .resize(566, 1080, {
              fit: sharp.fit.inside,
              withoutEnlargement: false, 
            }).toFile("./meme.jpg")
            .then(function(newFileInfo) {
                console.log("Success, Image has been resized to 1080x566");
                const dimensions2 = sizeOf('./meme.jpg')
                console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                process.exit()
        
            })
            .catch(function(err) {
                sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                .resize(566, 1080, {
                  fit: sharp.fit.inside,
                  withoutEnlargement: false, 
                }).toFile("./meme.jpg")
            .then(function(newFileInfo) {
                console.log("Success, Image has been resized to 1080x566");
                const dimensions2 = sizeOf('./meme.jpg')
                console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                process.exit()
        
            })
            .catch(function(err) {
                console.log("Error occured");
            });
            
            });
            
            
             },
            5000
          );
            }




            else if(parseInt(dimensions.width) < parseInt(dimensions.height)){

              setInterval(
                  function(){ const sharp = require("sharp")
                  sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                  .resize(1350, 1080, {
                    fit: sharp.fit.inside,
                    withoutEnlargement: false, 
                  }).toFile("./meme.jpg")
                  .then(function(newFileInfo) {
                      console.log("Success, Image has been resized to 1080x1350");
                      const dimensions2 = sizeOf('./meme.jpg')
                      console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                      process.exit()
              
                  })
                  .catch(function(err) {
                      sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                      .resize(1350, 1080, {
                        fit: sharp.fit.inside,
                        withoutEnlargement: false, 
                      }).toFile("./meme.jpg")
                  .then(function(newFileInfo) {
                      console.log("Success, Image has been resized to 1080x1350");
                      const dimensions2 = sizeOf('./meme.jpg')
                      console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                      process.exit()
              
                  })
                  .catch(function(err) {
                      console.log("Error occured");
                  });
                  
                  });
                  
                  
                   },
                  5000
                );
                  } else {

                    setInterval(
                        function(){ const sharp = require("sharp")
                        sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                        .resize(1080, 1080, {
                          fit: sharp.fit.inside,
                          withoutEnlargement: false, 
                        }).toFile("./meme.jpg")
                        .then(function(newFileInfo) {
                            console.log("Success, Image has been resized to 1080x1080");
                            const dimensions2 = sizeOf('./meme.jpg')
                            console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                            process.exit()
                    
                        })
                        .catch(function(err) {
                            sharp("C:/Users/Jay/Desktop/Insta p l/meme.jpg")
                            .resize(1080, 1080, {
                              fit: sharp.fit.inside,
                              withoutEnlargement: false, 
                            }).toFile("./meme.jpg")
                        .then(function(newFileInfo) {
                            console.log("Success, Image has been resized to 1080x1080");
                            const dimensions2 = sizeOf('./meme.jpg')
                            console.log(parseInt(dimensions2.width), parseInt(dimensions2.height))
                            process.exit()
                    
                        })
                        .catch(function(err) {
                            console.log("Error occured");
                        });
                        
                        });
                        
                        
                         },
                        5000
                      );
                        }











             } )
    .catch(console.error);












}


})


}

var myInterval = setInterval(everyTime, 5000);
