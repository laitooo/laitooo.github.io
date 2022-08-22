import type { NextPage } from 'next'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import { Document, Page, pdfjs } from 'react-pdf';
import React, { useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Home: NextPage = () => {
    const [numPages, setNumPages] = useState(0);

    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <div className="backdrop-blur-sm">
                <NavBar />
                <div className="grid place-items-center">
                    <a href="/files/alziberMohammedCv.pdf"
                        className="btn btn-wide btn-outline mt-28 mb-16"
                        target="_blank" download={true}>Download my cv</a>
                    <Document
                        file={"/files/alziberMohammedCv.pdf"}
                        onLoadSuccess={(pdf) => {
                            setNumPages(pdf.numPages);
                        }}>
                        {
                            Array.from(new Array(numPages), (el, index) => (
                                <Page
                                    scale={1.5}
                                    className="mt-10"
                                    key={`page_${index + 1}`} pageNumber={index + 1} />
                            ))
                        }
                    </Document>
                    <a href="/files/alziberMohammedCv.pdf"
                        className="btn btn-wide btn-outline mt-16 mb-28"
                        target="_blank" download={true}>Download my cv</a>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
