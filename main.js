let splashData = {

    "001": "static2alive#1865",
    "002": ".gg/snetwork"
};
const values = Object.values(splashData);

const randomSplash = values[parseInt(Math.random() * values.length)];

document.getElementById("splashtext").innerHTML = `${randomSplash}`;

function aftersplash() {
    document.write(`
<!DOCTYPE html>
<html>
  <head>
  <title> sn.dev </title>
  <link rel="stylesheet" href="./style.css">
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  </head>
 <body>
 <center>
 <h1> staticalnetwork-dev.github.io <h1>
 <p> The best site to surf the web, play games, socialize, and more </p>
   <style>
       body {
background-color: #5a5a5a;
color: white;
font-family: 'Noto Sans', sans-serif;
}

p {
font-size: 15px;
}
   </Style>
</body>
</html>`);
}
