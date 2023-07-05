// var rpd = require("C:/Users/jayor/Desktop/dumbass/finder/randompd.js")
// var ind = require("C:/Users/jayor/Desktop/dumbass/index.js")
// var mail = require("C:/Users/jayor/Desktop/dumbass/finder/mail.js")


require('child_process').fork('C:/Users/jayor/Desktop/dumbass/finder/randompd.js'); //change the path depending on where the file is.
require('child_process').fork("C:/Users/jayor/Desktop/dumbass/index.js"); //change the path depending on where the file is.
require('child_process').fork("C:/Users/jayor/Desktop/dumbass/finder/mail.js"); //change the path depending on where the file is.
