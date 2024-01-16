import React from 'react';
import "./app-info.css"

const AppInfo = ({data}) => {
  const filterData = data.filter(item=>item.cookie === true)
  return (
    <div className="app-info">
      <h1 >Учет сотрудников компании N</h1>
      <h2>Общее число сотрудников {data.length}</h2>
      <h2>Премию получат {filterData.length}</h2>
    </div>
  );
}

export default AppInfo;
