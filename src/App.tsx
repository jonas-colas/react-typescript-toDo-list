import React, { FC } from 'react';

const App: FC = () => {
  return (
    <div className="container">
        <div className="py-5 text-center">
          <h2>To Do List</h2>
        </div>
        <div className="row">
          {/* Right Side */}
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">List</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Product name</h6>
                  <small className="text-muted">Brief description</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
            </ul>
          </div>
          {/*End right Side */}
          {/* Left Side */}
          <div className="col-md-8 order-md-1">
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Task</label>
                  <input type="text" className="form-control" placeholder="enter task ..." />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Deadline</label>
                  <input type="text" className="form-control" placeholder="Deadline..." />
                </div>
              </div>
              <hr className="mb-4" />
              <button className="btn btn-primary btn-lg btn-block" type="submit">Add Task</button>
            </form>
          </div>
        </div>
       {/*End Left Side */}
      </div>
  );
}

export default App;
