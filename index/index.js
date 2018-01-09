var text;
var demo;

function getData(){

    title = document.getElementById("title");
    description = document.getElementById("description");
    demo = document.getElementById("demo");

    var url = "https://newsapi.org/v1/articles?source=football-italia&sortBy=top&apiKey=add81660afe041bfb1a365fbabba3ce4";

    // fetch(url)
    // .then(response => {

    //    console.log(response);

    //    var resJson;

    //    if (response.ok){
    //        resJson = response.json();

    //        console.log(resJson);
    //        console.log("Successful fetch");
    //    }

       

    // })
    // .catch(error => console.log("Si è verificato un errore!"))
    // // xhttp.open("GET", "https://newsapi.org/v1/articles?source=football-italia&sortBy=top&apiKey=add81660afe041bfb1a365fbabba3ce4", true);
    // xhttp.open("GET", "http://www.mocky.io/v2/59db7f5c0f00002a0702a7d0", true);


    fetch(url).then(response => {

        if (response.ok) {
            return response.json();
        } else {
            alert("Qualcosa è andato storto!");
        }

     })
    //  .then(data => console.log(data.articles[0].title + ", " + data.articles[0].description))
    .then(data => {
        
            for (i = 0; i < data.articles.length; i++) {
                demo.innerHTML += "<h1>" + data.articles[i].title + "</h1><br><a href='" + data.articles[i].url + "' target='_blank'>" + "<img src=" + data.articles[i].urlToImage + "><p>" + data.articles[i].description + "</p><br><hr><br>"
            }
        }
        // demo.innerHTML = "<h1>" + data.articles[0].title + "</h1><br><p>" + data.articles[0].description + "</p>"
        
    )
    .catch(error => console.log("Si è verificato un errore!"));

}



function loadDoc() {
    var xhttp;
    var url = "http://www.mocky.io/v2/59db7f5c0f00002a0702a7d0";

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert("ok");
            document.getElementById("demo").innerHTML =
            JSON.parse(xhttp.responseText.name);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
