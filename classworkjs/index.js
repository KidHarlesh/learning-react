// fist of all save the element with a variable and source for the id
// let heading = document.getElementById("hellotext");
// let paraGraph = document.querySelector(".paragrahtext");
// let imageOne = document.querySelector("#imageone");

// define function (function name would be called later in html)
// function textName() {
//   heading.innerHTML = "lasheesim";
// }
// function textPara() {
//   paraGraph.innerHTML = "fuck you";
// }
// function imageclickOne() {
//   imageOne.src = "imageone.jpg";
// }
// function imageclickTwo() {
//   imageOne.src = "imagetwo.jpg";
// }

// perfom task to be done

// let images = document.querySelector("#imageone");

// function imageclickRed() {
//   images.src = "imageori.jpg";
// }
// function imageclickYellow() {
//   images.src = "yellow image.jpg";
// }
// function imageclickgreen() {
//   images.src = "greenimage.png";
// }
// let inputConfirmemail = document.getElementById("confirmpassword");
// let iconConfirmmail = document.getElementById("confirmemail");

// var passwordInput = document.getElementById("passme");
// var passwordIcon = document.getElementById("icone");
// var confirmPassword = document.getElementById("passwe");
// var iconPassword = document.getElementById("iconf");
// function confirm(input, icon) {
//   if (input.type === "password") {
//     input.type = "text";
//     icon.classList.remove("fa-eye-slash");
//     icon.classList.add("fa-eye");
//   } else {
//     input.type = "password";
//     icon.classList.remove("fa-eye");
//     icon.classList.add("fa-eye-slash");
//   }
// }

// swith statement
// create an alarm
// i want monday to be  5pm
// i want tue - thur to be  9pm
// i want fri to be  3pm
// i want saturday -sunday to be  2pm

// const day = "monday";

// if (day === "monday") {
//   day = "5pm";
// } else if (day === "tueday") {
//   day = "9pm";
//   console.log(day);
// }
// applying multiple condition
// rather dan going through this stress
// using the swith statement

// let inputDay = document.getElementById("changetime");
// let alramText = d;
// let days = "wednesday";
// switch (days) {
//   case "monday":
//     console.log("5pm");
//     break;
//   case "tuesday":
//   case "wednesday":
//   case "thursday":
//     console.log("9pm");
//     break;
//   case "friday":
//     console.log("3pm");
//   case "saturday":
//   case "sunday":
//     console.log("2pm");
//   default:
//     console.log("shogo go and sleep");
// }

const shoppingPlatform = [
  {
    userId: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    orders: [
      {
        orderId: 1001,
        date: "2024-09-25",
        totalAmount: 120.5,
        status: "shipped",
        shippingAddress: {
          street: "123 Main St",
          city: "New York",
          zipCode: "10001",
          country: "USA",
        },
        products: [
          {
            productId: 201,
            name: "Wireless Mouse",
            category: "Electronics",
            price: 20.99,
            quantity: 2,
            seller: {
              sellerId: 501,
              name: "GadgetWorld",
              rating: 4.5,
            },
          },
          {
            productId: 202,
            name: "Gaming Keyboard",
            category: "Electronics",
            price: 79.99,
            quantity: 1,
            seller: {
              sellerId: 502,
              name: "Keyboards Inc.",
              rating: 4.7,
            },
          },
        ],
      },
      {
        orderId: 1002,
        date: "2024-09-30",
        totalAmount: 45.0,
        status: "delivered",
        shippingAddress: {
          street: "123 Main St",
          city: "New York",
          zipCode: "10001",
          country: "USA",
        },
        products: [
          {
            productId: 203,
            name: "Water Bottle",
            category: "Home & Kitchen",
            price: 15.0,
            quantity: 3,
            seller: {
              sellerId: 503,
              name: "HomeGoods",
              rating: 4.3,
            },
          },
        ],
      },
    ],
  },
  {
    userId: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    orders: [
      {
        orderId: 1003,
        date: "2024-10-01",
        totalAmount: 150.0,
        status: "processing",
        shippingAddress: {
          street: "456 Elm St",
          city: "Los Angeles",
          zipCode: "90001",
          country: "USA",
        },
        products: [
          {
            productId: 204,
            name: "Fitness Tracker",
            category: "Electronics",
            price: 99.99,
            quantity: 1,
            seller: {
              sellerId: 504,
              name: "FitTech",
              rating: 4.8,
            },
          },
          {
            productId: 205,
            name: "Yoga Mat",
            category: "Sports",
            price: 50.0,
            quantity: 1,
            seller: {
              sellerId: 505,
              name: "ActiveLife",
              rating: 4.6,
            },
          },
        ],
      },
    ],
  },
];
console.log(shoppingPlatform[0].orders[0].products[0].name);