import chalk from 'chalk';
import { defaults, assign } from 'lodash';
import moment from 'moment';

const emoji = {
  success: String.fromCodePoint(0x2705), // ✅
  error: String.fromCodePoint(0x274c), // ❌
  warn: String.fromCodePoint(0x1f625), // 😥
  info: String.fromCodePoint(0x1f535), // 🔵
  debug: String.fromCodePoint(0x1f41b), // 🐛
  start: String.fromCodePoint(0x1f476), // 👶
  pack: String.fromCodePoint(0x1f4e6), // 📦
  module: String.fromCodePoint(0x26aa), // ⚪
  waitting: String.fromCodePoint(0x231b), // ⌛
  boosting: String.fromCodePoint(0x1f525), // 🔥
  done: String.fromCodePoint(0x2728), // ✨
};
class Cmlog {
  constructor(opt = {}) {
    defaults(opt, {
      align: true,
      maxLength: 8,
      debug: true,
      time: false,
    });
    this.opt = opt;
  }
  _getTitle(emoji, text, color) {
    const { maxLength } = this.opt;
    let spacing = '';
    if (this.opt.align && text.length < maxLength) {
      for (let i = 0; i < maxLength - text.length; i++) {
        spacing += ' ';
      }
    }
    const msg = color ? `${chalk[color](text)}${spacing}` : text + spacing;
    return `${emoji}  ${msg}`;
  }
  log(...msg) {
    this.opt.time
      ? console.log(chalk.grey(`[${moment().format('hh:mm:ss')}]`), ...msg)
      : console.log(...msg);
  }
  success(...msg) {
    this.log(this._getTitle(emoji.success, 'Success', 'green'), ...msg);
  }
  info(...msg) {
    this.log(this._getTitle(emoji.info, 'Info', 'blue'), ...msg);
  }
  warn(...msg) {
    this.log(this._getTitle(emoji.warn, 'Warn', 'yellow'), ...msg);
  }
  debug(...msg) {
    if (!this.opt.debug) return;
    this.log(this._getTitle(emoji.debug, 'Debug', 'grey'), ...msg);
  }
  waitting(...msg) {
    this.log(this._getTitle(emoji.waiting, 'Wait', 'grey'), ...msg);
  }
  start(...msg) {
    this.log(this._getTitle(emoji.start, 'Done'), ...msg);
  }
  done(...msg) {
    this.log(this._getTitle(emoji.done, 'Done'), ...msg);
  }
  error(e) {
    const [message, ...stack] = e.stack.split(/\n/);
    this.log(
      this._getTitle(emoji.error, 'Error', 'red'),
      [message, chalk.grey(stack.join('\n'))].join('\n')
    );
  }
  boosting(...msg) {
    this.log(this._getTitle(emoji.boosting, 'Boosting', 'magenta'), ...msg);
  }
  pack(title, ...msg) {
    this.log(this._getTitle(emoji.pack, title, 'magenta'), ...msg);
  }
  module(title, ...msg) {
    this.log(this._getTitle(emoji.pack, title, 'cyan'), ...msg);
  }
  json(obj, title) {
    this.log(
      [this._getTitle(emoji.module, title || 'Log'), JSON.stringify(obj, null, 2)].join('\n')
    );
  }
  dye(color, ...msg) {
    return chalk[color](...msg);
  }
}
const cmlog = new Cmlog();
module.exports = assign(cmlog, {
  Cmlog,
});
