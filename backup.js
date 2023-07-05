"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
/* tslint:disable:no-console */
var instagram_private_api_1 = require("instagram-private-api");
var fs_1 = require("fs");
var util_1 = require("util");
var out = require("./out.json");
var fs = require("fs");
var date = new Date();
if (date.getDay() == 1) {
    var cap2_1 = "\nDank Mondays! 😆\nLike & Share❤️\nCome Back for Wednesday's Post🤝\n\n**IGNORE THESE **\n##dankmemes #memes #meme #memesdaily #funnymemes #funny #dank #edgymemes #offensivememes #lol #dankmeme #dailymemes #memepage #lmao #memestagram #follow #humor #comedy #bhfyp #lmfao😂😂😂😭 #offensivememes💦👀💯😂😂💎🔥😤💦👌💯😂🙏😂😂💎💎🔥😤💦👀👀 ";
    var readFileAsync_1 = (0, util_1.promisify)(fs_1.readFile);
    var ig_1 = new instagram_private_api_1.IgApiClient();
    function login() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // basic login-procedure
                        ig_1.state.generateDevice("dumbass_kingg");
                        return [4 /*yield*/, ig_1.account.login("dumbass_kingg", "J@hangir!@#456")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    (function () {
        return __awaiter(void 0, void 0, void 0, function () {
            var path, publishResult, _a, _b, jsonData, jsonObj, jsonContent;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, login()];
                    case 1:
                        _d.sent();
                        path = "C:/Users/jayor/Desktop/dumbass/finder/meme.jpg";
                        _b = (_a = ig_1.publish).photo;
                        _c = {};
                        return [4 /*yield*/, readFileAsync_1(path)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [(_c.file = _d.sent(),
                                _c.caption = out.cap + out.emoji + cap2_1,
                                _c)])];
                    case 3:
                        publishResult = _d.sent();
                        jsonData = "{\"id\":\"".concat(publishResult.media.id, "\", \"code\":\"").concat(publishResult.media.code, "\"}");
                        jsonObj = JSON.parse(jsonData);
                        jsonContent = JSON.stringify(jsonObj);
                        fs.writeFile("c:/Users/jayor/Desktop/dumbass/id.json", jsonContent, 'utf8', function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                        });
                        return [4 /*yield*/, ig_1.media.save(publishResult.media.id)];
                    case 4:
                        _d.sent();
                        process.exit();
                        return [2 /*return*/];
                }
            });
        });
    })();
}
if (date.getDay() == 3) {
    var cap2_2 = "\nIRL Wednesday! \uD83D\uDE06\nLike & Share\u2764\uFE0F\nCome Back for Friday's Post\uD83E\uDD1D\n\n**IGNORE THESE **\n#meirl #memes #dankmemes #offensivememes #funnymemes #memesdaily #ol #dailymemes #redditmemes #dankmemesdaily #spicymemes #irl #shitpost #me #memez #meme #dailydoseofmemes #memesfunny #pewdiepie  #dailymemesdrop #memesdailydrop #rarememes #instagramemes #lmfao\uD83D\uDE02\uD83D\uDE02\uD83D\uDE02\uD83D\uDE2D #offensivememes\uD83D\uDCA6\uD83D\uDC40\uD83D\uDCAF\uD83D\uDE02\uD83D\uDE02\uD83D\uDC8E\uD83D\uDD25\uD83D\uDE24\uD83D\uDCA6\uD83D\uDC4C\uD83D\uDCAF\uD83D\uDE02\uD83D\uDE4F\uD83D\uDE02\uD83D\uDE02\uD83D\uDC8E\uD83D\uDC8E\uD83D\uDD25\uD83D\uDE24\uD83D\uDCA6\uD83D\uDC40\uD83D\uDC40 #dailymeme #stupid #memeslut ";
    var readFileAsync_2 = (0, util_1.promisify)(fs_1.readFile);
    var ig_2 = new instagram_private_api_1.IgApiClient();
    function login() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // basic login-procedure
                        ig_2.state.generateDevice("dumbass_kingg");
                        return [4 /*yield*/, ig_2.account.login("dumbass_kingg", "J@hangir!@#456")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    (function () {
        return __awaiter(void 0, void 0, void 0, function () {
            var path, publishResult, _a, _b, jsonData, jsonObj, jsonContent;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, login()];
                    case 1:
                        _d.sent();
                        path = "C:/Users/jayor/Desktop/dumbass/finder/meme.jpg";
                        _b = (_a = ig_2.publish).photo;
                        _c = {};
                        return [4 /*yield*/, readFileAsync_2(path)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [(_c.file = _d.sent(),
                                _c.caption = out.cap + out.emoji + cap2_2,
                                _c)])];
                    case 3:
                        publishResult = _d.sent();
                        jsonData = "{\"id\":\"".concat(publishResult.media.id, "\", \"code\":\"").concat(publishResult.media.code, "\"}");
                        jsonObj = JSON.parse(jsonData);
                        jsonContent = JSON.stringify(jsonObj);
                        fs.writeFile("c:/Users/jayor/Desktop/dumbass/id.json", jsonContent, 'utf8', function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                        });
                        return [4 /*yield*/, ig_2.media.save(publishResult.media.id)];
                    case 4:
                        _d.sent();
                        process.exit();
                        return [2 /*return*/];
                }
            });
        });
    })();
}
if (date.getDay() == 5) {
    var cap2_3 = "\nFridays Memes & Bantz \uD83D\uDE06\nLike & Share\u2764\uFE0F\nCome Back for Monday's Post\uD83E\uDD1D **\n\nIGNORE THESE **\n#meme #memes #funny #dankmemes #memesdaily #funnymemes #memer #shitpost #lmfao\uD83D\uDE02\uD83D\uDE02\uD83D\uDE02\uD83D\uDE2D #offensivememes\uD83D\uDCA6\uD83D\uDC40\uD83D\uDCAF\uD83D\uDE02\uD83D\uDE02\uD83D\uDC8E\uD83D\uDD25\uD83D\uDE24\uD83D\uDCA6\uD83D\uDC4C\uD83D\uDCAF\uD83D\uDE02\uD83D\uDE4F\uD83D\uDE02\uD83D\uDE02\uD83D\uDC8E\uD83D\uDC8E\uD83D\uDD25\uD83D\uDE24\uD83D\uDCA6\uD83D\uDC40\uD83D\uDC40 #dailymeme #memeslut  #memesdailey #offencivememes #memesforlife\u2764\uFE0F #twittermomentsofthedecade #failmemes #funnydidlaugh #enoughinternetfortoday #meme\uD83D\uDE02\uD83D\uDE02\uD83D\uDE02 #memetrash #nerdswag #vidmemes  #f\u30EA\u30FC\u30B0 #dankmemes\uD83D\uDE02 #futfungas #offesivememe ";
    var readFileAsync_3 = (0, util_1.promisify)(fs_1.readFile);
    var ig_3 = new instagram_private_api_1.IgApiClient();
    function login() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // basic login-procedure
                        ig_3.state.generateDevice("dumbass_kingg");
                        return [4 /*yield*/, ig_3.account.login("dumbass_kingg", "J@hangir!@#456")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    (function () {
        return __awaiter(void 0, void 0, void 0, function () {
            var path, publishResult, _a, _b, jsonData, jsonObj, jsonContent;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, login()];
                    case 1:
                        _d.sent();
                        path = "C:/Users/jayor/Desktop/dumbass/finder/meme.jpg";
                        _b = (_a = ig_3.publish).photo;
                        _c = {};
                        return [4 /*yield*/, readFileAsync_3(path)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [(_c.file = _d.sent(),
                                _c.caption = out.cap + out.emoji + cap2_3,
                                _c)])];
                    case 3:
                        publishResult = _d.sent();
                        jsonData = "{\"id\":\"".concat(publishResult.media.id, "\", \"code\":\"").concat(publishResult.media.code, "\"}");
                        jsonObj = JSON.parse(jsonData);
                        jsonContent = JSON.stringify(jsonObj);
                        fs.writeFile("c:/Users/jayor/Desktop/dumbass/id.json", jsonContent, 'utf8', function (err) {
                            if (err) {
                                console.log("An error occured while writing JSON Object to File.");
                                return console.log(err);
                            }
                        });
                        return [4 /*yield*/, ig_3.media.save(publishResult.media.id)];
                    case 4:
                        _d.sent();
                        process.exit();
                        return [2 /*return*/];
                }
            });
        });
    })();
}
