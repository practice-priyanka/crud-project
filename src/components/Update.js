import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/Update.css';
import axios from 'axios';

const Update = () => {
    const [id, setID] = useState(null);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [skill, setSkill] = useState("");
    const [status, setStatus] = useState("");

    const navTo = useNavigate();

    useEffect(() => {
        setID(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setDate(localStorage.getItem('date'));
        setSkill(localStorage.getItem('skill'));
        setStatus(localStorage.getItem('status'));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud/${id}`, {
            name: name,
            date: date,
            skill: skill,
            status: status
        }).then(() => {
            navTo("/employee");
        })
    }
    return (
        <>
            <div className="update_div">
                <form className="add_form" onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <label htmlFor="inputName" className="form-label">Enter Name</label>
                        <input type="text" className="form-control" id="exampleInputName" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputDate" className="form-label">Enter Date</label>
                        <input type="date" className="form-control" id="exampleInputDate" placeholder='Enter date' value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputSkill" className="form-label">Enter Skill learning:</label>
                        <input type="text" className="form-control" id="exampleInputSkill" value={skill} placeholder='Enter skill learning'
                            onChange={(e) => {
                                setSkill(e.target.value)
                            }} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputStatus" className="form-label" aria-required>Enter Status</label>
                        <input type="textarea" className="form-control" id="exampleInputStatus" value={status} placeholder='Enter status' onChange={(e) => setStatus(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary text-uppercase add_btn w-25" >Update</button>
                    <button type="button" className="btn btn-secondary mt-2 text-center text-gray-500 cancel_btn w-25" onClick={() => {
                        navTo("/employee")
                    }}>Cancel</button>
                </form>
            </div>
        </>
    )
};

export default Update;