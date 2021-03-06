import Control from './component/Control';
import TabForm from './component/TabForm';
import TaskList from './component/TaskList';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TabForm />
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <button type="button" className="btn btn-primary">
            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
          </button>
          <Control />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
