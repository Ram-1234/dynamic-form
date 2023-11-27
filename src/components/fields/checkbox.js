import React, { useEffect, useState } from 'react';
import InputFields from './inputform';
import Modal from "../modal/index";


const Checkbox = ({ type, globalData, data }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [modal, setModal] = useState(false);
    let [activeKey, setKey] = useState('')

    useEffect(() => {
        if (!isChecked && (activeKey in data)) {
            let copyData = JSON.parse(JSON.stringify(data));
            delete copyData[activeKey];
            globalData(copyData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChecked, activeKey])

    const handelCheckBox = (e) => {
        setKey(e.target.name);
        setIsChecked(e.target.checked);
        setModal(e.target.checked);
    };

    const closeModal = () => {
        setModal(false)
    }

    function submitForm(e, labels, key) {
        e.preventDefault();
        let data = isChecked ? { check: isChecked, ...labels } : {};
        setModal(false);
        if (isChecked) {
            globalData((old) => ({ ...old, [`${key}`]: data }))
        }
    }

    const boxStyle = { border: "1px solid lightgrey", width: "250px", textAlign: "start", margin: "5px", padding: "10px 5px", borderRadius: "5px" }

    return (
        <div style={boxStyle}>
            <label name={type}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handelCheckBox}
                    value={type}
                    name={type}
                />
                {`Select ${type} input field`}
            </label>
            {modal && <Modal
                title={`Form Modal`}
                closeHandle={closeModal}
            >
                <InputFields
                    submitForm={submitForm}
                    type={type}
                />
            </Modal >}
        </div>
    );
};

export default Checkbox;
