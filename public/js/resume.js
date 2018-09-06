var doc = new jsPDF();
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
      doc.addImage(image, "JPEG", 0, 0, width + 30, height + 100);
      doc.save("Resume.pdf"); //Download the rendered PDF.
    }
  });
}

$("#pdf").on("click", function() {
  genPDF();
});
