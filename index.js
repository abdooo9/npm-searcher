const fetch = require('node-fetch')

exports.search = async function (arg) {
    if (!arg) {
        throw Error("None arg for search");
    } else {
        let url = "https://registry.npmjs.org/" + arg;
        let data = await fetch(url).then(res => res.json());
        if (data.error) {
            return false;
        } else {
            return data;
        }
    }
}