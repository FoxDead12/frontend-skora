import React from "react";
import People from "../../assets/svgs/people.svg";
import Us from "../../assets/svgs/about.svg";
import Work from "../../assets/svgs/work.svg";
import "../../css/components/common/About.css"
import { ILanguage } from "../../languages";

interface IAbout {

    language: ILanguage
}

export default function About(props: IAbout) {
    
    return (

        <div className={"container3"}>
            <h1>{props.language?.about?.title}</h1>
            <p>{props.language?.about?.description}</p>
        
            <div className={"infoContainer"}>

                <div className={"info"}>
                    <img src={Us} width={300} height={300} />
                    <h1>{props.language?.about?.us.title}</h1>
                    <p>{props.language?.about?.us.description}</p>
                </div>

                <div className={"info"}>
                    <img src={Work} width={260} height={300} />

                    <h1>{props.language?.about?.work.title}</h1>
                    <p>{props.language?.about?.work.description}</p>
                </div>

                <div className={"info"}>
                    <img src={People} width={300} height={300} />
                    <h1>{props.language?.about?.people.title}</h1>
                    <p>{props.language?.about?.people.description}</p>
                </div>

            </div>
        </div>
    )
}