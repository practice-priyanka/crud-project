import { useNavigate } from 'react-router-dom';
import '../css/Create.css';
import { useState } from 'react';
import validator from 'validator';
import axios from 'axios';

const AddStatus = () => {
    // const todayDate = new Date().toLocaleDateString('en-GB');
    const [date, setDate] = useState("");
    const [skill, setSkill] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState(false);
    const [dateError, setDateError] = useState("");
    const navTo = useNavigate();

    const handleAddEmp = (e) => {
        console.log('new date', date)
        e.preventDefault();
        if (date.length === 0 || skill.length === 0 || status.length === 0) {
            setError(true);
            setDateError("Date can't be empty");
        } else {
            console.log('Hurray form is valid')
            setError(false);
            navTo('/home');
            axios.post("https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud",
                {
                    date: date,
                    skill: skill,
                    status: status
                    // header
                })
                .then(() => {
                    navTo("/employee");
                })
        }
    }
    // const handleChangeDate = (value) => {
    //     setDate(value);
    //     if (validator.isDate(value)) {
    //         console.log("valid");
    //         setDateError('');
    //     } else {
    //         console.log('invalid');
    //         setDateError('Enter Valid Date!');
    //     }
    // }

    return (
        <>
            <div className="create_div">
                <div className='add_image p-10'>
                    {/* <Link to="/employee">
                        <button className='btn btn-primary'>Show Data</button>
                    </Link> */}
                </div>
                <form className="add_form" onSubmit={handleAddEmp}>
                    <div className="mb-2">
                        <label htmlFor="inoutDate" className="form-label">Enter Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={date} placeholder='Enter date' onChange={(e) => setDate(e.target.value)} />
                        <span className='error_label'>{dateError}</span>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inoutSkill" className="form-label">Enter Skill learning:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={skill} placeholder='Enter skill learning' onChange={(e) => {
                            setSkill(e.target.value);
                        }} />
                        {error && skill.length <= 0 ? <span className='error_label'>Skill can't be empty</span> : ""}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="inputStatus" className="form-label" aria-required>Enter Status</label>
                        <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={status} placeholder='Enter status' onChange={(e) => {
                            setStatus(e.target.value);
                        }} />
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
    // https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud
};

export default AddStatus;