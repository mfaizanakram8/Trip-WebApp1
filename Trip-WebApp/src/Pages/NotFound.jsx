// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='text-center mt-32 border border-slate-950 flex flex-cols w-[50%] justify-center ml-48'>
      <div><h1>404 - Page Not Found</h1></div>
      <div><p>Sorry, the page you are looking for does not exist.</p></div>
     <div> <Link to="/" className='text-blue-600'>Go to Home</Link></div>
    </div>
  );
};

export default NotFound;
