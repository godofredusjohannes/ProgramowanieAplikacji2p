$(document).ready(function() {
    $("img").click(function() {
        $("img").hide();

        let enlargedImg = $(this).clone();
        enlargedImg.attr("id", "enlargedImage")
            .css({
                "width": "100%",
                "height": "auto",
                "display": "block",
            });

        $(".container").after(enlargedImg);
    });
});