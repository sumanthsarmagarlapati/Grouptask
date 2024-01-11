import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: true, updatedAt: true } })
export class LoginSchema {
  @Prop({ required: true, type: 'string', unique: true })
  username: string;

  @Prop({ required: true, type: 'string', minlength: 8 })
  password: string;

  @Prop({ required: true, type: 'boolean', default: true })
  active: boolean;

  @Prop({ required: true, type: 'boolean', default: false })
  status: boolean;

  @Prop({ required: true, type: Date })
  created_at: Date;

  @Prop({ required: true, type: Date })
  updated_at: Date;
}

export const Login = SchemaFactory.createForClass(LoginSchema);
