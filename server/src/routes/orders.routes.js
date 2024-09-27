import { Router } from "express";
import { orderValidation } from "../validations/orders.validations.js";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post("/", orderValidation, createOrderCtrl);

export { ordersRouter };
