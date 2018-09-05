var doc = new jsPDF();

function genPDF() {
  html2canvas(document.body, {
    onrendered: function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img, "JPEG", 10, 10);
      doc.save("Resume.pdf");
    }
  });
}

$("#pdf").on("click", function() {
  genPDF();
});
