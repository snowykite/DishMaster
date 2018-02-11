$(function(){

    /**
     * Initialize
     */
    function init() {
        // Register event listeners
        $('login-btn').addEventListener('click', login);
        $('sign-up-btn').addEventListener('click', signup);
    }

    /**
     * login
     */
    function login() {
        var email = $('#email').val();
        var password = $('#password').val();
        password = md5(email + md5(password));

        // The request parameters
        var url = '';
        $.post(
            url,
            {
                email: email,
                password: password,
            },
            function (result) {
                $('.form').html(result);
            }
        ).done(function() {
            console.log('finished.');
        }).fail(function() {
            console.log('Oops, something went wrong.');
        });
    }

    /**
     * signup
     */
    function signup() {
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();

        password = md5(firstname + lastname + md5(password));

        // The request parameters
        var url = '';
        $.post(
            url,
            {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            },
            function (result) {
                $('.form').html(result);
            }
        ).done(function() {
            console.log('finished.')
        }).fail(function() {
            console.log("Oops, something went wrong.")
        });
    }

    /**
     * handle keyup, blur, and focus animation for labels of signup and login form
     */
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {

      var $this = $(this),
          label = $this.prev('label');

        if (e.type === 'keyup') {
          if ($this.val() === '') {
              label.removeClass('active highlight');
            } else {
              label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
            label.removeClass('active highlight');
          } else {
            label.removeClass('highlight');
          }
        } else if (e.type === 'focus') {
          if( $this.val() === '' ) {
            label.removeClass('highlight');
          } else {
            label.addClass('highlight');
          }
        }

    });

    /**
     * login-sign-up page init
     */
    init();
});

