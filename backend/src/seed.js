console.log("IM ALIVE");

import UserRepository from "./repository/UserRepository";
import ItemsRepository from "./repository/ItemsRepository";

const userRepository = new UserRepository();
const itemsRepository = new ItemsRepository();

const data = [
  {
    user_name: "Lehel",
    title: "Keurig K-Duo",

    description:
      "Use both ground coffee and k-cup pods. Multiple brew sizes: brew an 8, 10, or 12-cup carafe and an 237, 296, or 355ml (8, 10, or 12 oz. ) cup ",
    URL: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Keurig_Logo.png",
    price: 149.99,
  },
  {
    user_name: "Vivi",
    title: "KRUPS Electric Spice",
    description:
      "Large grinding capacity yields ground coffee for up to 12 cups of coffee",
    URL:
      "https://images-na.ssl-images-amazon.com/images/I/81CbxNLCHCL._AC_SL1500_.jpg",
    price: 19.99,
  },
  {
    user_name: "Lehel",
    title: "Hamilton Beach Flexbrew",
    description:
      "No two coffee drinkers are the same – so, the flexibility to customize how and what you brew is key. From fresh grounds to K-Cup pods, the Hamilton Beach FlexBrew 2-Way Coffee Maker gives you the options to please fans of all types of coffees.",
    URL:
      "https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg",
    price: 89.99,
  },
  {
    user_name: "Lehel",
    title: "Secura French Press",
    description:
      "3-layered Stainless steel filter traps the smallest coffee grounds to produce an exceptional full-bodied flavor, filter is easy to disassemble and clean.",
    URL:
      "https://images-na.ssl-images-amazon.com/images/I/61u76aiQQsL._AC_SL1000_.jpg",
    price: 36.48,
  },
  {
    user_name: "Vivi",
    title: "Cafe Du Chateau French Press",
    description:
      "We use double stainless steel screen filters on a durable plunger supported by a spring loaded base plate to seal the edges, followed by a final top lid strainer to give you a pure brew with no grounds unlike other cheap presses.",
    URL:
      "https://images-na.ssl-images-amazon.com/images/I/81BdxpiRtCL._AC_SL1500_.jpg",
    price: 32.95,
  },
];

data.forEach((e) => itemsRepository.saveNewItem(e));
userRepository.saveNewUser( "Lehel", "test@jo.com", "$2b$10$1J70p2iC.EpDOs.fYCIvvu5vToQNB9n9v2Zs/f/JBJHAEuQtRV0Me", 9800 )
userRepository.saveNewUser( "Vivien" , "vivien@test.com" , "$2b$10$1J70p2iC.EpDOs.fYCIvvu5vToQNB9n9v2Zs/f/JBJHAEuQtRV0Me" , 1200000 , "https://cms.qz.com/wp-content/uploads/2018/07/RTX6B1UD1-e1531476107577.jpg?quality=75&strip=all&w=900&h=900&crop=1")
