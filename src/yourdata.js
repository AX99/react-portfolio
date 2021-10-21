// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import jfm from "./images/work/jfm.png"
import ispy from "./images/work/ispy.jpg"
import bing from "./images/work/bing.jpg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import instagramIcon from "./images/instagram.svg"

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
    "I am an all-round tech enthusiast with over seven years experience, focused on providing solutions to existing problems with the use of programming.",
  aboutParaTwo:
    "I come from a tech support background, where my programming skills have allowed me to contribute to production processes and improve productivity for myself and my teams.",
  aboutParaThree:
    "Furthermore, as a freelance full stack web developer, I use technologies such as React, HTML5, CSS3, Python, APIs, SQL.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
      img: instagramIcon,
      url: "https://www.instagram.com/SRCAX99",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
