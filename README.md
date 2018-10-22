# get-param-by-name
[![npm](https://img.shields.io/npm/v/get-param-by-name.svg)](https://www.npmjs.com/package/get-param-by-name)
![CircleCI (all branches)](https://img.shields.io/circleci/project/github/mhfen/get-param-by-name/master.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


A JavaScript utility for retrieving a parameter value by name from a URL.

Please note: this package is really only needed if you have Internet Explorer support. [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) is the standard way to get a param by name.

## Install

```bash
$ npm install --save get-param-by-name
```
or
```bash
$ yarn add get-param-by-name
```

## Usage

```javascript
import getParamByName from 'get-param-by-name';

const value = getParamByName(YOUR_PARAM_TO_SEARCH, URL);
```

## Contributing

Create an Issue if there is not already one created. Open up a Pull Request against `master` with your fix branch.

### Install Dependencies

```bash
$ npm install
```

### Run Tests

```bash
$ npm test
```

### Run a babel transpile

```bash
$ npm run build
```
