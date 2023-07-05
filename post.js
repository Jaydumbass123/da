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
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-console */
const instagram_private_api_2 = require("instagram-private-api");
const fs_2 = require("fs");
const util_2 = require("util");
const out_json_1 = require("./out.json");
const fs_3 = require("fs");
const readFileAsync = (0, util_2.promisify)(fs_2.readFile);
const ig = new instagram_private_api_2.IgApiClient();
function login() {
    return __awaiter(this, void 0, void 0, function* () {
        ig.state.generateDevice("mispbot__");
        yield ig.account.login("mispbot__", "BobTheBuilder71");
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield login();
    const path = "C:/Users/Jay/Desktop/DANDD/misp.jpg";
    const misp = require("./misp.json");
    const publishResult = yield ig.publish.photo({
        file: yield readFileAsync(path),
        caption: misp.cap + out_json_1.default.emoji + "\n" + "Show the post some love ♥️",
    });
    var jsonData = `{\"id\":\"${publishResult.media.id}\"}`;
    var jsonObj = JSON.parse(jsonData);
    var jsonContent = JSON.stringify(jsonObj);
    fs_3.default.writeFile("c:/Users/Jay/Desktop/Insta p l/id.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    });
}))();
