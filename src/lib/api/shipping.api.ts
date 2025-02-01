import axios from "axios"




export const shippingApi= {
    retreiveParcel:async function (parcelId:string) {
        try{
          const response =await  axios.get(`https://api.goshippo.com/parcels/${parcelId}`, {
              headers: {
                Authorization: "ShippoToken shippo_test_70b3e3fc1d32f05d8a9ded9ddf6ce2e30e227c53",
              },
            })
            console.log("Parcel Data:", response.data);

         }catch(e){
             console.log(e)
         }
    },
    createShipment:async function (addressTo:string,addressFrom:string,parcel:any){
        try {
          const response = await fetch('https://api.goshippo.com/shipments/', {
            method: 'POST',
            headers: {
              'Authorization': 'ShippoToken shippo_test_70b3e3fc1d32f05d8a9ded9ddf6ce2e30e227c53',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              address_to:addressTo,
              address_from:addressFrom,
              parcels: [parcel],
              async: false
            })
          });
          const data = await response.json();
          return data;
        } catch (e) {
          console.error(e);
          return null;
        }
      },
     getShippingRates:async function (shippingId:string){
        try{
              const response = await fetch(`https://api.goshippo.com/shipments/${shippingId}/rates/USD`, {
                method: 'GET',
                headers: {
                  'Authorization': 'ShippoToken shippo_test_70b3e3fc1d32f05d8a9ded9ddf6ce2e30e227c53'
                }
              });
          
              const data = await response.json();
              return data;    
        }catch(e){
          console.log(e)
        }
    }  
}