

const Header = ({local}) => { // ata props , destructure kore{} local parameter use hoyese,
                               // data recive korar jonno   
    return (
        <>
            <h1>Today Date: {new Date().toDateString()}</h1>
            <button className="btn btn-success">Submit</button>
            <br />
            <br />
            <h1>Current Time: {new Date().toLocaleTimeString(local)}</h1>
           
        </>
    );
};

export default Header;

