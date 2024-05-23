import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {


        try {

          const response = await Axios.get('http://localhost:3000/getData'); 
          setData(response.data);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();

    }, []);
  
    return (
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default App;