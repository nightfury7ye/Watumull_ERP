import React,{useState} from "react";
import "./eoamd.css";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

function Eoamd({ setOpenModal }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        console.log("testtt;", numPages);
        setPageNumber(1);
    }
  return (
    <div className="modalBackground">
      <div className="containerField">
        <div className="closeBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="contentField">
            <div className="leftt">
                <ul>
                    <li>
                        <p>EOA 22-23</p>
                    </li>
                    <li>
                        <p>EOA 21-22</p>
                    </li>
                    <li>
                        <p>EOA 20-21</p>
                    </li>
                    <li>
                        <p>EOA 19-20</p>
                    </li>
                    <li>
                        <p>EOA 18-19</p>
                    </li>
                    <li>
                        <p>EOA 17-18</p>
                    </li>
                    <li>
                        <p>EOA 16-17</p>
                    </li>
                    <li>
                        <p>EOA 15-16</p>
                    </li>
                </ul>
            </div>
            <div className="rightt">
                <Document file="/EOA_19_20.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    {/* <Page height="570" pageNumber={pageNumber} /> */}
                    {Array.from(
                        new Array(numPages),
                        (e,index) => (
                            <Page 
                                height='570'
                                key={`page_${index+1}`}
                                pageNumber={index+1}
                            />
                        )
                    )}
                </Document>
            </div>    
        </div>
        
      </div>
    </div>
  );
}

export default Eoamd;