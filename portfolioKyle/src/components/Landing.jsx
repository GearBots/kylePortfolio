import React from 'react';
import TypeWriter from './Type';

const Landing = () => {
    return (
        <div className='relative h-screen w-full overflow-hidden flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-white dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl leading-tight mb-2'>Hi, I'm <span className='text-primary dark:text-ellipsis'>Kyle.</span></h1>
                <h1 className='text-white dark:text-white font-bold text-3xl mb-2'>A Full-Stack Developer.</h1>
                <button className='w-flex rounded-lg border-2 border-neutral-500 bg-neutral-750 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white mb:2'>View all my work!</button>
            </div>
            
        </div>
    );
};

export default Landing;