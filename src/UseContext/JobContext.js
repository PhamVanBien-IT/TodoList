import React, { useState, createContext } from "react";
import { uuid } from "uuidv4";

// Khởi tạo biến context
const jobContext = createContext()

// Khởi tạo thuộc tính Provider để bao bọc <App/>
function JobProvider({ children }) {
    // Khai báo tên công việc
    const [name, setName] = useState('')

    // Khai báo trạng thái công việc
    const [status, setStatus] = useState('false')

    // Khai báo id công việc
    const [idJob , setIdJob] = useState()

    // Khai báo biến tìm kiếm có sử nút tìm kiếm
    const [keyword,setKeyWord] = useState('') 

    // Khai báo giá trị sắp xếp theo tên
    const [sortBy , setSortBy] = useState('name')

    // Khai báo giá trị sắp xếp theo trạng thái
    const [sortValue , setSortValue] = useState(1)

    // Khai báo kiểu dữ liệu jobList
    const [jobs, setJobs] = useState(() => {
        const storageJob = JSON.parse(localStorage.getItem('jobList'))

        if (storageJob != null)
            return storageJob;
        else
            return []
    })

    // Hàm thực thi thêm công việc
    const handleAddJobs = (name, status) => {
        setJobs(() => {

            const newJob = [...jobs, {
                id: uuid(),
                name,
                status
            }]

            // Chuyển dữ liệu sang dạng chuỗi
            const jsonJob = JSON.stringify(newJob)

            // Lưu dữ liệu vào localstorage
            localStorage.setItem('jobList', jsonJob)

            return newJob

        })
    }

    // Hàm thực thi xóa công việc
    const handleDeleteJobs = async id => {

        setJobs(() => {
            const newJob = jobs.filter(job => job.id !== id)

            // Chuyển dữ liệu sang dạng chuỗi
            const jsonJob = JSON.stringify(newJob)

            //Lưu dữ liệu vào localstorage
            localStorage.setItem('jobList', jsonJob)

            return newJob

        })

    }

    // Những đối số chuyền đi
    const value = {
        jobs,
        handleAddJobs,
        handleDeleteJobs,
        name,
        setName,
        status,
        setStatus,
        idJob,
        setIdJob,
        setJobs,
        keyword,
        setKeyWord,
        sortBy,
        setSortBy,
        sortValue,
        setSortValue,
    }

    return (
        // Truyền đi dữ liệu value
        <jobContext.Provider value={value}>
            {children}
        </jobContext.Provider>
    )
}

// Đẩy dữ liệu ra ngoài
export { JobProvider, jobContext }
