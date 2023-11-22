const qrServerBaseUrl = 'https://api.qrserver.com/v1/create-qr-code/';

export const generateQRCode = (qrData, qrSize) => {
  const qrImageUrl = `${qrServerBaseUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`;
  return qrImageUrl;
};