$(document).ready(function () {
    $("#zakladka_info1").show();

    $("p[id^='zakladka']").not("#zakladka1").click(function () {
        $("div[id^='zakladka_info']").hide();

        let id = $(this).attr("id").replace("zakladka", "zakladka_info");
        $("#" + id).show();
    });
});
