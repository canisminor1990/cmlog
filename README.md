# Cmlog

Emoji console logger

## Installation

Using yarn:

```bash
$ yarn add cmlog
```

Using npm:

```bash
$ npm i cmlog
```

## Getting started

```js
const cmlog = require('cmlog')

// See types section for all available types
cmlog.debug('export something')
cmlog.warn('Something is going to happen soon')
cmlog.success('Build succeeed in 10 seconds')
cmlog.info('Some extra info is here')
cmlog.error(new Error('Foo'))
```

## Types

A list of all available default types:

- ✅ `cmlog.success(...str)`
- 🔵 `cmlog.info(...str)`
- 😥 `cmlog.warn(...str)`
- 🐛 `cmlog.debug(...str)`
- ⌛ `cmlog.waitting(...str)`
- 🔥 `cmlog.boosting(...str)`
- 👶 `cmlog.start(...str)`
- ✨ `cmlog.done(...str)`
- 📦 `cmlog.pack(title, ...str)`
- ⚪ `cmlog.module(title, ...str)`
- ❌ `cmlog.error(Error)`


## Log object

- `cmlog.json(obj, title)`

```js
const obj = "{foo:bar}"
cmlog.json(obj,"Format")
```

Terminal log:

```bash
⚪ Format
	{
		foo: bar
	}
```

## Dye string

- `cmlog.dye(color, ...str)`

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

## License

MIT