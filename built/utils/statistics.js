"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAddedLines = void 0;
// 根据git log输出，分析出新增的行数总和
var calcAddedLines = function (output) {
    var afterFormat = [];
    for (var _i = 0, output_1 = output; _i < output_1.length; _i++) {
        var lines = output_1[_i];
        var lineList = lines.split('\n');
        for (var _a = 0, lineList_1 = lineList; _a < lineList_1.length; _a++) {
            var line = lineList_1[_a];
            var r = format(line);
            if (r) {
                afterFormat.push(r);
            }
        }
    }
    var sum = afterFormat.reduce(function (prev, curr) {
        return prev + curr.add;
    }, 0);
    console.log('==================', afterFormat, sum);
};
exports.calcAddedLines = calcAddedLines;
var format = function (oneLine) {
    var add = null;
    var fileName = null;
    var reg = /(\d+)\t(\d+)\t(.*)$/;
    var rlt = reg.exec(oneLine);
    if (rlt !== null) {
        add = Number(rlt[1]);
        fileName = rlt[3];
    }
    return (add !== null && fileName !== null) ? { add: add, fileName: fileName } : null;
};
