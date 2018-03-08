$(init);

function init() {
    $("#resizeMe").button({
        class: {
            "ui-button": "highlight"
        }
    }).resizable();

}