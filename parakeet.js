const HTTP = new XMLHttpRequest();
const url = ' http://144.17.24.80:30081/api/trygram/createtrygrams'
const url2 = 'http://www.gutenberg.org/cache/epub/';
HTTP.open("POST", url);
HTTP.send();

HTTP.onreadystatechange = (e) => {
    console.log(Http.responseText)
}

function trygram() {
    var start = document.getElementById("startInt").value;
    var numberof = document.getElementById("numberInt").value;
    for(i=0; i<numberof;i++){
        var urlnew = url2+start+"/pg"+start+".txt";
        start++;
    
    //window.location.href=urlnew;
   var str = getText();
    //window.alert("got" + start + "  " + numberof);

    HTTP.open("POST", url);
    HTTP.send(str);
    HTTP.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}
}

function getText() {
    var bodyScripts = document.querySelectorAll("body script");
    for (var i = 0; i < bodyScripts.length; i++) {
        bodyScripts[i].remove();
    }
    var str = document.body.textContent;
    document.body.innerHTML = '<pre>' + str + '</pre>';
}  


