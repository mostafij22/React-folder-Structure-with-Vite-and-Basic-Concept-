

const InvokedFunction = () => {
    return (
        <div>
            <h3>Immediately Invoked function</h3>
            {
                (()=>{
                    let a=10;
                    let b= 20;
                    let c= a+b;
                    return <h1>{c}</h1>
                })()
            }
        </div>
    );
};

export default InvokedFunction;

