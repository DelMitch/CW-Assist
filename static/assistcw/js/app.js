$(document).foundation()


function convert(elem)
{
    var arr = elem.value.split("");

    for(var idx = 0; idx < arr.length; idx++)
    {
        switch(arr[idx])
        {
            case "a":
            case "A":
                arr[idx] = ".-";
                break;
            case "b":
            case "B":
                arr[idx] = "-...";
                break;
            case "c":
            case "C":
                arr[idx] = "-.-.";
                break;
            case "d":
            case "D":
                arr[idx] = "-..";
                break;
            case "e":
            case "E":
                arr[idx] = ".";
                break;
            case "f":
            case "F":
                arr[idx] = "..-.";
                break;
            case "g":
            case "G":
                arr[idx] = "--.";
                break;
            case "h":
            case "H":
                arr[idx] = "....";
                break;
            case "i":
            case "I":
                arr[idx] = "..";
                break;
            case "j":
            case "J":
                arr[idx] = ".---";
                break;
            case "k":
            case "K":
                arr[idx] = "-.-";
                break;
            case "l":
            case "L":
                arr[idx] = ".-..";
                break;
            case "m":
            case "M":
                arr[idx] = "--";
                break;
            case "n":
            case "N":
                arr[idx] = "-.";
                break;
            case "o":
            case "O":
                arr[idx] = "---";
                break;
            case "p":
            case "P":
                arr[idx] = ".--.";
                break;
            case "q":
            case "Q":
                arr[idx] = "--.-";
                break;
            case "r":
            case "R":
                arr[idx] = ".-.";
                break;
            case "s":
            case "S":
                arr[idx] = "...";
                break;
            case "t":
            case "T":
                arr[idx] = "-";
                break;
            case "u":
            case "U":
                arr[idx] = "..-";
                break;
            case "v":
            case "V":
                arr[idx] = "...-";
                break;
            case "w":
            case "W":
                arr[idx] = ".--";
                break;
            case "x":
            case "X":
                arr[idx] = "-..-";
                break;
            case "y":
            case "Y":
                arr[idx] = "-.--";
                break;
            case "z":
            case "Z":
                arr[idx] = "--..";
                break;
            case "0":
                arr[idx] = "-----";
                break;
            case "1":
                arr[idx] = ".----";
                break;
            case "2":
                arr[idx] = "..---";
                break;
            case "3":
                arr[idx] = "...--";
                break;
            case "4":
                arr[idx] = "....-";
                break;
            case "5":
                arr[idx] = ".....";
                break;
            case "6":
                arr[idx] = "-....";
                break;
            case "7":
                arr[idx] = "--...";
                break;
            case "8":
                arr[idx] = "---..";
                break;
            case "9":
                arr[idx] = "----.";
                break;
            case " ":
                arr[idx] = "    ";
                break;
            case ".":
                arr[idx] = ".-.-.-";
                break;
            case ",":
                arr[idx] = "--..--";
                break;
            case "?":
                arr[idx] = "..--..";
                break;
            case "'":
                arr[idx] = ".----.";
                break;
            case '"':
                arr[idx] = ".-..-.";
                break;
            case "!":
                arr[idx] = "-.-.--";
                break;
            case "/":
                arr[idx] = "-..-.";
                break;
            case "(":
                arr[idx] = "-.--.";
                break;
            case ")":
                arr[idx] = "-.--.-";
                break;
            case "&":
                arr[idx] = ".-...";
                break;
            case ":":
                arr[idx] = "---...";
                break;
            case ";":
                arr[idx] = "-.-.-.";
                break;
            case "=":
                arr[idx] = "-...-";
                break;
            case "+":
                arr[idx] = ".-.-.";
                break;
            case "-":
                arr[idx] = "-....-";
                break;
            case "_":
                arr[idx] = "..--.-";
                break;
            case "$":
                arr[idx] = "...-..-";
                break;
            case "@":
                arr[idx] = ".--.-.";
                break;
            default:
                arr[idx] = "#";
                break;
        }
    }

    document.getElementById("output").value = arr.join(" ");
}


function adjustVal(id, elem)
{
    document.getElementById(id).innerText = elem.value;
    elem.title = elem.value;

    if(elem.id == "wpm")
    {
        document.getElementById("wpm-var").setAttribute("max", Math.floor(elem.value/2));
        
        if(Math.floor(elem.value/2) <= document.getElementById("wpm-var").value)
        {
            document.getElementById("wpm-var").setAttribute("value", Math.floor(elem.value/2));
            document.getElementById("wpm-var").setAttribute("title", Math.floor(elem.value/2));
            document.getElementById("wpm-var-val").innerText = Math.floor(elem.value/2);
        }
    }
}