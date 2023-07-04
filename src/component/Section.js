import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import GroupsIcon from '@mui/icons-material/Groups';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import StarIcon from '@mui/icons-material/Star';

export const Section = () => {

  return (
    <div className='container-fulid overflow-hidden'>
      <div id="carouselExampleCaptions" className="carousel slide overflow-hidden " data-bs-ride="carousel">
        <div className="carousel-indicators overflow-hidden ">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

        </div>

        <div className="carousel-inner overflow-hidden ">
          <div className="carousel-item active">

            <img src="https://unctad.org/sites/default/files/2020-07/image/topic_transport_logistics.jpg" className="d-block w-100" alt="..." />

            <div className="carousel-caption d-none d-sm-block overflow-hidden ">
              <div className='container'>



                <h5>First slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptatum. Aperiam architecto vero dolorum. Ab a deleniti ex. Sit, omnis.
                </p>


              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1524522173746-f628baad3644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1531&q=80" className="d-block w-100" alt="..." />

            <div className="carousel-caption d-none d-sm-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi est ducimus quibusdam fuga nihil aperiam ea quos nulla ut.</p>
            </div>
          </div>


        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      <div className="row mt-4 g-2 overflow-hidden " >
        <div className="col-lg-6 col-xl-6 col-md-10   ">
          <img className='image-fulid mt-5' style={{ height: "500px" }} src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" alt="" />
        </div>
        <div className="col-xl-5  p-3 mt-4">
          <div className='ms-5'>
            <span className='about'>ABOUT US</span>

            <h1 className='mt-4'>Quick Transport and <br /> Logistics Solutions</h1>

            <p className='mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.  Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

            <div className="row mt-3 g-4 " >
              <div className='col-lg-6 col-xl-6  col-md-5 '>

                <LanguageIcon className='LanguageIcon' sx={{ fontSize: 60, }} />

                <h4>Global Coverage</h4>

                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>

                <button className='btn w-100  text-center' style={{ backgroundColor: "#ff3e41", color: "white", height: "50px", fontWeight: "700", }}>Explore more</button>

              </div>


              <div className='col-lg-6 col-md-6'>

                <LocalShippingIcon className='LocalShippingIcon' sx={{ fontSize: 60, }} />

                <h4>On Time Delivery</h4>

                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>






      <div className='row mt-5 mx-auto'>
        <div className='col-lg-6 col-md-8  mt-5 mx-auto'>


          <span style={{ color: "orange" }}>some Fact</span>

          <h1 className='mt-4'><strong >#1 Place To Manage All Of Your Shipments</strong></h1>

          <p className='mt-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

          <p style={{ textAlign: "center" }}>


            <strong >Call for any query!</strong>
            <p className='mt-2' style={{ fontSize: "30px", color: "#ff3e41", fontWeight: "700" }}><HeadphonesIcon sx={{ fontSize: 40, backgroundColor: "#ff3e41", color: "white", }} />+012 345 6789</p>
          </p>


        </div>
        <div className='col-lg-5 col-md-12 text-white mt-5'>
          <div className='row'>
            <div className='col-lg-6 col-md-5' >

              <div className='h-50 w-80 p-3' style={{ backgroundColor: "#ff3e41", }}>

                <GroupsIcon sx={{ fontSize: 50 }} />

                <h4>1234</h4>

                <p>Happy Clients</p>

              </div>


              <div className='h-50 w-80 p-3 mt-4' style={{ backgroundColor: "#51CFED", }}>

                <CardMembershipIcon sx={{ fontSize: 50 }} />

                <h4>1234</h4>

                <p>Happy Clients</p>

              </div>

            </div>

            <div className='col-lg-6 col-md-5 mt-5'>
              <div className='h-50 w-80 p-4 mt-5' style={{ backgroundColor: "green", }}>

                <StarIcon sx={{ fontSize: 50 }} />

                <h4>1234</h4>

                <p>Happy Clients</p>

              </div>
            </div>
          </div>


        </div>



      </div>
    </div>
  )
}
