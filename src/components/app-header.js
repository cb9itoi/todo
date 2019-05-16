import React from "react";
import './app-header.css';

const AppHeader = ( {toDo, done} ) => {
    return (
        <div className="app-header d-flex">
        <h1>Мой Todo список</h1>
            <h2>{toDo} всего, {done} выполнено</h2>
        </div>
    );
};

export default AppHeader;
