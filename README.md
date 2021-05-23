# test
`npm i npm-searcher`

```js
const searcher = require('npm-searcher')
searcher.package('discord.js').then(res=>{
    console.log(res)
})
```