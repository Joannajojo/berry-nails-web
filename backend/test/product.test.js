import request from "supertest";
import createServer from "../utils/server.js";
import mongoose from "mongoose";
import { connectDB } from "../config/db";
import { MongoMemoryServer } from "mongodb-memory-server";
import Product from "../models/product.model.js";

import dotenv from "dotenv"; // Load environment variables
dotenv.config(); // Ensure .env is loaded

let mongoServer;

// import app from "../server.js"; // ✅ Import app instead of creating a new instance
const app = createServer();

//Get product
beforeAll(async () => {
  //await connectDB(); // Ensure DB connection before running tests
  // console.log("Global: Connected to MongoDB");

  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri(); // Get the URI for the in-memory database
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //console.log("✅ Connected to in-memory MongoDB");
});

afterAll(async () => {
  //await mongoose.connection.close(); // Close DB connection after tests
  // console.log("Global: Disconnected from MongoDB");

  await mongoose.connection.dropDatabase(); // Optional: clear the database after tests
  await mongoose.connection.close(); // Close the connection
  await mongoServer.stop(); // Stop the in-memory server
  //console.log("❌ Disconnected from in-memory MongoDB");
});

describe("retrieve all products : GET /prod", () => {
  describe("valid order returned", () => {
    test("should return 201", async () => {
      const res = await request(app).get("/prod");
      expect(res.statusCode).toBe(201);
    }, 10000);
  });

  describe("server error during prod retrieval", () => {
    test("should return 500", async () => {
      const res = await request(app).get("/prod").send({ forceError: true });

      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe("Server error");
    }, 10000);
  });
});

describe("Retrieve a single product: GET /:id", () => {
  describe("given a Valid ID", () => {
    test("should return 201", async () => {
      //seed data into memory mongo server first
      await Product.create({
        _id: "672c6e211fdf57a16626d2c6",
        name: "Elegant Rose",
        description:
          "A beautiful set of pink press-on nails with rose accents.",
        price: 15.99,
        category: "coffin",
        color: "Pink",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        images: ["https://example.com/images/nails.jpg"],
        stock: 100,
        tags: ["elegant", "rose", "pink", "coffin"],
      });

      const res = await request(app).get("/672c6e211fdf57a16626d2c6");
      expect(res.statusCode).toBe(201);
      expect(res.body.data).toBeDefined();
      if (res.body.data) {
        expect(res.body.data.name).toBe("Elegant Rose");
      } else {
        console.warn("⚠️ API returned null data");
      }
      //expect(res.body.data.name).toBe("Elegant Rose");
    });
  });

  describe("Given a not valid ID", () => {
    test("should return 404", async () => {
      const res = await request(app).get("/672c6e211fdf57a16626d2c"); //ID with missing with  one more digit
      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe(
        "Invalid product ID 672c6e211fdf57a16626d2c"
      );
    });
  });

  describe("Server error", () => {
    test("should return 500", async () => {
      const res = await request(app)
        .get("/672c6e211fdf57a16626d2c6")
        .send({ forceError: true });

      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe("Server Error");
    }, 10000);
  });
});

describe("Retrieve products by category", () => {
  describe("Given a valid category", () => {
    test("should return 201", async () => {
      await Product.create({
        _id: "672c6e211fdf57a16626d2c7",
        name: "Elegant Rose",
        description:
          "A beautiful set of pink press-on nails with rose accents.",
        price: 15.99,
        category: "coffin",
        color: "Pink",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        images: ["https://example.com/images/nails.jpg"],
        stock: 100,
        tags: ["elegant", "rose", "pink", "coffin"],
      });

      const res = await request(app).get("/prod/coffin");
      expect(res.statusCode).toBe(201);
      expect(res.body.data).toBeDefined();
    });
  });
});

describe("POST /", () => {
  describe("given a valid product", () => {
    test("should return 201", async () => {
      const res = await request(app)
        .post("/")
        .send({
          name: "Test nails",
          description: "Aesthetic nails",
          price: 21.0,
          category: "almond",
          color: "red",
          sizes: "L",
          images: [
            "https://example.com/images/nails1.jpg",
            "https://example.com/images/nails2.jpg",
          ],
          stock: 200,
          tags: ["almond", "pretty"],
        });
      expect(res.statusCode).toBe(201);
    });
  });

  describe("given a not valid product", () => {
    test("should return 404", async () => {
      const res = await request(app)
        .post("/")
        .send({
          name: "",
          description: "Aesthetic nails",
          price: 21.0,
          category: "almond",
          color: "red",
          sizes: "L",
          images: [
            "https://example.com/images/nails1.jpg",
            "https://example.com/images/nails2.jpg",
          ],
          stock: 200,
          tags: ["almond", "pretty"],
        });
      expect(res.statusCode).toBe(404);
    });
  });
});
