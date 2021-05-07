   
   $(document).ready(function()
   {
      $('#wb_Text1').addClass('visibility-hidden');
      $('#wb_Heading1').addClass('visibility-hidden');
      $('#wb_indexImage2').addClass('visibility-hidden');
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $('#indexOverlayMenu1-overlay').overlay({hideTransition:true});
      $('.indexOverlayMenu1').drilldownmenu({backText: 'Back'});
      $('#indexOverlayMenu1').on('click', function(e)
      {
         $.overlay.show($('#indexOverlayMenu1-overlay'));
         return false;
      });
      function onScrollText1()
      {
         var $obj = $("#wb_Text1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text1', 'transform-roll-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text1').inViewPort(true))
      {
         $('#wb_Text1').addClass("in-viewport");
      }
      onScrollText1();
      $(window).scroll(function(event)
      {
         onScrollText1();
      });
      function onScrollHeading1()
      {
         var $obj = $("#wb_Heading1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading1', 'transform-rotate-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading1').inViewPort(true))
      {
         $('#wb_Heading1').addClass("in-viewport");
      }
      onScrollHeading1();
      $(window).scroll(function(event)
      {
         onScrollHeading1();
      });
      function onScrollindexImage2()
      {
         var $obj = $("#wb_indexImage2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexImage2', 'animate-fade-in-down', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexImage2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexImage2').inViewPort(true))
      {
         $('#wb_indexImage2').addClass("in-viewport");
      }
      onScrollindexImage2();
      $(window).scroll(function(event)
      {
         onScrollindexImage2();
      });
   });
