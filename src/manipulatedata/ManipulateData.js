import React from 'react';

function DisplayData() {
  const initialData = [
    {
      "id": 1,
      "name": "John Doe",
      "status": 1
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "status": 2
    },
    {
      "id": 3,
      "name": "Adam Rocket",
      "status": 2
    },
    {
      "id": 4,
      "name": "Luis Rocket",
      "status": 1
    }
  ];

  const handleClick = () => {
    const resultData = initialData.reduce((acc, curr) => {
      const key = `status-${curr.status}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});
    console.log(resultData);
  };

  return (
    <div>
      <button onClick={handleClick}>Display Data</button>
    </div>
  );
}

export default DisplayData;