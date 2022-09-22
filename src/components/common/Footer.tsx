import { motion } from "framer-motion";
import React from "react";
import "../../css/components/common/Footer.css"

export default function Footer() {

    return(

        <footer>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 2, transition: {duration: 1}}} viewport={{once: true}} className="list-container">

                <div>
                    <img src="/logoSkora.png" width={80} height={80} />
                </div>

                <ul>
                    <li>Meet Us</li>
                    <li><a href="https://www.instagram.com/adriano_skora/" target={"_blank"}>Personal Instagram</a></li>
                    <li><a href="https://www.instagram.com/skora3d_prints/" target={"_blank"}>Shop Instagram</a></li>
                    <li><a href="https://www.linkedin.com/in/adriano-skora-812b55226/" target={"_blank"}>Personal Linkedin</a></li>
                    <li><a href="https://www.etsy.com/shop/Skora3D" target={"_blank"}>Etsy Store</a></li>
                </ul>

                <ul>
                    <li>Contact Us</li>
                    <li><a href="mailto:skora.work@hotmail.com"><img src="/email.png" width={200} /></a></li>
                </ul>

                <ul>
                    <li>Made By</li>
                    <li><a href="https://github.com/FoxDead12" target={"_blank"}>Developer GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/david-xavier-81b25421a/" target={"_blank"}>Developer Linkedin</a></li>
                </ul>


            </motion.div>
        </footer>
    )
}