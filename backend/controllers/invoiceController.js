import PDFDocument from "pdfkit";
import Order from "../models/Order.js";

export const generateInvoice = async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.orderId,
      user: req.user._id,
    }).populate("user", "name email");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    const doc = new PDFDocument({
      margin: 50,
      size: "A4",
    });

    const invoiceNumber =
      `INV-${order._id.toString().slice(-8).toUpperCase()}`;

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${invoiceNumber}.pdf`
    );

    doc.pipe(res);

    doc
      .fontSize(24)
      .text("MATTIE'S COFFEE", {
        align: "center",
      });

    doc
      .moveDown(0.5)
      .fontSize(12)
      .text("Coffee made with love.", {
        align: "center",
      });

    doc.moveDown(2);

    doc
      .fontSize(18)
      .text("INVOICE");

    doc.moveDown();

    doc
      .fontSize(11)
      .text(`Invoice Number: ${invoiceNumber}`)
      .text(`Order ID: ${order._id}`)
      .text(
        `Order Date: ${new Date(
          order.createdAt
        ).toLocaleString()}`
      );

    doc.moveDown();

    doc
      .fontSize(14)
      .text("Customer Details");

    doc.moveDown(0.5);

    doc
      .fontSize(11)
      .text(`Name: ${order.user.name}`)
      .text(`Email: ${order.user.email}`)
      .text(
        `Delivery Address: ${order.deliveryAddress}`
      );

    doc.moveDown(2);

    doc
      .fontSize(14)
      .text("Order Items");

    doc.moveDown();

    doc
      .fontSize(11)
      .text("Item", 50, doc.y, {
        continued: true,
        width: 200,
      })
      .text("Qty", 260, doc.y, {
        continued: true,
        width: 60,
      })
      .text("Price", 330, doc.y, {
        continued: true,
        width: 80,
      })
      .text("Total", 430, doc.y);

    doc.moveDown(0.5);

    doc
      .moveTo(50, doc.y)
      .lineTo(545, doc.y)
      .stroke();

    doc.moveDown();

    order.items.forEach((item) => {
      const itemTotal =
        item.price * item.quantity;

      const y = doc.y;

      doc
        .fontSize(10)
        .text(item.name, 50, y, {
          width: 190,
        });

      doc.text(
        item.quantity.toString(),
        260,
        y
      );

      doc.text(
        `Rs. ${item.price}`,
        330,
        y
      );

      doc.text(
        `Rs. ${itemTotal}`,
        430,
        y
      );

      doc.moveDown();
    });

    doc.moveDown();

    doc
      .moveTo(50, doc.y)
      .lineTo(545, doc.y)
      .stroke();

    doc.moveDown();

    doc
      .fontSize(11)
      .text(
        `Subtotal: Rs. ${order.subtotal}`,
        {
          align: "right",
        }
      );

    doc
      .fontSize(11)
      .text(
        `Delivery Fee: Rs. ${order.deliveryFee}`,
        {
          align: "right",
        }
      );

    doc
      .moveDown(0.5)
      .fontSize(14)
      .text(
        `Total Amount: Rs. ${order.totalAmount}`,
        {
          align: "right",
        }
      );

    doc.moveDown(2);

    doc
      .fontSize(11)
      .text(`Order Status: ${order.status}`)
      .text(
        `Estimated Delivery: ${new Date(
          order.estimatedDelivery
        ).toLocaleString()}`
      );

    doc.moveDown(3);

    doc
      .fontSize(12)
      .text(
        "Thank you for ordering from Mattie's Coffee!",
        {
          align: "center",
        }
      );

    doc.moveDown(0.5);

    doc
      .fontSize(9)
      .text(
        "This invoice was generated automatically.",
        {
          align: "center",
        }
      );

    doc.end();
  } catch (error) {
    console.error(error);

    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: "Failed to generate invoice.",
      });
    }
  }
};