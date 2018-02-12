//REVIEW: Encrypting in front end is an interesting idea, however, please check this article for reasons not to do so https://www.zhihu.com/question/25539382
// var ajaxHandler = require('./ajaxHandler');

$(function(){

    /**
     * Initialize
     */
    function init() {
        // Register event listeners
        $('login-btn').on('click', login);
        $('sign-up-btn').on('click', signup);
    }


    //REVIEW: The name of this file is forms.js, which usually means it contains functions that can be utilized through the whole project. Therefore, it's better to put functions that in charge of specific form into seperate module, e.g. login.js
    /**
     * login
     */
    function login() {
        var email = $('#email').val();
        var password = $('#password').val();

        // The request parameters
        var url = '';
        var postData = {
            email: email,
            password: password
        };
        ajaxHandler.postHandler(url, postData);
    }


    //REVIEW: If you look into the code below and above, you'll find duplicate, which should be dismissed as much as we can. Maybe you can try to create a "template method" to submit form through ajax.
    /**
     * signup
     */
    function signup() {
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var password = $('#password').val();

        // The request parameters
        var url = '';
        var postData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        };
        ajaxHandler.postHandler(url, postData);
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
