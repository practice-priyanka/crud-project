
import empDetails from '../db.json';
import {useDispatch} from 'react-redux';
const Table = () => {
    const dispatch = new useDispatch();

    dispatch({type: "ADD_EMP", payload: empDetails});
    return (
        <>
            <div className='p-5'>
                <table className="table table-striped table-hover table-success">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Admin</th>

                        </tr>
                    </thead>
                    {empDetails.empList.map((value, key) => {
                        return (
                            <tbody key={key}>
                                <tr>
                                    <th>{key + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.isAdmin}</td>

                                </tr>
                            </tbody>
                        )
                    })
                    }
                </table>
            </div>
        </>
    )
};

export default Table;