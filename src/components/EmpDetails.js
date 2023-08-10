import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faRemove } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getAllEmployees } from "../redux/Employees/employeeSlice";
import '../css/EmpDetails.css';
import Delete from "./Delete";
import {getEmployees} from "../services/FetchEmployee";
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/Employees/employeeSlice'

const EmpDetails = () => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const dispatch = useDispatch();
    const employees = useSelector(getAllEmployees);
    // call when component mounted
    useEffect(() => {
        (async () => {
           let data = await getEmployees();
           dispatch(addEmployee(data));
        })()
    }, []);

    const handleEdit = (data) => {
        let { id, name, date, skill, status } = data;
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("date", date);
        localStorage.setItem("skill", skill);
        localStorage.setItem("status", status);
    };

    const handleDelete = (id) => {
        setId(id);
        setDeleteMessage(`Are you sure you want to delete the employee ${id}`);
        setDisplayConfirmationModal(true);
    };

    const hideConfirmationModal = (status) => {
        setDisplayConfirmationModal(status);
    }

    return (
        <>
            <div className="p-5 table_div">
                <h3 className="text-center p-3 rounded-5 mb-2">Employee Daily Status Updates</h3>
                <table className="table table-striped p-3 table-responsive">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Skill</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {
                        employees.map((value, key) => {
                            return (

                                <tbody key={key} className="bg-white text-black">
                                    <tr>
                                        <th scope="row">{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.date}</td>
                                        <td>{value.skill}</td>
                                        <td>{value.status}</td>
                                        <td>
                                            <Link to="/update">
                                                <FontAwesomeIcon className='me-4' icon={faPenToSquare} onClick={() => {
                                                    handleEdit(value)
                                                }} />
                                            </Link>

                                            <FontAwesomeIcon icon={faRemove} style={{ color: 'red' }} onClick={() => {
                                                handleDelete(value.id)
                                            }} />

                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
                <Delete showModal={displayConfirmationModal} confirmModal={handleDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage} />
            </div>
        </>
    )
}

export default EmpDetails;