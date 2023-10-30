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

        <section className="container">
            <h1 className="h3 mb-0 text-gray-800"> Audio Assets</h1>

            <div className="card border-left-primary shadow h-100 py-2">
                <table className="table table-hover">
                    <tbody>
                    {
                        Uploads.map((upload, i) => (
                            <Upload key={i} title={upload.title} language={upload.language} level={upload.level} />
                        ))
                    }
                    </tbody>       
                </table>
            </div>
        </section>
    )
}


export default UploadList