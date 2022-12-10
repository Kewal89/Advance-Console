"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var VSConsole = function (props) {
    var _a, _b;
    var CONSOLE_TYPE = (_a = props.type) !== null && _a !== void 0 ? _a : "info";
    var COLOR_LABEL_TEXT = (_b = props.whole) !== null && _b !== void 0 ? _b : false;
    var RED_TEXT = "\u001b[1;31m";
    var GREEN_TEXT = "\u001b[1;32m";
    var YELLOW_TEXT = "\u001b[1;33m";
    var BLUE_TEXT = "\u001b[1;34m";
    var PURPLE_TEXT = "\u001b[1;35m";
    var CYAN_TEXT = "\u001b[1;36m";
    var RED_BG = "\u001b[1;41m";
    var GREEN_BG = "\u001b[1;42m";
    var YELLOW_BG = "\u001b[1;43m";
    var BLUE_BG = "\u001b[1;44m";
    var PURPLE_BG = "\u001b[1;45m";
    var CYAN_BG = "\u001b[1;46m";
    var RESET_ALL = "\u001b[0m";
    var renderText = ""; // Console Text
    var conText = ""; // Console Text Color
    var conBG = ""; // Console Text Background
    if (props.textColor === "red") {
        conText = RED_TEXT;
    }
    else if (props.textColor === "green") {
        conText = GREEN_TEXT;
    }
    else if (props.textColor === "yellow") {
        conText = YELLOW_TEXT;
    }
    else if (props.textColor === "blue") {
        conText = BLUE_TEXT;
    }
    else if (props.textColor === "purple") {
        conText = PURPLE_TEXT;
    }
    else if (props.textColor === "cyan") {
        conText = CYAN_TEXT;
    }
    if (props.bgColor === "red") {
        conBG = RED_BG;
    }
    else if (props.bgColor === "green") {
        conBG = GREEN_BG;
    }
    else if (props.bgColor === "yellow") {
        conBG = YELLOW_BG;
    }
    else if (props.bgColor === "blue") {
        conBG = BLUE_BG;
    }
    else if (props.bgColor === "purple") {
        conBG = PURPLE_BG;
    }
    else if (props.bgColor === "cyan") {
        conBG = CYAN_BG;
    }
    if (props.highlight && props.text) {
        conBG = conBG ? conBG : GREEN_BG;
        var HIGHLIGHT_TEXT = [];
        if (typeof props.highlight === "string")
            HIGHLIGHT_TEXT = [props.highlight];
        else if (Array.isArray(props.highlight)) {
            var HT_SET = new Set(props.highlight);
            HIGHLIGHT_TEXT = __spreadArray([], HT_SET, true);
        }
        for (var i = 0; i < HIGHLIGHT_TEXT.length; i++) {
            var RegExText = new RegExp(HIGHLIGHT_TEXT[i], "g");
            renderText += props.label + JSON.stringify(props.text).toString().replace(RegExText, conText + conBG + HIGHLIGHT_TEXT[i] + RESET_ALL);
            console.info("DEBUGGING :", HIGHLIGHT_TEXT[i]);
        }
    }
    else {
        renderText = conText + conBG + props.label + (COLOR_LABEL_TEXT ? "" : RESET_ALL) + (props.text ? JSON.stringify(props.text) : "") + RESET_ALL;
    }
    // console.info("===DEBUG===\n", renderText)
    try {
        if (CONSOLE_TYPE === "info") {
            console.info(renderText);
        }
        else if (CONSOLE_TYPE === "log") {
            console.log(renderText);
        }
        else if (CONSOLE_TYPE === "warn") {
            console.warn(renderText);
        }
        else if (CONSOLE_TYPE === "error") {
            console.error(renderText);
        }
    }
    catch (err) {
        console.info("===FALLBACK CONSOLE===\n", props.text);
    }
};
var BSConsole = function () {
    return true;
};
module.exports = { VSConsole: VSConsole, BSConsole: BSConsole };
// Usage
// var randomText = "{Accuracy: 10, latitude: 12, limit: 10}"
// Basic Usage
// VSConsole({ label: "Location Permission Denied", type: "info", textColor: "yellow", bgColor: "blue" })
// Highlight Text
// VSConsole({ label: "Position :", text: randomText, highlight: "Accuracy", bgColor: "cyan" })
// Highlight Multiple Text
// VSConsole({ label: "Position :", text: position, highlight: ["latitude", "longitude"] })
