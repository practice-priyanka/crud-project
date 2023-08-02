import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faRemove } from '@fortawesome/free-solid-svg-icons'


const Table = () => {
    return (
        <>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Skill learning</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                        <FontAwesomeIcon className='me-4' icon={faPenToSquare} />
                        <FontAwesomeIcon icon={faRemove} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                        <FontAwesomeIcon className='me-4' icon={faPenToSquare} />
                        <FontAwesomeIcon icon={faRemove} />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                        <FontAwesomeIcon className='me-4' icon={faPenToSquare} />
                        <FontAwesomeIcon icon={faRemove} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default Table;