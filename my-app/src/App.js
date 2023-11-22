import React, { useState } from 'react';
import { generateQRCode } from './api';

function QRCodeGenerator() {
  const [qrData, setQrData] = useState('example.com');
  const [qrSize, setQrSize] = useState('200x200');

  const handleDownload = async () => {
    const qrImageUrl = generateQRCode(qrData, qrSize);
  
    try {
      const response = await fetch(qrImageUrl);
      const blob = await response.blob();
  
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'generated_qr_code.png';
      downloadLink.click();
  
      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      console.error('Error occurred during download:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">QR Code Generator</h1>
      <div className="input-container">
        <label className="input-label">QR URL:</label>
        <input
          className="input-field"
          type="text"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label className="input-label">QR Size:</label>
        <input
          className="input-field"
          type="text"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
      </div>
      <div className="qr-code">
        <img className="qr-image" src={generateQRCode(qrData, qrSize)} alt="QR Code" />
      </div>
      <div className='download-container'>
        <button className="download-button" onClick={handleDownload}>
          Download QR Code
        </button>
      </div>
    </div>
  );
}

export default QRCodeGenerator;