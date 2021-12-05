import React, {useContext} from 'react'
import { jobContext } from '../UseContext/JobContext'


const TabItem = (props) => {

    // Khai báo biến sử dụng dữ liệu value trong useContext
    const valueJob = useContext(jobContext)

    // Hàm gắn giá trị của các phần tử khi click vào phần tử đó
    const handleUpdateJob = () => {
        valueJob.setName(props.jobList.name)
        valueJob.setStatus(props.jobList.status)
        valueJob.setIdJob(props.jobList.id)
    }

    return (
        <tr>
            <td>{props.stt}</td>
            <td>{props.jobList.name}</td>
            <td className="text-center">
                    {props.jobList.status == "false" ? <span className="label label-primary">Ẩn</span> : <span className="label label-success">Kích hoạt</span>}
            </td>
            <td className="text-center">
                <button 
                type="button" 
                className="btn btn-warning"
                onClick= { handleUpdateJob }
                >
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button 
                type="button" 
                className="btn btn-danger" 
                onClick={valueJob.handleDeleteJobs.bind(this , props.jobList.id)}>
                    <span clanpmssName="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    )
}

export default TabItem
