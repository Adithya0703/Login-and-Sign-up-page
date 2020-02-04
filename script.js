$(".gl").click(function () {
    $(".logo").attr("src", "images/google.png");
    $("h2").css("color", "#db4a39")
    $("input[type=submit]").mouseenter(function () {
        $("input[type=submit]").css("background-color", "#ffe7d1");
    });
    $("input[type=submit]").mouseleave(function () {
        $("input[type=submit]").css("background-color", "#db4a39");
    });
    $("input[type=submit]").css("background", "#db4a39");
    $("a").css("color", "#db4a39");
});
$(".fb").click(function () {
    $(".logo").attr("src", "images/Facebook.png");
    $("h2").css("color", "#3b5998");
    $("input[type=submit]").css("background", "#3b5998");
    $("input[type=submit]").mouseenter(function () {
        $("input[type=submit]").css("background-color", "#ffe7d1");
    });
    $("input[type=submit]").mouseleave(function () {
        $("input[type=submit]").css("background-color", "#3b5998");
    });
    $("a").css("color", "#3b5998");
})
$(".tw").click(function () {
    $(".logo").attr("src", "images/twitter.png");
    $("h2").css("color", "#00acee");
    $("input[type=submit]").css("background", "#00acee");
    $("input[type=submit]").mouseenter(function () {
        $("input[type=submit]").css("background-color", "#ffe7d1");
    });
    $("input[type=submit]").mouseleave(function () {
        $("input[type=submit]").css("background-color", "#00acee");
    });
    $("a").css("color", "#00acee");
})