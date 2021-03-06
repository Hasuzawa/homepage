import React from "react";


import "./block.scss";
import "./responsive.scss";



export function Job(props){
    return (
        <div className="job">

                <div className="job--boxed--first_line">
                    <h2 className="job--job_title">{props.jobTitle}</h2>
                    <span className="job--date">{props.startDate} - {props.endDate}</span>
                </div>
                <div className="job--boxed--second_line">
                    <span className="job--company"><a href={props.company_url}>{props.company}</a></span>
                </div>
                <div className="job--boxed--third_line">
                    <span>Techs used:</span>
                    <StringToLogo techs={props.techs}/>
                </div>
                <div className="job--boxed--fourth_line" id="job--last_section">
                    <div className="job--description" id="job--description">{props.description}</div>
                    <div className="job--photo_area" id="job--photo_area">
                        <img className="job--photo" id="job--photo" src="images/near_Osaka_Castle.png" alt="near Osaka Castle"></img>
                        <span className="photo--caption">The building where I work at is right beside Osaka Castle.</span>
                    </div>
                    
                </div>

        </div>
    );
}

/*************************/
const publishMode = "gh-pages";
var baseURL = ""
if (publishMode === "gh-pages"){
    baseURL = "./";
} else {
    baseURL = "";
}

export class StringToLogo extends React.Component{

    static toLogo = {
        "C": <img className="skill_logo" src={baseURL + "logos/C_logo.svg"} alt="C"/>,
        "C++": <img className="skill_logo" src={baseURL + "logos/C++_logo.svg"} alt="C++"/>,
        "Java": <img className="skill_logo" src={baseURL + "logos/Java_logo.svg"} alt="Java"/>,
        "JavaScript": <img className="skill_logo" src={baseURL + "logos/Javascript_logo.svg"} alt="JavaScript"/>,
        "Python": <img className="skill_logo" src={baseURL + "logos/Python_logo.svg"} alt="Python"/>,
        "TypeScript": <img className="skill_logo" src={baseURL + "logos/Typescript_logo.svg"} alt="TypeScript"/>,


        "HTML": <img className="skill_logo" src={baseURL + "logos/HTML5_logo.svg"} alt="HTML"/>,
        "CSS": <img className="skill_logo" src={baseURL + "logos/CSS3_logo.svg"} alt="CSS"/>,
        "React": <img className="skill_logo" src={baseURL + "logos/React_logo.svg"} alt="React"/>,
        "Sass": <img className="skill_logo" style={{"width": "80px"}} src={baseURL + "logos/Sass_logo.svg"} alt="Sass"/>,
        "Django": <img className="skill_logo" style={{"width": "100px"}} src={baseURL + "logos/Django_logo.svg"} alt="Django"/>,

        "Gimp": <img className="skill_logo" src={baseURL + "logos/Gimp_logo.svg"} alt="Gimp" style={{objectFit: "contain"}}/>,
        "Inkscape": <img className="skill_logo" src={baseURL + "logos/Inkscape_logo.svg"} alt="Inkscape"/>,

        "GraphQL": <img className="skill_logo" src={baseURL + "logos/GraphQL_logo.svg"} alt="GraphQL"/>,
        "Graphene-django":<img className="skill_logo" src={baseURL + "logos/Graphene-django_logo.svg"} alt="Graphene-django"/>,
        "Apollo":<img className="skill_logo" src={baseURL + "logos/Apollo_logo.svg"} alt="Apollo"/>,

        "Apache": <img className="skill_logo" src={baseURL + "logos/Apache_logo.png"} alt="Apache"/>,

        "PostgreSQL": <img className="skill_logo" src={baseURL + "logos/PostgreSQL_logo.svg"} alt="PostgreSQL"/>

    }

    constructor(props){
        super(props);

        this.stringToJSX = this.stringToJSX.bind(this);
    }

    stringToJSX(string, index){
        let logo_JSX = StringToLogo.toLogo[string];
        if (logo_JSX === undefined){
            throw TypeError(`The following string does not a corresponding logo: ${string}`)
        }
        return React.cloneElement(logo_JSX, {key: index});
    }

    render(){
        return this.props.techs.map((str, index) => this.stringToJSX(str, index));
    }

}

/******************************/

const languages = {
    0: {
        heading: "English",
        image: {src: "pdf/TOEIC_965_certificate_redacted.pdf#toolbar=0",
                alt: "TOEIC 965"},
        text: "I have lived in a city bilingual in English and Chinese for over 20 years. The vast majority of my education is completed using English."
    },
    1: {
        heading: "Japanese",
        image: {src: "pdf/JLPT_N1_redacted.pdf#toolbar=0",
                alt: "Japanese Language Proficiency Test N1"},
        text: "I am working in Japan and has passed the highest level of the most recognised Japanese language exam."
    },
    2: {
        heading: "German",
        image: {src: "pdf/Goethe_Institut_B1_reading_certificate_redacted.pdf#toolbar=0",
                alt: "Goethe Institut B1 Reading passed"},
        text: "I can understand daily life German and can read German news and publications."
    },
    3: {
        heading: "Chinese",
        image: {src: "pdf/HSK_level_6_certificate_redacted.pdf#toolbar=0",
                alt: "Chinese Proficiency Test Level 6"},
        text: "I am a native speaker of Chinese and two more dialects."
    }
}


export class Languages extends React.Component{
    constructor(props){
        super(props);

        this.state = {load: false};

        this.renderButton = this.renderButton.bind(this);
    }

    renderButton(){
        return (
            <button
                className={"languages--button" + (this.state.load ? " loaded" : "")}
                onClick={()=>this.setState({load: !this.state.load})}
            >
                {this.state.load ? "Hide Certificate" : "Show Certificate"}
            </button>
        );
    }


    render(){
        return(
            <>
                <summary>Languages</summary>
                <div className="languages-preface">
                    <p className="languages-explanation">
                        Due to privacy and security concern, personal information have been redacted.<br />
                        I can send original versions to verify I am the owner if you contact me directly.
                    </p>
                    <hr width="100%"/>
                    <p className="languages-explanation">
                        Click the button to load certificates,<br />it might take a few seconds.
                    </p>
                    {this.renderButton()}
                </div>
                <div className="skill--languages">
                    <Language
                        id="0"
                        load={this.state.load}
                    />
                    <Language
                        id="1"
                        load={this.state.load}
                    />
                    <Language
                        id="2"
                        load={this.state.load}
                    />
                    <Language
                        id="3"
                        load={this.state.load}
                    />
                </div>
            </>
        );
    }
}

class Language extends React.Component{
    constructor(props){
        super(props);

        this.getImages = this.getImages.bind(this);
    }

    getImages(language){

        return (
            <embed
                id="language--image"
                className="language--pdf"
                src={language.image.src}
                type="application/pdf"
                alt={language.image.alt}
            />
        );
    }


    render(){
        const id = this.props.id;
        var language = languages[id];

        return (
            <div className="skill--language">
                <h3>{language.heading}</h3>
                {this.props.load ? this.getImages(language) : null}
                <p className="language--description">{language.text}</p>
            </div>
        );
    }
}