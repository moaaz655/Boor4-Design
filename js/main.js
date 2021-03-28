/*global $, window*/
$(function () {
   
    'use strict';
    
    // Adjust Slider Height
    
    //var winH = $(window).height(),
        
        //upperH = $('.upper-bar').innerHeight(),
        
        //navH = $('.navbar').innerHeight();
    
    //$('.slider, .carousel-item').height(winH - (upperH + navH));
    
    // Featured Work Shuffle
    
    $('.featured-work ul li').click(function () {
       
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
            
            $('.shuffle-images .col-md').css('opacity', 1);
            
        } else {
            
            $('.shuffle-images .col-md').css('opacity', '.08');
            
            $($(this).data('class')).parent().css('opacity', 1);
            
        }
        
    });
    
    // Trigger Nice Scroll
    
    $("body").niceScroll({
        
        cursorcolor: "#EC1D24",

        cursorborder: "1px solid #EC1D24",
        
        cursorwidth: "8px"
  
    });
    
    // Smooth Scroll To Div
    
    $('.about').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.overview').offset().top
            
        }, 2000);
        
    });
    
    $('.work').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.featured-work').offset().top
            
        }, 2000);
        
    });
    
    $('.blog').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.pricing-table').offset().top
            
        }, 2000);
        
    });
    
    $('.contact').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('div.contact-us').offset().top
            
        }, 2000);
        
    });
        
});