import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

@Schema()
export class User {
    @Prop({
        type: SchemaTypes.UUID
    })
    uuid: Types.UUID;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    username: string;

    @Prop()
    pet_name: string;
}

export type UserDocument = HydratedDocument<User>;

export const UserSchema = SchemaFactory.createForClass(User);