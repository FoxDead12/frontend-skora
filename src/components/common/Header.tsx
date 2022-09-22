import { motion } from "framer-motion";
import React, { useState } from "react"
import Instagram from "../../assets/svgs/insta.svg";
import Linkdin from "../../assets/svgs/linke.svg"
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
        <motion.header 
        initial={{y: -100, opacity: 0}}
        animate={{
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 0.5

            }
        }}
        className={"container2"}
        >

            <div className={"lefContainer"}>

                <motion.img className="logo" src={"/logoSkora.png"} width={35} height={35}/>
                <CheckBox defaultChecked={props.defaultChecked} onCheckedChanged={onCheckedChanged}/>
            </div>
            
            <div className={"hamburger"} onClick={() => { menu == true ? setMenu(false): setMenu(true)}}>
                <div className={menu == true ? "bar1" + " " + "active" : "bar1"}></div>
                <div className={menu == true ? "bar2" + " " + "active" : "bar2"}></div>
                <div className={menu == true ? "bar3" + " " + "active" : "bar3"}></div>
            </div>


            <div className={menu == true ? "rightContainer" + " " + "active" : "rightContainer"}>
                <a href="https://www.linkedin.com/in/adriano-skora-812b55226/" target={"_blank"} rel={"noreferrer"}>
                    <motion.img 
                        initial={{scale: 0, rotateZ: 90}} 
                        animate={{
                            scale: 1,
                            rotateZ: 0,
                            transition: {
                                delay: 2,
                
                            }
                        }} 
                        src={Linkdin} width={40} height={40} />
                </a>

                <a href="https://www.instagram.com/skora3d_prints/" target={"_blank"} rel={"noreferrer"}>
                    <motion.img
                        initial={{scale: 0, rotateZ: -90}} 
                        animate={{
                            scale: 1,
                            rotateZ: 0,
                            transition: {
                                delay: 2,
                
                            }
                        }} 
                        src={Instagram} width={40} height={40} />
                </a>

                <a href="https://www.instagram.com/skora3d_prints/" target={"_blank"} rel={"noreferrer"}>
                    <motion.img
                        initial={{scale: 0, rotateZ: -90}} 
                        animate={{
                            scale: 1,
                            rotateZ: 0,
                            transition: {
                                delay: 2,
                
                            }
                        }} 
                        src={Instagram} width={40} height={40} />
                </a>

                
            </div>

        </motion.header>
    )
}