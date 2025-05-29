import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CourseSection = () => {
      const {allCourses} =useContext(AppContext) 
  return (
    <div className='py-16 md:px-40 px-8'>
      <h1 className='text-3xl font-medium text-gray-800'>Learn from the best</h1>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Discover our top-rated cources across various categories. From coading and design to business and wellness.</p>
           <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 md:px-0 md:my-16 my-10 gap-4'> 
            {allCourses.slice(0,4).map((course,index)=><CourseCard key={index} course={course}/>

            )}
           </div>
      <Link to='/course-list' onClick={()=>scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      >Shoe all courses</Link>

    </div>
  );
}

export default CourseSection;
