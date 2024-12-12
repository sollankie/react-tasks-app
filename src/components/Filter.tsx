import React from "react";

interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'notCompleted'>>;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('notCompleted')}>Not Completed</button>
        </div>
    );
};


export default Filter;