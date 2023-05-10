import React, { useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setData({ error: 'Unable to connect with backend' });
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div style={{ color: data.connected ? 'green' : 'red' }}>
          {data.connected ? (
            <>
              Connected to backend in green<br />
              {data.message}
            </>
          ) : (
            data.error
          )}
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
