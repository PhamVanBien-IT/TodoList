import React, { useContext, useState, useEffect } from 'react'
import { jobContext } from '../UseContext/JobContext'
import TabItem from './TabItem'

const TaskList = () => {
    
    // Khai báo biến sử dụng giá trị useContext
    const valueJob = useContext(jobContext)

    // Khai báo biến cho ô tìm kiếm trong bảng
    const [inputSearch, setInputSearch] = useState('')

    // Khai báo giá trị trạng thái lọc
    const [statusSearch, setStatusSearch] = useState('-1')

    // Hàm tìm gắn giá trị cho biến inputSearch
    const handleOnChangeSearch = event => {
        setInputSearch(event.target.value)
    }

    // Hàm gắn giá trị cho biến statusSearch
    const handleStatusSearch = (event) => {
        setStatusSearch(event.target.value)
    }
    return (
        <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover mt-15">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control"
                                    onChange={handleOnChangeSearch}
                                />
                            </td>
                            <td>
                                <select className="form-control" onChange={handleStatusSearch} value={statusSearch}>
                                    <option value="-1">Tất Cả</option>
                                    <option value="false">Ẩn</option>
                                    <option value="true">Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {   //Tiến hàng sắp xếp 
                            ((valueJob.sortBy == 'name') 
                            ? valueJob.jobs.sort((job1, job2) => {
                                if (job1.name > job2.name) return valueJob.sortValue
                                else if (job1.name < job2.name) return -valueJob.sortValue
                            }) 
                            :   valueJob.jobs.sort((job1, job2) => {
                                if (job1.status > job2.status) return -valueJob.sortValue
                                else if (job1.status < job2.status) return valueJob.sortValue
                            }) )
                            &&
                            //Tiến hành tìm kiếm bên ngoài bảng 
                            ((valueJob.keyword !== '')
                                ? valueJob.jobs.filter(job => {
                                    if (job.name.toLowerCase().includes(valueJob.keyword.toLowerCase())) {
                                        return job
                                    }
                                })
                                //Tiến hành tìm kiếm bên trong bảng
                                : valueJob.jobs.filter(job => {
                                    if (inputSearch == '' && statusSearch == '-1') {
                                        return job
                                    } else if (job.name.toLowerCase().includes(inputSearch.toLowerCase()) && (job.status == statusSearch || statusSearch == '-1')) {
                                        return job
                                    }
                                })).map((job, index) => {
                                    return (
                                        <TabItem
                                            jobList={job}
                                            stt={index + 1}
                                        />
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList
