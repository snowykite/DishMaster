var registeredUsers = [{
    email: "linxiaoran0210@gmail.com",
    password: "111111",
}];

module.exports.loggedIn = function (req, res, next) {
    if (req.session.user) {
        //proceed if the user is logged in
        next();
    } else {
        res.send("you must first log in.");
    }
}
/*
 * GET home page.
 */
module.exports.home = function(request, response) {
    // response.render will go to views directory to find module.
    response.render('login', {});
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
    console.log(request.body);
    var matches = registeredUsers.filter(function (user) {
        return (user.email === request.body.email) &&
                (user.password === request.body.password);
    });
    if (matches.length === 0) {
        response.render('login', { message: "invalid credentials!"});
    } else {
        request.session.user = matches[0];
        response.render('home', { email: request.session.user.email});
    }
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
    console.log(request.body);
    if (!request.body.email || !request.body.password) {
        response.status("400");
        response.send("Invalid details.");
    } else {
        var matches = registeredUsers.filter(function (user) {
            return user.email === request.body.email;
        });
        if (matches.length > 0) {
            response.render('signup', { message: "Already registered, please log in!"});
        } else {
            var newUser = {
                email: request.body.email,
                password: request.body.password
            };
            registeredUsers.push(newUser);
            response.render('login', { message: "Please log in!"});
        }
    }
}
