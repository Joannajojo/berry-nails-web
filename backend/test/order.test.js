import request from "supertest";
import createServer from "../utils/server.js";
// import app from "../server.js"; // ✅ Import app instead of creating a new instance
import mongoose from "mongoose";
import { connectDB } from "../config/db";
import dotenv from "dotenv"; // Load environment variables
import { MongoMemoryServer } from "mongodb-memory-server";
dotenv.config(); // Ensure .env is loaded

let mongoServer;

const app = createServer();

//Create order
describe("POST /order", () => {
  beforeAll(async () => {
    // await connectDB(); // Ensure DB connection before running tests
    // console.log("Global: Connected to MongoDB");

    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri(); // Get the URI for the in-memory database
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to in-memory MongoDB");
  }, 10000);

  afterAll(async () => {
    // await mongoose.connection.close(); // Close DB connection after tests
    // console.log("Global: Disconnected from MongoDB");

    await mongoose.connection.dropDatabase(); // Optional: clear the database after tests
    await mongoose.connection.close(); // Close the connection
    await mongoServer.stop(); // Stop the in-memory server
    console.log("❌ Disconnected from in-memory MongoDB");
  }, 10000);
  describe("given a valid order", () => {
    test("should return 201", async () => {
      const res = await request(app)
        .post("/order")
        .send({
          userId: "123",
          products: [
            {
              productId: "123",
              name: "testProdName",
              quantity: 2,
              size: "XL",
              price: 24.0,
              image: "testimg.jpg",
            },
          ],
          totalPrice: 24.0,
          name: "testnails",
          address: "test address",
          phone: "0123456789",
          email: "testaddress.com",
          note: "NA",
          collectionMethod: "delivery",
          paymentMethod: "visa",
          status: "pending",
        });
      expect(res.statusCode).toBe(201);
    }, 10000);
  });

  describe("not a valid order", () => {
    test("should return 400", async () => {
      const res = await request(app).post("/order").send({
        userId: "123",
        products: [],
        totalPrice: 24.0,
        name: "testnails",
        address: "test address",
        phone: "0123456789",
        email: "testaddress.com",
        note: "NA",
        collectionMethod: "delivery",
        paymentMethod: "visa",
        status: "pending",
      });
      expect(res.statusCode).toBe(400);
    }, 10000);
  });
});

//Get product with orders more than (for exam: 2 orders)
// describe("GET /order", () => {
//   describe("retrieve an order", () => {});
// });
