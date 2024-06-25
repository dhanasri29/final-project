import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadPDF = () => {
  const handleDownload = () => {
    const input = document.getElementById('resume-preview');
    html2canvas(input, {
      scale: 2 // Increase scale for better quality
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('resume.pdf');
    });
  };

  return <button onClick={handleDownload}><span></span>
  <span></span>
  <span></span>
  <span></span>GET YOUR CV</button>;
};

export default DownloadPDF;
