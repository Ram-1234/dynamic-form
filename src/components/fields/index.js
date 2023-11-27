import React, { useState } from 'react';
import Checkbox from './checkbox';
import Form from '../form';

let fields = ["text", "textarea", "dropdown", "checkbox", "radio", "button"]

function InputFields() {
  const [data, setData] = useState({});
  let [keys, setKeys] = useState([]);
  const [submit, setSubmition] = useState(false);
  console.log("json data", data);

  const styles = {
    conatiner: {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px"
    },
    inputDiv: {
      padding: "5px",
      margin: "5px",
      textAlign: "start"
    },

  }

  function submitForm() {
    setSubmition(true)
    setKeys(Object.keys(data))
    setData(data)
  }


  return (
    <div style={styles.conatiner}>
      {!submit && <div>
        {fields && fields.map((item, index) => {
          return (<Checkbox data={data} globalData={setData} key={item + index} type={item} />)
        })}
        <div style={{ padding: "10px 0" }}>
          <button onClick={submitForm} >Create Form</button>
        </div>
      </div>}
      {submit && <Form data={data} submit={submit} keys={keys} />}
    </div>
  )
}

export default InputFields