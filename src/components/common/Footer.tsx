import { motion } from "framer-motion";
import React from "react";
import "../../css/components/common/Footer.css"
import { ILanguage } from "../../languages";

interface IFooter {

    language: ILanguage;
}

export default function Footer(props: IFooter) {

    return(

        <footer>

            <motion.div initial={{opacity: 0}} whileInView={{opacity: 2, transition: {duration: 1}}} viewport={{once: true}} className="list-container">

                <div>
                    <motion.img initial={{scale: 0}} whileInView={{scale: 1, transition: {delay: 0.8}}} viewport={{once: true}} src="/logoSkora.png" width={80} height={80} />
                </div>

                <ul>
                    <li>{props.language?.footer?.meetUs.title}</li>
                    <li><a href="https://www.instagram.com/adriano_skora/" target={"_blank"}>{props.language?.footer?.meetUs.instaPersonal}</a></li>
                    <li><a href="https://www.instagram.com/skora3d_prints/" target={"_blank"}>{props.language?.footer?.meetUs.instaShop}</a></li>
                    <li><a href="https://www.linkedin.com/in/adriano-skora-812b55226/" target={"_blank"}>{props.language?.footer?.meetUs.linkePersonal}</a></li>
                    <li><a href="https://www.etsy.com/shop/Skora3D" target={"_blank"}>{props.language?.footer?.meetUs.etsyStore}</a></li>
                </ul>

                <ul>
                    <li>{props.language?.footer?.contactUs.title}</li>
                    <li><a href="mailto:skora.work@hotmail.com"><img src="/email.png" width={200} /></a></li>
                </ul>

                <ul>
                    <li>{props.language?.footer?.madeBy.title}</li>
                    <li><a href="https://github.com/FoxDead12" target={"_blank"}>{props.language?.footer?.madeBy.gitHubDev}</a></li>
                    <li><a href="https://www.linkedin.com/in/david-xavier-81b25421a/" target={"_blank"}>{props.language?.footer?.madeBy.likeDev}</a></li>
                </ul>


            </motion.div>
        </footer>
    )
}