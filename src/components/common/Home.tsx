import React from "react";
import Wallpaper from "../../assets/images/background.jpg";
import { ILanguage } from "../../languages";
import  "../../css/components/common/Home.css"
import { motion } from "framer-motion";


interface IHome {

    language: ILanguage;
    openForm: () => void;
}


export default function Home(props: IHome) {

    return(
        <div className={"container"} style={{position: 'relative'}}>
            <img src={Wallpaper} alt={"Wallpaper"}  style={{width: '100%', height: '100%', position: 'absolute', objectFit: 'cover', zIndex: 0, top: 0, left: 0}} />

            <motion.div 
                
                style={{}}
                className={"subContainer shadow"}
                initial={{x: 500, opacity: 0}} 
                animate={{
                    x: 0, opacity: 1,
                    transition: {
                        delay: 1.5
                    }
                }} 
                >

                <h1>{props.language?.title}</h1>
                <p>{props.language?.description}</p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={props.openForm} className={"button"}>
                        {props.language?.showcase}
                </motion.div>

            </motion.div>
        </div>
    )
}