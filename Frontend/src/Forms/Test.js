import React from 'react';
import { useNavigate} from 'react-router-dom';

function Test() {
    
    const navigate = useNavigate();

    function handleClick(){
        navigate("/login")
    }

    return (
        <div>
             <button onClick={handleClick} > Zebu </button>
        </div>
    )
}

export default Test