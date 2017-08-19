# react-native-dform

<p align="center">
  <img src="http://i.imgur.com/O4Df7rA.gif" />
</p>

[dform](https://github.com/rbaron/dform) is a set of libraries for managing dynamic forms. The dynamic forms are described through a JSON schema, which tells `dform` how and when to render each of the form's fields. Client libraries, such as this one, read a dform JSON schema and render forms in a specific platform (React Native here).

This repository hosts a React Native client library that takes as input a dform JSON schema and renders the appropiate dynamic form using native input fields.

For React (web) applications, check out [react-native-dform](https://github.com/rbaron/react-dform). There's also a web-based schema editor that facilitates the creation of such JSON schemas. Check it out: [dform-editor](https://github.com/rbaron/dform-editor).

# Installation

```sh
$ npm install react-native-dform
```
or
```sh
$ yarn add react-native-dform
```

# Usage

This package exports a `<DForm>` component, which receives a `schema` prop and also a `onChange` callback function, which will be called whenever there's a change in the form's state.

# Example

Check out a minimal example app in [app.js](https://github.com/rbaron/react-native-dform/blob/master/app/app.js).

# License

MIT.
