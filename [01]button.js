import{ useState } from 'react';

export default function MyApp(){
    return(
        <div>
        <h1>Counters that update separately</h1>
        <Mybutton />
        <Mybutton />
        </div>
    );
};

function Mybutton(){
    const [count, setCount] = useState(0);

    function handleclick(){
        setCount(count + 1);
    }

    return(
        <button onclick={handlecclink}>
            Clicked {count} times
        </button>
    );
    }
