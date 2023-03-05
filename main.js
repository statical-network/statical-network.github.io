let splashData = {

    "001": "static2alive#1865",
    "002": ".gg/snetwork"
};
const values = Object.values(splashData);

const randomSplash = values[parseInt(Math.random() * values.length)];

document.getElementById("splashtext").innerHTML = `${randomSplash}`;
