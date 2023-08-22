import { useState } from "react";
import './Employees.css';

const Employees=()=>{
    const[employees, setEmployees] = useState([
        {
            id:1,
            fullname:"Pepe Perez",
            designation:"maestro",
            gender:"male",
            teamName:"teamA",

            id:2,
            fullname:"Andres Castillo",
            designation:"ingeniero",
            gender:"male",
            teamName:"teamB",

            id:3,
            fullname:"Aleja Diaz",
            designation:"Enfermera",
            gender:"famale",
            teamName:"teamC",

            id:4,
            fullname:"Carlos Peña",
            designation:"Abogado",
            gender:"male",
            teamName:"teamA",

            id:5,
            fullname:"Felipe Cardenas",
            designation:"Doctor",
            gender:"male",
            teamName:"teamB",

            id:6,
            fullname:"Karol Ortiz",
            designation:"maestra",
            gender:"famale",
            teamName:"teamB",

            id:7,
            fullname:"Antonia Barreta",
            designation:"ingeniera",
            gender:"famale",
            teamName:"teamC",

            id:8,
            fullname:"Juan Calos",
            designation:"Arquitecto",
            gender:"male",
            teamName:"teamA",

            id:9,
            fullname:"Antonio Castro",
            designation:"Musico",
            gender:"male",
            teamName:"teamA",

            id:10,
            fullname:"Santiago Murillo",
            designation:"Cocinero",
            gender:"male",
            teamName:"teamB",

            id:11,
            fullname:"Karen Savedra",
            designation:"Jugadora",
            gender:"famale",
            teamName:"teamC",

        }
    
    ]);
    return (
        <main className="employee-list">
            {employees.map((employee) => (
                <div key={employee.id} className="employee-card">
                    <p className="employee-name">{employee.fullname}</p>
                    <p className="employee-designation">{employee.designation}</p>
                    <p className="employee-gender">{employee.gender}</p>
                    <p className="employee-team">{employee.teamName}</p>
                </div>
            ))}
        </main>
    );
}

export default Employees;
