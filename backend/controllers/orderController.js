import Order from "../models/Order.js";
import generateDeliveryDate from "../utils/generateDeliveryDate.js";
import getOrderTracking from "../utils/getOrderTracking.js";

// ==============================
// CREATE ORDER
// ==============================
export const createOrder = async (req, res) => {
  try {
    const { items, deliveryAddress } = req.body;

    if (!items || items.length === 0 || !deliveryAddress) {
      return res.status(400).json({
        success: false,
        message: "Items and delivery address are required.",
      });
    }

    const subtotal = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const deliveryFee = subtotal > 0 ? 40 : 0;

    const totalAmount = subtotal + deliveryFee;

    const estimatedDelivery = generateDeliveryDate();

    const order = await Order.create({
      user: req.user._id,
      items,
      subtotal,
      deliveryFee,
      totalAmount,
      deliveryAddress,
      estimatedDelivery,
    });

    const tracking = getOrderTracking(order);

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: {
        ...order.toObject(),
        trackingStatus: tracking.status,
        trackingProgress: tracking.progress,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// GET MY ORDERS
// ==============================
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    const ordersWithTracking = orders.map((order) => {
      const tracking = getOrderTracking(order);

      return {
        ...order.toObject(),
        trackingStatus: tracking.status,
        trackingProgress: tracking.progress,
      };
    });

    res.status(200).json({
      success: true,
      count: ordersWithTracking.length,
      orders: ordersWithTracking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==============================
// GET SINGLE ORDER
// ==============================
export const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    const tracking = getOrderTracking(order);

    res.status(200).json({
      success: true,
      order: {
        ...order.toObject(),
        trackingStatus: tracking.status,
        trackingProgress: tracking.progress,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};