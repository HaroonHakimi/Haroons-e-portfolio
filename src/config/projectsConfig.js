import NftCoverImage from "../assets/project-images/NFT/nft-cover.png";
import NftFrontImage from "../assets/project-images/NFT/nft-front.png";
import NftFirstImage from "../assets/project-images/NFT/nft-desktop.png";
import NftSecondImage from "../assets/project-images/NFT/nft-phones-1.jpg";
import NftThirdImage from "../assets/project-images/NFT/nft-phones-2.jpg";

import TreactCoverImage from "../assets/project-images/treact/treact-cover.jpg";
import TreactFrontImage from "../assets/project-images/treact/treact-front.png";
import TreactFirstImage from "../assets/project-images/treact/treact-desktop.png";
import TreactSecondImage from "../assets/project-images/treact/treact-phones-1.jpg";
import TreactThirdImage from "../assets/project-images/treact/treact-phones-2.png";

import EcommerceCover from "../assets/project-images/ecommerce/ecommerce-cover.png";
import EcommerceFrontImage from "../assets/project-images/ecommerce/ecommerce-front.png";
import EcommerceFirstImage from "../assets/project-images/ecommerce/ecommerce-desktop.png";
import EcommerceSecondImage from "../assets/project-images/ecommerce/ecommerce-phones-1.jpg";
import EcommerceThirdImage from "../assets/project-images/ecommerce/ecommerce-phones-2.jpg";

import SummaristMain from "../assets/project-images/summarist/Screenshot 2023-11-28 160440.png"
import SummaristFrontImage from "../assets/project-images/summarist/frontImage.png"
import SummaristFirstImage from "../assets/project-images/summarist/FirstImage.png"
import SummaristSecondImage from "../assets/project-images/summarist/secondImage.png"

import MovieCoverImage from "../assets/project-images/movieSearchEngine/Screenshot 2023-11-28 160303.png"
import MovieFrontImage from "../assets/project-images/movieSearchEngine/frontImage.png"
import MovieFirstImage from "../assets/project-images/movieSearchEngine/firstImage.png"
import MovieSecondImage from "../assets/project-images/movieSearchEngine/secondImage.png"

import TwitterCoverImage from "../assets/project-images/twitter/Screenshot 2023-11-28 160141.png"
import TwitterFrontImage from "../assets/project-images/twitter/frontImage (1).png"
import TwitterFirstImage from "../assets/project-images/twitter/firstImage.png"


const projectsConfig = [
  {
    title: "NFT Marketplace",
    type: "Web App",
    description:
      "Developed using React. One of the key strengths lies in its optimized loading states, ensuring ultra-fast responses even during high-traffic periods. To enhance the user experience, I've implemented fluid animations that offer visual feedback and enrich the browsing experience. Underneath its sleek interface, the app harnesses the power of React's component-based structure, making it highly modular and extensible.",
    liveLink: "https://haroon-internship.vercel.app/",
    githubLink: "https://github.com/HaroonHakimi/haroon-internship",
    coverImage: NftCoverImage,
    topImage: NftFrontImage,
    firstImage: NftFirstImage,
    secondImage: NftSecondImage,
    thirdImage: NftThirdImage,
  },
  {
    title: "Summarist",
    type: "Web App",
    description:
      "Dynamic and feature-rich full stack project that demonstrates my proficiency in web development. Using technologies such as JavaScript, Next.js, Redux, and Tailwind CSS for the frontend, I crafted an engaging online library where users can seamlessly read and listen to a diverse collection of books. I implemented efficient data retrieval through API calls, optimizing the user experience with lazy loading functionality. The integration of Firebase allows for users to create accounts, with the ability to login, logout and update their subscription. Additionally, I incorporated a subscription platform powered by Stripe through Firebase, offering users the choice to upgrade to monthly or yearly plans. This subscription unlocks premium content within the library, enhancing the project's value and user engagement.",
    liveLink: "https://summarist.vercel.app/",
    githubLink: "https://github.com/HaroonHakimi/summarist",
    coverImage: SummaristMain,
    topImage: SummaristFrontImage,
    firstImage: SummaristFirstImage,
    secondImage: SummaristSecondImage,
    // thirdImage: NftThirdImage,
  },
  // {
  //   title: "Movie Search Engine",
  //   type: "Web App",
  //   description:
  //     "Using React, I created an engaging and dynamic movie-search website. The core functionality of the website revolves around a user-friendly interface that enables visitors to seamlessly search for movies. To enhance the user experience, I incorporated a lazy loading mechanism, ensuring optimal performance by loading movie data efficiently. By utilizing a third-party API as a data source, I facilitated real-time movie information retrieval, allowing users to access comprehensive details about their selected movies.",
  //   liveLink: "https://react-final-project-m610y5ilx-haroonhakimi.vercel.app/",
  //   githubLink: "https://github.com/HaroonHakimi/react-final-project",
  //   coverImage: MovieCoverImage,
  //   topImage: MovieFrontImage,
  //   firstImage: MovieFirstImage,
  //   secondImage: MovieSecondImage,
  //   // thirdImage: NftThirdImage,
  // },
  {
    title: "Twitter Clone",
    type: "Web App",
    description:
    "Using  Next.js for the frontend, I meticulously crafted a seamless user experience using Tailwind CSS to ensure a sleek and responsive design. JavaScript and Redux were instrumental in enhancing the interactivity of the application. On the backend, I seamlessly integrated Firebase to manage user authentication, creating a secure and efficient foundation. One of the standout features of this Twitter clone is its comment system, allowing users to engage in meaningful conversations by commenting and interacting with other users' thoughts.",
    liveLink: "https://twitter-clone-cbql.vercel.app/",
    githubLink: "https://github.com/HaroonHakimi/twitter-clone",
    coverImage: TwitterCoverImage,
    topImage: TwitterFrontImage,
    firstImage: TwitterFirstImage,
    // secondImage: NftSecondImage,
    // thirdImage: NftThirdImage,
  },
  // {
  //   title: "Treact",
  //   type: "Web App",
  //   description:
  //     "Building & Construction needed a better faster, less labor intensive way of providing advice to people on site. Feel created a choose your own adventure style scenario based app which allows people to quickly navigate through real life scenarios in order to get workplace rights and responsibilities advice on a number of topics, instantly.",
  //   liveLink: "https://haroonhakimi.github.io/Week-2-Final-Project/",
  //   githubLink: "https://github.com/HaroonHakimi/Week-2-Final-Project",
  //   coverImage: TreactCoverImage,
  //   topImage: TreactFrontImage,
  //   firstImage: TreactFirstImage,
  //   secondImage: TreactSecondImage,
  //   thirdImage: TreactThirdImage,
  // },
  // {
  //   title: "React Ecommerce",
  //   type: "Web App",
  //   description:
  //   "Primarily using React, this project seamlessly integrates with an external API to fetch a diverse collection of books, providing users with an engaging and interactive experience. One of the highlights of this project is the implementation of lazy loading, ensuring optimal performance by loading data from the API only when needed. Additionally, the project boasts a user-friendly cart feature, allowing visitors to add their preferred books to a virtual cart and proceed.",
  //   liveLink: "library-react-2au97smjc-haroonhakimi.vercel.app",
  //   githubLink: "https://github.com/HaroonHakimi/Library-React",
  //   coverImage: EcommerceCover,
  //   topImage: EcommerceFrontImage,
  //   firstImage: EcommerceFirstImage,
  //   secondImage: EcommerceSecondImage,
  //   thirdImage: EcommerceThirdImage,
  // },
];

export default projectsConfig;
