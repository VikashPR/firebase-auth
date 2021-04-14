const singUpForm = document.querySelector('#signup-form');
singUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user Info
    const email = singUpForm['signup-email'].value;
    const password = singUpForm['signup-password'].value;
    // console.log("emailasd:",email,"passownet:", password);

    // !Sign up with firebase auth
      auth.createUserWithEmailAndPassword(email, password).then(cred => {
          console.log(cred);
        const modal = document.querySelector('#modal-signup');
            singUpForm.reset();
            M.Modal.getInstance(modal).close();
      });
});

// !Logout user 
const logout = document.querySelector('#logout');
logout.addEventListener('click',(e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user logged out');
    })
})

// !Loging User in 
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    console.log('Email',email, "Password",password);

    // Login Method
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        const modal = document.querySelector('#modal-login');
        loginForm.reset();
        M.Modal.getInstance(modal).close();
    });
})
