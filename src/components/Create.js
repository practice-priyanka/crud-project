import '../css/Create.css'
const Create = () => {
    return (
        <>
            <div className="create_div">
                <form className="add_form">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Enter Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter date'/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Enter Skill learning:</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter skill learning'/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Enter Status</label>
                        <input type="textarea" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter status' />
                    </div>
                    <button type="button" className="btn btn-primary text-uppercase add_btn">Add employee</button>
                    <button type="button" className="btn btn-secondary mt-3 text-center text-gray-500 cancel_btn">Cancel</button>

                </form>
            </div>
        </>
    )
    // https://64c38ddd67cfdca3b65fdffd.mockapi.io/api/poc-crud
};

export default Create;