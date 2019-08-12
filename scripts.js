$('.product-tile').click(function(){

 window.open('productPage.html'); 
 
});

$('nav').click(function(event){
    var id = event.target.id
    $(".nav").removeClass('active')
    $('#'+ id).addClass('active')
});
