// provided a string (password)
function validatePassword(password) {
    // create promise with resolve and reject as params
    return new Promise((resolve, reject) => {
        // validate that password matches bambi (the deer)
        if (password !== 'bambi') {
            // password doesn't match, return an error with reject
            return reject('Invalid Password!');
        }

        // password matches, return a success state with resolve
        resolve();
    });
}

function done(err) {
    // if an err was passed, console out a message
    if (err) {
        console.log(err);
        return; // stop execution
    }

    // console out a valid state
    console.log('Password is valid!');
}

// dummy password
const password = 'foo';

// using a promise, call the validate password function
validatePassword(password)
    .then(() => {
        // it was successful
        done(null);
    })
    .catch(err => {
        // an error occurred, call the done function and pass the err message
        done(err);
    });
