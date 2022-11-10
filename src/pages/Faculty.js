import React, {useState} from 'react';
import './faculty.css';
import Uma from '../assets/uma.png';
import facultyData from '../data/facultyData';
import FacultyModal from '../components/FacultyModal';

const Faculty = () => {
    console.log(facultyData);
    const [modalOpen, setModalOpen] = useState(false);
    const [extcClicked, setExtcClicked] = useState(false);
    const [compsClicked, setCompsClicked] = useState(true);
    const handleClick = (whatClicked) => {
        console.log('extc clicked');
        if(whatClicked == "extc") {
            setExtcClicked(!extcClicked);
            setCompsClicked(!compsClicked);
        } else {
            setCompsClicked(!compsClicked);
            setExtcClicked(!extcClicked);
        }
    };
  return (
        <div className='containerr'>
            {modalOpen && <FacultyModal setOpenModal={setModalOpen} />}
            <div className='banner'>
                <h1>OUR FACULTY</h1>
            </div>
            <div className='buttonsNav'>
                <div className='extc' style={extcClicked? {width: "80%"} : {width: "20%" }} onClick={() => handleClick("extc")}>
                    <h2>EXTC</h2>
                </div>
                <div className='comps' style={compsClicked? {width: "80%"} : {width: "20%" }} onClick={() => handleClick("comps")}>
                    <h2>COMPS</h2>
                </div>
            </div>
            <div className='staffSection'>
            {facultyData.map((item) => 
                <div className='profCardContainer' onClick={() => {setModalOpen(true)}}>
                <div className='profCard'>
                    <img className='profImage' src={Uma} />
                    <div className='profNameCard'>
                        <p className='profName'>{item.facultyName}</p>
                    </div>
                </div>
                </div>
                )}
            </div>
        </div>
  )
}

export default Faculty;