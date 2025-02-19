// import request from "supertest";
// import app from "././backend/routes/order.route.js";

// describe("POST /", () => {
//   describe("given a valid order", () => {
//     test("should return 201", async () => {
//       const res = request(app)
//         .post("/")
//         .send({
//           userId: "123",
//           products: [
//             {
//               productId: "testId",
//               name: "testProdName",
//               quantity: 2,
//               size: "XL",
//               price: 24.0,
//               image: "testimg.jpg",
//             },
//           ],
//           totalPrice: 24.0,
//           name: "testnails",
//           address: "test address",
//           phone: "0123456789",
//           email: "testaddress.com",
//           note: "NA",
//           collectionMethod: "delivery",
//           paymentMethod: "visa",
//           status: "pending",
//         });
//       expect(res.statusCode).toBe(201);
//     });
//   });
// });
