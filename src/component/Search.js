import React , {useState , useContext} from 'react'
import { jobContext } from '../UseContext/JobContext'

const Search = () => {

    // Khai báo biến sử dụng giá trị value của useContext
    const valueJob = useContext(jobContext)

    // Khai báo biến gắn giá trị textSearch
    const [textSearch, setTextSearch] = useState('')

    // Gắn giá trị cho textSearch theo dữ liệu nhập
    const handleOnChangeSearch = (event) =>{
        setTextSearch(event.target.value)
    }

    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Nhập từ khóa..." 
                    value={textSearch}
                    onChange = {handleOnChangeSearch}
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick = {() => valueJob.setKeyWord(textSearch)}>
                        <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Search
