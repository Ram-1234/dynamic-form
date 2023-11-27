import React, { useState } from 'react'

function InputForm({ submitForm, type }) {
    let [data, setData] = useState([]);
    let [val, setVal] = useState(0);
    let [label, setLabel] = useState('');
    let [fields, setFields] = useState({});

    function onChangeHandler(e) {
        let value = e.target.value;
        value = parseInt(value);
        setVal(value);
        let aa = value && Array(value)?.fill(value);
        setData(aa);
    }

    function labelFields(e) {
        let key = e.target.name;
        setFields((old) => ({ ...old, [`${key}`]: e.target.value }))
    }

    function labelMethod(e) {
        setLabel(e.target.value)
    }

    function subField(e) {
        let key = e.target.name
        setFields((old) => ({ ...old, [`${key}`]: e.target.value }));
    }

    const styles = {
        form: {
            padding: "10px",
        },
        inputDiv: {
            padding: "5px",
            margin: "5px",
        },
        filds: { width: "50px", textAlign: "center", textDecoration: "none" }

    }

    function Component(type, data, fields) {

        if (type === "radio" || type === "checkbox" || type === 'dropdown') {
            return (
                <div>
                    <div style={styles.inputDiv}>
                        <label>Enter label: </label>
                        <input onChange={labelMethod} name={`label`} key={`${type}_label`} value={label} type="text" placeholder='Enter lable name' />
                    </div>
                    Enter input options of the field:
                    {data?.length && data?.map((item, index) => {
                        return (<div style={styles.inputDiv}>
                            <input onChange={subField} name={`${type}${index}`} key={`${type}${index}`} value={fields?.[`${type}${index}`]} type="text" placeholder='Enter option name' />
                        </div>)
                    })}
                </div>
            )
        } else {
            return (
                <div>
                    Enter input label of the field:
                    {data?.length && data?.map((item, index) => {
                        return (<div key={`${type}${index}`} style={styles.inputDiv}>
                            <input onChange={labelFields} name={`${type}${index}`} value={fields?.[`${type}${index}`]} type="text" placeholder='Enter lable name' />
                        </div>)
                    })}
                </div>
            )
        }
    }

    function objectManipulation(fields, label) {
        if (label.length) return { label: label, fields: Object.values(fields) }
        else return { fields: Object.values(fields) }
    }

    return (
        <form onSubmit={(e) => submitForm(e, objectManipulation(fields, label), type)} style={styles.form}>
            <div>
                How many {type} field required:
                <input onChange={onChangeHandler} type="number" name="fields" value={val} style={styles.filds} />
            </div>
            <div>
                {Component(type, data, fields)}
            </div>
            <input type="submit" name="Submit" />
        </form>
    )
}

export default InputForm;