import Header from "../../../Components/Header";
import List from '../../../Components/Form/Listing'
// import Footer from "../Footer";

export default () => {

    return (
        <>
            <Header />
            <div style={{padding: "24px"}}>
                <h2>All Forms</h2>
                <List />
            </div>
        </>
    );
}
