const chalk = require('chalk');
const log = console.log;
const emoji = {
  success: String.fromCodePoint(0x2705), // ✅
  error: String.fromCodePoint(0x274c), // ❌
  warn: String.fromCodePoint(0x1f625), // 😥
  info: String.fromCodePoint(0x1f535), // 🔵
  debug: String.fromCodePoint(0x1f41b), // 🐛
  start: String.fromCodePoint(0x1f476), // 👶
  build: String.fromCodePoint(0x1f4e6), // 📦
  module: String.fromCodePoint(0x26aa), // ⚪
  waitting: String.fromCodePoint(0x231b), // ⌛
  boosting: String.fromCodePoint(0x1f525), // 🔥
  done: String.fromCodePoint(0x2728), // ✨
};
class CmLog {
  _maxlength = 8;
  _title(emoji, text, color) {
    let spacing = '';
    if (text.length < this._maxlength) {
      for (let i = 0; i < this._maxlength - text.length; i++) {
        spacing += ' ';
      }
    }
    const msg = color ? `${chalk[color](text)}${spacing}` : text + spacing;
    return `${emoji}  ${msg}`;
  }
  success(...msg) {
    log(this._title(emoji.success, 'Success', 'green'), ...msg);
  }
  info(...msg) {
    log(this._title(emoji.info, 'Info', 'blue'), ...msg);
  }
  warn(...msg) {
    log(this._title(emoji.warn, 'Warn', 'yellow'), ...msg);
  }
  debug(...msg) {
    log(this._title(emoji.debug, 'Debug', 'grey'), ...msg);
  }
  waitting(...msg) {
    log(this._title(emoji.waiting, 'Wait', 'grey'), ...msg);
  }
  start(...msg) {
    log(this._title(emoji.start, 'Done'), ...msg);
  }
  done(...msg) {
    log(this._title(emoji.done, 'Done'), ...msg);
  }
  error(e) {
    const [message, ...stack] = e.stack.split(/\n/);
    log(
      this._title(emoji.error, 'Error', 'red'),
      [message, chalk.grey(stack.join('\n'))].join('\n')
    );
  }
  build(...msg) {
    log(this._title(emoji.pack, 'Build', 'magenta'), ...msg);
  }
  module(title, ...msg) {
    log(this._title(emoji.pack, module, 'cyan'), ...msg);
  }
  boosting(...msg) {
    log(this._title(emoji.boosting, 'Boosting', 'magenta'), ...msg);
  }
  json(obj, title) {
    log([this._title(emoji.module, title || 'Log'), JSON.stringify(obj, null, 2)].join('\n'));
  }
  dye(color, ...msg) {
    return chalk[color](...msg);
  }
}
module.exports = new CmLog();
