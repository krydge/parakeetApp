

function trygram() {
    const HTTP = new XMLHttpRequest();
    const url = ' http://144.17.24.80:30081/api/trygram/createtrygrams'
    const url2 = 'http://www.gutenberg.org/cache/epub/';
    const start = document.getElementById("startInt").value;
    const batchsize = document.getElementById("numberInt").value;
    const size = 10000;
    
    const get=require('node-fetch');
    const dotenv = require('dotenv');
    dotenv.config();
    
    for (i = 0; i < batchsize; i++) {
        var urlnew = url2 + start + "/pg" + start + ".txt";
        start++;

        getBook(urlnew);
        
    }
}

function getText() {
    var bodyScripts = document.querySelectorAll("body script");
    for (var i = 0; i < bodyScripts.length; i++) {
        bodyScripts[i].remove();
    }
    var str = document.body.textContent;
    return str;
}

function getBook(url){
    fetch(url)
    .then(res => res.text())
      .then(body => {
          let book = {}
          book.title = getTitle(body);
          console.log(book.title)
          book.text =  body.slice(0,size);
          jsonBook = JSON.stringify(book);
          fetch(`${url}`,{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              mode: 'cors',
              body: jsonBook
            }
            ).then(response=>{
              console.log(response)
            })
      });

}

function getTitle(body){
    var array = body.split("\r\n");
    for(var i = 0; i < 20; i++){
        console.log(`loop ${i}`)
        if(array[i].includes("Project Gutenberg"))
        {
          return array[i]
        }
    }
    return "";
}


