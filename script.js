$(function () {
  //Vars

  let header = $("#header");
  let topline = $("#topline");
  let introH = $("#intro").innerHeight();
  let scrollOffset = $(window).scrollTop();

  // Fixed header

  // checkScroll(scrollOffset);

  // function checkScroll(scrollOffset) {
  //   if (scrollOffset >= introH) {
  //     header.addClass("fixed");
  //     topline.addClass("zero");
  //   } else {
  //     header.removeClass("fixed");
  //     topline.removeClass("zero");
  //   }
  // }

  // $(window).on("scroll load  resize  ", function () {
  //   scrollOffset = $(this).scrollTop();
  //   checkScroll(scrollOffset);
  // });

  // smooth scrolling
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let blockId = $this.data("scroll");
    let blockOffset = $(blockId).offset().top;

    $("html,body").animate(
      {
        scrollTop: blockOffset - 50,
      },
      600
    );
  });

  // parent function end
});
