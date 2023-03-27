import React from 'react';

const StoryBoard = () => {
    const title = 'Technical Project Management';
    const task_title = 'Explore the world of management';
    const task_description = 'As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?'
    return (
        <div className='w-100 mx-auto' style={{ maxWidth: '1280px' }}>
            <h3 className='text-primary fs-3 fw-bold mt-2'>{title}</h3>
            <div className='bg-gray mt-4 mb-5 p-3 rounded'>
                <h4 className='fs-4 fw-bold'>{task_title}</h4>
                <p className='fs-6 mb-0'>{task_description}</p>
            </div>
        </div>
    );
};

export default StoryBoard;