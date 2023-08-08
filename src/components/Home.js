import Header from "./Header";
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';
import Table from "./table";

const Home = () => {

    const navTo = useNavigate();
    const handleAddData = (e) => {
        navTo("/add")
    }
    return (
        <>
            <Header />
            <h2 className="text-center heading_div my-3">Welcome to the home page</h2>
            <button type="button" className="text-uppercase p-2 today_status" onClick={handleAddData}>add today's status</button>
            <Table />
        </>
    )
};

export default Home;