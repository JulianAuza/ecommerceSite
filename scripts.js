$('.product-tile').click(function(){

 window.open('productPage.html'); 
 
});

function updateImage(filename){
    console.log(filename)
    var newFile= "assets/"+ filename + ".svg"
    console.log(newFile)
    $('.main-image').attr("src",newFile);
    $('.view .color-tshirt-image').attr("src",newFile);
};

$('nav').click(function(event){
    var id = event.target.id
    $(".nav").removeClass('active')
    $('#'+ id).addClass('active')
});

$('.customize-tile').click(function(event){
    var id = event.target.id
    if($( this ).hasClass( "size" )){
        $('.customize-tile.size').removeClass('active')
        $(this).addClass('active')
    }if($( this ).hasClass( "color" )){
        updateImage($(this).attr('id'))
        $('.customize-tile.color').removeClass('active')
        $(this).addClass('active')
    }if($(this).hasClass('view')){
        $('.customize-tile.view').removeClass('active')
        $(this).addClass('active')
    }
});
