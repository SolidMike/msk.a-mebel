$(document).ready(function () {
  svg4everybody({});
});

$('.first-block-slider').owlCarousel({
	loop:true,
	margin: 0,
  nav: false,
  autoWidth: false,
  navText: ["", ""],
  autoplay: true,
  smartSpeed: 500,
  autoplayTimeout: 8000,
  dots: true,
  items: 1,
  onInitialized  : counter,
  onTranslated : counter
});

function counter(event) {
  var element   = event.target;         
  var items     = event.item.count;    
  var item      = event.page.index + 1;     
  $('#slider-counter').html(""+"<span>"+item+"</span>"+"\xa0"+"/ "+items)
}

$('.popular__slider').owlCarousel({
  loop:true,
  margin: 0,
  nav: false,
  autoWidth: false,
  navText: ["", ""],
  autoplay: true,
  smartSpeed: 500,
  autoplayTimeout: 8000,
  dots: true,
  items: 5,
  responsive : {
    0 : {
      items : 1
    },
    576 : {
      items : 2
    },
    992 : {
      items : 3
    },
    1200 : {
      items : 4
    },
    1500 : {
      items : 5
    }
  }
});

$(document).ready(function() {
/*  $('.first-block__slider-block_descr-title').html($('.owl-item.active').next().find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').next().find('img').attr("data-descr-text"));*/
  $('.first-block__slider-block_descr-title').html($('.owl-item.active').find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').find('img').attr("data-descr-text"));
  var getImageSrc = $('.owl-item.active').prev().find('img').attr('src');
  $('.first-block').css('background-image', 'url(' + getImageSrc + ')');
  $('.catalog-transition__content_title').html($('.owl-item.active').prev().find('img').attr("data-descr-title"));
  $('.catalog-transition__text').html($('.owl-item.active').prev().find('img').attr("data-descr-text"));
});

$('.first-block-slider').on('changed.owl.carousel', function(e) {
/*  $('.first-block__slider-block_descr-title').html($('.owl-item.active').next().next().find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').next().next().find('img').attr("data-descr-text"));*/
  $('.first-block__slider-block_descr-title').html($('.owl-item.active').next().find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').next().find('img').attr("data-descr-text"));
  var getImageSrc = $('.owl-item.active').find('img').attr('src');
  $('.first-block').css('background-image', 'url(' + getImageSrc + ')');
  $('.catalog-transition__content_title').html($('.owl-item.active').find('img').attr("data-descr-title"));
  $('.catalog-transition__text').html($('.owl-item.active').find('img').attr("data-descr-text"));
});

$('.first-block__slider-block_controls .next-slide').click(function () {
  $(this).parent().parent().find(".first-block-slider").trigger('next.owl.carousel');
/*  $('.first-block__slider-block_descr-title').html($('.owl-item.active').next().find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').next().find('img').attr("data-descr-text"));*/
  $('.first-block__slider-block_descr-title').html($('.owl-item.active').find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').find('img').attr("data-descr-text"));
  var getImageSrc = $('.owl-item.active').prev().find('img').attr('src');
  $('.first-block').css('background-image', 'url(' + getImageSrc + ')');
  $('.catalog-transition__content_title').html($('.owl-item.active').prev().find('img').attr("data-descr-title"));
  $('.catalog-transition__text').html($('.owl-item.active').prev().find('img').attr("data-descr-text"));
});

$('.first-block__slider-block_controls .prev-slide').click(function () {
  $(this).parent().parent().find(".first-block-slider").trigger('prev.owl.carousel');
/*  $('.first-block__slider-block_descr-title').html($('.owl-item.active').next().find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').next().find('img').attr("data-descr-text"));*/
  $('.first-block__slider-block_descr-title').html($('.owl-item.active').find('img').attr("data-descr-title"));
  $('.first-block__slider-block_descr-text').html($('.owl-item.active').find('img').attr("data-descr-text"));
  var getImageSrc = $('.owl-item.active').prev().find('img').attr('src');
  $('.first-block').css('background-image', 'url(' + getImageSrc + ')');
  $('.catalog-transition__content_title').html($('.owl-item.active').prev().find('img').attr("data-descr-title"));
  $('.catalog-transition__text').html($('.owl-item.active').prev().find('img').attr("data-descr-text"));
});

$('.popular__controls .next-slide').click(function () {
  $(this).parent().parent().parent().find(".popular__slider").trigger('next.owl.carousel');
});

$('.popular__controls .prev-slide').click(function () {
  $(this).parent().parent().parent().find(".popular__slider").trigger('prev.owl.carousel');
});