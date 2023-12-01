import React from "react";
import Student from "./Student";
import students from "./studens";
import './student.css'
const StudentList = ()=>{
    return (
        <div className="text-center">
            <h2>Student List</h2>
            <div className="card">
                {students.map((student,index)=>(
                    <Student key={index} {...student} />
                ))}
            </div>
        </div>
    )
}
export default StudentList;