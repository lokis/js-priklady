function malert(text, popis)
{
    var str = '';
    if (popis != null)
    {
        str += (popis + ': ')
    }
    str += text;
    document.getElementById("alerts").innerHTML += ("<li>" + str + "</li>");
}

window.alert = malert;