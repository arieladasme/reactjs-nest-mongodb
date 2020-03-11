import { Schema } from 'mongoose';

// Defino tipos de datos
export const ItemSchema = new Schema({
    itemName: { type: String, required: true },
    itemDesc: String,
    itemImgURL: String,
    createdAt: {
        type: Date,
        default: Date.now, // Ingreso dato por defecto
    },
});

