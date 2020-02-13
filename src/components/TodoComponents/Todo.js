import React from 'react';

const Todo = props => {
    const { singleItem } = props;
    return (
        <div>
            <p>{singleItem.task}</p>
        </div>
    );
};

export default Todo;
