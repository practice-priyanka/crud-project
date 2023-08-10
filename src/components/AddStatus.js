import { useNavigate } from 'react-router-dom';
import '../css/Create.css';
import { useState } from 'react';
import axios from 'axios';

const AddStatus = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [skill, setSkill] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState(false);
    const [dateError] = useState("");
    const navTo = useNavigate();

    const handleAddEmp = (e) => {
        e.preventDefault();
        setError(false);
        navTo('/home');
        axios.post("https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud",
            {
                name: name,
                date: date,
                skill: skill,
                status: status
            })
            .then(() => {
                navTo("/employee");
            })
    }

    return (
        <>
            <div className="create_div">
                <div className='add_image p-10'>
                </div>
                <form className="add_form" onSubmit={handleAddEmp}>
                    <div className="mb-2">
                        <label htmlFor="inputName" className="form-label">Enter Name:</label>
                        <input type="text" className="form-control" id="exampleInputName" value={name} placeholder='Enter employee name' onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        {error && skill.length <= 0 ? <span className='error_label'>Name can't be empty</span> : ""}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputDate" className="form-label">Enter Date</label>
                        <input type="date" className="form-control" id="exampleInputDate" value={date} placeholder='Enter date' onChange={(e) => setDate(e.target.value)} />
                        <span className='error_label'>{dateError}</span>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputSkill" className="form-label">Enter Skill learning:</label>
                        <input type="text" className="form-control" id="exampleInputSkill" value={skill} placeholder='Enter skill learning' onChange={(e) => {
                            setSkill(e.target.value);
                        }} />
                        {error && skill.length <= 0 ? <span className='error_label'>Skill can't be empty</span> : ""}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputStatus" className="form-label" aria-required>Enter Status</label>
                        <textarea type="textarea" className="form-control" id="exampleInputStatus" value={status} placeholder='Enter status' onChange={(e) => {
                            setStatus(e.target.value);
                        }}></textarea>
                        {error && status.length <= 0 ? <span className='error_label'>Status can't be empty</span> : ""}
                    </div>
                    <button type="submit" className="btn btn-primary text-uppercase add_btn" >Add Status</button>
                    <button type="button" className="btn btn-secondary mt-2 text-center text-gray-500 cancel_btn w-25" onClick={() => {
                        navTo("/Home")
                    }}>Cancel</button>

                </form>
            </div>
        </>
    )
};

export default AddStatus;