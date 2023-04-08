import React,{useState} from "react";
import "./eoamd.css";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { grey } from "@material-ui/core/colors";

function MyPdfViewer() {
    const [numPages, setNumPages] = useState(null);  
    const [pageNumber, setPageNumber] = useState(1);

    const pdfFile = '../assets/pdf/EOA_18_19.pdf';
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    return (
      <div>
        {/* <PDFViewer>
          <Document file="/EOA_19_20.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page height='570' key={`page_${index + 1}`} pageNumber={index + 1}>
                <View>
                  <Text>Page {index + 1} of {numPages}</Text>
                </View> 
              </Page>
            ))}
          </Document>
        </PDFViewer> */}
        {/* <Viewer fileUrl={pdfFile} /> */}
        {pdfFile && (
        <Viewer fileUrl={pdfFile} />
        )}
      </div>
    );
  }  

function Eoamd({ setOpenModal }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        console.log("testtt;", numPages);
        // setPageNumber(1);
    }
    const options = {
      cMapUrl: 'cmaps/',
      cMapPacked: true,
      standardFontDataUrl: 'standard_fonts/',
    };

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
                <Document file="/EOA_19_20.pdf" onLoadSuccess={onDocumentLoadSuccess} options={options}>
                  {/* <Page 
                      height='570'
                      pageNumber={pageNumber}
                  /> */}
                    {/* <Page height="570" pageNumber={pageNumber} /> */}
                    {Array.from(
                        new Array(numPages),
                        (e,index) => (
                          <div>
                              <Page 
                                  height='570'
                                  key={`page_${index+1}`}
                                  pageNumber={index+1}
                              />
                              <div className="divider"></div>
                            </div>
                        )
                    )}
                </Document>
                {/* <p>Page {pageNumber} of {numPages}</p> */}
                {/* <MyPdfViewer /> */}
            </div>    
        </div>
        
      </div>
    </div>
  );
}

export default Eoamd;