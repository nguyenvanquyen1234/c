import "./App.css"
// function App2(){
//     return( <div className="App2">
//         <Welcome2 name="Neooo" />
//     </div>);
// }
// function Welcome2(props){
//     return (
//         <section>
//             <h1>Hello, <span>{props.name}</span></h1>
//         </section>
//     )
// }
// export default App2;
function User({name, pic}){
    return (
        <section>
            <img className="user-profile-pic" src={pic} alt={name} />
            <h2 className="user-name">
                Hello, <span className="user-first-name">{name}</span>
            </h2>
        </section>
    )
}
function App(){
    // const names = ["Cuban", "Biden", "Donnal", "Apieceofshit"];
    // return (
    //     <div className="App">
    //         {names.map((nm) =>(<User name= {nm} />))}
    //     </div>
    // )
    const users = [{
        name: "Cuban",
        pic : "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFY2h8NXx8cHJvZmkszXxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name : "Biden",
        pic : "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFY2h8NXx8cHJvZmkszXxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
       { name : "Donnal",
        pic : "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFY2h8NXx8cHJvZmkszXxlbnwwfHwwfHw%3D&w=1000&q=80"
       }
       ,{
        name : "Apieceofshit",
        pic : "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFY2h8NXx8cHJvZmkszXxlbnwwfHwwfHw%3D&w=1000&q=80"
       }
    ]
    return (
        <div className="App">
            {users.map((user) => (
                <User name={user.name} pic={user.pic} />
            ))}
        </div>
    )
}
export default App;
