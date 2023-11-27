import { useState } from 'react';

export default function MyApp(){
    const [count, setCount] = useState(0);

    function handleclick(){
        setCount(count + 1);
    }

    ruturn (
        <div>
        <h1> Counters that update together</h1>
        <Mybutton count={count} onClick={handleclick} />
        <Mybutton count={count} onclick={handleclick} />
        </div>
    );
}

function MyButton({ count, conclick}){
    return(
        <button onclick={onclick}>
clicked {count} times 
</button>
);
    }
