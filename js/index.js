$(document).ready(function(){
    $('#mobile-btn').on('click', function(){
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').toggleClass('fa-xmark');
    });
});