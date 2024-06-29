import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LastLoginsSchema } from './last-logins.schema';

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class UserModel {
  @Prop({ required: true, type: 'string' })
  firstname: string;

  @Prop({ required: true, type: 'string' })
  lastname: string;

  @Prop({ required: true, type: 'string', unique: true })
  username: string;

  @Prop({ required: true, type: 'string', minlength: 8 })
  password: string;

  @Prop({ required: true, type: 'string', unique: true })
  code: string;

  @Prop({ required: true, type: 'string', unique: true })
  email: string;

  @Prop({ required: true, type: 'boolean', default: true })
  active: boolean;

  @Prop({ type: 'boolean', default: false })
  verified: boolean;

  @Prop({ type: 'boolean', default: false })
  is_email: boolean;

  @Prop({ type: 'boolean', default: false })
  is_mobile: boolean;

  @Prop({ required: true, type: 'boolean', default: false })
  status: boolean;

  @Prop({ type: Array, default: null })
  failed_logins: LastLoginsSchema[];

  @Prop({ type: Array, default: null })
  success_logins: LastLoginsSchema[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
