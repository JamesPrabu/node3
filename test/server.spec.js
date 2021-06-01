"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
mocha_1.describe('Server Test', function () {
    it('should run the server', function () {
        chai_1.expect('10').to.equal('10');
    });
});
