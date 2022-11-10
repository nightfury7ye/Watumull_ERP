import React, { useRef, useState } from "react";
// import axios from 'axios'
// import CONSTANTS from "../constants/constants";
import { render } from "react-dom";
// import { Footer, Infocard, Navbar } from "../components";
// import CarrerInfoBar from "../components/shared/CarrerInfoBar";

export default function ContactUs() {
  ////// const { handlechange, values } = useform();

  // const infoCardData = [
  //   {
  //     image: "/images/Contact us Images file-02.png",
  //     title: "For our upcoming Journeys, Consulting and Advisory",
  //     email: "yes@sileadership.com",
  //     position: "",
  //   },
  //   {
  //     image: "/images/Contact us Images file-04.png",
  //     title: "To join our LIVE Masterclass or any other queries",
  //     email: "connect@sileadership.com",
  //     position: "right",
  //   },
  //   {
  //     image: "/images/Contact us Images file-03.png",
  //     title: "To work with us",
  //     email: "careers@sileadership.com",
  //     position: "",
  //   },
  //   {
  //     image: "/images/Contact us Images file-05.png",
  //     title: "To partner with us",
  //     email: "partnership@sileadership.com",
  //     position: "right",
  //   },
   
  // ];


  const [formData, setFormData] = useState({});

    // const submitHandler = async(event) => {
    //     event.preventDefault();
    //     // submitRef.current.disabled=true
    //     axios({
    //       url:CONSTANTS.BASE_URL+'/contact-us',
    //       method:'POST',
    //       data:formData
    //     }).then((response)=>{
    //       console.log('Added Successfully')
    //       alert('Added Successfully')
    //     }).catch((err)=>{
    //       alert("Enter valid Details")
    //     })
    //   };

      const onChangeHandler = (event) => {
        event.target.value = event.target.value;
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

  return (
    <div>

      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <div className=" lg:h-[500px] bg-white lg:grid lg:grid-cols-2  justify-center md:flex md:flex-col  items-center">
          <div className=" bg-white  w-[65%] flex flex-col ml-16 mt-8  pr-1 ">
            <div className="mx-6 text-xl ">
              <h1 className="font-bold text-3xl md:text-4xl SmallCaps TwCenMT ">Watumull Institute of Electronic Engineering And Computer Technology</h1>
              {/* <p className='font-semibold text-lg md:text-2xl mt-4 AbhayaLibre'>Watumull Institute Of Electronic Engineering And Computer Technology</p> */}
            </div>

            <div className="mx-6 my-3 TwCenMT text-lg mt-4 " style={{fontWeight: 550}}>
              <p> Plot No.157, C.H.M.Campus, </p>
              <p> Opp.Ulhasnagar Railway Station, </p>
              <p>Ulhasnagar-421003( West ). </p>
            </div>

            <div className="justify-center mx-6  my-6 ">
              <a href="https://goo.gl/maps/EbnrkHh9gkzV4ZAw8" target="_blank">  <button className="lg:w-1/2 flex items-center justify-center text-xl font-semibold rounded-md bg-[#f16920] text-white py-1 md:px-2 w-[100%] mb-5 AbhayaLibre">
                View in Maps
              </button></a>

            </div>

          </div>
          <iframe className=" w-[100%] h-[450px] mr-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4426296487645!2d73.1619779139066!3d19.219531852441836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7946eaaaaaaad%3A0x2eb9d3900e86cb33!2sWatumull%20Institute%20Of%20Electronic%20Engineering%20And%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1668106571162!5m2!1sen!2sin"
            // width="600"
            // height="450"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* <div className="bg-[#FEE6A0] py-14">
          <div className="flex flex-col max-w-4xl m-auto md:px-16">
            {infoCardData.map((data, i) => {
              return (
                <div className="mb-10" key={i}>
                  <Infocard data={data} />
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="pb-8 flex items-center text-center justify-center bg-[#FEE6A0] p-3 relative ">

          <div className=" bg-white relative p-10 rounded-2xl shadow-2xl lg:w-[55%] md:w-[90%] w-[100%] text-sm md:text-base  ">
            <div className="absolute hidden transform -translate-x-full lg:block -bottom-9">
              <img
                className="h-[500px]"
                src="\images\Contact-us-Images-file.png"
                alt=""
              />
            </div>
            <div className="absolute hidden transform translate-x-full right-12 bottom-3 lg:block ">
              <img
                className=" h-[600px]"
                src="\images\Contact us Images file-08.png"
                alt=""
              />
            </div>
            <h1 className="mb-4 md:text-5xl text-3xl font-bold SmallCaps AbhayaLibreEB">
              Send Us a Detailed Query
            </h1>
            <h3 className="mb-3 AbhayaLibre text-xl">
              Please indicate the nature of your inquiry and fill in the form
              below
            </h3>

            <form action="" className="space-y-1 ">
              <div className="flex flex-wrap overflow-hidden my-6 md:flex-row TwCenMT">
                <div className="my-1  md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="text"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                    placeholder="First Name*"
                    name="first_name"
                    required
                    onChange={onChangeHandler}
                    // {...true}
                  ////value={values.firstname}
                  //// onChange={handlechange}
                  />
                </div>

                <div className="my-1  md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="text"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                    placeholder="Last Name*"
                    name="last_name"
                    required
                    onChange={onChangeHandler}
                    // {...true}
                  //value={values.lastname}
                  // onChange={handlechange}
                  />
                </div>

                {/* <div className="my-1   md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="text"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                    placeholder="Job Title*"
                    name="job_title"
                    required
                    onChange={onChangeHandler}
                    // {...true}
                  ////value={values.jobtitle}
                  ////onChange={handlechange}
                  />
                </div> */}

                <div className="my-1 md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="email"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                    placeholder="Work Email*"
                    name="email"
                    onChange={onChangeHandler}
                    required
                    // {...true}
                  // value={values.email}
                  //onChange={handlechange}
                  />
                </div>

                <div className="my-1  md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="number"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400 "
                    placeholder="Phone Number*"
                    name="phone"
                    required
                    onChange={onChangeHandler}
                    // {...true}
                  // value={values.number}
                  // onChange={handlechange}
                  />
                </div>

                {/* <div className="my-1  md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="text"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400 "
                    placeholder="Company*"
                    name="company"
                    required
                    // {...true}
                    onChange={onChangeHandler}
                  ////value={values.company}
                  ////onChange={handlechange}
                  />
                </div>

                <div className="my-1  md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="text"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                    placeholder="Country*"
                    name="country"
                    required
                    // {...true}
                    onChange={onChangeHandler}
                  ////value={values.country}
                  ////onChange={handlechange}
                  />
                </div> */}

                <div className="md:w-1/3 w-[100%] overflow-hidden">
                  <input
                    type="text"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                    placeholder="State*"
                    name="state"
                    required
                    // {...true}
                    onChange={onChangeHandler}
                  ////value={values.state}
                  ////onChange={handlechange}
                  />
                </div>

                <div className=" md:w-1/3  w-[100%]  overflow-hidden ">
                  <input
                    type="text"
                    className="p-3 mb-2 text-center border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                    placeholder="City*"
                    name="city"
                    required
                    onChange={onChangeHandler}
                    // {...true}
                  //// value={values.city}
                  //// onChange={handlechange}
                  />
                </div>
              </div>

              <div className=" w-[100%]  ">
                <input
                  type="text"
                  className=" border md:w-[100%]  border-gray-500 rounded-lg p-3 focus:border-blue-400 outline-none mb-2"
                  placeholder="Subject*"
                  name="subject"
                  required
                  onChange={onChangeHandler}
                ////value={values.subject}
                ////onChange={handlechange}
                />
              </div>

              <div className=" w-[100%] ">
                <input
                  type="text"
                  className="  h-24 border md:w-[100%]  border-gray-500 rounded-lg p-3 focus:border-blue-400 outline-none mb-2 "
                  placeholder="Message"
                  name="message"
                  onChange={onChangeHandler}
                //// value={values.message}
                //// onChange={handlechange}
                />
              </div>

              <div className=" w-[100%] text-right">
                <button className="px-8 my-2 text-lg rounded-md font-semibold bg-[#f16920] text-white py-2">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>


        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-wrap justify-between ">
              <div className="flex items-center w-1/3 p-1 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="First Name"
                />
              </div>

             

              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="Last Name"
                />
              </div>

              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="Job Title"
                />
              </div>


              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="Work Email"
                />
              </div>
              

              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="Phone Number"
                />
              </div>

              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="Company"
                />
              </div>

              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="Country"
                />
              </div>

              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="State"
                />
              </div>

              <div className="flex items-center w-1/3 ">
                <input
                  type="text"
                  className="p-3 mb-2 border border-gray-500 rounded-lg outline-none focus:border-blue-400"
                  placeholder="City"
                />
              </div>

            </div> */
}
