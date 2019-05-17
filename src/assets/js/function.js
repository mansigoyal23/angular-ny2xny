$(document).ready(function(){
    $('.masonary-items-group').masonry({  
        // options
        itemSelector : '.masonary-items',        
        percentPosition: true,
        isAnimated: true,
           animationOptions: {
                duration: 700,
                easing: 'linear',
                queue: false
           },
          sortAscending : true
    }).masonry('reload');
});