

import React from 'react';
import { MdOutlineCheckBox } from "react-icons/md";

const Skill = () => {
  return (
    <div id="skill">
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              <u>My Skills</u>
            </h1>
          </div>

          <div className="flex flex-wrap  -m-4 -mt-[5rem]">
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <MdOutlineCheckBox className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">HTML</h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
                    <div className='absolute bg-blue-600 h-1 rounded-xl w-[100%]'></div>
                    <p className='font-bold text-blue-600 text-right p-2'>100%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CSS Skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <MdOutlineCheckBox className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">CSS</h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
                    <div className='absolute bg-blue-600 h-1 rounded-xl w-[95%]'></div>
                    <p className='font-bold text-blue-600 text-right p-2'>95%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* JavaScript/TypeScript Skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-fu p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <MdOutlineCheckBox className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">JAVASCRIPT/TYPESCRIPT</h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
                    <div className='absolute bg-blue-600 h-1 rounded-xl w-[90%]'></div>
                    <p className='font-bold text-blue-600 text-right p-2'>90%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* React Skill */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-ful p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <MdOutlineCheckBox className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">REACT</h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
                    <div className='absolute bg-blue-600 h-1 rounded-xl w-[85%]'></div>
                    <p className='font-bold text-blue-600 text-right p-2'>85%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next.js Skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <MdOutlineCheckBox className='text-xl font-bold' />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">NEXT.JS</h2>
                </div>
                <div className="flex-grow">
                  <div className='relative h-1 w-full bg-gray-400 rounded-xl'>
                    <div className='absolute bg-blue-600 h-1 rounded-xl w-[70%]'></div>
                    <p className='font-bold text-blue-600 text-right p-2'>70%</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
