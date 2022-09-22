import React from "react";
import People from "../../assets/svgs/people.svg";
import Us from "../../assets/svgs/about.svg";
import Work from "../../assets/svgs/work.svg";
import "../../css/components/common/About.css"
import { ILanguage } from "../../languages";
import { motion } from "framer-motion";

interface IAbout {

    language: ILanguage
}

export default function About(props: IAbout) {
    
    return (

        <div className={"container3"}>
            <motion.h1 initial={{y: -100, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true, margin: "-20%"}}>{props.language?.about?.title}</motion.h1>
            {/* <p>{props.language?.about?.description}</p> */}
        
            <div className={"infoContainer"}>

                <div className={"info"}>
                    <motion.img
                    initial={{opacity: 0}}

                    whileInView={{
                        x: [-100, 50, 0],
                        opacity: [0, 1],
                        transition: {duration: 1.5}
                    }}
                    viewport={{once: true, margin: "-20%"}}
                    src={Us} width={300} height={300} />
                    <motion.h1 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1.5}}} viewport={{once: true, margin: "-10%"}}>{props.language?.about?.us.title}</motion.h1>
                    <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1.5}}} viewport={{once: true, margin: "-10%"}}>{props.language?.about?.us.description}</motion.p>
                </div>

                <div className={"info"}>
                    <motion.img
                        initial={{opacity: 0}}
                        whileInView={{scale: [0, 1.2, 1], opacity: 1, transition: {duration: 1.5}}}
                        viewport={{once: true, margin: "-20%"}}
                        src={Work} width={260} height={300} />

                    <motion.h1 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1.5}}} viewport={{once: true, margin: "-10%"}}>{props.language?.about?.work.title}</motion.h1>
                    <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1.5}}} viewport={{once: true, margin: "-10%"}}>{props.language?.about?.work.description}</motion.p>
                </div>

                <div className={"info"}>
                    <motion.img
                        initial={{opacity: 0}}
                        whileInView={{y: [-200, 50, 0], opacity: 1, transition: {duration: 1.5}}}
                        viewport={{once: true, margin: "-20%"}}
                        src={People} width={300} height={300} />

                    <motion.h1 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1.5}}} viewport={{once: true, margin: "-10%"}}>{props.language?.about?.people.title}</motion.h1>
                    <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0, transition: {duration: 1.5}}} viewport={{once: true, margin: "-10%"}}>{props.language?.about?.people.description}</motion.p>
                </div>

            </div>
        </div>
    )
}