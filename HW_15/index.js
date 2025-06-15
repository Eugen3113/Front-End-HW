
// регистрация на акаунт
const menuIcon = document.querySelector('.menu_icon');
const navMenu = document.querySelector('.nav_menu');

menuIcon.addEventListener('click', () => navMenu.classList.toggle('active'));


const accountBtn = document.querySelector('.account_btn');
const closeModalIcon = document.querySelector('.close_modal_icon');
const popupWindow = document.querySelector('.popup');

accountBtn.addEventListener('click', () => {
  popupWindow.classList.add('modal_active')
});

closeModalIcon.addEventListener('click', () => {
  popupWindow.classList.remove('modal_active')
});

//=================================================================================================0
// содержимое карточек
const products = [
  {
    id: 1,
    type: "Jeans",
    gender: "men",
    price: 250,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/jeans/jeans_PNG5761.png",
  },
  {
    id: 2,
    type: "Jeans",
    gender: "women",
    price: 220,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/jeans/jeans_PNG5747.png",
  },
  {
    id: 3,
    type: "Jeans",
    gender: "men",
    price: 270,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/jeans/jeans_PNG5758.png",
  },
  {
    id: 4,
    type: "Jeans",
    gender: "women",
    price: 230,
    status: "Out of stock",
    imgUrl: "https://pngimg.com/uploads/jeans/jeans_PNG5760.png",
  },
  {
    id: 5,
    type: "T-shirt",
    gender: "men",
    price: 800,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/tshirt/tshirt_PNG5426.png",
  },
  {
    id: 6,
    type: "T-shirt",
    gender: "women",
    price: 700,
    status: "In stock",
    imgUrl: "https://img.alicdn.com/imgextra/i1/2258388011/O1CN01jC0XZq2935QvD53hF_!!0-item_pic.jpg",
  },
  {
    id: 7,
    type: "T-shirt",
    gender: "men",
    price: 900,
    status: "In stock",
    imgUrl: "https://raikovstudio.ru/wp-content/uploads/2023/03/2023-03-02_15-52-12-482x445.jpg",
  },
  {
    id: 8,
    type: "T-shirt",
    gender: "women",
    price: 750,
    status: "Out of stock",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51DkXLvVRrL._AC_UL1111_.jpg",
  },
  {
    id: 9,
    type: "Jacket",
    gender: "men",
    price: 400,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/jacket/jacket_PNG8047.png",
  },
  {
    id: 10,
    type: "Jacket",
    gender: "women",
    price: 350,
    status: "In stock",
    imgUrl: "https://i.pinimg.com/736x/3c/49/dc/3c49dcfc551bbe4cd5a9b9dba1ff3c11.jpg",
  },
  {
    id: 11,
    type: "Jacket",
    gender: "men",
    price: 420,
    status: "In stock",
    imgUrl: "https://fashionhot.club/uploads/posts/2023-04/thumbs/1682836744_fashionhot-club-p-vesennie-muzhskie-kurtki-2024-modnie-1.jpg",
  },
  {
    id: 12,
    type: "Jacket",
    gender: "women",
    price: 370,
    status: "Out of stock",
    imgUrl: "https://i.pinimg.com/736x/cf/cc/46/cfcc46c585ce4ddb2e071e9348b82fc7.jpg",
  },
  {
    id: 13,
    type: "Sweater",
    gender: "men",
    price: 180,
    status: "In stock",
    imgUrl: "https://kartinkof.club/uploads/posts/2022-09/thumbs/1662570564_1-kartinkof-club-p-novie-i-krasivie-kartinki-sviter-1.jpg",
  },
  {
    id: 14,
    type: "Sweater",
    gender: "women",
    price: 160,
    status: "In stock",
    imgUrl: "https://kartinkof.club/uploads/posts/2022-09/thumbs/1662570565_2-kartinkof-club-p-novie-i-krasivie-kartinki-sviter-2.jpg",
  },
  {
    id: 15,
    type: "Sweater",
    gender: "men",
    price: 200,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/sweater/sweater_PNG10.png",
  },
  {
    id: 16,
    type: "Sweater",
    gender: "women",
    price: 170,
    status: "Out of stock",
    imgUrl: "https://kartinkof.club/uploads/posts/2022-09/thumbs/1662570572_7-kartinkof-club-p-novie-i-krasivie-kartinki-sviter-7.jpg",
  },
  {
    id: 17,
    type: "Jeans",
    gender: "men",
    price: 260,
    status: "In stock",
    imgUrl: "https://smartcasuals.ru/wp-content/uploads/2019/03/DSC6839-532x800.jpg",
  },
  {
    id: 18,
    type: "Jeans",
    gender: "women",
    price: 240,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/jeans/jeans_PNG5747.png",
  },
  {
    id: 19,
    type: "Jeans",
    gender: "men",
    price: 280,
    status: "Out of stock",
    imgUrl: "https://smartcasuals.ru/wp-content/uploads/2018/05/DSC9409-1-533x800.jpg",
  },
  {
    id: 20,
    type: "Jeans",
    gender: "women",
    price: 250,
    status: "In stock",
    imgUrl: "https://pngimg.com/uploads/jeans/jeans_PNG5757.png",
  },
  {
    id: 21,
    type: "T-shirt",
    gender: "men",
    price: 850,
    status: "In stock",
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.XSmua4BE89IwkPZlv3AJ0AHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 22,
    type: "T-shirt",
    gender: "women",
    price: 720,
    status: "Out of stock",
    imgUrl: "https://tse1.mm.bing.net/th?id=OIP.HncECe5ToM2MnWsXb54RngHaIt&pid=Api&P=0&h=180",
  },
  {
    id: 23,
    type: "T-shirt",
    gender: "men",
    price: 920,
    status: "In stock",
    imgUrl: "https://tse2.mm.bing.net/th?id=OIP.FeBotAEOXkbovZEkQgnfYQHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 24,
    type: "T-shirt",
    gender: "women",
    price: 780,
    status: "In stock",
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.7uf5S2WxOdMT5smR6-1iBwHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 25,
    type: "Jacket",
    gender: "men",
    price: 410,
    status: "Out of stock",
    imgUrl: "https://tse2.mm.bing.net/th?id=OIP.taunr89gEREKbuXttVoc3wHaLH&pid=Api&P=0&h=180",
  },
  {
    id: 26,
    type: "Jacket",
    gender: "women",
    price: 360,
    status: "In stock",
    imgUrl: "https://tse4.mm.bing.net/th?id=OIP.D8F7zoiDoBXm_W5DnCqCygHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 27,
    type: "Jacket",
    gender: "men",
    price: 430,
    status: "In stock",
    imgUrl: "https://tse4.mm.bing.net/th?id=OIP.0CgtliQD7XfdBmGKmn0D-gHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 28,
    type: "Jacket",
    gender: "women",
    price: 380,
    status: "Out of stock",
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.8GXnuq4A-IWu-GZN9Ug6NAHaHa&pid=Api&P=0&h=180",
  },
  {
    id: 29,
    type: "Sweater",
    gender: "men",
    price: 190,
    status: "In stock",
    imgUrl: "https://kartinkof.club/uploads/posts/2022-09/thumbs/1662570571_6-kartinkof-club-p-novie-i-krasivie-kartinki-sviter-6.jpg",
  },
  {
    id: 30,
    type: "Sweater",
    gender: "women",
    price: 175,
    status: "In stock",
    imgUrl: "https://kartinkof.club/uploads/posts/2022-09/thumbs/1662570582_13-kartinkof-club-p-novie-i-krasivie-kartinki-sviter-13.jpg",
  },
];

// создаём карточки
const container = document.getElementById("product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.imgUrl}" alt="${product.type}">
    <h3>${product.type}</h3>
    <p><strong>Gender:</strong> ${product.gender}</p> 
    <p><strong>Price:</strong> $${product.price}</p>
    <p><strong>Status:</strong> ${product.status}</p>
  `;
  // <strong></strong> для выделения жирным шрифтом

  container.appendChild(card);
});

// стрелка Go Up с плавной прокруткой  на верх
document.getElementById("scrollToTopBtn").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // плавная прокрутка  на верх
  });
});


 