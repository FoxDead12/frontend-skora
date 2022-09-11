import React, { useState } from "react"
import Instagram from "../../assets/images/instagram.png";
import Linkdin from "../../assets/images/linkdin.png"
import "../../css/components/common/Header.css";
import CheckBox from "../utils/CheckBox";

interface IHeader {

    onCheckedChanged: (lg: string) => void;
    defaultChecked: boolean;
}

const Language: any = {

    true: "PT",
    false: "EN"
}

export default function Header(props: IHeader) {

    const [menu, setMenu] = useState<boolean>(false)

    function onCheckedChanged(boolean: boolean) {

        props.onCheckedChanged(Language[boolean.toString()])
    }

    return(
        <header className={"container2"}>

            <div className={"lefContainer"}>
                <CheckBox defaultChecked={props.defaultChecked} onCheckedChanged={onCheckedChanged}/>
            </div>
            
            <div className={"hamburger"} onClick={() => { menu == true ? setMenu(false): setMenu(true)}}>
                <div className={menu == true ? "bar1" + " " + "active" : "bar1"}></div>
                <div className={menu == true ? "bar2" + " " + "active" : "bar2"}></div>
                <div className={menu == true ? "bar3" + " " + "active" : "bar3"}></div>
            </div>


            <div className={menu == true ? "rightContainer" + " " + "active" : "rightContainer"}>
                <a href="https://www.google.com/" target={"_blank"} rel={"noreferrer"}>
                    <img src={Linkdin} width={40} height={40} />
                </a>

                <a href="https://www.google.com/" target={"_blank"} rel={"noreferrer"}>
                    <img src={Instagram} width={40} height={40} />
                </a>
            </div>

        </header>
    )
}