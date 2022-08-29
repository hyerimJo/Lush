$(function () {
  //header_menu
  $(function () {
    $(".header_menu .m").on("mouseover focus", function () {
      $(".header_menu").stop().animate({ height: "320px" }, 500)
      $(".submenu").fadeIn(500)
    })

    $(".header_menu").on("mouseleave blur", function () {
      $(".header_menu").animate({ height: "48px" }, 500)
      $(".submenu").fadeOut(500)
    })
  })

  //visual slide
  jQuery(document).ready(function ($) {
    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
      },
    }

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options)

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
      var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth
      if (refSize) {
        refSize = Math.min(refSize, 1920)
        jssor_1_slider.$ScaleWidth(refSize)
      } else {
        window.setTimeout(ScaleSlider, 30)
      }
    }
    ScaleSlider()
    $(window).bind("load", ScaleSlider)
    $(window).bind("resize", ScaleSlider)
    $(window).bind("orientationchange", ScaleSlider)
    /*responsive code end*/
  })

  //contents4
  jQuery(document).ready(function ($) {
    var jssor_1_options = {
      $AutoPlay: true,
      $SlideDuration: 800,
      $SlideEasing: $Jease$.$OutQuint,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$,
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
      },
    }

    var jssor_1_slider = new $JssorSlider$("jssor_2", jssor_1_options)

    /*responsive code begin*/
    /*you can remove responsive code if you don't want the slider scales while window resizing*/
    function ScaleSlider() {
      var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth
      if (refSize) {
        refSize = Math.min(refSize, 1920)
        jssor_1_slider.$ScaleWidth(refSize)
      } else {
        window.setTimeout(ScaleSlider, 30)
      }
    }
    ScaleSlider()
    $(window).bind("load", ScaleSlider)
    $(window).bind("resize", ScaleSlider)
    $(window).bind("orientationchange", ScaleSlider)
    /*responsive code end*/
  })
}) //function end
