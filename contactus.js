   
   $(document).ready(function()
   {
      $('#wb_Heading1').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon10').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon11').addClass('visibility-hidden');
      $("a[href*='#indexLayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid1').offset().top }, 600, 'linear');
      });
      $("a[href*='#intro']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#intro').offset().top }, 600, 'easeOutQuad');
      });
      function onScrollcontactusHeading1()
      {
         var $obj = $("#wb_contactusHeading1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading1', 'vanish-in', 100, 1000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_contactusHeading1').inViewPort(true))
      {
         $('#wb_contactusHeading1').addClass("in-viewport");
      }
      onScrollcontactusHeading1();
      $(window).scroll(function(event)
      {
         onScrollcontactusHeading1();
      });
      var NewsFeedTicker1_Data = new Array();
      NewsFeedTicker1_Data[0] = ["", "Coming Soon", "", ""];
      NewsFeedTicker1_Data[1] = ["", "Coming Soon", "", ""];
      NewsFeedTicker1_Data[2] = ["", "Coming Soon", "", ""];
      $("#NewsFeedTicker1").newsviewer({ mode: 'rotate', pause: 2000, pause: 2000, animation: 4, animationDuration: 500, sortOrder: 0, dataSource: 'local', param: NewsFeedTicker1_Data, target: '_self', includeDate: false, maxItems: 10});
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
   });
