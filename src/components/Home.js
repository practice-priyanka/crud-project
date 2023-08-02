import Header from "./Header";
import '../css/Home.css';
import { Modal } from "bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [date, setDate] = useState("");
    const [skill, setSkill] = useState("");
    const navTo = useNavigate();
    const handleAddData = (e) => {
        // alert('clicked');
        // console.log('Clicked');
        e.preventDefault();
        navTo("/create")
        console.log(date, skill);
    }
    return (
        <>
            <Header />
            <h1>Home</h1>

            <button type="button" className="text-uppercase p-2 today_status" onClick={handleAddData}>add today's status</button>

            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Today's status</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
                                    <input type="date" className="form-control" id="exampleInputEmail1" onChange={(event) => {
                                        setDate(event.target.value)
                                    }} />

                                    {date}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Skill learning:</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => {
                                        setSkill(event.target.value)
                                    }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
                                    <textarea className="form-control" rows={3}></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onSubmit={handleAddData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
};

export default Home;