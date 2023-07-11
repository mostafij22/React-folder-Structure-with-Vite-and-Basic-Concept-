
const Loop = () => {

    let listItem=['A','B','C','D'];

    return (
        <>
            <h1>Looping By: Map()</h1>
            <ul>
                {   //listItem theke akta akta kore item(eachItem) asbe
                    listItem.map((eachItem)=>{

                        return <li key="">{eachItem}</li>

                    })
                }
            </ul>

        </>
    );
};

export default Loop;

