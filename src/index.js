import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SerchPanel from './components/serch-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        { label: 'Выпить кофе', important:false, id:1 },
        { label: 'Състь печенье', important:true, id:2 },
        { label: 'Купить молоко', important:false, id:3}
    ];

    return (
        <div>
            <AppHeader/>
            <SerchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
