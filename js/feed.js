$().ready(function() {
    $('#contacts').validate({
    rules: {
        firstname: "requared",
        lastname: "requared",
            username: {
                requared: true,
                minlenght: 2
        },
        email: {
            requared: true,
            email: true
        },
    }
});
})



$(".selector").validate({
    errorElement: "span"
});
