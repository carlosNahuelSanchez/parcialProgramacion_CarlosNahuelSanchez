// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import { body } from "express-validator";

export const orderValidation = [
    body("id").isString(),
    body("userId").isString(),
    body("coffee").isString(),
];