function MyButton(){
    function handlecclink(){
        alert('You clicked me!');
    }

    return (
        <button onclick={handleclick}>
            Click me
        </button>
    );
};

export default function Myapp(){
    return(
        <div>
            <h1>Welcome to my app</h1>
            <Mybutton />
        </div>
    );
}