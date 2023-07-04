import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CheckIcon from '@mui/icons-material/Check';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Services = () => {
  return (
    <>
      <div className='container-fulid overflow-hidden '>


        <div className='text-center'>
          <p className=' mt-5 text-center' style={{ color: "#51CFED" }}>OUR SERVICES</p>
          <h1>Explore Our Services</h1>
          <div className="container">
            <div className='row mt-5'>



              <div className=" col-lg-4 col-md-10 mx-auto  " >
                <div className='card '>
                  <img src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVyb3BsYW5lfGVufDB8fDB8fHww&w=1000&q=80" className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Air Freight</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>

                </div>
              </div>





              <div className=" col-lg-4 col-md-10 mx-auto " >
                <div className='card'>
                  <img src="https://console.kr-asia.com/wp-content/uploads/2020/12/vidar-nordli-mathisen-y8TMoCzw87E-unsplash-scaled.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Ocean Freight</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>

                </div>




              </div>
              <div className=" col-lg-4 col-md-10 mx-auto  " >
                <div className='card'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Road Freight</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>

                </div>
              </div>

            </div>
            <div className='row mt-3'>
              <div className="  col-lg-4 col-md-10 mx-auto  " >
                <div className='card'>
                  <img src="https://e0.pxfuel.com/wallpapers/41/1008/desktop-wallpaper-indian-trains-train-indian-railways-train.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Train Freight</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>

                </div>




              </div>

              <div className=" col-lg-4 col-md-10 mx-auto " >
                <div className='card'>
                  <img src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFpbmVyfGVufDB8fDB8fHww&w=1000&q=80" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Customs Clearance</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>

                </div>




              </div>
              <div className=" col-lg-4 col-md-10 mx-auto " >
                <div className='card'>
                  <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201806/cover660_061418041537.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Warehouse Solutions</h5>
                    <p className="card-text">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam..</p>
                    <a href="#" className="btn btn-primary">Read more</a>
                  </div>

                </div>




              </div>

            </div>
          </div>
        </div>
        <div className='row mt-5 mx-auto  overflow-hidden' >
          <div className='col-lg-5 col-md-10 mt-5 '>

            <p className='ms-5' style={{ color: "#51CFED" }}>
              OUR FEATURES
            </p>
            <h1 className='ms-5' style={{ fontWeight: "700" }}>We Are Trusted Logistics Company Since 1990</h1>

            <div className=' mt-5 ms-3 '>

              <span><LanguageIcon className='LanguageIcon ms-3 ' sx={{ fontSize: 60 }} />
                <span className='ms-4 ' style={{ fontSize: '18PX', fontWeight: "700" }}>Worldwide Service</span></span>
              <p style={{ marginLeft: "100px" }}> Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.</p>


              <span>
                <LocalShippingIcon className='LocalShippingIcon ms-3' sx={{ fontSize: 60, }} />
                <span className='ms-4' style={{ fontSize: '18PX', fontWeight: "700" }}>On Time Delivery</span>
              </span>
              <p style={{ marginLeft: "100px" }}>
                Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.
              </p>
              <span>

                <HeadphonesIcon className='ms-3' sx={{ fontSize: 60, color: "#ff3e41" }} />
                <span className='ms-4' style={{ fontSize: '18PX', fontWeight: "700" }}>24/7 Telephone Support</span>
              </span>
              <p style={{ marginLeft: "100px" }}>
                Diam dolor ipsum sit amet eos erat ipsum lorem sed stet lorem sit clita duo justo magna erat amet.
              </p>
            </div>

          </div>
          <div className='col-lg-5 col-md-10 mt-5 mb-5 '>
            <img className='image-fulid mt-5 ' src="https://www.freightwaves.com/wp-content/uploads/2023/04/24/shutterstock_1688628715-1200x675.jpg" alt="" width={900} />
          </div>
        </div>
        <div>


          <div className='mt-5 ' >
            <p className='text-center' style={{ color: "#51CFED" }}>PRICING PLAN</p>
            <h1 className='text-center'>Perfect Pricing Plan</h1>



            <div className='row mx-auto  g-5 mt-5 d-flex align-items-center justify-content-center' >
              <div className='col-lg-3 col-md-10 '  >
                <div className="card shadow p-3 mb-5 bg-body rounded border border-light" >
                  <div className="card-body">
                    <h4 style={{ color: "red" }}> BASIC Plan</h4>
                    <span>$<span className="card-title" style={{ fontSize: "50px", fontWeight: "700" }}>49.00</span></span>
                    <span style={{ fontWeight: "700" }}>/ Month</span>
                    <hr />
                    <p className="card-text">
                      <p > <CheckIcon style={{ marginRight: "15px" }} /> HTML5 & CSS3</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Bootstrap v5</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />FontAwesome Icons</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Responsive Layout</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Cross-browser Support</p>
                    </p>
                    <a href="#" className="btn btn-danger">ORDER NOW</a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-10 '>

                <div className="card shadow p-3 mb-5 bg-body rounded  border border-light" >
                  <div className="card-body">
                    <h4 style={{ color: "#ff3e41" }}>Standard Plan</h4>
                    <span>$<span className="card-title" style={{ fontSize: "50px", fontWeight: "700" }}>99.00</span></span>
                    <span style={{ fontWeight: "700" }}>/ Month</span>
                    <hr />
                    <p className="card-text">
                      <p > <CheckIcon style={{ marginRight: "15px" }} /> HTML5 & CSS3</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Bootstrap v5</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />FontAwesome Icons</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Responsive Layout</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Cross-browser Support</p>
                    </p>
                    <a href="#" className="btn btn-danger">ORDER NOW</a>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-10  '>
                <div className="card shadow p-3 mb-5 bg-body rounded  border border-light" >
                  <div className="card-body">
                    <h4 style={{ color: "#ff3e41" }}>Advanced Plan</h4>
                    <span>$<span className="card-title" style={{ fontSize: "50px", fontWeight: "700" }}>149.00</span></span>
                    <span style={{ fontWeight: "700" }}>/ Month</span>
                    <hr />
                    <p className="card-text">
                      <p > <CheckIcon style={{ marginRight: "15px" }} /> HTML5 & CSS3</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Bootstrap v5</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />FontAwesome Icons</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Responsive Layout</p>

                      <p ><CheckIcon style={{ marginRight: "15px" }} />Cross-browser Support</p>
                    </p>
                    <a href="#" className="btn btn-danger">ORDER NOW</a>
                  </div>
                </div>
              </div>



            </div>
          </div>
          <div className='container-fulid overflow-hidden mx-auto '>
            <div className='row ms-5 mt-5  '>
              <div className="col-lg-4 col-md-10 mx-auto  mt-5 mb-5">

                <p style={{ color: "#51CFED" }}>GET A QUOTE</p>
                <h1>Request A Free Qoute!</h1>
                <p className='mt-5'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>

                <div className='mt-5  '>

                  <HeadphonesIcon sx={{ fontSize: 60, backgroundColor: "red", color: "white", marginRight: "25px", opacity: 0.8 }} />
                  <strong><span>Call for any query!</span></strong>
                  <h4 className=' ms-5' style={{ fontSize: "35px", color: "red", fontWeight: "700", opacity: "0.8" }}>+012 345 6789 </h4>
                </div>

              </div>

              <div className=' container col-lg-5 col-md-10 mt-5   ' style={{ backgroundColor: "#F8F2F0" }}>
                <form className="row g-3 mx-auto">
                  <div className="col-lg-5 col-md-5 mt-5 mx-auto">

                    <input type="email" className="form-control h-100" id="inputEmail4" placeholder='Email' />
                  </div>
                  <div className="col-lg-5 col-md-5 mt-5 mx-auto">

                    <input type="password" className="form-control h-100" id="inputPassword4" placeholder='Password' />
                  </div>
                  <div className="col-lg-5 col-md-5 mx-auto">

                    <input type="text" className="form-control h-100" id="inputAddress" placeholder="your mobile " />
                  </div>

                  <div className="col-lg-5 col-md-5 mx-auto ">

                    <select id="inputState" style={{ height: "50px" }} className="form-select">
                      <option selected>Select A Freight</option>
                      <option>Freight 1</option>
                      <option>Freight 2</option>
                      <option>Freight 3</option>
                      <option>Freight 4</option>
                      <option>Freight 5</option>
                    </select>
                  </div>
                  <div className="form-floating mt-4  mx-auto " style={{ width: "510px" }} >
                    <textarea className="form-control" placeholder="special Note" id="floatingTextarea2" ></textarea>
                    <label for="floatingTextarea2">special Note </label>
                    <button type="submit" className="btn btn-primary   mt-3 mx-auto w-100 h-50 " style={{ width: "", backgroundColor: "#ff3e41", borderColor: "#FF3e41", color: "#fff", fontWeight: "600" }}>Submit</button>
                  </div>


                </form>

              </div>
            </div>
          </div>

          <div className='container-fulid overflow-hidden'>

            <footer className="text-center text-lg-start bg-dark text-white mt-5">



              <section className="">
                <div className="container text-center text-md-start mt-5">

                  <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                      <h6 className="text-uppercase fw-bold  mt-5 ps-5">
                        Address
                        <h6 className='mt-3'><LocationOnIcon /> <span>123 Street, New York, USA</span></h6>
                      </h6>
                      <h6 className="text-uppercase fw-bold  ps-5">
                        <h6 className='mt-3'><CallIcon /> <span>+012 345 67890</span></h6>
                      </h6>
                      <h6 className=" fw-bold ps-5">
                        <h6 className='mt-3'><EmailIcon /> <span>shammysharma84@gmail.com</span></h6>
                      </h6>

                      <h6 className=" fw-bold ps-5">
                        <h6 className='mt-3'><TwitterIcon style={{ borderRadius: "50%", borderStyle: "solid", borderColor: "White", padding: "5px", height: "40px", width: "40px", borderWidth: "thin" }} />
                          <span>

                            <FacebookIcon style={{ borderRadius: "50%", borderStyle: "solid", borderColor: "White", padding: "5px", height: "40px", width: "40px", borderWidth: "thin", marginLeft: "5px" }} /> </span>

                          <span>

                            <YouTubeIcon style={{ borderRadius: "50%", borderStyle: "solid", borderColor: "White", padding: "5px", height: "40px", width: "40px", borderWidth: "thin" }} />
                          </span>

                          <span>
                            <LinkedInIcon style={{ borderRadius: "50%", borderStyle: "solid", borderColor: "White", padding: "5px", height: "40px", width: "40px", borderWidth: "thin", marginLeft: "5px" }} />
                          </span>

                        </h6>
                      </h6>

                    </div>



                    <div className="col-md-2 col-lg-2 col-xl-2 mb-4 mx-auto  mt-5">

                      <h6 className="text-uppercase fw-bold ">
                        Services
                      </h6>
                      <p>
                        <a href="#!" className="text-reset" >Angular</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">React</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Vue</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Laravel</a>
                      </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                      <h6 className="text-uppercase fw-bold  mt-5">
                        Quick Links

                      </h6>
                      <p>
                        <a href="#!" className="text-reset">Pricing</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Settings</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Orders</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Help</a>
                      </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                      <h6 className="text-uppercase fw-bold mt-5">Newsletter</h6>

                      <p className='mt-5 w-75'><i className="fas fa-home  text-secondary "></i> Dolor amet sit justo amet elitr clita ipsum elitr est.
                        <input type="text" className='form-control mt-4 py-3' placeholder='Your Email' />
                        <button className='btn btn-danger mt-2 w-100  fw-bold'>Sing Up</button>
                      </p>


                    </div>

                  </div>

                </div>
              </section>
              <hr />
              <div className="text-center p-4" style={{ backgroundColor: ": rgba(0, 0, 0, 0.025)" }}>
                <span className='me-2' > © 2023 Copyright</span>
                <span >Shammy Sharma</span>
              </div>

            </footer>
          </div>



        </div>
      </div>
    </>
  )
}
