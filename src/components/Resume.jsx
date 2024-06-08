import React from 'react';
import { Tilt } from 'react-tilt';

const Resume = () => {
  return (
    <div className="cursor-pointer">
      <Tilt className='h-[100px] w-[100px] green-pink-gradient shadow-card rounded-[20px] relative overflow-hidden'>
        <div className='absolute inset-0 flex justify-center items-center'>
          <div className='bg-tertiary p-5 w-[90px] h-[90px] rounded-[20px] flex justify-evenly items-center flex-col'>
            <a
              href='https://drive.google.com/file/d/1sQN39tHCaAsQDMzybs4aDvd_pj4R7IJG/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer'
            >
              Resume
            </a>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Resume;
