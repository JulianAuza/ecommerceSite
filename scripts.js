$('.product-tile').click(function(){

 window.open('productPage.html'); 
 
});

$('nav').click(function(event){
    var id = event.target.id
    $(".nav").removeClass('active')
    $('#'+ id).addClass('active')
});

$('.customize-tile').click(function(event){
    if($( this ).hasClass( "size" )){
        $('.customize-tile.size').removeClass('active')
        $(this).addClass('active')
    }if($( this ).hasClass( "color" )){
        $('.customize-tile.color').removeClass('active')
        $(this).addClass('active')
    }if($(this).hasClass('view')){
        $('.customize-tile.view').removeClass('active')
        $(this).addClass('active')
    }
});
