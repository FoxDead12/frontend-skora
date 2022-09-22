export interface ILanguage {

    title: string,
    description: string,
    showcase: string,
    about: {

        title: string,
        description: string,

        us: {
            title: string,
            description: string
        },
        work: {
            title: string,
            description: string
        },
        people: {
            title: string,
            description: string
        }
    },
    form: {
        title: string,
        description: string,
        showcase: string,
        inputs: {
            name: string,
            email: string,
            file: string,
            application: string,
            description: string,
        }
    },
    footer: {

        meetUs: {
            title: string,
            instaPersonal: string,
            instaShop: string,
            linkePersonal: string,
            etsyStore: string
        },
        contactUs: {
            title: string,
        },
        madeBy: {
            title: string,
            gitHubDev: string,
            likeDev: string
        },

    }
}