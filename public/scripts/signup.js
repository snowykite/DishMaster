$(function () {

    $('#firstname').change(firstNameValidate);
    $('#lastname').change(lastNameValidate);
    $('#email').change(emailValidate);
    $('#password').change(pwValidate);

    function firstNameValidate() {
        var firstName = $('#firstname').val();
        if (firstName === '') {
            alert("Missing first name.");
        }
    }

    function lastNameValidate() {
        var lastName = $('#lastname').val();
        if (lastName === '') {
            alert("Missing last name.");
        }
    }

    function emailValidate() {
        var email = $('#email').val();
        emailPattern = /^.+@.+\..{2, 4}$/;
        if (!email.match(emailPattern)) {
            alert("Invalid email address. Should be xxx@xxx.xx");
        }
    }

    function pwValidate() {
        var password = $('#password').val();
        if (password ==='') {
            alert("Missing password.");
        }
    }
});