import { TemplateDto } from "../templateDto";

export class DispatchItemLine extends TemplateDto {
    constructor(
        public uuid?: string,
        public dispatchId?: number,
        public comodityId?: number,
        public comodityName?: string,
        public quantity?: number,
        public packageQuantity?: number,
        public hirePallets?: number,
        public nonHirePallets?: number,
        public description?: string,
        public weight?: number,
        public cubic?: number,
        public createdAt?: Date,
        public updatedAt?: Date,
        ) {
        super();
    }
}
