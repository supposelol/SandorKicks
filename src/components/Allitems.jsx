import adidascam1 from "../assets/img/shoes/adidas_campus1.webp";
import adidascam2 from "../assets/img/shoes/adidas_campus2.webp";
import adidasgaz1 from "../assets/img/shoes/adidas_gazelle1.jpg";
import adidasgaz2 from "../assets/img/shoes/adidas_gazelle2.jpg";
import adidassam1 from "../assets/img/shoes/adidas_samba1.jpg";
import adidassam2 from "../assets/img/shoes/adidas_samba2.jpg";
import adidasyee1 from "../assets/img/shoes/adidas_yeezy1.jpg";
import adidasyee2 from "../assets/img/shoes/adidas_yeezy2.jpg";
import adidasalien1 from "../assets/img/shoes/adidas_yeezy_alien1.webp";
import adidasalien2 from "../assets/img/shoes/adidas_yeezy_alien2.webp";
import nbblu1 from "../assets/img/shoes/nb_blue1.jpg";
import nbblu2 from "../assets/img/shoes/nb_blue2.jpg";
import nbbur1 from "../assets/img/shoes/nb_burgundy1.jpg";
import nbbur2 from "../assets/img/shoes/nb_burgundy2.jpg";
import nbwhi1 from "../assets/img/shoes/nb_white1.jpg";
import nbwhi2 from "../assets/img/shoes/nb_white2.jpg";
import nikedunklow1 from "../assets/img/shoes/nike_dunk_low_cacao.jpg";
import nikedunklow2 from "../assets/img/shoes/nike_dunk_low_cacao2.jpg";
import nikedunkhigh1 from "../assets/img/shoes/nike_dunkhigh1.jpg";
import nikedunkhigh2 from "../assets/img/shoes/nike_dunkhigh2.jpg";
import niketrav1 from "../assets/img/shoes/nike_travis1.jpg";
import niketrav2 from "../assets/img/shoes/nike_travis2.jpg";
import crepkit from "../assets/img/cleaning/cleaning_kit.jpg";
import crepkit2 from "../assets/img/cleaning/cleaning_kit2.jpg";
import creperaser1 from "../assets/img/cleaning/crep_eraser1.jpg";
import creperaser2 from "../assets/img/cleaning/crep_eraser2.jpg";
import crepspray1 from "../assets/img/cleaning/crep_spray1.jpg";
import crepspray2 from "../assets/img/cleaning/crep_spray2.jpg";
import lacebla1 from "../assets/img/shoelaces/shoelaces_black1.jpg";
import lacebla2 from "../assets/img/shoelaces/shoelaces_black2.jpg";
import laceblu1 from "../assets/img/shoelaces/shoelaces_blue1.jpg";
import laceblu2 from "../assets/img/shoelaces/shoelaces_blue2.jpg";
import lacegra1 from "../assets/img/shoelaces/shoelaces_gray1.jpg";
import lacegra2 from "../assets/img/shoelaces/shoelaces_gray2.jpg";
import laceora1 from "../assets/img/shoelaces/shoelaces_orange1.jpg";
import laceora2 from "../assets/img/shoelaces/shoelaces_orange2.jpg";
import lacepur1 from "../assets/img/shoelaces/shoelaces_purple1.jpg";
import lacepur2 from "../assets/img/shoelaces/shoelaces_purple2.jpg";
import laceanimal1 from "../assets/img/shoelaces/shoelaces_animal1.jpeg";
import laceanimal2 from "../assets/img/shoelaces/shoelaces_animal2.jpg";
import box1 from "../assets/img/box/box1.jpg";
import box2 from "../assets/img/box/box3.jpg";
import campus from '../assets/img/shoeFlexes/FlexCampus.jpeg';
import dunkHigh from '../assets/img/shoeFlexes/FlexDunkHigh.jpeg';
import newBalance from '../assets/img/shoeFlexes/FlexNB.jpeg';
import samba from '../assets/img/shoeFlexes/FlexSamba.jpeg';
import travis from '../assets/img/shoeFlexes/FlexTravis.jpeg';
import yeezy from '../assets/img/shoeFlexes/FlexYeezy.jpeg';

export const items = [
  {
    id: 1,
    type: "Shoes",
    brand: "adidas",
    img: adidascam1,
    route: "campus",
    description: "Campus 00s",
    price: 100,
    otherImgs: [adidascam2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",],
    flexImg: campus,
    longDescription: ["Although they made their debut on the hardwood, the adidas Campus shoes were quickly adopted just about everywhere else. With this pair, we move the iconic silhouette in another direction and add modern materials, colors and proportions. They're done with a premium leather upper lined with soft textile terry fabric, with all of it riding on an off-white midsole — a clear connect to the Campus legacy."]
  },
  {
    id: 2,
    type: "Shoes",
    brand: "adidas",
    img: adidassam1,
    route: "samba",
    description: "Samba OGs",
    price: 90,
    otherImgs: [adidassam2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",],
    flexImg: samba,
    longDescription: ["Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch."]
  },
  {
    id: 3,
    type: "Shoes",
    brand: "adidas",
    img: adidasyee1,
    route: "yeezy",
    description: "Yeezy Zebra 350s",
    price: 330,
    otherImgs: [adidasyee2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",],
    flexImg: yeezy,
    longDescription: ["Originally released in 2017, the minimalist sneaker features a white Primeknit upper with black zebra stripes and SPLY-350 branding in contrasting red text. A stitched-on pull tab at the heel provides easy on and off. Responsive cushioning arrives via a full-length Boost midsole, encapsulated within a semi-translucent TPU cage and supported by a grippy rubber outsole."]
  },
  {
    id: 4,
    type: "Shoes",
    brand: "adidas",
    img: adidasalien1,
    route: "yeezy-alien",
    description: "Yeezy 380 Aliens",
    price: 409,
    otherImgs: [adidasalien2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",]
  },
  {
    id: 5,
    type: "Shoes",
    brand: "adidas",
    img: adidasgaz1,
    route: "gazelle-bolds",
    description: "Gazelle Bolds",
    price: 189,
    otherImgs: [adidasgaz2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",]
  },
  {
    id: 6,
    type: "Shoes",
    brand: "new balance",
    img: nbblu1,
    route: "550-uncs",
    description: "550 UNCs",
    price: 129,
    otherImgs: [nbblu2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",]
  },
  {
    id: 7,
    type: "Shoes",
    brand: "new balance",
    img: nbbur1,
    route: "550-burgundies",
    description: "550 Burgundies",
    price: 119,
    otherImgs: [nbbur2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",]
  },
  {
    id: 8,
    type: "Shoes",
    brand: "new balance",
    img: nbwhi1,
    route: "550-summer-fogs",
    description: "550 Summer Fogs",
    price: 89,
    otherImgs: [nbwhi2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",],
    flexImg: newBalance,
    longDescription: [`The White Summer Fog’s upper comprises white suede and light beige overlays.
     Also featured on the sneakers is the white rubber midsole which is fitted with an EVA wedge for light cushioning.
      Additionally, the lining is made entirely of cotton fabric and is completed with an NB signature symbol on the inner soles. From there on the "N" and the NB symbols found at the side panels and rear respectively, complete the sneakers' look.`]
  },
  {
    id: 9,
    type: "Shoes",
    brand: "nike",
    img: nikedunklow1,
    route: "dunk-low-cacaos",
    description: "Dunk Low Cacaos",
    price: 125,
    otherImgs: [nikedunklow2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",]
  },
  {
    id: 10,
    type: "Shoes",
    brand: "nike",
    img: nikedunkhigh1,
    route: "nike-dunk-high-2021s",
    description: "Dunk High 2021s",
    price: 215,
    otherImgs: [nikedunkhigh2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",],
    flexImg: dunkHigh,
    longDescription: [`Created for the hardwood but taken to the streets, the '80s b-ball icon returns with crisp
     leather and retro colors. The classic hoops design channels '80s
     vintage back onto the streets while the padded, high-top collar adds an old-school look rooted to comfort.`]
  },
  {
    id: 11,
    type: "Shoes",
    brand: "nike",
    img: niketrav1,
    route: "travis-scott-dunk",
    description: "Travis Scott Dunks",
    price: 590,
    otherImgs: [niketrav2],
    size: ["M 8 / W 9.5", "M 8.5 / W 10", "M 9 / W 10.5", "M 9.5 / W 11", "M 10 / W 11.5", "M 10.5 / W 12",
      "M 11 / W 12.5", "M 11.5 / W 13",],
    flexImg: travis,
    longDescription: [`Instantly recognisable branding proving that Cactus Jack and the Swoosh brand are a match made in heaven. The sidewalls
     come in a checked-shirt fabric, overlaid with navy blue paisley bandana fabric. After a few wears (or kick flips, or ollies…), the bandana is designed to tear away to reveal the textured nubuck that sits below. Travis Scott’s Cactus Jack logo sits on the tongue as a nod to the Texas-born rapper’s personal brand.`]
  },
  {
    id: 12,
    type: "Accessories",
    brand: "Crep protect",
    category: "cleaning",
    img: crepkit,
    route: "crep-cleaning-kit",
    description: "Crep Protect Kit",
    price: 28,
    otherImgs: [crepkit2],
    size: ["Compact Size"],
    info: ["Introducing our all-in-one sneaker care kit, featuring a 100ml natural solution, premium brush, cloth, and case for comprehensive care.", "Ensures effective stain and grime removal, while the convenient carry case provides easy storage and portability."]
  },
  {
    id: 13,
    type: "Accessories",
    brand: "Crep protect",
    category: "cleaning",
    img: crepspray1,
    route: "crep-spray",
    description: "Crep Protect Spray",
    price: 15,
    otherImgs: [crepspray2],
    size: ["750 ml"],
    info: ["Our eco-friendly formula offers quick-action cleaning, effortlessly lifting dirt to save you time by cutting cleaning time in half while ensuring it's safe for both your kicks and the environment."]
  },
  {
    id: 14,
    type: "Accessories",
    brand: "Crep protect",
    category: "cleaning",
    img: creperaser1,
    route: "crep-eraser",
    description: "Crep Protect Eraser",
    price: 10,
    otherImgs: [creperaser2],
    size: ["Pocket Size"],
    info: ["Our specialized care solution effectively removes scuffs, revitalizes, and ensures effortless grime removal for quickly erasing dirt.", "Conveniently pocket-sized for on-the-go use, it ensures your kicks stay pristine wherever you roam."]
  },
  {
    id: 15,
    type: "Accessories",
    brand: "Sandor kicks",
    category: "Display Box",
    img: box1,
    route: "display-box",
    description: "Sneaker Display Box",
    price: 35,
    otherImgs: [box2],
    size: ["2 Stackable Boxes"],
    info: ["Enhance your kicks collection with our sleek and stylish Sneaker Display Box, the perfect way to showcase your prized kicks while keeping them safe and organized.", "Comes with 2, stackable display boxes."]
  },
  {
    id: 16,
    type: "Accessories",
    brand: "Sandor kicks",
    category: "shoelaces",
    img: laceanimal1,
    route: "animal-print-laces",
    description: "Animal print laces",
    price: 12,
    otherImgs: [laceanimal2],
    size: ["55 Inches", "71 Inches"],
    info: ["A great solution if your basic shoelace has faded a bit, worn out, or if you're simply looking to freshen up your look by threading them anew, or even experimenting with different colors.", "55 inches recommended for low-cut sneakers, 71 inches for high-cut."]
  },
  {
    id: 17,
    type: "Accessories",
    brand: "Sandor kicks",
    category: "shoelaces",
    img: lacebla1,
    route: "black-shoelaces",
    description: "Black shoelaces",
    price: 5,
    otherImgs: [lacebla2],
    size: ["55 Inches", "71 Inches"],
    info: ["A great solution if your basic shoelace has faded a bit, worn out, or if you're simply looking to freshen up your look by threading them anew, or even experimenting with different colors.", "55 inches recommended for low-cut sneakers, 71 inches for high-cut."]
  },
  {
    id: 18,
    type: "Accessories",
    brand: "Sandor kicks",
    category: "shoelaces",
    img: laceblu1,
    route: "blue-shoelaces",
    description: "Blue shoelaces",
    price: 5,
    otherImgs: [laceblu2],
    size: ["55 Inches", "71 Inches"],
    info: ["A great solution if your basic shoelace has faded a bit, worn out, or if you're simply looking to freshen up your look by threading them anew, or even experimenting with different colors.", "55 inches recommended for low-cut sneakers, 71 inches for high-cut."]
  },
  {
    id: 19,
    type: "Accessories",
    brand: "Sandor kicks",
    category: "shoelaces",
    img: lacegra1,
    route: "gray-shoelaces",
    description: "Gray shoelaces",
    price: 5,
    otherImgs: [lacegra2],
    size: ["55 Inches", "71 Inches"],
    info: ["A great solution if your basic shoelace has faded a bit, worn out, or if you're simply looking to freshen up your look by threading them anew, or even experimenting with different colors.", "55 inches recommended for low-cut sneakers, 71 inches for high-cut."]
  },
  {
    id: 20,
    type: "Accessories",
    brand: "Sandor kicks",
    category: "shoelaces",
    img: laceora1,
    route: "orange-shoelaces",
    description: "Orange shoelaces",
    price: 5,
    otherImgs: [laceora2],
    size: ["55 Inches", "71 Inches"],
    info: ["A great solution if your basic shoelace has faded a bit, worn out, or if you're simply looking to freshen up your look by threading them anew, or even experimenting with different colors.", "55 inches recommended for low-cut sneakers, 71 inches for high-cut."]
  },
  {
    id: 21,
    type: "Accessories",
    brand: "Sandor kicks",
    category: "shoelaces",
    img: lacepur1,
    route: "purple-shoelaces",
    description: "Purple shoelaces",
    price: 5,
    otherImgs: [lacepur2],
    size: ["55 Inches", "71 Inches"],
    info: ["A great solution if your basic shoelace has faded a bit, worn out, or if you're simply looking to freshen up your look by threading them anew, or even experimenting with different colors.", "55 inches recommended for low-cut sneakers, 71 inches for high-cut."]
  },
];