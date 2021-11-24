// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import djangoIcon from "./images/django.svg"
import pythonIcon from "./images/python.svg"

//About Image 
// import about from "./images/about.jpg"

// Work Images
import jfm from "./images/work/jfm.png"
import ispy from "./images/work/ispy.jpg"
import bing from "./images/work/bing.jpg"
import ecommerce from "./images/work/ecommerce.png"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import atIcon from "./images/at.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Raphael",
  headerTagline: [
    //Line 1 For Header
    "Freelance Developer, ",
    //Line 2 For Header
    "Programmer",
    //Line 3 For Header
    "& Tech Enthusiast",
  ],
  //   Header Paragraph
  headerParagraph:
    "Focused on providing solutions to existing problems through the use of technology.",

  //Contact Email
  contactEmail: "rapha.mensah@gmail.com",

  cvFile:"../Raphael_Ako-Mensah_CV.pdf",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "JFM Consult Website", //Project Title - Add Your Project Title Here
      para:
        "A website created for a client's Life and Career Coaching business with a Django backend", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        jfm,
      //Project URL - Add Your Project Url Here
      url: "http://jfmconsult.co.uk/",
    },
    {
      title: "iSpy Secure Website", //Project Title - Add Your Project Title Here
      para:
        "A Landing page for a client's CCTV business", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        ispy,
      //Project URL - Add Your Project Url Here
      url: "https://ax99.github.io/iSpy-Security-Website/",
    },
    {
      title: "Bing Image Scraper", //Project Title - Add Your Project Title Here
      para:
        "A Python script used to download images from Bing Image Search based on the users search term", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        bing,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/AX99/Bing-Image-Scraper",
    },
    {
      title: "Django Ecommerce Template - Under Construction", //Project Title - Add Your Project Title Here
      para:
        "A template ecommerce store with a django backend, product database accessed through admin panel", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        ecommerce,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/AX99/Ecommerce-Store",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am an all-round tech enthusiast focused on providing solutions to existing problems with the use of programming.",
  aboutParaTwo:
    "I come from a tech support background, where my programming skills have allowed me to contribute to production processes and improve productivity for myself and my teams.",
  aboutParaThree:
    "Furthermore, as a freelance full stack web developer, I work on client projects using technologies such as React, HTML5, CSS3, Python, APIs, SQL.",
  aboutImage:
    // "https://images.unsplash.com/photo-1504812445817-cb3d4f235a14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80",
    // "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2804&q=80",
    // "https://images.unsplash.com/photo-1635606511031-6ef8c6cbf9f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1510674485131-dc88d96369b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=649&q=80",
    // about,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      title: "HTML5",
      // para:
      //   "• Point 1",
    },
    {
      img: cssIcon,
      title: "CSS3",
      // para:
      //   "• Point 1",
    },
    {
      img: jsIcon,
      title: "JavaScript",
      // para:
      //   "• Point 1",
    },
    {
      img: reactIcon,
      title: "reactJS",
      // para:
      //   "• Point 1",
    },
    {
      img: djangoIcon,
      title: "Django",
      // para:
      //   "• Point 1",
    },
    {
      img: pythonIcon,
      title: "Python",
      // para:
      //   "• Point 1",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Get in contact below",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, 
      url: "https://github.com/AX99", 
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/raphael-ako-mensah/",
    },
    {
      img: atIcon,
      url: "mailto:rapha.mensah@gmail.com",
    },
  ],

  // End Contact Section ---------------
}
