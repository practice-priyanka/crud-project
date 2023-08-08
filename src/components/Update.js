import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/Update.css';

const Update = () => {
    // const todayDate = new Date().toLocaleDateString();
    const [id, setID] = useState(null);
    const [date, setDate] = useState("");
    const [skill, setSkill] = useState("");
    const [status, setStatus] = useState("");

    const navTo = useNavigate();

    useEffect (() => {  
       setID(localStorage.getItem('ID'))   
       setDate(localStorage.getItem('date'));
       setSkill(localStorage.getItem('skill'));
       setStatus(localStorage.getItem('status'));
       console.log(date, skill, status);
    }, [])
    return (
        <>
            <div className="update_div">
                <form className="add_form">
                    <div className="mb-2">
                        <label htmlFor="inoutDate" className="form-label">Enter Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter date' value={date}  onChange={(e) => setDate(e.target.value)} />

                    </div>
                    <div className="mb-2">
                        <label htmlFor="inoutSkill" className="form-label">Enter Skill learning:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={skill} placeholder='Enter skill learning'
                       onChange={(e) => {
                            setSkill(e.target.value);
                        }} />

                    </div> 
                    <div className="mb-2">
                        <label htmlFor="inputStatus" className="form-label" aria-required>Enter Status</label>
                        <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={status} placeholder='Enter status' onChange={(e) => {
                            setStatus(e.target.value);
                        }}/>

                    </div>
                    <button type="submit" className="btn btn-primary text-uppercase add_btn w-25">Update</button>
                    <button type="button" className="btn btn-secondary mt-2 text-center text-gray-500 cancel_btn w-25" onClick={() => {
                        navTo("/employee")
                    }}>Cancel</button>

                </form>
            </div>
        </>
    )
};

export default Update;