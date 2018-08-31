// PASSPORT addJob
// =============================================
$(document).ready(function() {
  // Getting references to our form and input
  var addJobForm = $("form.add-job");
  var jobName = $("input#job-name-input");
  var roleInput = $("input#role-input");
  var descriptionInput = $("input#description-input");
  var startDateInput = $("input#start-input");
  var endDateInput = $("input#end-input");
  var skillsInput = $("input#skills-input");
  var typeInput = $("select#new-type-select");

  // When the submit button is clicked, we validate the name and skills are not blank
  addJobForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: jobName.val().trim(),
      role: roleInput.val().trim(),
      description: descriptionInput.val().trim(),
      startDate: startDateInput.val().trim(),
      endDate: endDateInput.val().trim(),
      asscSkills: skillsInput.val().trim(),
      expType: typeInput.val()
    };
    console.log("THIS IS A USER: " + userData);

    if (!userData.name || !userData.asscSkills) {
      return;
    }
    // If we have an project name and asscSkill, run the addJob function
    addJob(
      userData.name,
      userData.role,
      userData.description,
      userData.startDate,
      userData.endDate,
      userData.asscSkills,
      userData.expType
    );
    jobName.val("");
    roleInput.val("");
    descriptionInput.val("");
    startDateInput.val("");
    endDateInput.val("");
    skillsInput.val("");
    typeInput.val("");
  });

  // Does a post to the exp route. If successful, we notify user
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
    }).then(function() {
      // window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    });
    //   .catch(handleLoginErr);
  }

  // function handleLoginErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }
});
