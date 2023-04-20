import React from "react";
import  ReactDOM  from "react-dom/client";
/**
            Header 
              -logo
              -nav items
              -Cart
            Body
              -Searchbar
              -RestaurnatList
                -RestaurantCard
                  -Image, Name, Rating, Cuicines
            Footer
               -Links
               -CopyRight
*/
const Header = () =>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li> 
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// const burgerKing ={
//     name:"Burger King",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fyrtsyuxibuwe1rx7mdh",
//     cusines : ["Burger", "American"],
//     rating: "4.2"
// }
const RestaurantCard = ({
    cloudinaryImageId, 
    name, 
    cuisines,
     lastMileTravelString
    }) => {
   // const { cloudinaryImageId, name, cuisines, lastMileTravelString }  = restaurant.data;
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{cuisines}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}
const RestaurnatList = [
    {
        "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "156222",
                    "name": "Sangeeth Family Restaurant",
                    "uuid": "0c98d4ca-cbaa-47e8-9139-c2c26121b684",
                    "city": "10044",
                    "area": "Vani Nagar",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "bh3wk1fjndnjk14r3fim",
                    "cuisines": [
                    "Biryani"
                    ],
                    "tags": [
                    
                    ],
                    "costForTwo": 50000,
                    "costForTwoString": "₹500 FOR TWO",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "slaString": "18 MINS",
                    "lastMileTravel": 1.2000000476837158,
                    "slugs": {
                    "restaurant": "sangeeth-family-restaurant-karimnagar-road-islampura",
                    "city": "jagtial"
                    },
                    "cityState": "10044",
                    "address": "New Bus stand Circle, Karimnagar road, Jagityal",
                    "locality": "Karimnagar Road",
                    "parentId": 177204,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [
                    
                    ],
                    "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                    },
                    "ribbon": [
                    {
                        "type": "PROMOTED"
                    }
                    ],
                    "chain": [
                    
                    ],
                    "feeDetails": {
                    "fees": [
                        {
                        "name": "distance",
                        "fee": 900,
                        "message": ""
                        },
                        {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                        },
                        {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                        }
                    ],
                    "totalFees": 900,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "900",
                    "icon": ""
                    },
                    "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "cid=6401544~p=1~eid=00000187-98ea-2860-2713-c87d00b10155",
                    "badges": {
                    "imageBased": [
                        
                    ],
                    "textBased": [
                        
                    ],
                    "textExtendedBadges": [
                        
                    ]
                    },
                    "lastMileTravelString": "1.2 kms",
                    "hasSurge": false,
                    "sla": {
                    "restaurantId": "156222",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                    },
                    "promoted": true,
                    "avgRating": "3.7",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
                },
                {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "154759",
                    "name": "Food Choice Family Restaurant",
                    "uuid": "24e9311c-7138-4c23-bd54-920146ab7080",
                    "city": "10044",
                    "area": "Krishnanagar",
                    "totalRatingsString": "10000+ ratings",
                    "cloudinaryImageId": "v4sznxw5uslt8vepddwj",
                    "cuisines": [
                    "Biryani"
                    ],
                    "tags": [
                    
                    ],
                    "costForTwo": 40000,
                    "costForTwoString": "₹400 FOR TWO",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "slaString": "18 MINS",
                    "lastMileTravel": 1.2000000476837158,
                    "slugs": {
                    "restaurant": "food-choice-family-restaurant-yawar-road-islampura",
                    "city": "jagtial"
                    },
                    "cityState": "10044",
                    "address": "Yawar Road  Jagityal",
                    "locality": "Yawar Road",
                    "parentId": 81088,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [
                    
                    ],
                    "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                        {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                        {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                    },
                    "chain": [
                    
                    ],
                    "feeDetails": {
                    "fees": [
                        {
                        "name": "distance",
                        "fee": 900,
                        "message": ""
                        },
                        {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                        },
                        {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                        }
                    ],
                    "totalFees": 900,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "900",
                    "icon": ""
                    },
                    "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                    "imageBased": [
                        
                    ],
                    "textBased": [
                        
                    ],
                    "textExtendedBadges": [
                        
                    ]
                    },
                    "lastMileTravelString": "1.2 kms",
                    "hasSurge": false,
                    "sla": {
                    "restaurantId": "154759",
                    "deliveryTime": 18,
                    "minDeliveryTime": 18,
                    "maxDeliveryTime": 18,
                    "lastMileTravel": 1.2000000476837158,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "4.1",
                    "totalRatings": 10000,
                    "new": false
                },
                "subtype": "basic"
                },
                {
                "type": "restaurant",
                "data": {
                    "type": "F",
                    "id": "154875",
                    "name": "Manikanta Chinese Fast Food Centre and biryani house",
                    "uuid": "6231b713-6aa2-4c4e-a5d3-7440db593597",
                    "city": "10044",
                    "area": "Yawar Road",
                    "totalRatingsString": "1000+ ratings",
                    "cloudinaryImageId": "v6bynw3qygawzlumrtpy",
                    "cuisines": [
                    "Biryani"
                    ],
                    "tags": [
                    
                    ],
                    "costForTwo": 35000,
                    "costForTwoString": "₹350 FOR TWO",
                    "deliveryTime": 20,
                    "minDeliveryTime": 20,
                    "maxDeliveryTime": 20,
                    "slaString": "20 MINS",
                    "lastMileTravel": 1.2999999523162842,
                    "slugs": {
                    "restaurant": "manikanta-chinese-fast-food-centre-and-biryani-house-yawar-road-islampura",
                    "city": "jagtial"
                    },
                    "cityState": "10044",
                    "address": "Yawar Road, Jagityal",
                    "locality": "Ganesh Nagar",
                    "parentId": 131828,
                    "unserviceable": false,
                    "veg": false,
                    "select": false,
                    "favorite": false,
                    "tradeCampaignHeaders": [
                    
                    ],
                    "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                        {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                    },
                    "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                        {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "descriptionList": [
                        {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                        }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                    },
                    "chain": [
                    
                    ],
                    "feeDetails": {
                    "fees": [
                        {
                        "name": "distance",
                        "fee": 900,
                        "message": ""
                        },
                        {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                        },
                        {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                        }
                    ],
                    "totalFees": 900,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "900",
                    "icon": ""
                    },
                    "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                    },
                    "longDistanceEnabled": 0,
                    "rainMode": "NONE",
                    "thirdPartyAddress": false,
                    "thirdPartyVendor": "",
                    "adTrackingID": "",
                    "badges": {
                    "imageBased": [
                        
                    ],
                    "textBased": [
                        
                    ],
                    "textExtendedBadges": [
                        
                    ]
                    },
                    "lastMileTravelString": "1.2 kms",
                    "hasSurge": false,
                    "sla": {
                    "restaurantId": "154875",
                    "deliveryTime": 20,
                    "minDeliveryTime": 20,
                    "maxDeliveryTime": 20,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                    },
                    "promoted": false,
                    "avgRating": "3.7",
                    "totalRatings": 1000,
                    "new": false
                },
                "subtype": "basic"
            }
];
const Body = () => {
    return(
        <div className="restarant-list">
            {
            RestaurnatList.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            })
            }
             {/* <RestaurantCard restaurant = {RestaurnatList[0]}/>
            <RestaurantCard restaurant = {RestaurnatList[1]}/>
            <RestaurantCard restaurant = {RestaurnatList[2]}/> */}
        </div>
    )
}
const Footer = () => {
    return(
        <div className="footer">
            </div>
    )
}
const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body />
            <Footer />
        </>
    )
}

const Title = () => (
    <a href="/">
        <img alt="logo" className="logo"
        src="data:image/jpeg;base64,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"
        ></img>
    </a>
)
const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(<AppLayout/>);