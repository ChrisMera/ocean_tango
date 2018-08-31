// PASSPORT SIGNUP
// =============================================
$(document).ready(function() {
  // Getting references to our form and input
  var addJobForm = $("form.add-job");
  var typeInput = $("select#new-type-select");
  var jobName = $("input#job-name-input");
  var roleInput = $("input#role-input");
  var startDateInput = $("input#start-input");
  var endDateInput = $("input#end-input");
  var descriptionInput = $("input#description-input");
  var skillsInput = $("input#skills-input");

  // When the signup button is clicked, we validate the email and password are not blank
  addJobForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      expType: typeInput.val(),
      name: jobName.val().trim(),
      role: roleInput.val().trim(),
      startDate: startDateInput.val().trim(),
      endDate: endDateInput.val().trim(),
      description: descriptionInput.val().trim(),
      asscSkills: skillsInput.val().trim()
    };
    console.log(userData);

    if (!userData.name || !userData.asscSkills) {
      return;
    }
    // If we have an project bame and asscSkill, run the addJob function
    addJob(
      userData.expType,
      userData.name,
      userData.role,
      userData.startDate,
      userData.endDate,
      userData.description,
      userData.asscSkills
    );
    typeInput.val("");
    jobName.val("");
    roleInput.val("");
    startDateInput.val("");
    endDateInput.val("");
    descriptionInput.val("");
    skillsInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function addJob(
    name,
    role,
    description,
    startDate,
    endDate,
    asscSkills,
    expType
  ) {
    $.post("/api/exp", {
      name: name,
      role: role,
      description: description,
      startDate: startDate,
      endDate: endDate,
      asscSkills: asscSkills,
      expType: expType
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      })
    //   .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
