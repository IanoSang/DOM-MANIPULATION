$(document).ready(function() {
    $("#hello").click(function() {
        $("ul").prepend("<li>Hello!</li>");
    });

    $("button#goodbye").click(function() {
        $("ul").prepend("<li>Goodbye!</li>");
    });

    $("button#stop").click(function() {
        $("ul").prepend("<li>Stop copying me!</li>");
    });
    $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
    });

    $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });

    $("button#red").click(function() {
        $("body").removeClass();
        $("body").addClass("red-background");
    });

    $("#dark").click(function() {
        $("body").removeClass();
        $("body").addClass("dark-mode");
    });
    $(".clickable").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
    });
});

