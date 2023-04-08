import React, { useRef, useState } from "react";
import './aboutus.css';
import university from '../assets/university.jpg';
import big_watu from '../assets/big_watu.jpg';

const AboutUs = () => {
    return(
        <div>
            <section className="page_title">
                <div className="container">
                    <h1>Watumull Institute of Electronics Engineering and Computer Technology</h1>
                </div>
            </section>
            <section className="info_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 glance_text">
                            <blockquote>
                                This premier technical Institute was established in 1981 by the Hyderabad (Sind) National Collegiate Board.
                            </blockquote>
                            <p>
                                Watumull is one of the oldest educational trusts of Mumbai offering quality education in various fields, ranging from arts, commerce, science, education, pharmacy, engineering, law, etc.
                            </p>
                            <p>
                                The Institute, which was operational in the beautiful location of Worli sea face has been shifted to the sprawling campus at Ulhasnagar, hardly 50 meters from Ulhasnagar Railway Station (West) from September 2017. Watumull Institute is the only engineering college in Ulhasnagar.
                            </p>
                            <p>
                                It now brings experience and expertise to the central suburbs. The Institute, which has created many rankers and crafted many careers, will now cater to engineering aspirants from Thane to Karjat, and more particularly to the Sindhi community of Ulhasnagar.
                            </p>
                        </div>
                        <div className="col-md-6 glance_image">
                            <img src={big_watu} alt="university" className="img-fluid watuImg"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;