'use strict';

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var chalk = require('chalk');

var log = console.log;
var emoji = {
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
var Cmlog /* #__PURE__ */ = (function() {
  function Cmlog() {
    var _this = this;
    _classCallCheck(this, Cmlog);
    this._maxlength = 8;
    this._title = function(emoji, text, color) {
      var spacing = '';
      if (text.length < _this._maxlength) {
        for (var i = 0; i < _this._maxlength - text.length; i++) {
          spacing += ' ';
        }
      }
      var msg = color ? ''.concat(chalk[color](text)).concat(spacing) : text + spacing;
      return ''.concat(emoji, '  ').concat(msg);
    };
  }
  _createClass(Cmlog, [
    {
      key: 'success',
      value: function success() {
        for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
          msg[_key] = arguments[_key];
        }
        log.apply(void 0, [this._title(emoji.success, 'Success', 'green')].concat(msg));
      },
    },
    {
      key: 'info',
      value: function info() {
        for (
          var _len2 = arguments.length, msg = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          msg[_key2] = arguments[_key2];
        }
        log.apply(void 0, [this._title(emoji.info, 'Info', 'blue')].concat(msg));
      },
    },
    {
      key: 'warn',
      value: function warn() {
        for (
          var _len3 = arguments.length, msg = new Array(_len3), _key3 = 0;
          _key3 < _len3;
          _key3++
        ) {
          msg[_key3] = arguments[_key3];
        }
        log.apply(void 0, [this._title(emoji.warn, 'Warn', 'yellow')].concat(msg));
      },
    },
    {
      key: 'debug',
      value: function debug() {
        for (
          var _len4 = arguments.length, msg = new Array(_len4), _key4 = 0;
          _key4 < _len4;
          _key4++
        ) {
          msg[_key4] = arguments[_key4];
        }
        log.apply(void 0, [this._title(emoji.debug, 'Debug', 'grey')].concat(msg));
      },
    },
    {
      key: 'waitting',
      value: function waitting() {
        for (
          var _len5 = arguments.length, msg = new Array(_len5), _key5 = 0;
          _key5 < _len5;
          _key5++
        ) {
          msg[_key5] = arguments[_key5];
        }
        log.apply(void 0, [this._title(emoji.waiting, 'Wait', 'grey')].concat(msg));
      },
    },
    {
      key: 'start',
      value: function start() {
        for (
          var _len6 = arguments.length, msg = new Array(_len6), _key6 = 0;
          _key6 < _len6;
          _key6++
        ) {
          msg[_key6] = arguments[_key6];
        }
        log.apply(void 0, [this._title(emoji.start, 'Done')].concat(msg));
      },
    },
    {
      key: 'done',
      value: function done() {
        for (
          var _len7 = arguments.length, msg = new Array(_len7), _key7 = 0;
          _key7 < _len7;
          _key7++
        ) {
          msg[_key7] = arguments[_key7];
        }
        log.apply(void 0, [this._title(emoji.done, 'Done')].concat(msg));
      },
    },
    {
      key: 'error',
      value: function error(e) {
        var _e$stack$split = e.stack.split(/\n/),
          _e$stack$split2 = _toArray(_e$stack$split),
          message = _e$stack$split2[0],
          stack = _e$stack$split2.slice(1);
        log(
          this._title(emoji.error, 'Error', 'red'),
          [message, chalk.grey(stack.join('\n'))].join('\n')
        );
      },
    },
    {
      key: 'boosting',
      value: function boosting() {
        for (
          var _len8 = arguments.length, msg = new Array(_len8), _key8 = 0;
          _key8 < _len8;
          _key8++
        ) {
          msg[_key8] = arguments[_key8];
        }
        log.apply(void 0, [this._title(emoji.boosting, 'Boosting', 'magenta')].concat(msg));
      },
    },
    {
      key: 'pack',
      value: function pack(title) {
        for (
          var _len9 = arguments.length, msg = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1;
          _key9 < _len9;
          _key9++
        ) {
          msg[_key9 - 1] = arguments[_key9];
        }
        log.apply(void 0, [this._title(emoji.pack, title, 'magenta')].concat(msg));
      },
    },
    {
      key: 'module',
      value: function module(title) {
        for (
          var _len10 = arguments.length, msg = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1;
          _key10 < _len10;
          _key10++
        ) {
          msg[_key10 - 1] = arguments[_key10];
        }
        log.apply(void 0, [this._title(emoji.pack, title, 'cyan')].concat(msg));
      },
    },
    {
      key: 'json',
      value: function json(obj, title) {
        log([this._title(emoji.module, title || 'Log'), JSON.stringify(obj, null, 2)].join('\n'));
      },
    },
    {
      key: 'dye',
      value: function dye(color) {
        for (
          var _len11 = arguments.length, msg = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1;
          _key11 < _len11;
          _key11++
        ) {
          msg[_key11 - 1] = arguments[_key11];
        }
        return chalk[color].apply(chalk, msg);
      },
    },
  ]);
  return Cmlog;
})();
module.exports = new Cmlog();
