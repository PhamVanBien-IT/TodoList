import React, { useState, useContext } from 'react'
import { jobContext } from '../UseContext/JobContext'

const Sort = () => {

    // Khai báo biến sử dụng giá trị value của useContext
    const valueJob = useContext(jobContext)

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="btn-group">
                <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Sắp xếp
                </button>
                <ul class="dropdown-menu">
                    <li 
                    // Gắn giá trị khi click vào cách sắp xếp
                    onClick = {() => (valueJob.setSortBy('name'),valueJob.setSortValue(1)) }
                    ><a 
                    class="dropdown-item " 
                    href="#" 
                   >Tên A - Z</a></li>
                    <li
                    // Gắn giá trị khi click vào cách sắp xếp
                        onClick ={() => (valueJob.setSortBy('name'),valueJob.setSortValue(-1)) }
                    ><a 
                    class="dropdown-item" 
                    href="#"
                    >Tên Z - A</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li
                    // Gắn giá trị khi click vào cách sắp xếp
                         onClick={() => (valueJob.setSortBy('status'),valueJob.setSortValue(1))  }
                    ><a 
                    class="dropdown-item" 
                    href="#"
                    >Trạng thái kích hoạt</a></li>
                    <li
                    // Gắn giá trị khi click vào cách sắp xếp
                         onClick={() => (valueJob.setSortBy('status'),valueJob.setSortValue(-1)) }
                    ><a 
                    class="dropdown-item"
                     href="#"
                     
                     >Trạng thái ẩn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sort
