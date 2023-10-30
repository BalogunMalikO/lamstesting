import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../image/logo192.png";
import { isUTCTimestamp } from "lightweight-charts";
import { isDate } from "util/types";
import audioIcon from "../../image/aUDIO aSSETSLAMS ASSET.svg";
import instructionIcon from "../../image/iNSTRUCTION aSSETSLAMS ASSET.svg";
import graphicIcon from "../../image/gRAPHIC aSSETSLAMS ASSET.svg";
type pDashBoardCard = {
  title: string;
  count: number;
  view: string;
  upload: string;
  image: any;
};

function Dashboard() {
  return (
    <section className="container">
      <h1 className="h3 mb-0 text-gray-800"> All Assets</h1>

      <section className="row">
        {/* <img className="img-fluid" src={logo1} alt="New York"></img> */}
        <DashBoardCards
          title="Audio Asset"
          count={6}
          view="list"
          upload="upload"
          image={audioIcon}
        />
        <DashBoardCards
          title="Graphics Asset"
          count={6}
          view="list"
          upload="upload"
          image={graphicIcon}
        />
        <DashBoardCards
          title="Text Asset"
          count={6}
          view="list"
          upload="upload"
          image={instructionIcon}
        />
      </section>
      <button className="upload-box">
        <a href="#" className="btn btn-primary">
          <Link to={"upload"}>Click Here to Upload</Link>
        </a>
      </button>
    </section>
  );
}

function DashBoardCards(props: pDashBoardCard) {
  const { title, count, view, upload, image } = props;

  return (
    <div className="col-xl-3 col-md-4 mb-5">
      <div className="card border-left-primary shadow h-120px  py-4">
        <img src={image} className="card-img-top" alt="Graphics Icon"/>

        <div className="card-body">
          {/* <img className="card-img-top">{=}</img> */}
          <h5 className="card-title">{title} </h5>
          <h6 className="card-subtitle md-2 text-muted">count: {count}</h6>
          <h6 className="card-subtitle md-2 text-muted">Date: {}</h6>
          <a href="#" className="btn btn-outline-primary card-link">
            <Link to={`/${upload}`}>View</Link>
          </a>

          <a href="#" className="btn btn-primary">
            <Link to={`/${view}`}>List</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
