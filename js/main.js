jQuery( document ).ready(function($) {
  $(".homepage-slides").owlCarousel({

    items:1,
    
    loop:true,
    nav:true,
    autoplay:true,
  
   navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  
  autoplay:false
}); 
   $('.portfolio-filter li').on("click", function(){

   	var filterData = $(this).attr('data-filter');
 $('.portfolio-list').isotope({
 	filter: filterData,
 	   

 });
 $('.portfolio-filter li').removeClass("active");
 $(this).addClass("active");
   });

  $('.portfolio-list').isotope({
  	 itemSelector: '.single-protfolio',
 	    percentPosition: true,
 	     masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.single-protfolio',
    horizontalOrder: true,
  }
  });
});