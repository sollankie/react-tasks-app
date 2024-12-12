import React from "react";
import '../styles/Filter.scss';

interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<'all' | 'completed' | 'notCompleted'>>;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
    return (
        <div className="filter">
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('notCompleted')}>Not Completed</button>
        </div>
    );
};


export default Filter;