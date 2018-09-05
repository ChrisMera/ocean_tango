var doc = new jsPDF();

// var divHeight = $("#wrapper").height();
// var divWidth = $("#wrapper").width();
// var ratio = divHeight / divWidth;
// html2canvas(document.body, {
//   height: divHeight,
//   width: divWidth,
//   onrendered: function(canvas) {
//     var image = canvas.toDataURL("image/jpeg");
//     var doc = new jsPDF(); // using defaults: orientation=portrait, unit=mm, size=A4
//     var width = doc.internal.pageSize.width;
//     var height = doc.internal.pageSize.height;
//     height = ratio * width;
//     doc.addImage(image, "JPEG", 0, 0, width + 30, height + 10);
//     doc.save("Resume.pdf"); //Download the rendered PDF.
//   }
// });

// function genPDF() {
//   html2canvas(document.body, {
//     onrendered: function(canvas) {
//       var img = canvas.toDataURL("image/png");
//       var doc = new jsPDF("p", "pt", "a4");
//       var width = doc.internal.pageSize.getWidth();
//       var height = doc.internal.pageSize.getHeight();
//       doc.addImage(img, "JPEG", 10, 10, width, height);
//       doc.save("Resume.pdf");
//     }
//   });
// }

function genPDF() {
  var divHeight = $("#wrapper").height();
  var divWidth = $("#wrapper").width();
  var ratio = divHeight / divWidth;
  html2canvas(document.body, {
    height: divHeight,
    width: divWidth,
    onrendered: function(canvas) {
      var image = canvas.toDataURL("image/jpeg");
      var doc = new jsPDF(); // using defaults: orientation=portrait, unit=mm, size=A4
      var width = doc.internal.pageSize.width;
      var height = doc.internal.pageSize.height;
      height = ratio * width;
      doc.addImage(image, "JPEG", 0, 0, width + 30, height + 30);
      doc.save("Resume.pdf"); //Download the rendered PDF.
    }
  });
}

$("#pdf").on("click", function() {
  genPDF();
});

// margins = {
//   top: 40,
//   bottom: 60,
//   left: 40,
//   width: 522
// };
