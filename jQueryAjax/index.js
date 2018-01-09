$(document).ready(function(){


    /// GET
    $("#getBtn").click(function(){

        $.ajax({
            // url: "http://www.mocky.io/v2/59dcb91b100000e212ccd445",
            url: "file.json",
            dataType: 'json',
            success: function(result)
            {
            console.log(result);
            $("div").text(result.name);
            }
        });

    });


    /// POST
    $("#postBtn").click(function(){
        $.post("https://community-sentiment.p.mashape.com/text/",
        function(data,status){
            data.name = name;
            data.surname = surname;
            console.log(data);
            alert("Data: " + data + "\nStatus: " + status);
        });
    });

    // $("#postBtn").click(function(){
    //     $.post("file.json",
    //     {
    //       name: "Donald Duck",
    //       surname: "Duckburg"
    //     },
    //     function(data,status){
    //         data.name = name;
    //         data.surname = surname;
    //         console.log(data);
    //         alert("Data: " + data + "\nStatus: " + status);
    //     });
    // });

});