$(document).ready(function () {

    $("button[type=submit]").on("click", function (event) {
        event.preventDefault();
        $.post("/api/burgers", {
            name: $("#burger-text").val().trim()
        }
        ).then(function (ret) {
            location.reload();
        });
    });

    $("li").on("click", function () {
        const burgerID = $(this).attr('id');
        const isDevoured = $(this).attr('devoured');
        console.log(burgerID, isDevoured);
        
        $.ajax({
            url: "/api/burgers/" + burgerID,
            type: "PUT",
            data: { devoured: !(!! + isDevoured) }
            // !! + 0 returns false, while !! + 1 returns true
        }).then(function (ret) {
            location.reload();
        })
    });
})