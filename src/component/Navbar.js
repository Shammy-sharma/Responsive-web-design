import React from 'react'
import HeadphonesIcon from '@mui/icons-material/Headphones';             
export const Navbar = () => {

  return (
    <div className='container-fulid overflow-hidden '>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <strong className="navbar-brand fs-4  " href="#">Logistica</strong>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active icon-link-hover" aria-current="page" href="#">  HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  icon-link-hover" aria-current="page" href="#">
                  CONTACT</a>
              </li>
              <li className="nav-item">
                
              </li>
              <li className="nav-item">
             <strong className='number'> <HeadphonesIcon style={{color:"#ff3e41"}}/> +012 345 6789</strong> 
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle icon-link-hover" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PAGES
                </a>
               
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                 
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav> 
    </div>
  )
}
