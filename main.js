let splashData = {
    //   "312": "https://incognito.tumbadoware.repl.co/load.html#",
    //   "311": "https://elixir.tumbadoware.repl.co/load.html#",
    "002": "static2alive#1865",
    "002": "https://kashiuer-dev.solopanel.lol/load.html#"
};
const values = Object.values(splashData);

const randomSplash = values[parseInt(Math.random() * values.length)];

document.getElementById("splashtext").innerHTML = `${randomSplash}`;
