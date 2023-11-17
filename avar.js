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
        pic : "C:\Users\Lenovo X1 Gen8\Pictures\Screenshots\Screenshot 2023-11-10 115346.png"
    },
    {
        name : "Biden",
        pic : "C:\Users\Lenovo X1 Gen8\Pictures\Screenshots\Screenshot 2023-11-07 142731.png"
    },
       { name : "Donnal",
        pic : "C:\Users\Lenovo X1 Gen8\Pictures\Screenshots\Screenshot 2023-11-10 113750.png"
       }
       ,{
        name : "Apieceofshit",
        pic : "C:\Users\Lenovo X1 Gen8\Pictures\Screenshots\Screenshot 2023-11-16 100345.png"
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