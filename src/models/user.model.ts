import { ApiModelProperty } from '@nestjs/swagger';
import { prop, Typegoose } from 'typegoose';

export class User extends Typegoose {
    @ApiModelProperty()
    readonly id: number;
    @ApiModelProperty()
    readonly prenom: string;
    @ApiModelProperty()
    readonly nom: string;
    @ApiModelProperty()
    readonly autre: string;
}