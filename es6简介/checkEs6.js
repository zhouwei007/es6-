'use strict';
require('babel-register');
require('../index');
var babel = require('babel-core');
var es6Code = 'let x = n => n + 1';
var es5Code = require('babel-core')
    .transform(es6Code, {
        presets: ['stage-2']
    })
    .code;
