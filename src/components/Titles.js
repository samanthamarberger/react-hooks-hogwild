import { useState } from "react";

function Titles({ data }) {
    const [showInfo, setShowInfo] = useState("null");

    function changeInfoStatus(hog) {
        setShowInfo(hog.name);
        console.log(hog);
    }

   

    function displayExtraInfo(hog) {
        console.log("greased", hog);
        const isGreased = hog.greased === "true" ? "yes" : "no";
        if (showInfo === hog.name) {
            //console.log(showInfo);
            return (
                <div>
                    <h3>Speciality: {hog.specialty}</h3>
                    <h3>Greased: {isGreased}</h3>
                    <h3>Weight: {hog.weight}</h3>
                    <h3>Highest Medal: {hog.medal}</h3>
                </div>
            )
        }
        else{
            return null;
        }
    }
    const title = data.map((hog => (
        <div key={hog.name} onClick={() => changeInfoStatus(hog)}>
            <h2>{hog.name}</h2>
            <img alt="Hog Image" src={hog.image} />
            {displayExtraInfo(hog)}
        </div>
    )))
    return (
        <div class="ui grid container">
            {title}
        </div>
    )
}

export default Titles