import React, { useRef, useState } from "react"
import "../../css/components/utils/ContactForm.css"
// import axios from 'axios'
import { ILanguage } from "../../languages";



interface IContactForm {

    onCLoseForm: () => void;
    language: ILanguage;
}

export default function ContactForm(props: IContactForm) {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [file, setFile] = useState<File[]>([]);
    const [application, setApplication] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [fetching, isFetching] = useState<boolean>(false);
    const [mensgem, setMEnsagem] = useState<string>("");

    const [menu, setMenu] = useState<boolean>(false);
    const [opacit, setOpacity] = useState<number>(1);


    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {

        const files = Array.from(e.target.files || [])
        
        setFile(files);
    }

    const changeApplication = (type: string) => {

        setMenu(false)
        setApplication(type)
    }

    const SendMail = async ()=>{

        if(name == "" || email == "" || application == "") return;
        let nameFile = "";
        let typeFile = "";

        if(file[0]) {

            // if(file[0].size > 5000) throw new Error("FILE SIZE NOT ENABLED")

            const formData = new FormData();
            formData.append('file', file[0]);
    
            await fetch(process.env.REACT_APP_SERVER_URL_PRO + "api/upload-file", {
                method: 'POST',
                body: formData
            })
            .then((response) => {

                if(!response.ok) {

                    throw new Error(response.statusText);
                }

                return response;
            })
            .then((response) => response.json())
            .then((data) => {
    
                nameFile = data.name;
                typeFile = data.type;
            })
    
        }

        await fetch(process.env.REACT_APP_SERVER_URL_PRO + "api/send-email", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                application,
                description,
                file: nameFile,
                type: typeFile

            })
        })
        .then((response) => {

            if(!response.ok) {

                throw new Error(response.statusText);
            }

            Sucess();
            return response;
        })
        

    }

    const Sucess = () => {

        //Opacity no form e jogar animação
        setOpacity(0)
        setMEnsagem("SUCESS");

        setTimeout(function() {
   
            props.onCLoseForm()
        }, 1000);
    }


    return(

        <div className={"container" + " " + "container back"}>
            
            <h5 style={{padding: 0, textAlign: 'center', fontSize: 24, margin: 0, color: 'lightgreen', position: 'absolute', }}>{mensgem}</h5>

            <form style={{scale: opacit, transitionDuration: ".3s" }} className={"form" + " shadow"}>
                
                <h1>{props.language?.form.title}</h1>
                <p>{props.language?.form.description}</p>
            
                <div className={"closeBtn"} onClick={props.onCLoseForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                <div className={"inputsContainer"}>


                    <div className={"row"}>
                        <input onChange={(e) => setName(e.target.value)} type={"text"} placeholder={props.language?.form.inputs.name} className={"shadow"} />
                        <input onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder={props.language?.form.inputs.email} className={"shadow"} />
                    </div>

                    <div className={"row"}>

                        <div className={"fileContainer" + " shadow"}>

                            <input id="file" type={"file"} hidden onChange={handleFileSelected}  accept={"application/pdf,application/zip"} multiple={false}/>
                            <label htmlFor="file" className={file.length == 0 ? "void" : ''}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                            &nbsp;&nbsp;&nbsp;
                                
                                {file.length ? 
                                    file.map((file) => {

                                        return (file.name);
                                    }) 
                                : <p>{props.language?.form.inputs.file}</p>}
                                </label>
                        </div>
                        
                        <div className={"selectContainer" + " shadow"}>

                            <label className={application == "" ? "void" : ""} onClick={() => {menu == true ? setMenu(false) : setMenu(true)}} >
                                {application == "" ? props.language?.form.inputs.application : application}
                                                            
                                <span className={"arrow" + ` ${menu === true ? "open" : ""} `}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                    </svg>
                                </span> </label>
                            
                            <ul className={"dropdown" + ` ${menu === true ? "open" : ""} `+ " shadow"}>
                                <li onClick={(e) => changeApplication(e.currentTarget.innerHTML)}>Estudante</li>
                                <li onClick={(e) => changeApplication(e.currentTarget.innerHTML)}>Empresa</li>
                                <li onClick={(e) => changeApplication(e.currentTarget.innerHTML)}>Individual</li>
                            </ul>

                        </div>
                        
                    </div>

                    <div className={"descriptionContainer"}>
                        <textarea onChange={(e) => setDescription(e.target.value)} className="shadow" rows={10} placeholder={props.language?.form.inputs.description}></textarea>
                    </div>
                </div>


                <div className={"button"} onClick={(e) => {SendMail()} }>
                    <label> {fetching == true ? '' : props.language?.form.showcase}</label>
                </div>

            </form>

        </div>
    )
}


