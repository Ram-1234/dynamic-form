import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

const iconStyle={ position: "absolute", top: "8px", right: "10px", cursor: "pointer", fontSize: "14px" }


const Modal = ({ title,children, closeHandle }) => {
        
    return (
        <React.Fragment>
            <div className="backgroundcss"></div>
            <div className="container">
                <div className="title">{title}</div>
                <CloseIcon onClick={() => closeHandle(false)} style={iconStyle} />
               {children}
            </div>
        </React.Fragment>
    )
}

export default Modal