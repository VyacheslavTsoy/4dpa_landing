(function(document,$) {

  function animation(){
    $.fn.waypointInit = function(classN,offset){
        return $(this).waypoint(function(direction){
            if(direction === 'down'){
                $(this).addClass(classN);
            };
        },{ offset : offset })
    };

    $.fn.waypointSynchronise = function(synchroniseElement,offset,classN,delay){
      var element = $(this);
       return $(synchroniseElement).waypoint(function(direction){
       if(direction === 'down'){
        setTimeout(function(){
         element.addClass(classN);
        },delay);
       }
      },{ offset : offset });
    };

    $("[data-section]").each(function(i,t){
      (i = $(t)).waypointInit.apply(t,i.data("section"));
    });

  }
  function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  $(document).ready(function(){
    
    $("[data-countdown]").each(function(i,t){
      (i=$(t)).countDown(i.data("countdown"));
    });
    
    $("[data-slider]").each(function(i,t){
      (i = $(t)).flexslider(i.data("slider"));
    });

    // brands & prizes shiffle {{{
    var $brand_cols = $('.brand_cols'),
    $cols = $brand_cols.find('.brand_col');

    $brand_cols.html(shuffle($cols));
    
    var $prizes = $('.device_description'),
    $prize = $prizes.find('>.device_row');
    $prizes.html(shuffle($prize));
    // }}}

    if($(window).width() > 1024){
      animation();
    }
    $(window).resize(function(){
      animation();
    });

  });

})(document,jQuery);


