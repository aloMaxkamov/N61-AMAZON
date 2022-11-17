import React from 'react';
import c from './MiniHeader.module.css';

const MiniHeader = ({setIsSidebarActive}) => {
  return (
    <div className={c.miniHeader}>
      <button onClick={() => {setIsSidebarActive(true)}}>All</button>
    </div>
  )
}

export default MiniHeader