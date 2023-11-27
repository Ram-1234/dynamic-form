import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const styles = {
    inputDiv: {
        padding: "5px",
        margin: "5px",
        justifyContent: "center",
    },
    button: {
        padding: "5px",
        margin: "5px",
        textAlign: "center"
    },
    label: {
        margin: "5px 0",
        padding: "5px 0"
    },
    form: {
        border: "1px solid lightgrey",
        padding: "10px 20px",
        borderRadius: "10px",
        // justifyContent: "center"
    }
}

const schema = () => yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
}).required();


function Form({ submit, data, keys }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function submitForm(e, data) {
        e.preventDefault();
        console.log("submit", data)
        alert("form successfuly submited")
    }

    return (
        <form onSubmit={submitForm} style={styles.form}>
            {keys.includes('text') && submit && data['text']?.fields?.map((field, index) => {
                return (<div key={`${field + index}`} style={styles.inputDiv}>
                    <label>Enter {field}</label><br />
                    <input type={'text'} name={`${field + index}`} title={field} required placeholder={`Enter ${field}`} />
                </div>)
            })}

            {submit && <div style={styles.inputDiv}>{data['checkbox']?.label}</div>}
            {keys.includes('checkbox') && submit && data['checkbox']?.fields?.map((field, index) => {
                return (<div key={`${field + index}`} style={styles.inputDiv}>
                    <input type={'checkbox'} name={`${data['checkbox']?.label.toLowerCase()}`} title={field} placeholder={`Enter ${field}`} />
                    <label> {field}</label>
                </div>)
            })}

            {submit && <div style={styles.inputDiv}>{data['dropdown']?.label}</div>}
            {keys.includes('dropdown') && <select required style={styles.inputDiv}>
                {keys.includes('dropdown') && submit && data['dropdown']?.fields?.map((field, index) => {
                    return <option name={`${field + index}`} key={`${field + index}`} value={field} title={field} >{field}</option>
                })}
            </select>}


            {data['radio']?.label && submit && <div style={styles.inputDiv}>{data['radio']?.label}</div>}
            {keys.includes('radio') && submit && data['radio']?.fields?.map((field, index) => {
                return (<div key={`${field + index}`} style={styles.inputDiv}>
                    <input type={'radio'} name={`${field + index}`} title={field} placeholder={`Enter ${field}`} />
                    <label> {field}</label>
                </div>)
            })}

            {keys.includes('textarea') && submit && data['textarea']?.fields?.map((field, index) => {
                return (<div key={`${field + index}`} style={styles.inputDiv}>
                    <label style={styles.label}>{field}</label><br />
                    <textarea type={'text'} name={`${field + index}`} title={field} required placeholder={`${field}`} />
                </div>)
            })}

            {keys.includes('button') && (<div key={`button`} style={styles.button}>
                <input type={'submit'} value={'Submit'} title={'button'} />
            </div>)
            }
        </form>
    )
}

export default Form