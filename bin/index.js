#!/usr/bin/env node

var inquirer = require('inquirer');
var program = require('commander');
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require('fs-extra'));
var chalk = require('chalk');
var figlet = require('figlet');
var ora = require('ora');
var exec = require('promise-exec');

console.log(
	chalk.green(
		figlet.textSync("NODE CLI")
	)
);