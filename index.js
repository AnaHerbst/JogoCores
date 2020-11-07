


let cores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
"Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse","Chocolate","Coral","CornflowerBlue",
"Cornsilk","Crimson","Cyan","DarkBlue", "DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen",
"DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed", "DarkSalmon","DarkSeaGreen",
"DarkSlateBlue", "DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray",
"DimGrey","DodgerBlue","FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite",
"Gold","GoldenRod","Gray","Grey","Green", "GreenYellow", "HoneyDew","HotPink","IndianRed","Indigo","Ivory",
"Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue", "LightCoral","LightCyan",
"LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", 
"LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue","LightYellow",  "Lime", "LimeGreen",
"Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen",
"MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream",
"MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed",
"Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru",
"Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon",
"SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey",
"Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White",
"WhiteSmoke", "Yellow","YellowGreen"];

let contador = 0;
let corEsc;
let valueInput;
coresRandomicas();


function valorInput() {
    valueInput = document.querySelector("input").value; {
        if (valueInput.toLowerCase() === corEsc.toLowerCase()) {
            document.getElementById("tela").style.backgroundColor = corEsc;
            document.querySelector(".teste").append("PARABÉNS, VOCÊ ADIVINHOU A COR")
            contador++;
        }
        else {
            if (contador !== 2 && valueInput.toLowerCase() > corEsc.toLowerCase()) {
                alert("Errado, a cor escolhida por você é  maior que a minha alfabeticamente");
            }
            else if(contador !== 2 && valueInput.toLowerCase() < corEsc.toLowerCase()) {
                alert("Errado, a cor escolhida por você é  menor que a minha alfabeticamente");
            }
            else{
                alert("GAMEOVER")
                window.location.reload();
            }
            contador++;
        }}}
    

function coresRandomicas() {
    const result = []

    for (let i = 0; i < 10; i++) {
        result.push(cores[Math.floor(Math.random() * cores.length)]);
    }
    document.getElementById("demo").innerHTML = `[${result}]`
    corEsc = result[Math.floor(Math.random() * result.length)]
    console.log(corEscolhida);}

