// PASSPORT addEdu
// =============================================
$(document).ready(function() {
  // Getting references to our form and input
  var addEduForm = $("form.add-edu");
  var eduNameInput = $("input#school-name-input");
  var degreeInput = $("input#degree-input");
  var startDateInput = $("input#edu-start-input");
  var endDateInput = $("input#edu-end-input");

  // When the add button is clicked, we validate the name
  addEduForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      school: eduNameInput.val().trim(),
      degree: degreeInput.val().trim(),
      startDate: startDateInput.val().trim(),
      endDate: endDateInput.val().trim()
    };
    console.log(userData);

    if (!userData.school) {
      $(".modal-success").hide();
      $(".modal-fail").show();
      return;
    } else {
      $(".modal-success").show();
      $(".modal-fail").hide();
    }
    // If we have a school name, run the addEdu function
    addEdu(
      userData.school,
      userData.degree,
      userData.startDate,
      userData.endDate
    );
    eduNameInput.val("");
    degreeInput.val("");
    startDateInput.val("");
    endDateInput.val("");
  });

  // Does a post to the edu route.
  // Otherwise we log any errors
  function addEdu(school, degree, startDate, endDate) {
    $.post("/api/edu", {
      school: school,
      degree: degree,
      startDate: startDate,
      endDate: endDate
    }).then(function() {
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    });
    //   .catch(handleLoginErr);
  }
  //THIS WAS GIVING A LINT ERROR - WAS DEFINED BUT NOT CALLED
  // function handleLoginErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }
});
