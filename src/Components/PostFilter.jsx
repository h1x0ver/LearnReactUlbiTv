import React from 'react';
import MyInput from "../UI/Input/MyInput";
import MySelect from "../UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter,query: e.target.value})}
                placeholder='Search'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue='Сортировка ...'
                options={[
                    {value:'title', name:'Sort For Title'},
                    {value:'description', name:'Sort For Description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;