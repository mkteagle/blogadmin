var auth0 = new Auth0({
    domain:         'teagleseagles.auth0.com',
    clientID:       'HgmQAsN454guxmXz8tsq951aM0rrfADL',
    callbackURL:    'http://localhost:5000/'
});

// sign-in with social provider with plain redirect
$('.signin-google').on('click', function() {
    auth0.signin({connection: 'google-oauth2'}); // use connection identifier
});
$('.signin-facebook').on('click', function() {
    auth0.signin({connection: 'facebook'});
});
