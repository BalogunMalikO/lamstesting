import React from "react";
import { Link } from "react-router-dom";

type pDashBoardCard = {
    title: string,
    count: number,
    view: string,
    upload: string
}

function Dashboard(){

    return (
        <section className="container">
            <h1 className="h3 mb-0 text-gray-800"> All Assets</h1>

            <section className="row">
                <DashBoardCards title="Audio" count={6} view="list" upload="upload" />
                <DashBoardCards title="Graphics" count={6} view="list" upload="upload" />
                <DashBoardCards title="Text" count={6} view="list" upload="upload" />
            </section>

        </section>
    )
}


function DashBoardCards(props: pDashBoardCard){

    const {title, count, view, upload} = props

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle md-2 text-muted">count: {count}</h6>


                    
                    <a href="#" className="card-link">
                        <Link to={`/${upload}`}>View</Link>
                    </a>
                    <a href="#" className="card-link">
                        <Link to={`/${view}`}></Link>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Dashboard