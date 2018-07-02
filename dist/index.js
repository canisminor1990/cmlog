'use strict';

var _assign2 = _interopRequireDefault(require('lodash/assign'));

var _defaults2 = _interopRequireDefault(require('lodash/defaults'));

var _chalk = _interopRequireDefault(require('chalk'));

var _moment = _interopRequireDefault(require('moment'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

const emoji = {
  success: String.fromCodePoint(0x2705),
  // ✅
  error: String.fromCodePoint(0x274c),
  // ❌
  warn: String.fromCodePoint(0x1f625),
  // 😥
  info: String.fromCodePoint(0x1f535),
  // 🔵
  debug: String.fromCodePoint(0x1f41b),
  // 🐛
  start: String.fromCodePoint(0x1f476), // 👶
  pack: String.fromCodePoint(0x1f4e6), // 📦
  module: String.fromCodePoint(0x26aa), // ⚪
  waitting: String.fromCodePoint(0x231b), // ⌛
  boosting: String.fromCodePoint(0x1f525), // 🔥
  done: String.fromCodePoint(0x2728), // ✨
};
class Cmlog {
  constructor(opt = {}) {
    (0, _defaults2.default)(opt, {
      align: true,
      maxLength: 8,
      debug: true,
      time: false,
    });
    this.opt = opt;
  }
  _getTitle(emoji, text, color) {
    const maxLength = this.opt.maxLength;
    let spacing = '';
    if (this.opt.align && text.length < maxLength) {
      for (let i = 0; i < maxLength - text.length; i++) {
        spacing += ' ';
      }
    }
    const msg = color ? `${_chalk.default[color](text)}${spacing}` : text + spacing;
    return `${emoji}  ${msg}`;
  }
  log(...msg) {
    this.opt.time
      ? console.log(_chalk.default.grey(`[${(0, _moment.default)().format('hh:mm:ss')}]`), ...msg)
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
    const _e$stack$split = e.stack.split(/\n/),
      _e$stack$split2 = _toArray(_e$stack$split),
      message = _e$stack$split2[0],
      stack = _e$stack$split2.slice(1);
    this.log(
      this._getTitle(emoji.error, 'Error', 'red'),
      [message, _chalk.default.grey(stack.join('\n'))].join('\n')
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
    return _chalk.default[color](...msg);
  }
}
const cmlog = new Cmlog();
module.exports = (0, _assign2.default)(cmlog, {
  Cmlog,
});
