import TernaryOperator from "./component/TernaryOperator";
import InvokedFunction from "./component/InvokedFunction";
import Header from "./component/Header";
import Loop from "./component/Loop";
import LogicalAnd from "./component/LogicalAnd";
import Event from "./component/Event";


const App = () => {
  return (
    <div className="container">
      <Header local="bn-BD"/> 
      <TernaryOperator/>
      <InvokedFunction/>
      <Loop/>
      <LogicalAnd/>
      <Event/>
    </div>
  );
};

export default App;

