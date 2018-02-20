
const postHandler = function (url, params) {
    $.post(
        url,
        params,
        function (data) {
            return data;
        }
    ).done(function () {
        console.log('finished.');
    }).fail(function () {
        console.log('Oops, something went wrong.');
    });
}


const getHandler = function (url) {
    $.get(
        url,
        function (data) {
            return data;
        }
    ).done(function () {
        console.log('finished.');
    }).fail(function () {
        console.log('Oops, something went wrong.');
    });
}
