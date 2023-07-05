



const Instagram = require('instagram-web-api')

const accnt = require("./accounts.json")

let accounts = ["account1","account2","account3","account4","account5","account6","account7","account8"]
var ran = Math.floor(Math.random() * 20000) + 4500;
 accounts.forEach( acc => {
    setTimeout(function() { 

    if(acc = "account1"){
        const FileCookieStore = require('tough-cookie-filestore2')


const cookieStore = new FileCookieStore('./cookies.json')
        
        var username = accnt.account1.user
     var password = accnt.account1.pass
     var idjs = require("../Insta p l/id.json")
     var unid = idjs.id
     var argsid = JSON.stringify(unid).split("_")


    const client = new Instagram({ username, password, cookieStore })
    client.login().then(async () => {
        await client.like({ mediaId: argsid[0] })
        console.log("Post has been liked by " + accnt.account1.user )
        await client.logout()

    })




    } else     if(acc = "account2"){
        const FileCookieStore = require('tough-cookie-filestore2')


const cookieStore = new FileCookieStore('./cookies.json')
        var username = accnt.account2.user
     var password = accnt.account2.pass
     var idjs = require("../Insta p l/id.json")
     var unid = idjs.id
     var argsid = JSON.stringify(unid).split("_")


    const client = new Instagram({ username, password, cookieStore })
    client.login().then(async () => {
        await client.like({ mediaId: argsid[0] })
        console.log("Post has been liked by " + accnt.account2.user )
        await client.logout()

    })




    }

else     if(acc = "account3"){
    const FileCookieStore = require('tough-cookie-filestore2')


    const cookieStore = new FileCookieStore('./cookies.json')
    var username = accnt.account3.user
 var password = accnt.account3.pass
 var idjs = require("../Insta p l/id.json")
 var unid = idjs.id
 var argsid = JSON.stringify(unid).split("_")


const client = new Instagram({ username, password, cookieStore })
client.login().then(async () => {
    await client.like({ mediaId: argsid[0] })
    console.log("Post has been liked by " + accnt.account3.user )
    await client.logout()
})




}
else     if(acc = "account4"){
    const FileCookieStore = require('tough-cookie-filestore2')


    const cookieStore = new FileCookieStore('./cookies.json')
    var username = accnt.account4.user
 var password = accnt.account4.pass
 var idjs = require("../Insta p l/id.json")
 var unid = idjs.id
 var argsid = JSON.stringify(unid).split("_")


const client = new Instagram({ username, password, cookieStore })
client.login().then(async () => {
    await client.like({ mediaId: argsid[0] })
    console.log("Post has been liked by " + accnt.account4.user )
    await client.logout()

})




}else     if(acc = "account5"){
    const FileCookieStore = require('tough-cookie-filestore2')


    const cookieStore = new FileCookieStore('./cookies.json')
    var username = accnt.account5.user
 var password = accnt.account5.pass
 var idjs = require("../Insta p l/id.json")
 var unid = idjs.id
 var argsid = JSON.stringify(unid).split("_")


const client = new Instagram({ username, password, cookieStore })
client.login().then(async () => {
    await client.like({ mediaId: argsid[0] })
    console.log("Post has been liked by " + accnt.account5.user )
    await client.logout()

})




}else     if(acc = "account6"){
    const FileCookieStore = require('tough-cookie-filestore2')


    const cookieStore = new FileCookieStore('./cookies.json')
    var username = accnt.account6.user
 var password = accnt.account6.pass
 var idjs = require("../Insta p l/id.json")
 var unid = idjs.id
 var argsid = JSON.stringify(unid).split("_")


const client = new Instagram({ username, password, cookieStore })
client.login().then(async () => {
    await client.like({ mediaId: argsid[0] })
    console.log("Post has been liked by " + accnt.account6.user )
    await client.logout()

})




}else     if(acc = "account7"){
    const FileCookieStore = require('tough-cookie-filestore2')


    const cookieStore = new FileCookieStore('./cookies.json')
    var username = accnt.account7.user
 var password = accnt.account7.pass
 var idjs = require("../Insta p l/id.json")
 var unid = idjs.id
 var argsid = JSON.stringify(unid).split("_")


 const client = new Instagram({ username, password, cookieStore })
 client.login().then(async () => {
    await client.like({ mediaId: argsid[0] })
    console.log("Post has been liked by " + accnt.account7.user )
    await client.logout()

})




}else     if(acc = "account8"){
    const FileCookieStore = require('tough-cookie-filestore2')


    const cookieStore = new FileCookieStore('./cookies.json')
    var username = accnt.account8.user
 var password = accnt.account8.pass
 var idjs = require("../Insta p l/id.json")
 var unid = idjs.id
 var argsid = JSON.stringify(unid).split("_")


const client = new Instagram({ username, password, cookieStore })
client.login().then(async () => {
    await client.like({ mediaId: argsid[0] })
    console.log("Post has been liked by " + accnt.account8.user )
    console.log("Operation has been completed!" )
    await client.logout()


})




}

     
}, ran);


 })

