//div id="allOfSkills"
//DOC READY
$(document).ready(function() {
  var expKeyWord;

  var jobDiv = $("#allOfSkills");

  var jobs = [];

  function getJobs() {
    $.get("/api/searchjob", function(data) {
      jobs = data;
      initializeExpRows();
    });
  }

  function initializeExpRows() {
    jobDiv.empty();
    var rowsToAdd = [];
    for (var i = 0; i < jobs.length; i++) {
      rowsToAdd.push(createNewExpRow(jobs[i]));
    }
    jobDiv.prepend(rowsToAdd);
  }

  function createNewExpRow(jobs) {
    var newJobRow = $(
      [
        "<div>",
        jobs.role,
        "</div>",
        "<br>",
        "<div>",
        jobs.startDate + " - " + jobs.endDate,
        "</div>",
        "<br>",
        "<div>",
        jobs.description,
        "</div>",
        "<br>"
      ].join("")
    );
    return newJobRow;
  }

  var eduDiv = $("#allOfEdu");

  var edu = [];

  function getEdu() {
    $.get("/api/searchjob", function(data) {
      edu = data;
      initializeEduRows();
    });
  }

  function initializeEduRows() {
    eduDiv.empty();
    var rowsToAdd = [];
    for (var i = 0; i < edu.length; i++) {
      rowsToAdd.push(createNewEduRow(edu[i]));
    }
    eduDiv.prepend(rowsToAdd);
  }

  function createNewEduRow(edu) {
    var newEduRow = $(
      [
        "<div>",
        edu.school,
        "</div>",
        "<br>",
        "<div>",
        edu.startDate + " - " + edu.endDate,
        "</div>",
        "<br>",
        "<div>",
        jobs.description,
        "</div>",
        "<br>"
      ].join("")
    );
    return newEduRow;
  }

  var refDiv = $("#allOfRef");

  var refs = [];

  function getRef() {
    $.get("/api/searchref", function(data) {
      refs = data;
      initializeRefRows();
    });
  }

  function initializeRefRows() {
    refDiv.empty();
    var rowsToAdd = [];
    for (var i = 0; i < refs.length; i++) {
      rowsToAdd.push(createNewRefRow(refs[i]));
    }
    refDiv.prepend(rowsToAdd);
  }

  function createNewRefRow(refs) {
    var newRefRow = $(
      [
        "<div>",
        refs.name,
        "</div>",
        "<br>",
        "<div>",
        refs.relationship,
        "</div>",
        "<br>",
        "<div>",
        refs.phone,
        "</div>",
        "<br>"
      ].join("")
    );
    return newRefRow;
  }

  //ONCLICK
  $("#skillSearchBtn").on("click", function() {
    console.log("click");
    expKeyWord = $("#skillSearch-input").val();
    console.log(expKeyWord);
    getJobs();
    getEdu();
    getRef();
  });
});
