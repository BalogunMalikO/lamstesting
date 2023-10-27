import React from "react";
import  Upload from "./Upload";


// thinking that I should have this things here 
interface iUpload {
    title: string,
    language: string,
    level: string
}

// or Array<iUpload>

const Uploads: iUpload[]= [
    {
        title: "Chidi",
        language: "Igbo",
        level: "2"
    },
    {
        title: "Chidi",
        language: "Igbo",
        level: "2"
    },
    {
        title: "Onyi",
        language: "Igbo",
        level: "2"
    },
    {
        title: "Kachi",
        language: "Igbo",
        level: "2"
    },
    {
        title: "Emma",
        language: "Igbo",
        level: "2"
    },
]


function UploadList(){
    return (
        <table className="table table-hover">
            <tbody>
            {
                Uploads.map((upload, i) => (
                    <Upload key={i} title={upload.title} language={upload.language} level={upload.level} />
                ))
            }
            </tbody>       
        </table>
    )
}


export default UploadList