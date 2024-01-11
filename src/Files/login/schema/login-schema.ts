import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class LoginModel {
  @Prop({ required: true, type: 'string', unique: true })
  username: string;

  @Prop({ required: true, type: 'string', minlength: 8 })
  password: string;

  @Prop({ required: true, type: 'boolean', default: true })
  active: boolean;

  @Prop({ required: true, type: 'boolean', default: false })
  status: boolean;
}

export const LoginSchema = SchemaFactory.createForClass(LoginModel);
