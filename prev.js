"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-console */
const instagram_private_api_1 = require("instagram-private-api");
const fs_1 = require("fs");
const util_1 = require("util");
const out_json_1 = __importDefault(require("./out.json"));
const fs_2 = __importDefault(require("fs"));
var min = 60000;
var time = Math.floor(Math.random() * 120000 - 60000);
var num = time + min;
function everyTime() {
    const readFileAsync = (0, util_1.promisify)(fs_1.readFile);
    const ig = new instagram_private_api_1.IgApiClient();
    function login() {
        return __awaiter(this, void 0, void 0, function* () {
            // basic login-procedure
            ig.state.generateDevice("dumbass_kingg");
            yield ig.account.login("dumbass_kingg", "!@#C@nt1256");
        });
    }
    (() => __awaiter(this, void 0, void 0, function* () {
        yield login();
        const path = "C:/Users/jayor/Desktop/dumbass/finder/meme.jpg";
        //   const { latitude, longitude, searchQuery } = {
        //     latitude: 0.0,
        //     longitude: 0.0,
        //     // not required
        //     searchQuery: '',
        //   };
        /**
         * Get the place
         * If searchQuery is undefined, you'll get the nearest places to your location
         * this is the same as in the upload (-configure) dialog in the app
         */
        //   const locations = await ig.search.location(latitude, longitude, searchQuery);
        /**
         * Get the first venue
         * In the real world you would check the returned locations
         */
        //   const mediaLocation = locations[0];
        //   console.log(mediaLocation);
        const publishResult = yield ig.publish.photo({
            // read the file into a Buffer
            file: yield readFileAsync(path),
            // optional, default ''
            caption: out_json_1.default.cap ,
            // optional
            // location: mediaLocation,
            // optional
            // usertags: {
            //   in: [
            //     // tag the user 'instagram' @ (0.5 | 0.5)
            //     await generateUsertagFromName('instagram', 0.5, 0.5),
            //   ],
            // },
        });
        
        console.log("Meme has been posted with caption: " + out_json_1.default.cap );
        var jsonData = `{\"id\":\"${publishResult.media.id}\", \"code\":\"${publishResult.media.code}\"}`;
        // parse json
        var jsonObj = JSON.parse(jsonData);
        // stringify JSON Object
        var jsonContent = JSON.stringify(jsonObj);
        fs_2.default.writeFile("c:/Users/jayor/Desktop/dumbass/id.json", jsonContent, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
        });
        yield ig.media.save(publishResult.media.id);
        // const publishstory = await ig.publish.story({
        //   // read the file into a Buffer
        //   file: await readFileAsync("./black.jpg"),
        //   // optional, default ''
        //   stickerConfig: new StickerBuilder()
        //   // .add(
        //   //   StickerBuilder.hashtag({
        //   //     tagName: `${out.reddit}`,
        //   //   }).bottom(),
        //   // )
        //   // .add(
        //   //   StickerBuilder.slider({
        //   //     question: 'How funny is this?',
        //   //     emoji: '🤣',
        //   //   }).top(),
        //   // )
        //   .add(StickerBuilder.attachmentFromMedia((await ig.feed.saved().items())[0]).center())
        //  .build(),
        //   // optional
        //   // location: mediaLocation,
        //   // optional
        //   // usertags: {
        //   //   in: [
        //   //     // tag the user 'instagram' @ (0.5 | 0.5)
        //   //     await generateUsertagFromName('instagram', 0.5, 0.5),
        //   //   ],
        //   })
        process.exit();
    }))();
    // /**
    //  * Generate a usertag
    //  * @param name - the instagram-username
    //  * @param x - x coordinate (0..1)
    //  * @param y - y coordinate (0..1)
    //  */
    // async function generateUsertagFromName(name: string, x: number, y: number): Promise<{ user_id: number, position: [number, number] }> {
    //   // constrain x and y to 0..1 (0 and 1 are not supported)
    //   x = clamp(x, 0.0001, 0.9999);
    //   y = clamp(y, 0.0001, 0.9999);
    //   // get the user_id (pk) for the name
    //   const { pk } = await ig.user.searchExact(name);
    //   return {
    //     user_id: pk,
    //     position: [x, y],
    //   };
    // }
    // /**
    //  * Constrain a value
    //  * @param value
    //  * @param min
    //  * @param max
    //  */
    // const clamp = (value: number, min: number, max: number) => Math.max(Math.min(value, max), min);
}
var myInterval = setInterval(everyTime, num);
