function toggleArea(type, show){
    $(type).mouseover()
}

        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });

            
        });
   
    $(document).ready(function(){
    $('.wrapper').scrollbar();
 
    $('[data-toggle="popover"]').popover();

$("path").mouseover(function(){
    $(this).css("fill", "#7967EB");
});
$("path").mouseout(function(){
    $(this).css("fill", "");
});
});

  $('.ab').on('mouseover', function(){
    $(document.getElementById($(this).attr('data-district'))).mouseover();
  }).on('mouseout', function(){
    $(document.getElementById($(this).attr('data-district'))).mouseout();
  });

//Timer
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

