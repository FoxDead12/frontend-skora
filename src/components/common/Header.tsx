import { motion } from "framer-motion";
import React, { useState } from "react"
import Instagram from "../../assets/svgs/instagram.svg";
import Linkdin from "../../assets/svgs/linkedin.svg";
import Etsy from "../../assets/svgs/etsy.svg";
import HeaderBack from "../../assets/images/header.png";
import "../../css/components/common/Header.css";
import LanguageCheckBox from "../utils/CheckBox";

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
        <header>
            {/* <img className="img-header" src={HeaderBack} /> */}
            <div className="header-container">
                <div className="column">
                    <motion.img initial={{scale: 0,}} animate={{scale: 1, transition: {delay: 1}}} src={"/logoSkora.png"} width={40} height={40} style={{marginRight: 10}} />
                    <LanguageCheckBox defaultChecked={props.defaultChecked} onCheckedChanged={onCheckedChanged}/>                    
                </div>


                <div className="column">
                    {/* Colocar todos os ICONS DE LINKS */}
                    <motion.a initial={{rotate: 180, opacity: 0}} animate={{rotate: 0, opacity: 1, transition: {delay: 1}}} whileHover={{rotateZ: [0, 20, -20, 0], transition: {repeat: Infinity, ease: "linear"}}} href="https://www.linkedin.com/in/adriano-skora-812b55226/" target={"_blank"}><img src={Linkdin} /></motion.a>
                    <motion.a initial={{scale: 0, opacity: 1 }} animate={{scale: 1, opacity: 1, transition: {delay: 1}}} whileHover={{rotateZ: [0, 20, -20, 0], transition: {repeat: Infinity, ease: "linear"}}} href="https://www.instagram.com/skora3d_prints/" target={"_blank"}><img src={Instagram} /></motion.a>
                    <motion.a initial={{x: 100, opacity: 1 }} animate={{x: 0, opacity: 1, transition: {delay: 1}}} whileHover={{rotateZ: [0, 20, -20, 0], transition: {repeat: Infinity, ease: "linear"}}} href="https://www.etsy.com/shop/Skora3D" target={"_blank"}><img src={Etsy} /></motion.a>
                    
                </div>
            </div>
        </header>
    )
}