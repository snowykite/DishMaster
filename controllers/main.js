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
 * POST login page.
 */
module.exports.post_login = function(request, response) {
    response.render('search');
}

/*
 * GET signup page.
 */
module.exports.signup = function(request, response) {
    response.render('signup', {title: 'Sign Up'});
}

/*
 * POST signup page.
 */
module.exports.post_signup = function(request, response) {
    response.render('login', { message: "Please log in!"});
}
