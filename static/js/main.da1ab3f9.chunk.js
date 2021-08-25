(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(10),c=a.n(i),o=(a(16),a(11)),l=a(3),r=a(4),d=a(2),j=a(6),h=a(5),b=(a(17),a(7),a(0));function p(e){return Object(b.jsxs)("div",{className:"job",children:[Object(b.jsxs)("div",{className:"job--boxed--first_line",children:[Object(b.jsx)("h2",{className:"job--job_title",children:e.jobTitle}),Object(b.jsxs)("span",{className:"job--date",children:[e.startDate," - ",e.endDate]})]}),Object(b.jsx)("div",{className:"job--boxed--second_line",children:Object(b.jsx)("span",{className:"job--company",children:Object(b.jsx)("a",{href:e.company_url,children:e.company})})}),Object(b.jsxs)("div",{className:"job--boxed--third_line",children:[Object(b.jsx)("span",{children:"Techs used:"}),Object(b.jsx)(m,{techs:e.techs})]}),Object(b.jsxs)("div",{className:"job--boxed--fourth_line",id:"job--last_section",children:[Object(b.jsx)("div",{className:"job--description",id:"job--description",children:e.description}),Object(b.jsxs)("div",{className:"job--photo_area",id:"job--photo_area",children:[Object(b.jsx)("img",{className:"job--photo",id:"job--photo",src:"%PUBLIC_URL%/images/near_Osaka_Castle.png",alt:"near Osaka Castle"}),Object(b.jsx)("span",{className:"photo--caption",children:"The building where I work at is right beside Osaka Castle."})]})]})]})}var m=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).stringToJSX=s.stringToJSX.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"stringToJSX",value:function(e,t){var s=a.toLogo[e];if(void 0===s)throw TypeError("The following string does not a corresponding logo: ".concat(e));return n.a.cloneElement(s,{key:t})}},{key:"render",value:function(){var e=this;return this.props.techs.map((function(t,a){return e.stringToJSX(t,a)}))}}]),a}(n.a.Component);m.toLogo={C:Object(b.jsx)("img",{className:"skill_logo",src:"logos/C_logo.svg",alt:"C"}),"C++":Object(b.jsx)("img",{className:"skill_logo",src:"logos/C++_logo.svg",alt:"C++"}),Java:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Java_logo.svg",alt:"Java"}),JavaScript:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Javascript_logo.svg",alt:"JavaScript"}),Python:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Python_logo.svg",alt:"Python"}),TypeScript:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Typescript_logo.svg",alt:"TypeScript"}),HTML:Object(b.jsx)("img",{className:"skill_logo",src:"logos/HTML5_logo.svg",alt:"HTML"}),CSS:Object(b.jsx)("img",{className:"skill_logo",src:"logos/CSS3_logo.svg",alt:"CSS"}),React:Object(b.jsx)("img",{className:"skill_logo",src:"logos/React_logo.svg",alt:"React"}),Sass:Object(b.jsx)("img",{className:"skill_logo",style:{width:"80px"},src:"logos/Sass_logo.svg",alt:"Sass"}),Django:Object(b.jsx)("img",{className:"skill_logo",style:{width:"100px"},src:"logos/Django_logo.svg",alt:"Django"}),Gimp:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Gimp_logo.svg",alt:"Gimp",style:{objectFit:"contain"}}),Inkscape:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Inkscape_logo.svg",alt:"Inkscape"}),GraphQL:Object(b.jsx)("img",{className:"skill_logo",src:"logos/GraphQL_logo.svg",alt:"GraphQL"}),"Graphene-django":Object(b.jsx)("img",{className:"skill_logo",src:"logos/Graphene-django_logo.svg",alt:"Graphene-django"}),Apollo:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Apollo_logo.svg",alt:"Apollo"}),Apache:Object(b.jsx)("img",{className:"skill_logo",src:"logos/Apache_logo.png",alt:"Apache"}),PostgreSQL:Object(b.jsx)("img",{className:"skill_logo",src:"logos/PostgreSQL_logo.svg",alt:"PostgreSQL"})};var u={0:{heading:"English",image:{src:"pdf/TOEIC_965_certificate_redacted.pdf#toolbar=0",alt:"TOEIC 965"},text:"I have lived in a city bilingual in English and Chinese for over 20 years. The vast majority of my education is completed using English."},1:{heading:"Japanese",image:{src:"pdf/JLPT_N1_redacted.pdf#toolbar=0",alt:"Japanese Language Proficiency Test N1"},text:"I am working in Japan and has passed the highest level of the most recognised Japanese language exam."},2:{heading:"German",image:{src:"pdf/Goethe_Institut_B1_reading_certificate_redacted.pdf#toolbar=0",alt:"Goethe Institut B1 Reading passed"},text:"I can understand daily life German and can read German news and publications."},3:{heading:"Chinese",image:{src:"pdf/HSK_level_6_certificate_redacted.pdf#toolbar=0",alt:"Chinese Proficiency Test Level 6"},text:"I am a native speaker of Chinese and two more dialects."}},g=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={load:!1},s.renderButton=s.renderButton.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"renderButton",value:function(){var e=this;return Object(b.jsx)("button",{className:"languages--button"+(this.state.load?" loaded":""),onClick:function(){return e.setState({load:!e.state.load})},children:this.state.load?"Hide Certificate":"Show Certificate"})}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("summary",{children:"Languages"}),Object(b.jsxs)("div",{className:"languages-preface",children:[Object(b.jsxs)("p",{className:"languages-explanation",children:["Due to privacy and security concern, personal information have been redacted.",Object(b.jsx)("br",{}),"I can send original versions to verify I am the owner if you contact me directly."]}),Object(b.jsx)("hr",{width:"100%"}),Object(b.jsxs)("p",{className:"languages-explanation",children:["Click the button to load certificates,",Object(b.jsx)("br",{}),"it might take a few seconds."]}),this.renderButton()]}),Object(b.jsxs)("div",{className:"skill--languages",children:[Object(b.jsx)(O,{id:"0",load:this.state.load}),Object(b.jsx)(O,{id:"1",load:this.state.load}),Object(b.jsx)(O,{id:"2",load:this.state.load}),Object(b.jsx)(O,{id:"3",load:this.state.load})]})]})}}]),a}(n.a.Component),O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getImages=s.getImages.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"getImages",value:function(e){return Object(b.jsx)("embed",{id:"language--image",className:"language--pdf",src:e.image.src,type:"application/pdf",alt:e.image.alt})}},{key:"render",value:function(){var e=this.props.id,t=u[e];return Object(b.jsxs)("div",{className:"skill--language",children:[Object(b.jsx)("h3",{children:t.heading}),this.props.load?this.getImages(t):null,Object(b.jsx)("p",{className:"language--description",children:t.text})]})}}]),a}(n.a.Component);a(8);function x(){return Object(b.jsxs)("div",{className:"content introduction",children:[Object(b.jsx)("p",{className:"notification",children:"This website will soon be deprecated. After I finish some other projects, I will create a new website with Next.js with better presentation."}),Object(b.jsxs)("div",{className:"introduction--section0",children:[Object(b.jsx)("h1",{children:"Hasuzawa@Home"}),Object(b.jsxs)("p",{children:["Welcome to my homepage. This is primarily my portfolio.",Object(b.jsx)("br",{}),"I have gathered all my work experiences, skills on this website. ",Object(b.jsx)("br",{}),"For the latest progress on projects, please visit my ",Object(b.jsx)("a",{href:"https://github.com/Hasuzawa",children:"GitHub"}),"."]})]}),Object(b.jsxs)("div",{className:"introduction--section1",children:[Object(b.jsx)("h1",{children:"Values"}),Object(b.jsxs)("div",{className:"values",children:[Object(b.jsxs)("div",{className:"value",children:[Object(b.jsx)("h2",{children:"Efficiency"}),Object(b.jsx)("p",{children:"In the digital world, there are infinite ways to implement most idea but only a small subset is efficient. To be efficient is to pursue that singularity among possibilities."})]}),Object(b.jsxs)("div",{className:"value",children:[Object(b.jsx)("h2",{children:"Timely"}),Object(b.jsx)("p",{children:"There is merit in perfection and there is also virtue in a timely solution. I know the importance of precious time and make the best of it during and outside work."})]}),Object(b.jsxs)("div",{className:"value",children:[Object(b.jsx)("h2",{children:"Initiative"}),Object(b.jsx)("p",{children:"The modern world changes fast. I constantly learn new techs, languages, frameworks and improve my skill to prepare for unforeseen challenges and opportunities."})]})]})]}),Object(b.jsxs)("div",{className:"introduction--section2",children:[Object(b.jsx)("h1",{children:"About me"}),Object(b.jsx)("span",{children:"I am a full stack developer and system engineer currently working in Osaka, Japan."}),Object(b.jsxs)("div",{className:"domains",children:[Object(b.jsxs)("div",{className:"domain",children:[Object(b.jsx)("h2",{children:"Frontend"}),Object(b.jsx)("p",{children:"I have used HTML, CSS and JavaScript to design frontend for fetching data input and display HLML response. I also have project done using React and Sass."})]}),Object(b.jsxs)("div",{className:"domain",children:[Object(b.jsx)("h2",{children:"Backend"}),Object(b.jsx)("p",{children:"I have implemented a backend to an intranet system using Java and SQL connected to a PostgreSQL database. I also know Python, Django and C++."})]}),Object(b.jsxs)("div",{className:"domain",children:[Object(b.jsx)("h2",{children:"Soft Skills"}),Object(b.jsx)("p",{children:"I am a polygot in real life and can speak a total of 6 languages and dialects, including English, German, Japanese and Chinese. I am invaluable in an increasingly interconnected world, in which diverse culture and nationality is the norm."})]})]})]}),Object(b.jsxs)("div",{className:"introduction--section3",children:[Object(b.jsx)("h1",{children:"Employment Status"}),Object(b.jsxs)("p",{children:["I am employed but actively looking for job opportunities.",Object(b.jsx)("br",{}),"I am willing to relocate while preparing for the job beforehand if I receive a formal offer."]})]})]})}function f(){return Object(b.jsx)("div",{className:"content work-experience",children:Object(b.jsx)(p,{jobTitle:"Programmer -> System\xa0Engineer",startDate:"15\xa0March\xa02021",endDate:"current",company:"NetValue Co., Ltd. (Japan)",company_url:"https://www.netvalue-io.com/",techs:["HTML","CSS","JavaScript","Java","Apache","PostgreSQL"],description:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"responsilities"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"design and implement frontend, using HTML, CSS, JavaScript"}),Object(b.jsx)("li",{children:"implement backend logic, from HTTP to database operations"}),Object(b.jsx)("li",{children:"unit test frontend and backend"})]}),Object(b.jsx)("h3",{children:"accomplishment"}),Object(b.jsx)("p",{children:"I completed a part of a intranet system. I designed the frontend with HTTP, CSS and JavaScript. The user interface include calendar, sortable table, input field to enter query data to send to the backend by HTTP request. In the backend, I used Java to receive the request message. Depending on the request, it might require data to be fetched from the database by SQL and formatted as a CSV and sent back to the frontend."}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"I also participated in implementing part of a reservation and management system for a local hospital. The project involves PostgreSQL database and Java in the backend."}),Object(b.jsx)("hr",{}),Object(b.jsx)("p",{children:"I have work experience using HTML, CSS, JavaScript, Java, SQL, PostgreSQL. In my free time, I learned React, Python, C++, Sass, Bootstrap, Django, TypeScript, GraphQL, Git, Apollo, AWS and used them in my project."})]})})})}function v(){return Object(b.jsx)("div",{className:"content projects",children:Object(b.jsxs)("div",{className:"project",children:[Object(b.jsx)("h2",{className:"project--title",children:Object(b.jsx)("u",{children:"Project 1: Website with React"})}),Object(b.jsx)("div",{children:Object(b.jsx)(m,{techs:["HTML","CSS","JavaScript","React","Sass"]})}),Object(b.jsxs)("div",{className:"project--description",children:[Object(b.jsx)("h3",{children:"This project features:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"React, JSX, JavaScript. List rendering, functional and class component."}),Object(b.jsx)("li",{children:"HTML, CSS, Scss. Various graphics, HTML element and nested selector."}),Object(b.jsx)("li",{children:"responsive design. Page layout is different for shorter screen for greater readability."}),Object(b.jsx)("li",{children:"animation and interactive buttons. What is changed and what can be clicked should be intuitive."}),Object(b.jsx)("li",{children:"tab-indexed buttons. You can navigate the whole website using tab and arrow keys."})]}),Object(b.jsxs)("p",{children:["This website is written by me. I used the React framework along with standard HTML, CSS, JavaScript.",Object(b.jsx)("br",{}),"I want to keep it simple and organised. it has no dependency on any library, such as JQuery. I used Scss to refactor and organise CSS. I am aware of frameworks such as Bootstrap and Tailwind, but they tend to further obfuscate an already complex HTML tree. This defeats the purpose of separating the web content and how it is presented. But I will give it a try in the future.",Object(b.jsx)("br",{}),"The website is hosted on GitHub and the source code is available at ",Object(b.jsx)("a",{href:"https://github.com/Hasuzawa/homepage",children:"GitHub"}),"."]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["I used the ",Object(b.jsx)("a",{href:"https://en.wikipedia.org/wiki/Complementary_colors",children:"colour theory of supplementary colour"})," in designing the background colour. I have always felt a pure white background is too bright. A tinture of colour softens it a lot."]})]})]})})}function k(){return Object(b.jsxs)("div",{className:"content skills",children:[Object(b.jsx)("div",{className:"skills--section",children:Object(b.jsxs)("details",{open:!0,className:"skill",children:[Object(b.jsx)("summary",{children:"Programming Languages"}),Object(b.jsx)("div",{children:Object(b.jsx)(m,{techs:["C","C++","Java","JavaScript","Python","TypeScript"]})}),Object(b.jsxs)("p",{className:"skill--paragraph",children:["I am most proficient in JavaScript, Python and Java.",Object(b.jsx)("br",{}),"I am familiar with concepts that are common in programming language including looping, class and object-oriented approach, functional programming, refactoring and modular programming. I can migrate my knowledge and skill into other programming language."]})]})}),Object(b.jsx)("div",{className:"skills--section",children:Object(b.jsxs)("details",{open:!0,className:"skill",children:[Object(b.jsx)("summary",{children:"Web Development"}),Object(b.jsx)("div",{children:Object(b.jsx)(m,{techs:["HTML","CSS","React","Sass","Django","GraphQL","Graphene-django"]})}),Object(b.jsx)("p",{className:"skill--paragraph",children:"I have experience using many popular languages and frameworks. As a full stack developer, I have a full picture of the project. I can design the database and backend needed for the task and anticipate how user can interact in the frontend. Since I know what users are going to see and what data is necessary, I can keep the time needed to re-design the system to the minimum. I would consider specialise later in career."})]})}),Object(b.jsx)("div",{className:"skills--section",children:Object(b.jsxs)("details",{open:!0,className:"skill",children:[Object(b.jsx)("summary",{children:"Technology"}),Object(b.jsxs)("div",{className:"skill--technologies",children:[Object(b.jsxs)("div",{className:"skill--technology",children:[Object(b.jsx)("h3",{children:"Networking"}),Object(b.jsxs)("p",{children:["I am a nationally qualified information engineer in Japan. I have knowledge on HTTP(S), IPv4 ","&"," IPv6 address, subnet, OSI model, server, DHCP, Address Resolution Protocol, port number, SSH."]})]}),Object(b.jsxs)("div",{className:"skill--technology",children:[Object(b.jsx)("h3",{children:"Cloud Computing"}),Object(b.jsx)("img",{className:"AWS_badge",src:"logos/AWS_Cloud_Practitioner_logo.png",alt:"AWS Cloud Practitioner"}),Object(b.jsx)("p",{children:"I am a certificated AWS Cloud Practitioner. I know the servies on AWS. In this year (2021), a new Region was opened in Osaka."})]}),Object(b.jsxs)("div",{className:"skill--technology",children:[Object(b.jsx)("h3",{children:"Graphics"}),Object(b.jsx)("div",{children:Object(b.jsx)(m,{techs:["Gimp","Inkscape"]})}),Object(b.jsx)("p",{children:"I primarily use Gimp for raster graphics and Inkscape for vector graphics. I also have some experience using Adobe Flash and Adobe Animation."})]})]})]})}),Object(b.jsx)("div",{className:"skills--section",children:Object(b.jsx)("details",{open:!0,className:"skill language_section",children:Object(b.jsx)(g,{})})})]})}function y(){return Object(b.jsxs)("div",{className:"content contact",children:[Object(b.jsx)("h3",{children:"Thank you for reading this."}),Object(b.jsxs)("address",{children:["I can be reached by email: ",Object(b.jsx)("a",{href:"mailto:hasuzawa.yuichi.international@gmail.com",children:"hasuzawa.yuichi.international@gmail.com"})]}),Object(b.jsxs)("p",{children:["It would likely be in your interest to visit ",Object(b.jsx)("a",{href:"https://github.com/Hasuzawa",children:"my GitHub"})," first to have an overview of my expertise."]}),Object(b.jsxs)("p",{children:["This website is hosted on GitHub and you can see the ",Object(b.jsx)("a",{href:"https://github.com/Hasuzawa/homepage",children:"source code"})," there.",Object(b.jsx)("br",{}),"Collaboration, enquiry, compensated offer are all welcomed.",Object(b.jsx)("br",{})]})]})}var w=Object.freeze({introduction:0,workExperience:1,projects:2,skill:3,contact:4}),N=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).displayTabContent=s.displayTabContent.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"displayTabContent",value:function(){switch(this.props.selectedTab){case w.introduction:return Object(b.jsx)(x,{});case w.workExperience:return Object(b.jsx)(f,{});case w.projects:return Object(b.jsx)(v,{});case w.skill:return Object(b.jsx)(k,{});case w.contact:return Object(b.jsx)(y,{});default:return null}}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.displayTabContent()})}}]),a}(n.a.Component);function C(e){return Object(b.jsx)("div",{className:"banner "+(e.bannerFolded?"folded":"expanded"),children:Object(b.jsx)("p",{children:"banner placeholder"})})}var S=Object.freeze({0:"Intro",1:"Experience",2:"Projects",3:"Skill",4:"Contact"}),I=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).renderButtons=s.renderButtons.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"renderButtons",value:function(){var e=this;return Object.keys(S).map((function(t,a){return Object(b.jsx)("button",{id:"headerCell"+t,onClick:e.props.handleClick,className:"switch_tab"+(e.props.selectedTab===parseInt(t)?" selected":""),testid:"headerButton"+a,children:S[t]},a)}))}},{key:"render",value:function(){return Object(b.jsxs)("nav",{className:"header",children:[Object(b.jsx)("span",{children:"Hasuzawa@Home"}),Object(b.jsx)("div",{className:"filler"}),Object(b.jsx)("div",{className:"tab_menu",children:this.renderButtons()}),Object(b.jsx)("div",{className:"filler"}),Object(b.jsx)(_,{handleClick:this.props.handleClick,selectedTab:this.props.selectedTab,buttons:this.renderButtons()}),Object(b.jsx)(T,{}),Object(b.jsx)("button",{className:"fold_button",onClick:this.props.handleFold,testId:"fold_button",children:this.props.bannerFolded?"\u25bc":"\u25b2"})]})}}]),a}(n.a.Component),_=function(e){return Object(b.jsxs)("div",{className:"dropdown_menu",children:[Object(b.jsx)("button",{className:"dropdown_menu--icon",children:"\u2261"}),Object(b.jsx)("div",{className:"dropdown_menu--content",children:e.buttons})]})},T=function(){return Object(b.jsx)("button",{className:"toTheTopButton",onClick:function(){return window.location.href="#root"}})};function L(e){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsx)("span",{className:"footer--site",children:"Hasuzawa@Home"}),Object(b.jsx)("button",{id:"footerCell"+w.introduction,className:"footer--button",onClick:e.handleClick,tabIndex:"0",children:"Intro"}),Object(b.jsx)("span",{id:"footerCell"+w.workExperience,className:"footer--experience",onClick:e.handleClick,tabIndex:"0",children:"Experience"}),Object(b.jsx)("span",{id:"footerCell"+w.projects,className:"footer--projects",onClick:e.handleClick,tabIndex:"0",children:"Projects"}),Object(b.jsx)("span",{id:"footerCell"+w.skill,className:"footer--skill",onClick:e.handleClick,tabIndex:"0",children:"Skill"}),Object(b.jsx)("span",{id:"footerCell"+w.contact,className:"footer--contact",onClick:e.handleClick,tabIndex:"0",children:"Contact"}),Object(b.jsx)("a",{href:"https://github.com/Hasuzawa/homepage",target:"_blank",rel:"noreferrer noopener",id:"footer--link",children:Object(b.jsx)("img",{className:"footer--GitHub",src:"logos/GitHub_logo.png",alt:"repository of webpage"})})]})}var H=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={selectedTab:w.introduction,bannerFolded:!1},s.handleClick=s.handleClick.bind(Object(d.a)(s)),s.handleFold=s.handleFold.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"handleClick",value:function(e){var t=parseInt(e.target.id.slice(-1));this.setState({selectedTab:t})}},{key:"handleFold",value:function(e){var t=!this.state.bannerFolded;this.setState({bannerFolded:t})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(C,{bannerFolded:this.state.bannerFolded}),Object(b.jsx)(I,Object(o.a)({handleClick:this.handleClick,handleFold:this.handleFold},this.state)),Object(b.jsx)(N,{selectedTab:this.state.selectedTab}),Object(b.jsx)(L,{handleClick:this.handleClick})]})}}]),a}(n.a.Component);c.a.render(Object(b.jsx)(H,{}),document.getElementById("root"))},7:function(e,t,a){},8:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.da1ab3f9.chunk.js.map