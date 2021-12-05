import React, { useContext } from "react";
import { jobContext } from "../UseContext/JobContext";


function TabForm() {

    // Khai báo biến để sử dụng dữ liệu của hàm UseContext
    const valueJob = useContext(jobContext)
    
    // Lắng nghe giá trị status được chọn
    const changeStatus = event => {
        valueJob.setStatus(event.target.value)
    }

    // Lắng nghe giá trị name điền 
    const changeName = event => {
        valueJob.setName(event.target.value)
    }

    // Truyền name và status về JobContext
    const addSingleJob = event => {
        event.preventDefault()
        if (valueJob.name !== '') {
            valueJob.handleAddJobs(valueJob.name, valueJob.status)
        }

        valueJob.setName('')
    }

    // Hàm tiến hành cập nhật dữ liệu
    const handleUpdateJob = () => {
        // Kiểm tra id khớp với id của phần tử
        const newJob = valueJob.jobs.map(job => job.id === valueJob.idJob)
        for (let i = 0; i <= newJob.length - 1; i += 1) {
            if (newJob[i] === true) {
                valueJob.setJobs(() => {

                    // Gắn giá trị phần tử tìm được để cập nhật
                    valueJob.jobs[i].name = valueJob.name
                    valueJob.jobs[i].status = valueJob.status

                    // Lưu dữ liệu lại localstorage
                    const newJobs = valueJob.jobs

                    const jsonJob = JSON.stringify(newJobs)

                    localStorage.setItem('jobList', jsonJob)

                    return newJobs
                })
            }
        }
        valueJob.setName('')
    }

    return (
        <div className="panel panel-warning ">
            <div className="panel-heading">
                <h3 className="panel-Name">Thêm Công Việc</h3>
            </div>
            <div className="panel-body">
                {/* Hàm submit dùng cho 1 form thêm dữ liệu */}
                <form onSubmit={addSingleJob}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={changeName}
                            value={valueJob.name}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" onChange={changeStatus} value={valueJob.status}>
                        <option value='true'>Kích Hoạt</option>
                        <option value='false'>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-warning"
                        >Thêm</button>&nbsp;
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleUpdateJob}
                        >Cập nhật</button>&nbsp;
                        <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default TabForm;
