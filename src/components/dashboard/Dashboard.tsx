import React from "react";
import { Link, NavLink } from "react-router-dom";
// update the naming convention here for the files and assets imported
//eg. /image/audio/aUDIO aSSETSLAMS ASSET.svg can not have any white space there.
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
        <Link to={"upload"} className="btn btn-primary">Click Here to Upload</Link>
      </button>
    </section>
  );
}

function DashBoardCards(props: pDashBoardCard) {
  const { title, count, view, upload, image } = props;

   const dashboard_styles = {
        dashboard_card: {

        },
        dashboard_card_title: {
            display: "flex",
            justifyContent: "space-between"
        },
    }


  return (
    <div className="col-xl-3 col-md-4 mb-5">
      <div className="card border-left-primary shadow h-120px  py-4">


        <div className="card-body" >
          <div className="row justify-content-between" style={dashboard_styles.dashboard_card_title}>
            <img src={image} className="img-thumbnail" alt="Graphics Icon" style={{width: "81px", height: "81px"}} />
            <h5 className="card-title"> {title} </h5>
          </div>
          <h6 className="card-subtitle md-2 text-muted">count: {count}</h6>
          <h6 className="card-subtitle md-2 text-muted">Date: {}</h6>

          <div className="row justify-content-between">
            <NavLink className="btn btn-outline-primary card-link col-md-4" to={`/${upload}`}>View</NavLink>

            <NavLink className="btn btn-primary col-md-4" to={`/${view}`}>List</NavLink>
          </div>

        </div>
      </div>
    </div>
  );
}


export default Dashboard;
