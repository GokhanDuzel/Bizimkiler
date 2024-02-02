import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const handleClick = async () => {
    try {
      // Make a GET request to your backend API endpoint using Axios
      const response = await axios.get('http://localhost:3000/api/books/65bc5b280b367f545625f476');

      // Assuming your backend returns the URL of the PDF file
      const pdfUrl = response.data.url;

      // Open the PDF URL in a new tab to trigger the download
      window.open(pdfUrl, '_blank');
    } catch (error) {
      console.error('Error fetching data from the backend:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Download PDF</button>
    </div>
  );
}

export default App;
