// First img that is loaded
var raster = new Raster('slider-active'),
loaded = false;

raster.on('load', function() {
  loaded = true;
  onResize();
});

raster.visible = false;

var lastPos = view.center;
function moveHandler(event) {
  if (!loaded) {return;}
  if (lastPos.getDistance(event.point) < 10) {return;}

  lastPos = event.point;

  var size = this.bounds.size.clone();
  var isLandscape = size.width > size.height;

  size /= isLandscape ? [2,1] : [1,2];

  var path = new Path.Rectangle({
    point: this.bounds.topLeft.floor(),
    size: size.ceil(),
    onMouseMove: moveHandler
  });
  path.fillColor = raster.getAverageColor(path);

  var path = new Path.Rectangle({
    point: isLandscape ? this.bounds.topCenter.ceil() : this.bounds.leftCenter.ceil(),
    size: size.floor(),
    onMouseMove: moveHandler
  });
  path.fillColor = raster.getAverageColor(path);

  this.remove();
}

function onResize(event) {
  if (!loaded) {return;}

  project.activeLayer.removeChildren();
  raster.fitBounds(view.bounds, true);

  new Path.Rectangle({
    rectangle: view.bounds,
    fillColor: raster.getAverageColor(view.bounds),
    onMouseMove: moveHandler
  });
}


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

    // Functions called again for new images when loaded on the click event
    var raster = new Raster('slider-active');
    loaded = false;

    raster.on('load', function() {
      loaded = true;
      onResizeNew();
    });

    raster.visible = false;

    var lastPos = view.center;
    function moveHandlerNew(event) {
      if (!loaded) {return;}
      if (lastPos.getDistance(event.point) < 10) {return;}

      lastPos = event.point;

      var size = this.bounds.size.clone();
      var isLandscape = size.width > size.height;

      size /= isLandscape ? [2,1] : [1,2];

      var path = new Path.Rectangle({
        point: this.bounds.topLeft.floor(),
        size: size.ceil(),
        onMouseMove: moveHandlerNew
      });
      path.fillColor = raster.getAverageColor(path);

      var path = new Path.Rectangle({
        point: isLandscape ? this.bounds.topCenter.ceil() : this.bounds.leftCenter.ceil(),
        size: size.floor(),
        onMouseMove: moveHandlerNew
      });
      path.fillColor = raster.getAverageColor(path);

      this.remove();
    }

    function onResizeNew(event) {
      if (!loaded) {return;}

      project.activeLayer.removeChildren();
      raster.fitBounds(view.bounds, true);

      new Path.Rectangle({
        rectangle: view.bounds,
        fillColor: raster.getAverageColor(view.bounds),
        onMouseMove: moveHandlerNew
      });
    }
  }); // on click
}); // document ready
