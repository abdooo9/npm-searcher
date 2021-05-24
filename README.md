# npm-searcher

<center>
	<a href="https://nodei.co/npm/npm-searcher/">
		<img alt="npm-searcher package" src="https://nodei.co/npm/npm-searcher.png">
	</a>
</center>

* NPM package that gets information about npm packages and other info from the NPM API

# Installation from [NPM](https://www.npmjs.com/package/npm-searcher)

```
npm i npm-searcher
```
- `search(package_name)` - Get a npm package
    - `package_name`: (REQUIRED) npm package name

# Examples
### (Using await)
```js
const npm = require('npm-searcher')

async function getNpm() {
    const res = await npm.search('express')
    cosnole.log(res) // All information related to the express package
    cosnole.log(res.name) // express
}
getNpm()
``` 

### (Using .then function)

```js
const npm = require('npm-searcher')

npm.search('express').then(res => {
    cosnole.log(res) // All information related to the express package
    cosnole.log(res.name) // express
})
```

### (Validation)

```js
const npm = require('npm-searcher')

npm.search('express').then(res => {
	if (res) {
        cosnole.log(res) // All information related to the express package
        cosnole.log(res.name) // express
	} else {
		console.log("package not found");
    }
})
```

#### Contributing
© npm-searcher, 2021 | abdooo9 (abdooo9.dev@gmail.com)
