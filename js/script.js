$(function() {
  $('#slider_4').flexslider({
    animation: "fade",
    controlNav: true
  });
  $('#slider_1').flexslider({
    animation: "slide",
    controlNav: true
  });
  $('#slider_2').flexslider({
    animation: "slide",
    controlNav: true
  });
  $('#slider_3').flexslider({
    animation: "slide",
    controlNav: true
  });
  
});

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

    var section1 = $("#section1");
    var section2 = $("#section2");
    var section3 = $("#section3");
    var section4 = $("#section4");
    var section5 = $("#section5");
    var section6 = $("#section6");

    $(section1).waypointInit('show','80%');
    $(section2).waypointInit('show','80%');
    $(section3).waypointInit('show','80%');
    $(section4).waypointInit('show','80%');
    $(section5).waypointInit('show','80%');
    $(section6).waypointInit('show','80%');
  }
  function shuffle(o) {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
 };

 $(document).ready(function(){
    var $brand_cols = $('.brand_cols'),
    $cols = $brand_cols.find('article');

    $brand_cols.html(shuffle($cols));

    var $prizes = $('.device_description'),
    $prize = $prizes.find('>article');
    $prizes.html(shuffle($prize));

    if($(window).width() > 1024){
      animation();
    }
    $(window).resize(function(){
      animation();
    })
 });



