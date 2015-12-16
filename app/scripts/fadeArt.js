'use strict';

$(function() {
  $('#fadeImg1, #fadeImg2, #fadeImg3, #fadeImg4').hide();

  var $div1 = $('#fade1'),
  $div2 = $('#fade2'),
  $div3 = $('#fade3'),
  $div4 = $('#fade4');

  var $img1 = $('#fadeImg1'),
  $img2 = $('#fadeImg2'),
  $img3 = $('#fadeImg3'),
  $img4 = $('#fadeImg4');


  function fadeInImg(div, img) {
    div.fadeOut('slow');
    img.fadeIn('slow');
  }

  function fadeInDiv(div, img) {
    img.fadeOut('slow');
    div.fadeIn('slow');
  }

  $div1.on('click', function() {
    fadeInImg($div1, $img1);
  });
  $div2.on('click', function() {
    fadeInImg($div2, $img2);
  });
  $div3.on('click', function() {
    fadeInImg($div3, $img3);
  });
  $div4.on('click', function() {
    fadeInImg($div4, $img4);
  });

  $img1.on('click', function() {
    fadeInDiv($div1, $img1);
  });
  $img2.on('click', function() {
    fadeInDiv($div2, $img2);
  });
  $img3.on('click', function() {
    fadeInDiv($div3, $img3);
  });
  $img4.on('click', function() {
    fadeInDiv($div4, $img4);
  });

});
