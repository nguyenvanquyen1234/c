import React from "react";
import './student.css'
const Student = ({id , name, image, email}) => {
    return (
        <div className="card h-120 shadow-lg">
            <div className="card-body">
                <div className="text-center p-5 background-color">
                    <h5 className="card-title">{name}</h5>
                    <br />
                    <div>
                    <img src={image} alt={id}/> 
                    </div>
                    <div className="md-3 mt-4">
                    <p>{email}</p>
                    </div>
                    <div>
                        <button>More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Student;