import { API_HOST } from "../Utils.js/constant";
export function getAdandSpecialOffer(body) {
 
//response
//     {
//     "specialOffer": {
//         "specialOfferContent": "",
//             "specialOfferurl": ""
//     },
//     "advertise": [
//         {
//             "productImg": "",
//            " productContent": "",
//             "productUrl":""
//         },
//         {
//           "productImg": "",
//           " productContent": "",
//           "productUrl": ""
//         },
//         {
//           "productImg": "",
//           " productContent": "",
//           "productUrl": ""
//         }
//     ]
// }



  let url = `${API_HOST}/portal/proposal/getagentdetail`;
  let headerDetails = {
    'content-type': 'application/json',
  };
  
  return fetch(url, {
    method: 'POST',
    headers: headerDetails,
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => res)
    .catch((err) => {
      return err;
    });
}