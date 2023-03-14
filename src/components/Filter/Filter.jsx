import React from "react";
import { Label, Input } from "./Filter.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    
    const onChange = (e) => {
        let contactToFind = e.target.value.trim();
        dispatch(setFilter(contactToFind));
    }
    
    return (<Label>
        Find contacts by name
        <Input type="text"
            onChange={onChange}
            value={filter}
        ></Input>
    </Label >)
}

export default Filter;