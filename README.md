# react-native-dform

Schema-based dynamic forms for React Native. It uses the schema defined as expected by [dform](https://github.com/rbaron/dform).

# Demo

In the following example, the schema defines a form in which `input3` is only shown if `input1` is `true` _and_ `input2` is not empty. `input4`, on it's turn, is only visible if, in addition, `input3` is `true`.

<p align="center">
  <img src="http://i.imgur.com/todtrPl.gif" alt="Demo"/>
</p>

# Installation

```sh
$ npm install react-native-dform
```

# Usage

```javascript
import { DForm } from 'react-native-dform'

<DForm
    onChange={v => this.setState(v)}
    schema={myDFormSchema}
    state={this.state} />

```

Check out a minimal example app in [app.js](https://github.com/rbaron/react-native-dform/blob/master/app.js).

# License

MIT
