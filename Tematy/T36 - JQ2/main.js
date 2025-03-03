$(document).ready(function () {
    $("div[id^='zakladka_info']").hide();
    $("#zakladka_info1").show();

    $("p[id^='zakladka']").click(function () {
        let id = $(this).attr("id").replace("zakladka", "zakladka_info");

        if ($("#" + id).is(":visible")) return;

        $("div[id^='zakladka_info']").hide();

        $("#" + id).show();
    });
});
