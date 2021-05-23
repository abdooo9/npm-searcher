const searcher = {
    "package": async function (arg) {
        if (!arg) {
            throw Error("Wrong entry: No search package");
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
}