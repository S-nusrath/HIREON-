import html2pdf from "html2pdf.js";

export const downloadPdf = () => {
  const element = document.getElementById("resume");

  html2pdf()
    .from(element)
    .set({
      margin: 10,
      filename: "HireOn_Resume.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
    .save();
};
