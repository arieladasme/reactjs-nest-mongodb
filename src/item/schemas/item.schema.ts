import { Schema } from "mongoose";

// Defino tipos de datos
export const ItemSchema = new Schema({
    nameItem: {type: String, required: true},
    descItem: String,
    imgURLItem: String,
    createdAt: { 
        type: Date, 
        default: Date.now // Ingreso dato por defecto
    }
});

