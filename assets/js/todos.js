// $("li").click(function() {
//     $(this).toggleClass('list-strike')
// });
// On will add eventlistenrers for all the future li's added.
// ON click on the parent ul node and for all child li nodes
$("ul").on('click', "li", function () {
    $(this).toggleClass('list-strike')
});
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$(".list-input").keypress(function (event) {
    if (event.which === 13) {
        $("ul").append("<li style='display:none'>" + $(this).val() + " <span class='mdi mdi-close-circle-outline'><span>" + "</li>");
        $(this).val(" ");
        $("li:hidden").fadeIn('slow');
    }
})
$(".todo-header").on("click", ".mdi-plus", function (event) {
    event.stopPropagation();
    $(this).parents('.todo-container').children(".list-input").fadeToggle(400);
});

$(".todo-header").click(function () {
    let headerInput = $(this).children(".header-input");
    //console.log(headerInput[0].disabled);
    if (headerInput[0].disabled) {
        $(this).children(".mdi-pencil").fadeToggle(200);
        $(this).children(".header-input").prop('disabled', false);
    }

});

$(".header-input").keypress(function (event) {
    if (event.which === 13) {
        //console.log(this);
        this.disabled = true;
        $(this).siblings(".mdi-pencil").fadeToggle(200);
    }
})