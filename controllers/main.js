/*
 * GET home page.
 */
module.exports.home = function(request, response) {
    // response.render will go to views directory to find module.
    response.render('login', {title: 'Login'});
}

/*
 * GET login page.
 */
module.exports.login = function(request, response) {
    response.render('login', {title: 'Login'});
}

/*
 * GET signup page.
 */
module.exports.signup = function(request, response) {
    response.render('signup', {title: 'Sign Up'});
}