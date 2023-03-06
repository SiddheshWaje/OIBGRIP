// Smooth scrolling
$('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  
  // Toggle menu button
  $('.menu-btn').on('click', function() {
    $('nav ul').toggleClass('show');
  });
  
  // Active link switching
  $(window).on('scroll', function() {
    $('section').each(function() {
      if($(window).scrollTop() >= $(this).offset().top - 100) {
        var id = $(this).attr('id');
        $('nav ul li').removeClass('active');
        $('nav ul li a[href="#' + id + '"]').parent().addClass('active');
      }
    });
  });
  