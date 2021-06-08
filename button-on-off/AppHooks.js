import React, { useState } from 'react';


export default  function AppHooks() {

    const [switchButton, setSwitchButton] = useState('Off')

    function handleClick() {
        if (switchButton === "OFf") {
            setSwitchButton("On")
        } else {
            setSwitchButton("Off")
        }
    }



    return (
        <button onClick={()=> handleClick()}>
            {switchButton}
        </button>
    );
}