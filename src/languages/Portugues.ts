import { ILanguage } from "./ILanguage";

export const Portugues: ILanguage = {

    title: 'Modelagem 3D',
    description: 'Elaboramos modelos 3D com base em vídeo, sketchs e outros!',
    showcase: "Contactar",
    about: {
        
        title: "Torna a modelagem mais simples",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

        us: {
            title: "Quem Somos",
            description: "Somos uma pequena equipa de engenheiros que fazem uso da nova tecnologia habilitada por IA para ter os designs mais eficientes.",
        },
        work: {
            title: "O Que Fazemos",
            description: "Usando desenhos, esboços ou descrições precisas, construímos um modelo 3D com as especificações desejadas.",
        },
        people: {
            title: "Para Quem",
            description: "Temos serviços dirigidos tanto a particulares como a grandes empresas, se for fisicamente possível fazemos o modelo!",
        }
    },
    form: {
        title: "Envia a Tua Proposta",
        description: "Forneça informações detalhadas e especificadas para melhor compreensão e resultados",
        showcase: "Enviar",
        inputs: {
            name: "Nome",
            email: "Email",
            file: "Escolher Ficheiro...",
            application: "Aplicação",
            description: "Descrição e detalhes do item para maquete e especificações técnicas",
        }
    }
}
