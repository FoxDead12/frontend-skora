import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import About from './components/common/About';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './components/common/Home';
import ContactForm from './components/utils/ContactForm';
import { English, ILanguage, Portugues } from "./languages";

const LanguageObj: any = {
  PT: Portugues,
  EN: English
}

const LanguageBol: any = {
  PT: true,
  EN: false
}

function App() {

  const [cookies, setCookie] = useCookies(['language']);
  const [languageName, setLanguageName] = useState<string>("");
  const [language, setLanguage] = useState<ILanguage>();
  
  const [form, setForm] = useState<boolean>(false)

  useEffect(() => {

    if(cookies.language) {
      setLanguage(LanguageObj[cookies.language])
      setLanguageName(cookies.language);
    }
    else {
      setCookie("language", "PT", {path: '/'})
    }

  }, [cookies])

  function changeLanguage(lg: string) {

    setCookie("language", lg, {path: "/", sameSite: "strict"})
  }


  function openForm() {

    setForm(true)
  }

  function closeForm() {

    setForm(false)
  }

  return (
    <div className='App'>
      <Header onCheckedChanged={changeLanguage} defaultChecked={LanguageBol[languageName]} />    
      <Home   openForm={openForm} language={language || {} as ILanguage}/>
      <About  language={language || {} as ILanguage}/>
      <Footer language={language || {} as ILanguage} />


      <AnimatePresence>
        {form == true ? <ContactForm language={language || {} as ILanguage} onCLoseForm={closeForm}/> : ''}
      </AnimatePresence>
    </div>
  );
}

export default App;
