import React from 'react';
import { Link, useMatch,useResolvedPath } from 'react-router-dom';



 function NavBar (){
    return (
    
    <nav className='nav'>
     
        <ul>
           <CustomLink to='/demo'>Demo</CustomLink>
           

        </ul>
    </nav>
    )
};  
interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    [key: string]: any; 
  }
  
  const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };

  export default NavBar;