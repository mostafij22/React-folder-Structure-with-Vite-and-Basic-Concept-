

const TernaryOperator = () => {

    let marks = 90;

    return (
        
        <div>
            <h2> Conditional rendering: Use of Ternary Operator: </h2>
            {
                marks>=80?"Passed":"Fail"
            }
        </div>
    );
};

export default TernaryOperator;

