# password-revealer.js ![Build Status](https://travis-ci.org/diessica/password-revealer.js.svg)

> Easily reveal/hide passwords in input fields.

## Install
Get it using [npm](https://www.npmjs.com).
```
npm install password-revealer --save
```

Or [download the ZIP file](#).

## Usage
See [basic demo](examples/basic-demo.html).

### `RevealPassword(input, initTrigger, options)`

#### `input`

Type: `string` or `HTMLElement`

Input field that will have its password revealed or hidden.<br><br>  

#### `initTrigger`
Type: `boolean`<br>
Default: `false`

Init, in a element with the selector provided in options, the trigger that reveals or hides the password.<br><br>

#### `options`
Type: `object`

###### `options.isRevealed`
Type: `boolean`<br>
Default: `false`

Initial state of the password. When `true`, the input's password value is automatically revealed. <br><br>

###### `options.trigger.selector`
Type: `string`<br>
Default: `.PasswordRevealer-toggle`

`class`, `id` or tag name of the element that reveals or hides the password ("trigger"). <br><br>

###### `options.trigger.eventListener`
Type: `string`<br>
Default: `click`

Event that will be attached to the trigger, in the case you are initializing a trigger.

## API
Interact with a `RevealPassword` instance using the methods below.

### `.showPassword()`
It reveals the password for the `input` provided in the instance.

### `.hidePassword()`
It hides the password for the `input` provided in the instance.

### `.togglePassword()`
It reveals or hides the password for the `input` provided in the instance, depending on the current state of the `input`.

## TODO
- [ ] Emit custom events.
- [ ] Create a default trigger in the DOM if `initTrigger` is `true`.

## License
MIT
