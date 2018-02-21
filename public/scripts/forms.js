//REVIEW: Encrypting in front end is an interesting idea, however, please check this article for reasons not to do so https://www.zhihu.com/question/25539382
// var ajaxHandler = require('./ajaxHandler');

$(function(){

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

});
