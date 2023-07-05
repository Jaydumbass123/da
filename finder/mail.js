var nodemailer = require('nodemailer');
var data = require("C:/Users/jayor/Desktop/AOP/id.json")
var out = require("C:/Users/jayor/Desktop/AOP/out.json")

console.log(data.code)

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'jahangirmu03@outlook.com',
    pass: 'T@ra300321',
  }
});

var mailOptions = {
  from: 'jahangirmu03@outlook.com',
  to: 'jayorez29@gmail.com',
  subject: `Meme has been posted on instagram!`,
  text: `https://www.instagram.com/p/${data.code} \nPosted with caption:\n${out.cap}\nWith emoji:\n${out.emoji}\nSubreddit:\n${out.reddit}\nWith hashtags:\n #muslimmemes #halalmemes #halalbanter #muslim #desimemes #memes #growingupmuslim #halaljokes #muslimbanter #arabmemes #brownmemes #halalhumour #islam #muslimjokes #funnymemes #halal #muslimmeme #pakistanimemes #muslimah #meme #harammemes #desi #muslimhumor #muslimhumour #harambanter #banter #desibanter #funny #funnymuslim #halalfunny\nOverall content:\n${out.cap}${out.emoji}\nMuslim Memes & Bantz 😆\nMaking you smile because it's a sunnah 😁\nHave a good day, In'sha'Allah 🤝\n" + "**IGNORE THESE ** \n \n #muslimmemes #halalmemes #halalbanter #muslim #desimemes #memes #growingupmuslim #halaljokes #muslimbanter #arabmemes #brownmemes #halalhumour #islam #muslimjokes #funnymemes #halal #muslimmeme #pakistanimemes #muslimah #meme #harammemes #desi #muslimhumor #muslimhumour #harambanter #banter #desibanter #funny #funnymuslim #halalfunny`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});