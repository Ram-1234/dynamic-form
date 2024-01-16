import { useState, useEffect } from "react";

function FetchData(url) {
  const [data, setData] = useState([]);

  const Api = async () => {
    try {
      let responce = await fetch(url);
      const jsonData = await responce.json();
      if (jsonData && jsonData?.length) {
        setData(jsonData.slice(0, 20));
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    Api();
    //eslint-disable-next-line
  }, []);

  return data;
}

export default FetchData;
