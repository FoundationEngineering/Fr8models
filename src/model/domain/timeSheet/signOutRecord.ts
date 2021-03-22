import { TemplateDto } from '../templateDto';

export class SignOutRecord extends TemplateDto {
    constructor(
    public timeRecordId?: number,
    public timeOut?: Date,
    ) {
        super();
    }
}