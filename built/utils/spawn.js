"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnSync = void 0;
var cross_spawn_1 = __importDefault(require("cross-spawn"));
var spawnSync = function (command, args, opts) {
    if (args === void 0) { args = []; }
    if (opts === void 0) { opts = {}; }
    return (0, cross_spawn_1.default)(command, args, __assign({}, opts));
};
exports.spawnSync = spawnSync;
