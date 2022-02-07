import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {serviceAdd, handleFilterItem} from "actions/createActions";

const Filter_Item = () => {
    const dispatch = useDispatch()
    const inputSearch = useRef()
    const {search} = useSelector((state) => state.serviceAddValueReducer);

    const onChange = ({target}) => {
        dispatch(serviceAdd(target.name, target.value))
    }

    useEffect(() => {
        dispatch(handleFilterItem(search))
    }, [search])
    const inputBlur = () => {
        inputSearch.current.value = ''
    }
    useEffect(() => {
        inputSearch.current.addEventListener('blur', inputBlur, false)
        return () => {
            inputSearch.current.removeEventListener('blur', inputBlur, false)
        }
    }, [])

    return (
        <div className='search-container'>
            <input  placeholder='Фильтр услуг, начните вводить название услуги' value={search} onChange={onChange}
                   type={"search"} className="form-control" name='search' ref={inputSearch}/>
            <i className="fa fa-search" aria-hidden="true"/>
        </div>
    )
}

export {Filter_Item}