// PASSPORT addRef
// =============================================
$(document).ready(function() {
  // Getting references to our form and input
  var addRefForm = $("form.add-ref");
  var refNameInput = $("input#ref-name-input");
  var refPhoneInput = $("input#ref-phone-input");
  var refRelInput = $("input#ref-rel-input");

  // When the signup button is clicked, we validate the email and password are not blank
  addRefForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: refNameInput.val().trim(),
      phone: refPhoneInput.val().trim(),
      relationship: refRelInput.val().trim()
    };
    console.log(userData);

    if (!userData.name || !userData.phone) {
      $(".modal-success").hide();
      $(".modal-fail").show();
      return;
    } else {
      $(".modal-success").show();
      $(".modal-fail").hide();
    }
    // If we have an project bame and asscSkill, run the addJob function
    addRef(userData.name, userData.phone, userData.relationship);
    refNameInput.val("");
    refPhoneInput.val("");
    refRelInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function addRef(name, phone, relationship) {
    $.post("/api/ref", {
      name: name,
      phone: phone,
      relationship: relationship
    }).then(function() {
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    });
    //   .catch(handleLoginErr);
  }
  //DEFINED BUT NOT CALLED
  // function handleLoginErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }
});
