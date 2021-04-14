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