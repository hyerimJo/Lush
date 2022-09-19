$(function () {
  //header_menu
  $(function () {
    $(".header_menu .m").on("mouseover focus", function () {
      $(".header_menu").stop().animate({ height: "320px" }, 500);
      $(".submenu").fadeIn(500);
    });

    $(".header_menu").on("mouseleave blur", function () {
      $(".header_menu").animate({ height: "48px" }, 500);
      $(".submenu").fadeOut(500);
    });
  });

  /*visual*/
  $(".slideList").children("div:gt(0)").hide();
  var current = 0;

  setInterval(function () {
    var next = (current + 1) % 3;
    $(".slideList").find("div").eq(current).fadeOut();
    $(".slideList").find("div").eq(next).fadeIn();
    current = next;
  }, 3000);
}); //function end
