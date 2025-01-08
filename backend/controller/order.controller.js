import mongoose from "mongoose";
import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  const order = req.body;

  if (order.products.length == 0 || order.totalPrice == 0)
    return res.status(400).json({ success: false, message: "Order is empty" });

  const newOrder = new Order(order);
  try {
    await newOrder.save();
    return res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    console.log("Error in creating order");
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getMostOrderedItems = async (req, res) => {
  try {
    const orders = await Order.aggregate([
      //Step 1: Unwind the products array in order model to decompose each product into individual documents

      //example
      // {
      //   "_id": "order1",
      //   "userId": "user123",
      //   "products": { "productId": "prod1", "name": "Product A", "quantity": 2 }
      // },
      // {
      //   "_id": "order1",
      //   "userId": "user123",
      //   "products": { "productId": "prod2", "name": "Product B", "quantity": 1 }
      // }
      { $unwind: "$products" },

      // Step 2: Group by productId and count the occurrences
      {
        //
        $group: {
          _id: "$products.productId", // group by product id (determines how the documents are grouped together.)
          count: { $sum: 1 }, //count number of occurences (count operation (can be sum,avg etc))
          details: { $first: "$products" },
        },
      }, //optionally store product details

      //Step 3:Match products with occurences/count greater than 2
      { $match: { count: { $gt: 2 } } },

      //Step 4:return only required fields
      {
        $project: {
          _id: 1,
          count: 1,
          details: 1, //product array
        },
      },
    ]);
    res.status(201).json({ success: true, data: orders });
  } catch (error) {
    console.log("Error in fetching most ordered products");
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
