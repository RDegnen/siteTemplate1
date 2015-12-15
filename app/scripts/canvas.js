var raster = new Raster('slider-active');
raster.position = view.center;


$(document).ready(function() {
  var slides = $('#slider-div img'),
  current = 0;

  $('.btn-slider').on('click', function() {
    var img = slides.eq(current),
    nextIndex = 0;

    if ($(this).hasClass('next')) {
      nextIndex = current >= slides.length - 1 ? 0 : current + 1;
    } else {
      nextIndex = current <= 0 ? slides.length - 1 : current - 1;
    }

    var next = slides.eq(nextIndex);

    current = nextIndex;
    next.attr('id', 'slider-active');
    img.attr('id', '');

    var raster = new Raster('slider-active');
    raster.position = view.center;
  });
});
