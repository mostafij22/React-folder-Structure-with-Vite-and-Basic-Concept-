
const Event = () => {

    function handleClick(){
        document.write("Hello Event")
    }

    function handleClick2(text){ //text parameter data onClick er data receive korse
        document.write(text)
    }

    function handleSubmit(e){
        e.preventDefault();
        document.write("hello")
    }

    function handleSubmit2(e, text){
        e.preventDefault();
        document.write(text)
    }

    return (
        <div>
            <button onClick={handleClick}>Event</button>

            {/* <button onClick={handleClick()}>Event</button> */}

            <br />
            <br />

            <button onClick={
                () => handleClick2('this is dat passing by function parameter')
            }>
                parameter event
            </button>

            <br />    
            <br />    
            <br />

            <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>    
            </form>    

            <br />
            <br />

            <form onSubmit={(e)=>handleSubmit2(e, " Hello Ostad")}>
                <button type="submit">submit</button>    
            </form> 

        </div>
    );
};

export default Event;


