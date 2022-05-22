import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

const Downloadpage = ({ rootElementId, downloadFileName }) => {

    let navigate = useNavigate();
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "px", "a1")
            pdf.addImage(imgData, "JPEG", 10, 50)
            pdf.save(`${downloadFileName}`)

            alert("Booking Successful")
            navigate('/homepage')
        })
    }
    return (
        <div>
            <button className="btn btn-success" onClick={downloadFileDocument}>Pay Now</button>
        </div>
    )
}

export default Downloadpage;