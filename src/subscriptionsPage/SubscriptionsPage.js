import React from "react";
import Header from "./Header";
import Recommended from "./Recommended";
import SubscriptionsGrid from "./SubscriptionsGrid";
import Footer from "./Footer";
import "./subscriptions.css";

const SubscriptionsPage = () => {
  return (
    <div className="subscriptionPage">
      <Header />
      <div className="subscriptions">
        <h1>SUBSCRIPTIONS</h1>
        <Recommended mealPlans={recommended} />
        <SubscriptionsGrid mealPlanRows={mealPlans} />
      </div>
      <Footer />
    </div>
  );
};

const recommended = {
  fruit: [
    "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
    "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
    "https://5.imimg.com/data5/WC/HX/MY-41533060/pineapple-fruit-500x500.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25lTHghZPtlrVDF3g0ouVBRbg0oWaWWrW9g&usqp=CAU",
  ],
  veg: [
    "https://preparedcooks.com/wp-content/uploads/2021/06/Is-a-Carrot-a-Fruit-or-Vegetable.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k7nwhUYWBKAShhozQ1pG5jjL3GYZ1OjbiCAWEUCv3bVnAi06imU-shPlVMSFHoTGIBY&usqp=CAU",
    "https://m.media-amazon.com/images/I/61W23122UBL._AC_SS450_.jpg",
  ],
  drinks: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI36LCNm6ZpRrLIxfE-WCu9pTDJHjJXIzS8Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtY9sO38_9OnuYp7wlyUj6QZt6hmd3xtFPfg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpqZf9Y8UyNQZmE_kPs_xDSa-gZXnuLSgDA&usqp=CAU",
  ],
  desserts: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3C-jXAmgjAQIyra_vzCAOml8lFj8V0u3WQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15viHhyfkmuldUg_JqRym9LiHvcwi2aCeYQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwJaCLtyl-2899Z6W46e83EAZ9b6Oe-LI9Q&usqp=CAU",
  ],
};

const mealPlans = [
  {
    fruit: [
      "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
      "https://5.imimg.com/data5/WC/HX/MY-41533060/pineapple-fruit-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25lTHghZPtlrVDF3g0ouVBRbg0oWaWWrW9g&usqp=CAU",
    ],
    veg: [
      "https://preparedcooks.com/wp-content/uploads/2021/06/Is-a-Carrot-a-Fruit-or-Vegetable.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k7nwhUYWBKAShhozQ1pG5jjL3GYZ1OjbiCAWEUCv3bVnAi06imU-shPlVMSFHoTGIBY&usqp=CAU",
      "https://m.media-amazon.com/images/I/61W23122UBL._AC_SS450_.jpg",
    ],
    drinks: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI36LCNm6ZpRrLIxfE-WCu9pTDJHjJXIzS8Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtY9sO38_9OnuYp7wlyUj6QZt6hmd3xtFPfg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpqZf9Y8UyNQZmE_kPs_xDSa-gZXnuLSgDA&usqp=CAU",
    ],
    desserts: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3C-jXAmgjAQIyra_vzCAOml8lFj8V0u3WQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15viHhyfkmuldUg_JqRym9LiHvcwi2aCeYQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwJaCLtyl-2899Z6W46e83EAZ9b6Oe-LI9Q&usqp=CAU",
    ],
  },
  {
    fruit: [
      "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
      "https://5.imimg.com/data5/WC/HX/MY-41533060/pineapple-fruit-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25lTHghZPtlrVDF3g0ouVBRbg0oWaWWrW9g&usqp=CAU",
    ],
    veg: [
      "https://preparedcooks.com/wp-content/uploads/2021/06/Is-a-Carrot-a-Fruit-or-Vegetable.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k7nwhUYWBKAShhozQ1pG5jjL3GYZ1OjbiCAWEUCv3bVnAi06imU-shPlVMSFHoTGIBY&usqp=CAU",
      "https://m.media-amazon.com/images/I/61W23122UBL._AC_SS450_.jpg",
    ],
    drinks: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI36LCNm6ZpRrLIxfE-WCu9pTDJHjJXIzS8Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtY9sO38_9OnuYp7wlyUj6QZt6hmd3xtFPfg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpqZf9Y8UyNQZmE_kPs_xDSa-gZXnuLSgDA&usqp=CAU",
    ],
    desserts: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3C-jXAmgjAQIyra_vzCAOml8lFj8V0u3WQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15viHhyfkmuldUg_JqRym9LiHvcwi2aCeYQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwJaCLtyl-2899Z6W46e83EAZ9b6Oe-LI9Q&usqp=CAU",
    ],
  },
  {
    fruit: [
      "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
      "https://5.imimg.com/data5/WC/HX/MY-41533060/pineapple-fruit-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25lTHghZPtlrVDF3g0ouVBRbg0oWaWWrW9g&usqp=CAU",
    ],
    veg: [
      "https://preparedcooks.com/wp-content/uploads/2021/06/Is-a-Carrot-a-Fruit-or-Vegetable.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k7nwhUYWBKAShhozQ1pG5jjL3GYZ1OjbiCAWEUCv3bVnAi06imU-shPlVMSFHoTGIBY&usqp=CAU",
      "https://m.media-amazon.com/images/I/61W23122UBL._AC_SS450_.jpg",
    ],
    drinks: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI36LCNm6ZpRrLIxfE-WCu9pTDJHjJXIzS8Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtY9sO38_9OnuYp7wlyUj6QZt6hmd3xtFPfg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpqZf9Y8UyNQZmE_kPs_xDSa-gZXnuLSgDA&usqp=CAU",
    ],
    desserts: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3C-jXAmgjAQIyra_vzCAOml8lFj8V0u3WQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15viHhyfkmuldUg_JqRym9LiHvcwi2aCeYQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwJaCLtyl-2899Z6W46e83EAZ9b6Oe-LI9Q&usqp=CAU",
    ],
  },
  {
    fruit: [
      "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
      "https://5.imimg.com/data5/WC/HX/MY-41533060/pineapple-fruit-500x500.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25lTHghZPtlrVDF3g0ouVBRbg0oWaWWrW9g&usqp=CAU",
    ],
    veg: [
      "https://preparedcooks.com/wp-content/uploads/2021/06/Is-a-Carrot-a-Fruit-or-Vegetable.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6k7nwhUYWBKAShhozQ1pG5jjL3GYZ1OjbiCAWEUCv3bVnAi06imU-shPlVMSFHoTGIBY&usqp=CAU",
      "https://m.media-amazon.com/images/I/61W23122UBL._AC_SS450_.jpg",
    ],
    drinks: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI36LCNm6ZpRrLIxfE-WCu9pTDJHjJXIzS8Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtY9sO38_9OnuYp7wlyUj6QZt6hmd3xtFPfg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStpqZf9Y8UyNQZmE_kPs_xDSa-gZXnuLSgDA&usqp=CAU",
    ],
    desserts: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3C-jXAmgjAQIyra_vzCAOml8lFj8V0u3WQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15viHhyfkmuldUg_JqRym9LiHvcwi2aCeYQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwJaCLtyl-2899Z6W46e83EAZ9b6Oe-LI9Q&usqp=CAU",
    ],
  },
];

export default SubscriptionsPage;
