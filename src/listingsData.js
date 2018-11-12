import uniqid from 'uniqid';

let listingsData = [
  {
    id: uniqid(),
    address: "77 main street",
    city: "Miami",
    state: "FL",
    bedrooms: 1,
    price: 180000,
    floorSpace: 2100,
    img: "http://www.yarealty.com/image/6325/600",
    houseType: "studio",
    extras: [
      "swimming pool",
      "gym",
      "basement",
      "elevator"
    ]
  },
  {
    id: uniqid(), address: "28-34 grand ave",
    city: "Ridgewood",
    state: "NY",
    bedrooms: 2,
    price: 520000,
    floorSpace: 2000,
    img: "https://images1.apartments.com/i2/xK1fTqYgboEiGFIsME-ScfOhwuxbbwpjriBmpzAMsrM/117/grand-reserve-katy-tx-aura-grand.jpg",
    houseType: "apartment",
    extras: [
      "elevator",
      "gym"
    ]
  },
  {
    id: uniqid(),
    address: "3672 cook st",
    city: "Houston",
    state: "TX",
    bedrooms: 5,
    price: 400000,
    floorSpace: 4200,
    img: "https://images.familyhomeplans.com/plans/59952/59952-b600.jpg",
    houseType: "house",
    extras: [
      "basement",
      "swimming pool"
    ]
  },
  {
    id: uniqid(),
    address: "272 eagle st",
    city: "Atlanta",
    state: "GA",
    bedrooms: 4,
    price: 370000,
    floorSpace: 3700,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ranch_style_home_in_Salinas%2C_California.JPG/220px-Ranch_style_home_in_Salinas%2C_California.JPG",
    houseType: "house",
    extras: [
      "basement"
    ]
  },
  {
    id: uniqid(),
    address: "212 e broadway",
    city: "New York",
    state: "NY",
    bedrooms: 2,
    price: 950000,
    floorSpace: 1800,
    img: "https://pmcvariety.files.wordpress.com/2017/10/miranair_nyc_fi.jpg?w=670&h=393&crop=1",
    houseType: "condo",
    extras: [
      "elevator",
      "gym",
      "swimming pool"
    ]
  },
  {
    id: uniqid(),
    address: "100 hollywod ave",
    city: "Los Angeles",
    state: "CA",
    bedrooms: 2,
    price: 1000000,
    floorSpace: 2100,
    img: "https://thenypost.files.wordpress.com/2017/11/6cortlandalley_lr1_web.jpg?quality=90&strip=all&w=618&h=410&crop=1",
    houseType: "condo",
    extras: [
      "elevator",
      "gym",
      "swimming pool"
    ]
  }
  ,{
    id: uniqid(),
    address: "1425 Smith st",
    city: "Malibu",
    state: "CA",
    bedrooms: 3,
    price: 900000,
    floorSpace: 1700,
    img: "https://cdn2.condo.com/building/media/6513e0eb-d68b-48dc-955b-aa8510e75c74_dt.jpg",
    houseType: "apartment",
    extras: [
      "basement",
      "gym",
    ]
  },
  {
    id: uniqid(),
    address: "100 hollywod ave",
    city: "Auston",
    state: "TX",
    bedrooms: 1,
    price: 170000,
    floorSpace: 1600,
    img: "https://uscx-media.s3.amazonaws.com/uploads/93246696/LR_01_dt.jpg",
    houseType: "condo",
    extras: [
      "gym",
    ]
  }
]

export default listingsData;