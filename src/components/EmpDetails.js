import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faRemove } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EmpDetails = () => {
    const [response, setResponse] = useState([]);
    const navTo = useNavigate();
    // call when component mounted
    useEffect(() => {
        axios.get("https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud")
            .then((res) => {
                console.log(response)
                setResponse(res.data);
            });
    }, []);

    const handleEdit = (data) => {
        console.log('data', data);
let { id, date, skill,status }= data;
// const newDate = date.toLocaleDateString();
//   console.log(date.toLocaleDateString());
        localStorage.setItem("id", id);
        localStorage.setItem("date", date);
        localStorage.setItem("skill", skill);
        localStorage.setItem("status", status);
        console.log('date', date, skill, status);
    };

    const handleDelete = (id) => {
        navTo("/delete");
    };

    return (
        <>
            <div className="p-5">
                <h3 className="text-center p-3 bg-primary bg-gradient text-white rounded-5 mb-5">Employee Daily Status Updates</h3>
                <table className="table table-striped table-hover border-primary">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {
                        response.map((value, key) => {
                            return (
                            
                                    <tbody key={key}>
                                        <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.date}</td>
                                            <td>{value.skill}</td>
                                            <td>{value.status}</td>
                                            <td>
                                                <Link to="/update">
                                                    <FontAwesomeIcon className='me-4' icon={faPenToSquare} onClick={() => {
                                                        handleEdit(value)
                                                    }} />
                                                </Link>
                                                {/* <Link to="/delete"></Link> */}
                                                <FontAwesomeIcon icon={faRemove} style={{color: 'red'}} onClick={() => handleDelete(value.id)} />
                                            </td>
                                        </tr>
                                    </tbody>
                                
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default EmpDetails;