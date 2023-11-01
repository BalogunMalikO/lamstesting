import React from "react";
import "./style.css";
import playIcon from "../../image/PlayIconAssetLams.svg";
import pauseIcon from "../../image/pause.png"


 type pUpload = {
    title: string,
    language: string,
    level: string,
    
    

}

 function Upload(props: pUpload){

    const {title, language, level} = props
  

    
       

    return (

        
        <tr>
            <th scope="row">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16 ">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/> 
                
                </svg> */}
                
                <img src= {pauseIcon} alt="" className="inactive"  width={18}/>
                <img src={playIcon} alt="play" className="active" width={18} id={"av"}/> 
                
               
            </th>
            <td>
                <span className="cell-title">File title</span>
                <span className="cell-content">{title}</span>
            </td>
            <td>
                <span className="title">Target Language</span>
                <span className="cell-content">{language}</span>
            </td>

            <td>
                <span className="title">Level</span>
                <span className="cell-content">{level}</span>
            </td>

            <td>
                <span className="title">Upload Date</span>
                <span className="cell-content">10/10/23</span>
            </td>
        </tr>
    )
}



export default Upload