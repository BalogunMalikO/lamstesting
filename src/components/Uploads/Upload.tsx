import React from "react";


 type pUpload = {
    title: string,
    language: string,
    level: string,

}

 function Upload(props: pUpload){

    const {title, language, level} = props

    return (
        <tr>
            <th scope="row">Play</th>
            <td>{title}</td>
            <td>{language}</td>
            <td>{level}</td>
        </tr>
    )
}


export default Upload