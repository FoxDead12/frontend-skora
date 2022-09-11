import React from "react";
import Wallpaper from "../../assets/images/background.jpg";
import { ILanguage } from "../../languages";
import  "../../css/components/common/Home.css"


interface IHome {

    language: ILanguage;
    openForm: () => void;
}


export default function Home(props: IHome) {

    return(
        <div className={"container"} style={{position: 'relative'}}>
            <img src={Wallpaper} alt={"Wallpaper"}  style={{width: '100%', height: '100%', position: 'absolute', objectFit: 'cover', zIndex: 0, top: 0, left: 0}} />

            <div className={"subContainer" + " " + "shadow"}>
                <h1>{props.language?.title}</h1>
                <p>{props.language?.description}</p>

                <div onClick={props.openForm} className={"button"}>
                    {props.language?.showcase}
                </div>

            </div>
        </div>
    )
}