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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-console */
var instagram_private_api_1 = require("instagram-private-api");
var fs_1 = require("fs");
var util_1 = require("util");
var out = require("./out.json");
var fs = require("fs");
var date = new Date();
if (date.getDay() == 0) {
    var td = "Sunday";
}
else {
}
if (date.getDay() == 1) {
    var td = "Monday";
}
else {
}
if (date.getDay() == 2) {
    var td = "Tuesday";
}
else {
}
if (date.getDay() == 3) {
    var td = "Wednesday";
}
else {
}
if (date.getDay() == 4) {
    var td = "Thursday";
}
else {
}
if (date.getDay() == 5) {
    var td = "Friday";
}
else {
}
if (date.getDay() == 6) {
    var td = "Saturday";
}
var emoji = ["😂", "😆", "🤣", "😅", "😬", "😂😂", "😂🤣", "😅😅", "😬😬", "🤣🤣", "🤣😅", "😆😆", "😆🤣", "😆😅"];
var emojis1 = Math.floor(Math.random() * emoji.length);
var pt = [1, 2];
var pt1 = Math.floor(Math.random() * pt.length);
// Read the contents of the file into a string
var jsonDataString = fs.readFileSync('C:/Users/jayor/Desktop/AOP/finder/posted.json', 'utf8');
// Parse the JSON string into a JavaScript object
var jsonData = JSON.parse(jsonDataString);
// Use the parsed object as needed
if (1 == pt[pt1]) {
    var posttype = "Dank";
    var Hash = "#deepfriedmemes #sledgang #stolenmemes #wholesomememes #dankmemes #darkmemes #memecucks #dadjokes #memedaily #memes #memestar #memestagram #funnymemes #ironicmemes #memes4days #nicememes #instagrammemes #cringememes #redditmemes #lmaomemes #memedealer #pewdiepie #shitposts #darkhumour #memesforlife #edgymemesforedgyteens";
}
if (2 == pt[pt1]) {
    var posttype = "Me IRL";
    var Hash = "#deepfriedmemes #sledgang #stolenmemes #wholesomememes #dankmemes #darkmemes #memecucks #dadjokes #memedaily #memes #memestar #memestagram #funnymemes #ironicmemes #memes4days #nicememes #instagrammemes #cringememes #redditmemes #lmaomemes #memedealer #pewdiepie #shitposts #darkhumour #memesforlife #edgymemesforedgyteens";
}
var cap2 = "\n" + posttype + " " + td + "s! " + emoji[emojis1] + "\nLike & Share❤️\nFollow for the next Post🤝\n\n**IGNORE THESE **\n " + Hash + " ";
var readFileAsync = (0, util_1.promisify)(fs_1.readFile);
var ig = new instagram_private_api_1.IgApiClient();
function login() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // basic login-procedure
                    ig.state.generateDevice("dumbass_kingg");
                    return [4 /*yield*/, ig.account.login("dumbass_kingg", "J@hangir!@#456")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var path, publishResult, _a, _b, jsonData, jsonObj, jsonContent;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, login()];
            case 1:
                _d.sent();
                path = "C:/Users/jayor/Desktop/AOP/finder/meme.jpg";
                _b = (_a = ig.publish).photo;
                _c = {};
                return [4 /*yield*/, readFileAsync(path)];
            case 2: return [4 /*yield*/, _b.apply(_a, [(_c.file = _d.sent(),
                        _c.caption = out.cap + out.emoji + cap2,
                        _c)])];
            case 3:
                publishResult = _d.sent();
                jsonData = "{\"id\":\"".concat(publishResult.media.id, "\", \"code\":\"").concat(publishResult.media.code, "\"}");
                jsonObj = JSON.parse(jsonData);
                jsonContent = JSON.stringify(jsonObj);
                fs.writeFile("c:/Users/jayor/Desktop/AOP/id.json", jsonContent, 'utf8', function (err) {
                    if (err) {
                        console.log("An error occured while writing JSON Object to File.");
                        return console.log(err);
                    }
                });
                return [4 /*yield*/, ig.media.save(publishResult.media.id)];
            case 4:
                _d.sent();
                process.exit();
                return [2 /*return*/];
        }
    });
}); })();
