import React from "react";

const SerchPanel = () => {
    const searchText = 'Поиск';
    const searchStyle = {
        fontSize: '20px'
    };
    return <input
        style={searchStyle}
        placeholder={searchText}/>
};

export default SerchPanel;
