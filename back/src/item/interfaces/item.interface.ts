import { Document } from 'mongoose';

export interface Item extends Document {
    readonly itemName: string;
    readonly itemDesc: string;
    readonly itemImgURL: string;
    readonly createdAt: Date;
}
