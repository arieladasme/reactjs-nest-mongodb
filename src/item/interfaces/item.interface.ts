import { Document } from "mongoose";

export interface Item extends Document {
    readonly nameItem: string;
    readonly descItem: string;
    readonly imgURLItem: string;
    readonly createdAt: Date;
}