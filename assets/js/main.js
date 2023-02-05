var $slider = $('ul#slide-menu');
var $current = $slider.find('li.active');
var $next = $current.next();
var btn = $('#button');

if(!$next.length) {
    $next = $slider.find('li:first');
}

$current.removeClass('active');
$next.addClass('active');


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  