$(document).foundation()


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