import React from "react";
import { Link, NavLink } from "react-router-dom";
// update the naming convention here for the files and assets imported
//eg. /image/audio/aUDIO aSSETSLAMS ASSET.svg can not have any white space there. Done✅
import audioIcon from "../../image/audioAssetLams.svg";
import instructionIcon from "../../image/instructionAssetLams.svg";
import graphicIcon from "../../image/graphicAssetLams.svg";
import uploadIcon from "../../image/uploadAssetLAMS.svg";
import Logout from "../auth/Logout";


type pDashBoardCard = {
  title: string;
  count: number;
  view: string;
  upload: string;
  image: any;
};


function Dashboard() {
  return (
    <><Logout /><section>
      <h1 className="h3 text-gray-800 mt-5"> All Assets</h1><section className="row mt-4">
        <DashBoardCards
          title="Audio Asset"
          count={6}
          view="list"
          upload="upload"
          image={audioIcon} />
        <DashBoardCards
          title="Graphics Asset"
          count={6}
          view="list"
          upload="upload"
          image={graphicIcon} />
        <DashBoardCards
          title="Instruction Asset"
          count={6}
          view="list"
          upload="upload"
          image={instructionIcon} />
      </section><label className="position-absolute middle-100 start-50 translate-middle">
        Click to Upload Asset
      </label>
      <Link to={"upload"} className="position-absolute bottom-0 start-50 translate-middle-x border-0">
        <img src={uploadIcon} style={{ width: "300px", height: "400px" }} />
      </Link>

    </section></>
  );
}

function DashBoardCards(props: pDashBoardCard) {
  const { title, count, view, upload, image } = props;

  const dashboard_styles = {
    dashboard_card: {},
    dashboard_card_title: {
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <div className="col-xl-3 col-md-4 mb-5">
      <div className="card border-left-primary shadow h-120px py-4 p-3">
        <div className="card-body">
          <div
            className="row justify-content-between"
            style={dashboard_styles.dashboard_card_title}
          >
            <img
              src={image}
              className="img-thumbnail"
              alt="Graphics Icon"
              style={{ width: "91px", height: "81px" }}
            />
            <br />
            <h5 className="card-title"> {title} </h5>
          </div>
          <h6 className="card-subtitle md-2 text-muted">count: {count}</h6>
          <br />
          <h6 className="card-subtitle md-2 text-muted"></h6>

          <div className="row justify-content-between">
            <NavLink
              className="btn btn-outline-primary card-link col-md-4"
              to={`/${view}`}
            >
              View
            </NavLink>

            <NavLink className="btn btn-primary col-md-4" to={`/${upload}`}>
              Upload
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
