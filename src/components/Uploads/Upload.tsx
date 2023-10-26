import React from "react";


type Props = {
    post: {
        title: string;
    }
}


function Upload(){

    return (
        <div className="card">
            <div className="card-body">
                This is some text within a card body.
            </div>
        </div>
    )
}


// function Upload({post} : Props){

//     return (
//         <div className="card">
//             <div className="card-body">
//                 This is some text within a card body.
//             </div>
//         </div>
//     )
// }

export default Upload