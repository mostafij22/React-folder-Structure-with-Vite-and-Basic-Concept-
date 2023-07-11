

const LogicalAnd = () => {

    let isLogin=true

    return (
        <>
            <h1>Logical AND &&</h1>

            {isLogin && <button>Dashboard</button> }
        </>
    );
};

export default LogicalAnd;