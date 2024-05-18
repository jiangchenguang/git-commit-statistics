"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInWorkSpace = void 0;
var node_fs_1 = require("node:fs");
var node_path_1 = __importDefault(require("node:path"));
var spawn_1 = require("./utils/spawn");
var statistics_1 = require("./utils/statistics");
function isInWorkSpace(workspace) {
    if (!(0, node_fs_1.existsSync)(node_path_1.default.join(workspace, 'package.json'))) {
        throw '文件错误：该目录下未找到package.json文件';
    }
}
exports.isInWorkSpace = isInWorkSpace;
var main = function () {
    var workspace = '/Users/digital/Codes/codeup.aliyun.com/dayu/szhz-xhqf/szhz-xhqf-company-zt-pc';
    var author = 'jcg01423690';
    var startDate = '2024-05-12';
    var endDate = '2024-05-19';
    var child = (0, spawn_1.spawnSync)('git', [
        'log',
        "--author=".concat(author),
        "--since=".concat(startDate),
        "--until=".concat(endDate),
        '--pretty=tformat:',
        '--numstat'
    ], {
        cwd: workspace
    });
    var output = [];
    child.stdout.on('data', function (data) {
        output.push(data.toString());
    });
    var file = (0, node_fs_1.createWriteStream)(node_path_1.default.join(workspace, "".concat(author, ".txt")));
    child.stdout.pipe(file);
    child.on('exit', function () {
        file.close();
        console.log('=======output===========', output);
        (0, statistics_1.calcAddedLines)(output);
    });
};
main();
