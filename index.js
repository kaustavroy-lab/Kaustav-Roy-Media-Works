   
   $(document).ready(function()
   {
      $('#wb_Heading7').addClass('visibility-hidden');
      $('#wb_Card7').addClass('visibility-hidden');
      $('#wb_Card1').addClass('visibility-hidden');
      $('#wb_Card2').addClass('visibility-hidden');
      $('#wb_Card3').addClass('visibility-hidden');
      $('#wb_Card4').addClass('visibility-hidden');
      $('#wb_Card5').addClass('visibility-hidden');
      $('#wb_indexText1').addClass('visibility-hidden');
      $('#wb_indexCard1').addClass('visibility-hidden');
      $('#wb_indexCard2').addClass('visibility-hidden');
      $('#wb_indexCard3').addClass('visibility-hidden');
      $('#wb_indexText2').addClass('visibility-hidden');
      $('#wb_indexIconFont1').addClass('visibility-hidden');
      $('#wb_indexCard4').addClass('visibility-hidden');
      $('#wb_indexCard5').addClass('visibility-hidden');
      $('#wb_indexCard6').addClass('visibility-hidden');
      $('#wb_indexCard7').addClass('visibility-hidden');
      $('#wb_indexCard8').addClass('visibility-hidden');
      $('#wb_indexCard9').addClass('visibility-hidden');
      $('#wb_indexCard10').addClass('visibility-hidden');
      $('#wb_indexCard11').addClass('visibility-hidden');
      $('#wb_indexCard12').addClass('visibility-hidden');
      $('#wb_indexCard13').addClass('visibility-hidden');
      $('#wb_indexCard14').addClass('visibility-hidden');
      $('#wb_indexCard15').addClass('visibility-hidden');
      $('#wb_indexCard16').addClass('visibility-hidden');
      $('#wb_indexCard17').addClass('visibility-hidden');
      $('#wb_indexCard18').addClass('visibility-hidden');
      $('#wb_indexHeading1').addClass('visibility-hidden');
      $('#wb_indexCard19').addClass('visibility-hidden');
      $('#wb_indexCard20').addClass('visibility-hidden');
      $('#wb_indexCard21').addClass('visibility-hidden');
      $('#wb_indexCard22').addClass('visibility-hidden');
      $('#wb_indexCard23').addClass('visibility-hidden');
      $('#wb_indexCard24').addClass('visibility-hidden');
      $('#wb_indexCard25').addClass('visibility-hidden');
      $('#wb_indexCard26').addClass('visibility-hidden');
      $('#wb_indexCard27').addClass('visibility-hidden');
      $('#wb_indexCard28').addClass('visibility-hidden');
      $('#wb_indexCard29').addClass('visibility-hidden');
      $('#wb_indexCard30').addClass('visibility-hidden');
      $('#wb_indexCard31').addClass('visibility-hidden');
      $('#wb_indexCard32').addClass('visibility-hidden');
      $('#wb_indexCard33').addClass('visibility-hidden');
      $('#wb_indexHeading2').addClass('visibility-hidden');
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
      $("a[href*='#indexLayer1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#indexLayer1').offset().top }, 250, 'linear');
      });
      $('#indexLayer1').parallax();
      $("a[href*='#LayoutGrid3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid3').offset().top }, 250, 'linear');
      });
      function onScrollHeading7()
      {
         var $obj = $("#wb_Heading7");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Heading7', 'transform-rotate-in', 0, 750);
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
      $("a[href*='#LayoutGrid4']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid4').offset().top }, 250, 'linear');
      });
      function onScrollCard7()
      {
         var $obj = $("#wb_Card7");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card7', 'transform-scale-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card7', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card7').inViewPort(true))
      {
         $('#wb_Card7').addClass("in-viewport");
      }
      onScrollCard7();
      $(window).scroll(function(event)
      {
         onScrollCard7();
      });
      function onScrollCard1()
      {
         var $obj = $("#wb_Card1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card1', 'transform-scale-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card1').inViewPort(true))
      {
         $('#wb_Card1').addClass("in-viewport");
      }
      onScrollCard1();
      $(window).scroll(function(event)
      {
         onScrollCard1();
      });
      function onScrollCard2()
      {
         var $obj = $("#wb_Card2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card2', 'transform-scale-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card2').inViewPort(true))
      {
         $('#wb_Card2').addClass("in-viewport");
      }
      onScrollCard2();
      $(window).scroll(function(event)
      {
         onScrollCard2();
      });
      $("a[href*='#indexLayoutGrid3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid3').offset().top }, 250, 'linear');
      });
      $("a[href*='#indexLayoutGrid4']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid4').offset().top }, 250, 'linear');
      });
      $("a[href*='#indexLayoutGrid6']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid6').offset().top }, 250, 'linear');
      });
      $("a[href*='#LayoutGrid5']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid5').offset().top }, 250, 'linear');
      });
      function onScrollCard3()
      {
         var $obj = $("#wb_Card3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card3', 'animate-fade-in-right', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card3').inViewPort(true))
      {
         $('#wb_Card3').addClass("in-viewport");
      }
      onScrollCard3();
      $(window).scroll(function(event)
      {
         onScrollCard3();
      });
      function onScrollCard4()
      {
         var $obj = $("#wb_Card4");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card4', 'animate-fade-in-right', 0, 1250);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card4', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card4').inViewPort(true))
      {
         $('#wb_Card4').addClass("in-viewport");
      }
      onScrollCard4();
      $(window).scroll(function(event)
      {
         onScrollCard4();
      });
      function onScrollCard5()
      {
         var $obj = $("#wb_Card5");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Card5', 'animate-fade-in-right', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Card5', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Card5').inViewPort(true))
      {
         $('#wb_Card5').addClass("in-viewport");
      }
      onScrollCard5();
      $(window).scroll(function(event)
      {
         onScrollCard5();
      });
      function onScrollindexText1()
      {
         var $obj = $("#wb_indexText1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexText1', 'animate-fade-in-down', 0, 750);
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
      $("a[href*='#indexLayoutGrid7']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid7').offset().top }, 250, 'linear');
      });
      $("a[href*='#indexLayoutGrid5']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid5').offset().top }, 250, 'linear');
      });
      $("a[href*='#indexLayoutGrid2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid2').offset().top }, 250, 'linear');
      });
      function onScrollindexCard1()
      {
         var $obj = $("#wb_indexCard1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard1', 'transform-swing', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard1').inViewPort(true))
      {
         $('#wb_indexCard1').addClass("in-viewport");
      }
      onScrollindexCard1();
      $(window).scroll(function(event)
      {
         onScrollindexCard1();
      });
      function onScrollindexCard2()
      {
         var $obj = $("#wb_indexCard2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard2', 'transform-swing', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard2').inViewPort(true))
      {
         $('#wb_indexCard2').addClass("in-viewport");
      }
      onScrollindexCard2();
      $(window).scroll(function(event)
      {
         onScrollindexCard2();
      });
      function onScrollindexCard3()
      {
         var $obj = $("#wb_indexCard3");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard3', 'transform-swing', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard3', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard3').inViewPort(true))
      {
         $('#wb_indexCard3').addClass("in-viewport");
      }
      onScrollindexCard3();
      $(window).scroll(function(event)
      {
         onScrollindexCard3();
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
      function onScrollindexCard4()
      {
         var $obj = $("#wb_indexCard4");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard4', 'transform-bounce-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard4', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard4').inViewPort(true))
      {
         $('#wb_indexCard4').addClass("in-viewport");
      }
      onScrollindexCard4();
      $(window).scroll(function(event)
      {
         onScrollindexCard4();
      });
      function onScrollindexCard5()
      {
         var $obj = $("#wb_indexCard5");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard5', 'transform-bounce-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard5', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard5').inViewPort(true))
      {
         $('#wb_indexCard5').addClass("in-viewport");
      }
      onScrollindexCard5();
      $(window).scroll(function(event)
      {
         onScrollindexCard5();
      });
      function onScrollindexCard6()
      {
         var $obj = $("#wb_indexCard6");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard6', 'transform-bounce-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard6', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard6').inViewPort(true))
      {
         $('#wb_indexCard6').addClass("in-viewport");
      }
      onScrollindexCard6();
      $(window).scroll(function(event)
      {
         onScrollindexCard6();
      });
      function onScrollindexCard7()
      {
         var $obj = $("#wb_indexCard7");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard7', 'animate-fade-in-down', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard7', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard7').inViewPort(true))
      {
         $('#wb_indexCard7').addClass("in-viewport");
      }
      onScrollindexCard7();
      $(window).scroll(function(event)
      {
         onScrollindexCard7();
      });
      function onScrollindexCard8()
      {
         var $obj = $("#wb_indexCard8");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard8', 'animate-fade-in-down', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard8', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard8').inViewPort(true))
      {
         $('#wb_indexCard8').addClass("in-viewport");
      }
      onScrollindexCard8();
      $(window).scroll(function(event)
      {
         onScrollindexCard8();
      });
      function onScrollindexCard9()
      {
         var $obj = $("#wb_indexCard9");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard9', 'animate-fade-in-down', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard9', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard9').inViewPort(true))
      {
         $('#wb_indexCard9').addClass("in-viewport");
      }
      onScrollindexCard9();
      $(window).scroll(function(event)
      {
         onScrollindexCard9();
      });
      function onScrollindexCard10()
      {
         var $obj = $("#wb_indexCard10");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard10', 'transform-rotate-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard10', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard10').inViewPort(true))
      {
         $('#wb_indexCard10').addClass("in-viewport");
      }
      onScrollindexCard10();
      $(window).scroll(function(event)
      {
         onScrollindexCard10();
      });
      function onScrollindexCard11()
      {
         var $obj = $("#wb_indexCard11");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard11', 'transform-rotate-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard11', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard11').inViewPort(true))
      {
         $('#wb_indexCard11').addClass("in-viewport");
      }
      onScrollindexCard11();
      $(window).scroll(function(event)
      {
         onScrollindexCard11();
      });
      function onScrollindexCard12()
      {
         var $obj = $("#wb_indexCard12");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard12', 'transform-rotate-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard12', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard12').inViewPort(true))
      {
         $('#wb_indexCard12').addClass("in-viewport");
      }
      onScrollindexCard12();
      $(window).scroll(function(event)
      {
         onScrollindexCard12();
      });
      function onScrollindexCard13()
      {
         var $obj = $("#wb_indexCard13");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard13', 'animate-fade-in-left', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard13', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard13').inViewPort(true))
      {
         $('#wb_indexCard13').addClass("in-viewport");
      }
      onScrollindexCard13();
      $(window).scroll(function(event)
      {
         onScrollindexCard13();
      });
      function onScrollindexCard14()
      {
         var $obj = $("#wb_indexCard14");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard14', 'animate-fade-in-left', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard14', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard14').inViewPort(true))
      {
         $('#wb_indexCard14').addClass("in-viewport");
      }
      onScrollindexCard14();
      $(window).scroll(function(event)
      {
         onScrollindexCard14();
      });
      function onScrollindexCard15()
      {
         var $obj = $("#wb_indexCard15");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard15', 'animate-fade-in-left', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard15', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard15').inViewPort(true))
      {
         $('#wb_indexCard15').addClass("in-viewport");
      }
      onScrollindexCard15();
      $(window).scroll(function(event)
      {
         onScrollindexCard15();
      });
      function onScrollindexCard16()
      {
         var $obj = $("#wb_indexCard16");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard16', 'animate-fade-in-up', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard16', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard16').inViewPort(true))
      {
         $('#wb_indexCard16').addClass("in-viewport");
      }
      onScrollindexCard16();
      $(window).scroll(function(event)
      {
         onScrollindexCard16();
      });
      function onScrollindexCard17()
      {
         var $obj = $("#wb_indexCard17");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard17', 'animate-fade-in-up', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard17', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard17').inViewPort(true))
      {
         $('#wb_indexCard17').addClass("in-viewport");
      }
      onScrollindexCard17();
      $(window).scroll(function(event)
      {
         onScrollindexCard17();
      });
      function onScrollindexCard18()
      {
         var $obj = $("#wb_indexCard18");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard18', 'animate-fade-in-up', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard18', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard18').inViewPort(true))
      {
         $('#wb_indexCard18').addClass("in-viewport");
      }
      onScrollindexCard18();
      $(window).scroll(function(event)
      {
         onScrollindexCard18();
      });
      $("a[href*='#indexLayoutGrid8']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid8').offset().top }, 250, 'linear');
      });
      function onScrollindexHeading1()
      {
         var $obj = $("#wb_indexHeading1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexHeading1', 'transform-rotate-in', 0, 750);
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
      $("a[href*='#indexLayoutGrid9']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid9').offset().top }, 250, 'linear');
      });
      function onScrollindexCard19()
      {
         var $obj = $("#wb_indexCard19");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard19', 'slide-down-in', 0, 750);
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
      function onScrollindexCard20()
      {
         var $obj = $("#wb_indexCard20");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard20', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard20', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard20').inViewPort(true))
      {
         $('#wb_indexCard20').addClass("in-viewport");
      }
      onScrollindexCard20();
      $(window).scroll(function(event)
      {
         onScrollindexCard20();
      });
      function onScrollindexCard21()
      {
         var $obj = $("#wb_indexCard21");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard21', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard21', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard21').inViewPort(true))
      {
         $('#wb_indexCard21').addClass("in-viewport");
      }
      onScrollindexCard21();
      $(window).scroll(function(event)
      {
         onScrollindexCard21();
      });
      $("a[href*='#indexLayoutGrid10']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid10').offset().top }, 250, 'linear');
      });
      function onScrollindexCard22()
      {
         var $obj = $("#wb_indexCard22");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard22', 'slide-left-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard22', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard22').inViewPort(true))
      {
         $('#wb_indexCard22').addClass("in-viewport");
      }
      onScrollindexCard22();
      $(window).scroll(function(event)
      {
         onScrollindexCard22();
      });
      function onScrollindexCard23()
      {
         var $obj = $("#wb_indexCard23");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard23', 'slide-left-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard23', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard23').inViewPort(true))
      {
         $('#wb_indexCard23').addClass("in-viewport");
      }
      onScrollindexCard23();
      $(window).scroll(function(event)
      {
         onScrollindexCard23();
      });
      function onScrollindexCard24()
      {
         var $obj = $("#wb_indexCard24");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard24', 'slide-left-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard24', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard24').inViewPort(true))
      {
         $('#wb_indexCard24').addClass("in-viewport");
      }
      onScrollindexCard24();
      $(window).scroll(function(event)
      {
         onScrollindexCard24();
      });
      $("a[href*='#indexLayoutGrid11']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid11').offset().top }, 250, 'linear');
      });
      function onScrollindexCard25()
      {
         var $obj = $("#wb_indexCard25");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard25', 'slide-right-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard25', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard25').inViewPort(true))
      {
         $('#wb_indexCard25').addClass("in-viewport");
      }
      onScrollindexCard25();
      $(window).scroll(function(event)
      {
         onScrollindexCard25();
      });
      function onScrollindexCard26()
      {
         var $obj = $("#wb_indexCard26");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard26', 'slide-right-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard26', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard26').inViewPort(true))
      {
         $('#wb_indexCard26').addClass("in-viewport");
      }
      onScrollindexCard26();
      $(window).scroll(function(event)
      {
         onScrollindexCard26();
      });
      function onScrollindexCard27()
      {
         var $obj = $("#wb_indexCard27");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard27', 'slide-right-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard27', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard27').inViewPort(true))
      {
         $('#wb_indexCard27').addClass("in-viewport");
      }
      onScrollindexCard27();
      $(window).scroll(function(event)
      {
         onScrollindexCard27();
      });
      $("a[href*='#indexLayoutGrid12']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid12').offset().top }, 250, 'linear');
      });
      function onScrollindexCard28()
      {
         var $obj = $("#wb_indexCard28");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard28', 'slide-up-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard28', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard28').inViewPort(true))
      {
         $('#wb_indexCard28').addClass("in-viewport");
      }
      onScrollindexCard28();
      $(window).scroll(function(event)
      {
         onScrollindexCard28();
      });
      function onScrollindexCard29()
      {
         var $obj = $("#wb_indexCard29");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard29', 'slide-up-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard29', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard29').inViewPort(true))
      {
         $('#wb_indexCard29').addClass("in-viewport");
      }
      onScrollindexCard29();
      $(window).scroll(function(event)
      {
         onScrollindexCard29();
      });
      function onScrollindexCard30()
      {
         var $obj = $("#wb_indexCard30");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard30', 'slide-up-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard30', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard30').inViewPort(true))
      {
         $('#wb_indexCard30').addClass("in-viewport");
      }
      onScrollindexCard30();
      $(window).scroll(function(event)
      {
         onScrollindexCard30();
      });
      $("a[href*='#indexLayoutGrid13']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid13').offset().top }, 250, 'linear');
      });
      function onScrollindexCard31()
      {
         var $obj = $("#wb_indexCard31");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard31', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard31', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard31').inViewPort(true))
      {
         $('#wb_indexCard31').addClass("in-viewport");
      }
      onScrollindexCard31();
      $(window).scroll(function(event)
      {
         onScrollindexCard31();
      });
      function onScrollindexCard32()
      {
         var $obj = $("#wb_indexCard32");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard32', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard32', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard32').inViewPort(true))
      {
         $('#wb_indexCard32').addClass("in-viewport");
      }
      onScrollindexCard32();
      $(window).scroll(function(event)
      {
         onScrollindexCard32();
      });
      function onScrollindexCard33()
      {
         var $obj = $("#wb_indexCard33");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexCard33', 'slide-down-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexCard33', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexCard33').inViewPort(true))
      {
         $('#wb_indexCard33').addClass("in-viewport");
      }
      onScrollindexCard33();
      $(window).scroll(function(event)
      {
         onScrollindexCard33();
      });
      $("a[href*='#indexLayoutGrid14']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_indexLayoutGrid14').offset().top }, 250, 'linear');
      });
      function onScrollindexHeading2()
      {
         var $obj = $("#wb_indexHeading2");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_indexHeading2', 'transform-rotate-in', 0, 750);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_indexHeading2', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_indexHeading2').inViewPort(true))
      {
         $('#wb_indexHeading2').addClass("in-viewport");
      }
      onScrollindexHeading2();
      $(window).scroll(function(event)
      {
         onScrollindexHeading2();
      });
      $("a[href*='#CardContainer9']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#CardContainer9').offset().top }, 250, 'linear');
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
      $("a[href*='#MasterPageBookmark1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_MasterPageBookmark1').offset().top }, 600, 'linear');
      });
      function onScrollMasterPageBookmark1()
      {
         var $obj = $("#wb_MasterPageBookmark1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
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
   });
