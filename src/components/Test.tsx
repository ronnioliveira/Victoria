import React from "react";

const Test:React.FC = () => {


    const clicou = ()=> {
        alert('teste');
    }

    return (
        <div>
            <button onClick={clicou}>Clicar</button>
        </div>
    );
};



export default Test;