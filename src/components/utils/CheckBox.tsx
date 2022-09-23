import { motion } from "framer-motion";
import React from "react"
import "../../css/components/utils/CheckBox.css"


interface CheckBox {

    onCheckedChanged: (checked: boolean) => void;
    defaultChecked: boolean;
}


export default function LanguageCheckBox(props: CheckBox) {

    return(

        <motion.div
        initial={{opacity: 0, y: -100}} animate={{opacity: 1, y: 0, transition: {delay: 1}}}>
            <div className={"language-container"}>
                <input type="checkbox" 
                    className={"swicth"} 
                    onClick={(e) => {props.onCheckedChanged(e.currentTarget.checked)}} 
                    defaultChecked={props.defaultChecked} />


                <h5 className={"is_checked"}>PT</h5>
                <h5 className={"is_unchecked"}>EN</h5>
            </div>
        </motion.div>
    )
}