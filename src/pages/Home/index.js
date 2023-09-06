import React from 'react'
import Edit from './components/Edit'
import List from './components/List'
import Item from './components/Item'
import './index.css'

const app={
    color:'red'
}

const Home =()=>{
    return <div style={app}>
        <Edit />
    <List />
    <Item />
    </div>
}

export default Home