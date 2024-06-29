import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class LastLoginsSchema {
  @Prop({ required: true, type: 'string' })
  correlation: string;

  @Prop({ required: true, type: 'string' })
  ip: string;

  @Prop({ required: true, type: 'string' })
  timestamp: string;
}
