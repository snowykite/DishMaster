var registeredUsers = [{
    email: "linxiaoran0210@gmail.com",
    password: "111111",
}];

/*
 * GET home page.
 */
module.exports.home = function(req, res) {
    if(!req.session.user)
    {
        // hasn't logged in
        res.redirect('/login');
    }
    res.render('home', { email: req.session.user.email});
}

/*
 * GET login page.
 */
module.exports.login = function(req, res) {
    res.render('login', {title: 'Login'});
}

/*
 * POST login page.
 */
module.exports.post_login = function(req, res) {
    console.log(req.body);
    var matches = registeredUsers.filter(function (user) {
        return (user.email === req.body.email) &&
                (user.password === req.body.password);
    });
    if (matches.length === 0) {
        res.render('login', { message: "invalid credentials!"});
    } else {
        req.session.user = matches[0];
        res.redirect('/home');
    }
}

/*
 * GET signup page.
 */
module.exports.signup = function(req, res) {
    res.render('signup', {title: 'Sign Up'});
}

/*
 * GET Add Dish page.
 */
module.exports.addDish = function(req, res) {
    res.render('add_dish', {title: 'Add Dish'});
}



/*
 * POST signup page.
 */
module.exports.post_signup = function(req, res) {
    console.log(req.body);
    if (!req.body.email || !req.body.password) {
        res.status("400");
        res.send("Invalid details.");
    } else {
        var matches = registeredUsers.filter(function (user) {
            return user.email === req.body.email;
        });
        if (matches.length > 0) {
            res.render('signup', { message: "Already registered, please log in!"});
        } else {
            var newUser = {
                email: req.body.email,
                password: req.body.password
            };
            registeredUsers.push(newUser);
            res.render('login', { message: "Please log in!"});
        }
    }
}

