// PASSPORT SIGNUP
// =============================================
$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var nameInput = $("input#name-input");
  var addressInput = $("input#address-input");
  var phoneInput = $("input#phone-input");
  var urlInput = $("input#url-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      address: addressInput.val().trim(),
      phone: phoneInput.val().trim(),
      url: urlInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.name,
      userData.email,
      userData.password,
      userData.addresss,
      userData.phone,
      userData.url
    );
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    addressInput.val("");
    phoneInput.val("");
    urlInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, email, password, address, phone, url) {
    $.post("/api/signup", {
      name: name,
      email: email,
      password: password,
      address: address,
      phone: phone,
      url: url
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
