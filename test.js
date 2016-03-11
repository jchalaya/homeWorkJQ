$("input:last").click(function() {
    var perc = 0;
    var ball = 0;

    if ($("input:first").prop("checked") == true) {
        perc = perc + 20;
        ball = ball + 5;
    }
    if ($("input:eq(6)").prop("checked") == true) {
        perc = perc + 20;
        ball = ball + 5;
    }
    if ($("input:eq(11)").prop("checked") == true) {
        perc = perc + 20;
        ball = ball + 5;
    }
    if ($("input:eq(12)").prop("checked") == false && $("input:eq(13)").prop("checked") == true && $("input:eq(14)").prop("checked") == false && $("input:eq(15)").prop("checked") == true) {
        perc = perc + 20;
        ball = ball + 5;
    }
    if ($("input:eq(16)").prop("checked") == true && $("input:eq(17)").prop("checked") == true && $("input:eq(18)").prop("checked") == false && $("input:eq(19)").prop("checked") == false) {
        perc = perc + 20;
        ball = ball + 5;
    }
    alert("Вы набрали " + ball + " баллов  " + perc + " % правильных ответов.");
});
