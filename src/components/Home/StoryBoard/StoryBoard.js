import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const StoryBoard = () => {

    const [open, setOpen] = useState(true);

    const title = 'Technical Project Management';
    const task_title = 'Explore the world of management';
    const task_description = 'As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?';
    const asset_title = 'Technical Project Management';
    const asset_content = 'https://www.youtube.com/embed/TiMRwri1xJ8';
    const asset_description = 'Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n'


    return (
        <div className='w-100 mx-auto' style={{ maxWidth: '1280px' }}>
            <h3 className='text-primary fs-3 fw-bold mt-2'>{title}</h3>
            <div className='bg-gray mt-4 mb-5 p-3 rounded'>
                <h4 className='fs-4 fw-bold'>{task_title}</h4>
                <p className='fs-6 mb-0'>{task_description}</p>
            </div>

            {/* asset card */}
            <div style={{ width: '480px' }} className='border'>
                <div style={{ height: '50px' }} className='bg-black text-white d-flex align-items-center justify-content-between border'>
                    <div className='row w-100 text-center'>
                        <div className='col-10 fs-6 fw-semibold'>
                            {asset_title}
                        </div>
                        <div
                            onClick={() => setOpen(!open)}
                            className='col-2'
                            style={{ cursor: 'pointer' }}>

                            <FaInfoCircle />

                        </div>
                    </div>
                </div>
                <div>
                    <Collapse in={open} className='bg-card border'>
                        <div id="example-collapse-text" className='p-3'>
                            {asset_description}
                        </div>
                    </Collapse>
                </div>
                <div className='border' style={{minHeight: '450px'}}>
                    <iframe
                        width="100%"
                        height="315"
                        src={asset_content}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    >
                        
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default StoryBoard;