   
   $(document).ready(function()
   {
      $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon10').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon11').addClass('visibility-hidden');
      $("a[href*='#indexLayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid1').offset().top }, 600, 'linear');
      });
      $('#indexOverlayMenu1-overlay').overlay({hideTransition:true});
      $('.indexOverlayMenu1').drilldownmenu({backText: 'Back'});
      $('#indexOverlayMenu1').on('click', function(e)
      {
         $.overlay.show($('#indexOverlayMenu1-overlay'));
         return false;
      });
      $("a[href*='#LayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid1').offset().top }, 600, 'linear');
      });
      $("a[href*='#footer']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_footer').offset().top }, 600, 'linear');
      });
      $("a[href*='#stickyLayer']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#stickyLayer').offset().top }, 600, 'linear');
      });
      $("a[href*='#MasterPageBookmark1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_MasterPageBookmark1').offset().top }, 600, 'linear');
      });
      function onScrollMasterPageBookmark1()
      {
         var $obj = $("#wb_MasterPageBookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
         {
            $obj.addClass("in-viewport");
            ShowObject('stickyLayer', 0);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            ShowObject('stickyLayer', 1);
         }
      }
      if (!$('#wb_MasterPageBookmark1').inViewPort(true))
      {
         $('#wb_MasterPageBookmark1').addClass("in-viewport");
      }
      onScrollMasterPageBookmark1();
      $(window).scroll(function(event)
      {
         onScrollMasterPageBookmark1();
      });
      function onScrollFontAwesomeIcon3()
      {
         var $obj = $("#wb_FontAwesomeIcon3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon3', 'transform-lightspeed-in', 100, 1000);
         }
      }
      onScrollFontAwesomeIcon3();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon3();
      });
      function onScrollFontAwesomeIcon10()
      {
         var $obj = $("#wb_FontAwesomeIcon10");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon10', 'transform-lightspeed-in', 300, 1000);
         }
      }
      onScrollFontAwesomeIcon10();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon10();
      });
      function onScrollFontAwesomeIcon11()
      {
         var $obj = $("#wb_FontAwesomeIcon11");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_FontAwesomeIcon11', 'transform-lightspeed-in', 400, 1000);
         }
      }
      onScrollFontAwesomeIcon11();
      $(window).scroll(function(event)
      {
         onScrollFontAwesomeIcon11();
      });
      $('img[data-src]').lazyload();
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
   });
   $(window).on('load', function()
   {
      $('#preloader').remove();
   });
