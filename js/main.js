

$(window).on("scroll", () => {
    let wScroll = $(window).scrollTop()

    if (wScroll > 400) {
        $(".navbar").addClass("navColor");

    } else {
        $(".navbar").removeClass("navColor");
    }
})


$(window).on("scroll", () => {
    let wScroll = $(window).scrollTop()

    if (wScroll > 980) {
        $(".member").eq(0).css("left", "10px")
        $(".member").eq(1).css("left", "15px")
        $(".member").eq(2).css("right", "-15px")
        $(".member").eq(3).css("right", "-15px");
    } else {
        $(".member").eq(0).css("left", "-400px")
        $(".member").eq(1).css("left", "-400px")
        $(".member").eq(2).css("right", "-400px")
        $(".member").eq(3).css("right", "-400px");
    }
})

$(window).on("scroll", () => {
    let wScroll = $(window).scrollTop()

    if (wScroll > 2000) {
        $(".item").slideDown(1500);

    } else {
        $(".item").hide();
    }
})


$(".barsIcon").on("click", () => {
    $(".toggle-menu").slideToggle(1000);
})