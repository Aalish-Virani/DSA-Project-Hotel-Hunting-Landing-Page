var hotelJSON = [
  {
    id: 1,
    city: "Islamabad",
    hotel: "Islamabad Marriott Hotel",
    distance: 0.7,
    location: "Aga Khan Road, Shalimar 5,",
    rating: 7.8,
    price: 25000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/467526292.jpg?k=3a56acfee499e14e86e872f27e9144c833a99d82eb5e633b5aa6c4809225e12a&o=&hp=1",
    services: [
      "Parking",
      "Free Wifi",
      "Smoking Room",
      "Fitness Centre",
      "Spa and Wellness Centre",
      "Indoor Pool",
    ],
  },

  {
    id: 2,
    city: "Islamabad",
    hotel: "Ramada by Wyndham Islamabad",
    distance: 2.5,
    location: "Club Road Murree Road,",
    rating: 7.6,
    price: 20000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/234576385.jpg?k=994ca970d9ded24355af65ae33feb4f72ccc2fb2079c432ba4fb38cb6b179691&o=&hp=1",
    services: [
      "Parking",
      "Free Wifi",
      "Restaurant",
      "Smoking Room",
      "Airport Shuttle",
      "Fitness Centre",
    ],
  },

  {
    id: 3,
    city: "Islamabad",
    hotel: "Best Western Premier Islamabad",
    distance: 1.9,
    location: "6 Club Road, Islamabad 6 Club Road,",
    rating: 8.4,
    price: 15000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/384382806.jpg?k=2e980226b6a1333562950f5a73c0eec69e02af0afc808fdaf09012fc8d3c0edb&o=&hp=1",
    services: [
      "Parking",
      "Airport Shuttle",
      "Fitness Centre",
      "Evening Entertainment",
      "Indoor Pool",
    ],
  },

  {
    id: 4,
    city: "Islamabad",
    hotel: "Islamabad Serena Hotel",
    distance: 1.8,
    location: "Khayaban-e-Suharwardy, G-5/1.,",
    rating: 8.5,
    price: 30000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/183062972.jpg?k=3219490dbeb363b87a90089878f377a348dcd223f26ee25ebbb07397acba46fe&o=&hp=1",
    services: [
      "Free Wifi",
      "Restaurant",
      "Evening Entertainment",
      "Spa and Wellness Centre",
      "Indoor Pool",
      "Golf Course",
    ],
  },

  {
    id: 5,
    city: "Islamabad",
    hotel: "The 108 Hotel",
    distance: 3.7,
    location: "108W Jinnah Avenue Blue Area, Blue Area,",
    rating: 8.9,
    price: 23000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square200/321508463.webp?k=365b1b26469045221adefbc6cae6cd4dc9dd4add51092a6595563a5247ebc05e&o=",
    services: [
      "Parking",
      "Free Wifi",
      "Restaurant",
      "Fitness Centre",
      "Evening Entertainment",
    ],
  },

  {
    id: 6,
    city: "Islamabad",
    hotel: "Hotel Margala",
    distance: 2.1,
    location: "M-2 islamabad near convention centre,",
    rating: 8.3,
    price: 18000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207343843.jpg?k=546aab7e2617bf5538aa5bb22510ebe9e8e38d1e290e43fd17d08282ae09fa60&o=&hp=1",
    services: [
      "Free Wifi",
      "Restaurant",
      "Smoking Room",
      "Indoor Pool",
    ],
  },

  {
    id: 7,
    city: "Islamabad",
    hotel: "One Constitution Avenue by Goldfinch",
    distance: 2.3,
    location: " Constitution Avenue,",
    rating: 7.5,
    price: 10000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square200/408183553.webp?k=bbddf5b338756723d558373601ea489ffd12976fb987125c0e3e59338dc1be04&o=",
    services: [
      "Parking",
      "Free Wifi",
      "Restaurant",
      "Smoking Room",
      "Airport Shuttle",
      "Fitness Centre",
      "Indoor Pool",
      "Golf Course",
    ],
  },

  {
    id: 8,
    city: "Islamabad",
    hotel: "Roomy Signature Hotel",
    distance: 1.4,
    location: "F-6 Sector",
    rating: 8.1,
    price: 8000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/463295695.jpg?k=3f6873b2bde6374c2b3796be04b32aa300f20b3ed4df23f1f08ac02ae48d627a&o=&hp=1",
    services: [
      "Parking",
      "Free Wifi",
      "Restaurant",
      "Fitness Centre",
      "Evening Entertainment",
      "Spa and Wellness Centre",
      "Indoor Pool",
    ],
  },

  {
    id: 9,
    city: "Islamabad",
    hotel: "Islamabad Regalia Hotel",
    distance: 2.4,
    location: "G-6 Sector",
    rating: 9.1,
    price: 21000,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/214667612.jpg?k=4c84cd4502e51dce489c4d3aa2d8b981aef129f70a7de7337a4b53a49a9ee165&o=&hp=1",
    services: [
      "Parking",
      "Free Wifi",
      "Restaurant",
      "Smoking Room",
      "Fitness Centre",
      "Spa and Wellness Centre",
    ],
  },
];

displayHotelCards(hotelJSON);

// hotel cards  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function displayHotelCards(data) {
  var hotelCards = document.getElementById("hotel-cards");

  hotelCards.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var card = `

  <div class="flex flex-row h-52  shadow-xl my-4 p-4">

    <img class="w-72 rounded-xl" src=${data[i].image} alt="image">

    <div class="flex flex-col justify-between w-96 m-4 mx-20">

        <p class="text-lg font-bold">${data[i].hotel}</p>
        <p class="text-sm font-medium">${data[i].location}</p>
        <p class="text-sm font-medium">${data[i].city}</p>

        <div class="h-12">
          <hr>
          <p class="text-sm font-medium"><i>Services: </i> ${data[i].services}</p>
        </div>

    </div>

    <div class="flex flex-col justify-between w-48  py-6">

        <div class="mx-auto">
            <i class="fa-solid fa-star"></i>
            <p class="text-sm font-semibold inline">${data[i].rating}</p>
        </div>

        <div class=" bg-red-500 text-white rounded-full p-3 px-4 mx-auto">
            <i class="fa-solid fa-money-check-dollar"></i>
            <p class="text-sm font-bold inline">${data[i].price} pkr</p>
        </div>

        <div class="mx-auto">

            <p class="text-sm font-semibold ">${data[i].distance} km from Airport</p>
        </div>


    </div>

</div>

      `;
    hotelCards.innerHTML += card;
  }
}

// filter ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function filterVisibility() {
  let visiblity = document.getElementById(
    "filter-visibility"
  );

  if (visiblity.className == "hidden") {
    visiblity.className = " ";
  } else {
    visiblity.className = "hidden";
  }
}

function clearFilter() {
  clearSelection();
  displayHotelCards(hotelJSON);
  filterVisibility();
}

function clearSelection() {
  for (let i = "1"; i <= "10"; i++) {
    let option = document.getElementById(i);

    option.checked = false;
  }
}

function filterResult() {
  let options = [];
  let filterData = [];

  for (let i = "1"; i <= "10"; i++) {
    let op = document.getElementById(i);

    if (op.checked) {
      options.push(op.name);
    }
  }

  let nOfHotels = hotelJSON.length;
  let nOfOptions = options.length;

  for (let i = 0; i < nOfHotels; i++) {
    let hotel = hotelJSON[i];
    let service = hotel.services;

    let found = true;

    for (let j = 0; j < nOfOptions; j++) {
      let option = options[j];

      if (search(service, option) == false) {
        found = false;
        break;
      }
    }

    if (found == true) {
      filterData.push(hotel);
    }
  }

  displayHotelCards(filterData);
  filterVisibility();
}

// Linear search -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function search(arr, target) {
  let size = arr.length;

  for (let i = 0; i < size; i++) {
    if (arr[i] == target) {
      return true;
    }
  }
  return false;
}

// sorting ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function hotelSorting() {
  let rating = document.getElementById("rating-sort");
  let price = document.getElementById("price-sort");
  let distance = document.getElementById("distance-sort");
  let data;

  if (rating.checked) {
    data = ratingSort(hotelJSON);
  } else if (price.checked) {
    data = priceSort(hotelJSON);
  } else if (distance.checked) {
    data = distanceSort(hotelJSON);
  }

  displayHotelCards(data);

  clearSelection();
  filterVisibility();
}

//  Bubble Sort ----------------------------------

function ratingSort(data) {
  let size = data.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
      if (data[j].rating < data[j + 1].rating) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

// Selection Sort -----------------------------------

function priceSort(data) {
  let size = data.length;

  for (let i = 0; i < size - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < size; j++) {
      if (data[j].price < data[minIndex].price) {
        minIndex = j;
      }
    }

    if (minIndex != i) {
      let temp = data[i];
      data[i] = data[minIndex];
      data[minIndex] = temp;
    }
  }

  return data;
}

// Insertion Sort -------------------------------------

function distanceSort(data) {
  let size = data.length;

  for (let i = 1; i < size; i++) {
    let key = data[i];

    let keyValue = data[i].distance;
    let j = i - 1;

    while (j >= 0 && data[j].distance > keyValue) {
      data[j + 1] = data[j];
      j--;
    }

    data[j + 1] = key;
  }

  return data;
}
