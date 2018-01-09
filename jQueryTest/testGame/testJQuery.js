$(document).ready(function () {

    $("#goku").click(function () {

        // $("#canvasFreezer").animate({
        //     left: '100px',
        //     height: '350px',
        //     width: '350px'
        // }, 3000);

        alert("Start fight");

        $("#canvasGoku").animate({
            left: '220px'
        }, 3000, function () {
            $("#canvasGoku").css("z-index", 1);
        });

        // $("#cell").show(3000);

    });

    // $("#goku").click(function(){
    //     // $("#goku").animate({
    //     //     right: '100px', 
    //     //     height: '350px',
    //     //     width: '350px',
    //     //     gokuReady : true
    //     // },3000);   
    //     $("#canvas").show();

    //     $("#junior").animate({
    //         right: '200px',
    //         bottom: '200px'
    //     },1000);

    //     $("#junior").show(2000);

    //     $("#freezer").animate({
    //         left: '200px'
    //     },3000);

    //     $("#canvas").animate({
    //         left: '220px'
    //     },3000, function(){
    //         $("#canvas").css("z-index",1);
    //     }); 
        
        
        
    //     // $("#freezer").css("display","none");
    //     $("#freezer").hide(0, function(){
    //         $("#canvas").hide();
    //         $("#cell").show(2100);
    //         $("h3").css("display","block");
    //     });

        

    // });


    // $("#freezer").click(function(){

    //     $("#freezer").animate({
    //         left: '100px', 
    //         height: '350px',
    //         width: '350px'
    //     },3000);

    //     // $("#cell").show(3000);
    
    // });


    /// canvas
    // $("#canvas").drawRect({
    //     fillStyle: 'steelblue',
    //     strokeStyle: 'red',
    //     strokeWidth: 4,
    //     x: 190,
    //     y: 50,
    //     fromCenter: false,
    //     width: 200,
    //     height: 100
    // });


    


    
});