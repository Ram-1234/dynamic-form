import { useState, useEffect } from "react";

function FetchData(url) {
  const [data, setData] = useState([]);
  const [isOffLine,setOffline]=useState(false);

  const Api = async () => {
    try {
      let responce = await fetch(url);
      const jsonData = await responce.json();
      if (jsonData && jsonData?.length) {
        let respondData= jsonData?.slice(0, 20);
        setData(respondData);
        let localStorageSetData = localStorage.setItem('data', JSON.stringify(respondData))
        console.log(localStorageSetData);
      }
    } catch (error) {
      console.log('offline');
      console.warn(error);
      let localStorageGetData = localStorage.getItem('data')
      setData(JSON.parse(localStorageGetData));
      setOffline(true);
    }
  };

  useEffect(() => {
    Api();
    //eslint-disable-next-line
  }, []);

  return data;
}

export default FetchData;
