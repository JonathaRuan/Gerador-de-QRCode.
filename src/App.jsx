import QRCode from "qrcode";
import React from "react";
function App() {
  const [url, setUrl] = React.useState("");
  const [qrcode, setQrcode] = React.useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
      width: 800,
      margin: 2,
      color: {
        dark: '#335383ff'
      }
    }, (err, url) => {
      if (err) return console.error(err);
      setQrcode(url);
    });
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="https://google.com"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate Code</button>
      {qrcode && (
        <>
          <img src={qrcode} />
          <a href={qrcode} download="qrcode.png">Download</a>
        </>
      )}
    </div>
  );
}

export default App;
