
// Defino lo que envio y recivo (servidor - cliente)
export class CreateItemDTO {
    readonly nameItem: string;
    readonly descItem: string;
    readonly imgURLItem: string;
    readonly createdAt: Date;
}