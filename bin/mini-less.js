#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const program = require('commander')
const chalk = require('chalk')
const acssWatch = require('../lib/watch-acss.js')
const wxssWatch = require('../lib/watch-wxss.js')
program
  .version(require('../package').version)
  .usage('[options] <path>')
  .option('-a, --acss <path>', '监听less产生支付宝小程序acss', watchAcss)
  .option('-w, --wxss <path>', '监听less产生微信小程序wxss', watchWxss)
  // .parse(process.argv);

function watchAcss(dir) {
  console.log(dir)
  fs.stat(dir, (err, stats) => {
    if (err) console.log(chalk.yellow(err))
    else {
      console.log(chalk.bgMagenta.white('working... '))
      acssWatch(dir)
    }
  })
}
function watchWxss(dir) {
  fs.stat(dir, (err, stats) => {
    if (err) console.log(chalk.yellow(err))
    else {
      console.log(chalk.bgMagenta.white('working... '))
      wxssWatch(dir)
    }
  })
}

program
  .on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`acss <command> --help`)} for detailed usage of given command.`)
    console.log()
  })

program.parse(process.argv)