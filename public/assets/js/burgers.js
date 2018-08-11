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

    $("li[devoured=0]").on("click", function () {
        const burgerID = $(this).attr('id');
        const isDevoured = $(this).attr('devoured');
        console.log(burgerID, isDevoured);
        
        $.ajax({
            url: "/api/burgers/" + burgerID,
            type: "PUT",
            // data: { devoured: !(!! + isDevoured) }
            // !! + 0 returns false, while !! + 1 returns true
            // The 'devoured' key above was to reverse true/false on a burger
            // However we can't bring back burgers from the digestive system
            // So we will always set devoured to true
            data: { devoured: true }
        }).then(function (ret) {
            location.reload();
        })
    });
})