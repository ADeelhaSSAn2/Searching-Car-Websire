Swal.fire({
    title: " Developer Adeel Hassan(عدیل حسن)",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });


var carlist = {
    Suzuki: {
        Jimny:{
            image:"img/2021-Suzuki-Jimny-1.5L-Malaysia_Ext-4-jpg.webp",
            model:"2024",
            seatcapacity: "7 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:" 6,049,000 PKR",
            color:["red", "white","black"]
        },
        S_cross:{
            image:"img/Suzuki S-Cross Hybrid 014_kocpqy.webp",
            model:"2024",
            seatcapacity: "5 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:" 4,500,000 PKR",
            color:["blue", "white","black"]
        },
        Cultus:{
            image:"img/suzuki-cultus-2023.png",
            model:"2024",
            seatcapacity: "4 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:" 4,366,000 PKR",
            color:["silver", "white","black"]
        },
    },
    Audi:{
        e_tron_GT:{
            image:"img/1-3-e1615977740922.jpg",
            model:"2024",
            seatcapacity: "4 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  81,000,000 PKR",
            color:["blue", "white","black"]
        },
        audi_Q7:{
            image:"img/Price20in20Pakistan-73-1517294178-26.png",
            model:"2024",
            seatcapacity: "7 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  28,900,000 PKR",
            color:["red", "white","black"]
        },
        audi_Q8:{
            image:"img/audi-r8-japan-final-edition.jpg",
            model:"2024",
            seatcapacity: "2 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  71,228,800 PKR",
            color:["blue", "white","black"]
        },
    },
    Fortuner:{
        fortuner_Legender:{
            image:"img/Fortuner-Explore.png",
            model:"2024",
            seatcapacity: "7 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  18,999,000 PKR",
            color:["red", "white","black"]
        },
    },
    Revo:{
        hilux_revo:{
            image:"img/5010_4.jpg",
            model:"2024",
            seatcapacity: "5 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:" 119.6 - 144.2 lacs PKR",
            color:["red", "white","black"]
        },
    },
    Rolls_Royce:{
        rolls_royce_phantom_8:{
            image:"img/1200x675_380357.webp",
            model:"2024",
            seatcapacity: "5 person",
            fueltype: "Petrol , Electric",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  194,756,000 PKR",
            color:[ "white","black", "blue"]
        },
        Cullinan:{
            image:"img/Cullinan.jpg",
            model:"2024",
            seatcapacity: "5 person",
            fueltype: "Petrol , Electric",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  276,244,000 PKR",
            color:[ "white","gold", "black"]
        },
    },
    Bentley:{
        bentley_flying_spur:{
            image:"img/front-left-side-47.webp",
            model:"2024",
            seatcapacity: "5 person",
            fueltype: "Petrol , Electric",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  140,000,000 PKR",
            color:[ "white","black", "blue"]
        },
        Bentley_S1:{
            image:"img/1957-bentley-s1.jpeg",
            model:"2024",
            seatcapacity:"4 person",
            fueltype:"Petrol ",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  1,800,000 to 3cr PKR",
            color:[ "white","black", "silver"]
        },
        Bentley_Continental:{
            image:"img/continental.jpeg",
            model:"2024",
            seatcapacity:"4 person",
            fueltype:"Petrol ",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  90 lac PKR",
            color:[ "white","black", "blue"]
        },

    },
    Ferrari:{
        F8_tributo:{
            image:"img/ferrari f8.jpeg",
            model:"2024",
            seatcapacity:"2 person",
            fueltype:"Petrol , Electric ",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  200 million PKR",
            color:[ "white","black", "red"]
        },
        Ferrari_Roma:{
            image:"img/Ferrari-Roma-Car-Price-69-1611173709.jpg",
            model:"2024",
            seatcapacity:"2 person",
            fueltype:"Petrol , Electric ",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  838,00,000/- PKR",
            color:[ "silver","black", "red"]
        },
        GTC4_Lusso:{
            image:"img/Ferrari-GTC4-Lusso-T-2018.png",
            model:"2024",
            seatcapacity:"2 person",
            fueltype:"Petrol , Electric ",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"  72,280,000 PKR",
            color:[ "silver","black", "white"]
        },
    },
    Honda:{
       Civic:{
        image:"img/Front--Side.jpg",
        model:"2024",
        seatcapacity: "4 person",
        fueltype: "Petrol",
        transmission:" Type Automatic",
        wheel:"4 wheel",
        price:"   9,899,000 PKR",
        color:["brown", "white","black"]
       },
       City:{
        image:"img/1645606783827_oloubsa_1460628.jpg",
        model:"2024",
        seatcapacity: "4 person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   5,849,000 PKR",
        color:["red", "white","black"]
       },
       Pilot:{
        image:"img/how-does-the-new-honda-pilot-stack-up-against-the-2024-toyota-grand-highlander.jpg",
        model:"2024",
        seatcapacity: "8 person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   PKR 49.9875 - 77.0195 lacs",
        color:["red", "white","black"]
       },
    },
    KIA:{
        sportage_alpha:{
            image:"img/images.jpeg",
        model:"2024",
        seatcapacity: "5 person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"  7,550,000 PKR",
        color:["red", "white","black"]
        },
        KIA_Soul_EV:{
            image:"img/2020-Kia-Soul-3.jpg",
            model:"2024",
            seatcapacity: "4 person",
            fueltype: "Petrol",
            transmission:"Type Automatic",
            wheel:"4 wheel",
            price:"   6,069,240  PKR",
            color:["red", "green","blue"]
        },

    },
    BMW:{
     BMW_x7:{
            image:"img/download.jpeg",
        model:"2024",
        seatcapacity: "7 person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"  29,000,000 PKR",
        color:["blue", "white","black"]
        },
        BMW_i7:{
            image:"img/images (1).jpeg",
            model:"2024",
            seatcapacity: "5 person",
            fueltype: "Petrol",
            transmission:" Type Automatic",
            wheel:"4 wheel",
            price:"  65,000,000. PKR",
            color:["silver", "white","black"]
        },
    },
    Jeep:{
       Gladiator: {
            image:"img/Jeep_Gladiator_Rubicon_4x4_2021.jpg",
        model:"2024",
        seatcapacity: "5 person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   28,310,000 PKR",
        color:["blue", "white","black"]
        },
        Grand_Cherokee:{
            image:"img/Jeep_Grand_Wagoneer_2022_1.jpg",
            model:"2024",
        seatcapacity: "6 to 7  person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   1,050,000 PKR",
        color:["blue", "brown","black"]
        },
        Wrangler:{
            image:"img/1.jpg",
            model:"2024",
        seatcapacity: "5  person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   1,185,000 PKR",
        color:["white", "brown","black"]
        },
        Thar:{
            image:"img/thar.jpg",
            model:"2024",
        seatcapacity: "4  person",
        fueltype: "Petrol",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"  PKR:22.50 Lac ",
        color:["white", "brown","black"]
        },
    },
    Aston_Martin:{
        DB12:{
            image:"img/aston.jpeg",
            model:"2023",
        seatcapacity: "2  person",
        fueltype: "Petrol , Electric",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"  $1.6 Million",
        color:["white", "green","black"]
        },
        Victor:{
            image:"img/1-aston-martin-victor-2021-fd-hero-front.webp",
            model:"2020",
        seatcapacity: "2  person",
        fueltype: "Petrol , Electric",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   39,716,400 PKR",
        color:["silver", "blue","black"]
        },
    },
    Bugatti:{
        Bugatti_Chiron:{
            image:"img/bugatti.jpeg",
            model:"2020",
        seatcapacity: "2  person",
        fueltype: "Petrol , Electric",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   1,096,470,000 PKR",
        color:["gold", "blue","black " ,"white"]
        },
        Bugatti_Mistral:{
            image:"img/mistral.jpeg",
            model:"2022",
        seatcapacity: "2  person",
        fueltype: "Petrol , Electric",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   $5 million,",
        color:["gold", "black " ,"white"]
        },
        Bugatti_Divo:{
            image:"img/2020_bugatti_divo_2.jpg",
            model:"2020",
        seatcapacity: "2  person",
        fueltype: "Petrol , Electric",
        transmission:"Type Automatic",
        wheel:"4 wheel",
        price:"   Rs. 1.5 billion PKR",
        color:["blue", "black " ,"white"]
        }, 
    },
}

var main = document.getElementById("main");
var Brand = document.getElementById("Brand");
var Model = document.getElementById("Model");
Brand.innerHTML =`<option>Select Brand Name</option>`

function renderAllCars(){

    for(var key in carlist){
        console.log(key)
        Brand.innerHTML+= `<option value='${key}'>${key}</option>`
        for(var key1 in carlist [key]){
                var obj = carlist[key][key1];
                console.log(obj.color)
                var colorDiv ="";
                for(var i= 0; i < obj.color.length; i++){
                    colorDiv += `<div class='${ obj.color[i]}'></div>`
                }
                main.innerHTML +=`
                <div class="col-12 col-sm-12 col-md-6 col-lg-3 md-2">
                <div data-aos="fade-down-right" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="card" style="width: 18rem;">
                    <img src="${obj.image}"
                   class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${key1.toUpperCase()}(${obj.model})</h5>
                      <p class="card-text">${obj.transmission} </br> ${obj.wheel} </br> ${obj.color}</p>
                     <h6>${obj.price} </h6>
    
    
                     <div class ="d-flex gap-2">
                     ${colorDiv}
                     </div>
                    </div>
                  </div>
            </div>
            `
            }
        }

}

renderAllCars()


function setModel(){
    Model.innerHTML = "";
    Model.innerHTML =`<option>Select Model Name</option>`
    console.log("Brand", Brand.value)
    for(var key in carlist[Brand.value]){
        Model.innerHTML+= `<option value='${key}'>${key}</option>`
    }
}


var carDetial =document.getElementById('car-detail');
function searchCar(){
    main.style.display ="none";
    carDetial.style.display ="flex";
var car= carlist[Brand.value][Model.value];
    carDetial.innerHTML =`
    <div class="card mb-3" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${car.image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${Model.value.toUpperCase()}</h5>
                  <p class="card-text">${car.transmission} </br> ${car.wheel} </br> ${car.price}</p>
                
                </div>
              </div>
            </div>
          </div>
    `
}

function clearSearch(){
carDetial.style.display ="none";
main.style.display = "flex";
renderAllCars()
}