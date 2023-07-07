import React from "react";
import "../MessageSuccess/messageStyle.css"

const MessageSuccess = ({purchaseID}) => {
    return(
        <div className="message-container">
            <p>Gracias por su compra, su ID es:</p> <h4>  {purchaseID}</h4>
        </div>
    );
};

export default MessageSuccess;