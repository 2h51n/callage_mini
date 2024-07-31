$(document).ready(function() {
    const $focusLines = $(".divider.line_h, .divider.line_b");
    let lastScrollTop = 0; // 마지막 스크롤 위치
    
    $(window).on('scroll', function() {
      const scrollTop = $(this).scrollTop();
      
      $focusLines.each(function() {
        const $el = $(this);
        const rect = $el[0].getBoundingClientRect();
        const winHeight = window.innerHeight;
        const isVisible = rect.top <= winHeight && rect.bottom >= 0;
        
        if (isVisible) {
          $el.addClass('active');
          $el.css('opacity', 1); // Show line when in view
        } else {
          $el.removeClass('active');
          $el.css('opacity', 0); // Hide line when out of view
        }
      });
      
      // Check scroll direction
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        $focusLines.each(function() {
          $(this).addClass('active');
        });
      } else {
        // Scrolling up
        $focusLines.each(function() {
          $(this).removeClass('active');
        });
      }
      lastScrollTop = scrollTop;
    }).scroll();
  });
  