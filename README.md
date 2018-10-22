# get-param-by-name

A JavaScript utility for retrieving a parameter value by name from a URL.

Please note: this package is really only needed if you have Internet Explorer support. [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) is the standard way to get a param by name.

## Install

```bash
$ npm install --save-dev get-param-by-name
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
