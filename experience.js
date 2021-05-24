   
   $(document).ready(function()
   {
      $('#wb_Heading7').addClass('visibility-hidden');
      $('#wb_indexText1').addClass('visibility-hidden');
      $('#wb_indexText2').addClass('visibility-hidden');
      $('#wb_indexIconFont1').addClass('visibility-hidden');
      $('#wb_indexHeading1').addClass('visibility-hidden');
      $('#wb_indexCard19').addClass('visibility-hidden');
      $('#wb_experienceCard1').addClass('visibility-hidden');
      $('#wb_experienceCard2').addClass('visibility-hidden');
      $('#wb_experienceCard3').addClass('visibility-hidden');
      $('#wb_experienceCard4').addClass('visibility-hidden');
      $('#wb_experienceCard5').addClass('visibility-hidden');
      $('#wb_experienceCard6').addClass('visibility-hidden');
      $('#wb_experienceCard7').addClass('visibility-hidden');
      $('#wb_experienceCard8').addClass('visibility-hidden');
      $('#wb_experienceCard9').addClass('visibility-hidden');
      $('#wb_experienceCard10').addClass('visibility-hidden');
      $('#wb_experienceCard11').addClass('visibility-hidden');
      $('#wb_experienceCard12').addClass('visibility-hidden');
      $('#wb_experienceCard13').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon10').addClass('visibility-hidden');
      $('#wb_FontAwesomeIcon11').addClass('visibility-hidden');
      $("a[href*='#indexLayoutGrid1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid1').offset().top }, 600, 'linear');
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $('#indexLayer1').parallax();
      function onScrollHeading7()
      {
         var $obj = $("#wb_Heading7");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading7', 'flip-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Heading7', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Heading7').inViewPort(true))
      {
         $('#wb_Heading7').addClass("in-viewport");
      }
      onScrollHeading7();
      $(window).scroll(function(event)
      {
         onScrollHeading7();
      });
      function onScrollindexText1()
      {
         var $obj = $("#wb_indexText1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexText1', 'animate-fade-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexText1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexText1').inViewPort(true))
      {
         $('#wb_indexText1').addClass("in-viewport");
      }
      onScrollindexText1();
      $(window).scroll(function(event)
      {
         onScrollindexText1();
      });
      function onScrollindexText2()
      {
         var $obj = $("#wb_indexText2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexText2', 'transform-scale-in', 0, 1250);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexText2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexText2').inViewPort(true))
      {
         $('#wb_indexText2').addClass("in-viewport");
      }
      onScrollindexText2();
      $(window).scroll(function(event)
      {
         onScrollindexText2();
      });
      function onScrollindexIconFont1()
      {
         var $obj = $("#wb_indexIconFont1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexIconFont1', 'animate-fade-in-down', 0, 1250);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexIconFont1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexIconFont1').inViewPort(true))
      {
         $('#wb_indexIconFont1').addClass("in-viewport");
      }
      onScrollindexIconFont1();
      $(window).scroll(function(event)
      {
         onScrollindexIconFont1();
      });
      function onScrollindexHeading1()
      {
         var $obj = $("#wb_indexHeading1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexHeading1', 'animate-flash', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexHeading1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexHeading1').inViewPort(true))
      {
         $('#wb_indexHeading1').addClass("in-viewport");
      }
      onScrollindexHeading1();
      $(window).scroll(function(event)
      {
         onScrollindexHeading1();
      });
      function onScrollindexCard19()
      {
         var $obj = $("#wb_indexCard19");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard19', 'slide-left-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard19', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard19').inViewPort(true))
      {
         $('#wb_indexCard19').addClass("in-viewport");
      }
      onScrollindexCard19();
      $(window).scroll(function(event)
      {
         onScrollindexCard19();
      });
      function onScrollexperienceCard1()
      {
         var $obj = $("#wb_experienceCard1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard1', 'animate-fade-in-up', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard1').inViewPort(true))
      {
         $('#wb_experienceCard1').addClass("in-viewport");
      }
      onScrollexperienceCard1();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard1();
      });
      function onScrollexperienceCard2()
      {
         var $obj = $("#wb_experienceCard2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard2', 'animate-fade-in-up', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard2').inViewPort(true))
      {
         $('#wb_experienceCard2').addClass("in-viewport");
      }
      onScrollexperienceCard2();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard2();
      });
      function onScrollexperienceCard3()
      {
         var $obj = $("#wb_experienceCard3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard3', 'slide-left-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard3').inViewPort(true))
      {
         $('#wb_experienceCard3').addClass("in-viewport");
      }
      onScrollexperienceCard3();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard3();
      });
      function onScrollexperienceCard4()
      {
         var $obj = $("#wb_experienceCard4");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard4', 'slide-left-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard4', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard4').inViewPort(true))
      {
         $('#wb_experienceCard4').addClass("in-viewport");
      }
      onScrollexperienceCard4();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard4();
      });
      function onScrollexperienceCard5()
      {
         var $obj = $("#wb_experienceCard5");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard5', 'slide-right-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard5', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard5').inViewPort(true))
      {
         $('#wb_experienceCard5').addClass("in-viewport");
      }
      onScrollexperienceCard5();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard5();
      });
      function onScrollexperienceCard6()
      {
         var $obj = $("#wb_experienceCard6");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard6', 'slide-right-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard6', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard6').inViewPort(true))
      {
         $('#wb_experienceCard6').addClass("in-viewport");
      }
      onScrollexperienceCard6();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard6();
      });
      function onScrollexperienceCard7()
      {
         var $obj = $("#wb_experienceCard7");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard7', 'slide-right-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard7', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard7').inViewPort(true))
      {
         $('#wb_experienceCard7').addClass("in-viewport");
      }
      onScrollexperienceCard7();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard7();
      });
      function onScrollexperienceCard8()
      {
         var $obj = $("#wb_experienceCard8");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard8', 'slide-up-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard8', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard8').inViewPort(true))
      {
         $('#wb_experienceCard8').addClass("in-viewport");
      }
      onScrollexperienceCard8();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard8();
      });
      function onScrollexperienceCard9()
      {
         var $obj = $("#wb_experienceCard9");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard9', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard9', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard9').inViewPort(true))
      {
         $('#wb_experienceCard9').addClass("in-viewport");
      }
      onScrollexperienceCard9();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard9();
      });
      function onScrollexperienceCard10()
      {
         var $obj = $("#wb_experienceCard10");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard10', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard10', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard10').inViewPort(true))
      {
         $('#wb_experienceCard10').addClass("in-viewport");
      }
      onScrollexperienceCard10();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard10();
      });
      function onScrollexperienceCard11()
      {
         var $obj = $("#wb_experienceCard11");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard11', 'slide-up-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard11', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard11').inViewPort(true))
      {
         $('#wb_experienceCard11').addClass("in-viewport");
      }
      onScrollexperienceCard11();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard11();
      });
      function onScrollexperienceCard12()
      {
         var $obj = $("#wb_experienceCard12");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard12', 'slide-up-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard12', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard12').inViewPort(true))
      {
         $('#wb_experienceCard12').addClass("in-viewport");
      }
      onScrollexperienceCard12();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard12();
      });
      function onScrollexperienceCard13()
      {
         var $obj = $("#wb_experienceCard13");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_experienceCard13', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_experienceCard13', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_experienceCard13').inViewPort(true))
      {
         $('#wb_experienceCard13').addClass("in-viewport");
      }
      onScrollexperienceCard13();
      $(window).scroll(function(event)
      {
         onScrollexperienceCard13();
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
   });
   
   $(document).ready(function()
   {
      var $countup = $('#count-up h1');
      
      $countup.each(function() 
      {
        var $obj = $(this);
        $obj.data('value', parseInt($obj.html()));
        $obj.data('done', false);
        $obj.html('0');
      });
      $(window).bind('scroll', function() 
      {
         $countup.each(function() 
         {
            var $obj = $(this);
            if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
            {
               $obj.data('done', true);
               $obj.animate({scroll: 1}, 
               { 
                  duration: 3000, 
                  step: function(now) 
                  {
                     var $obj = $(this);
                     var val = Math.round($obj.data('value') * now);
                     $obj.html(val);
                  }
               });
            }
         });
      }).triggerHandler('scroll');
   });
