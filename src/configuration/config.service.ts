import { Injectable } from '@nestjs/common';
@Injectable()
export class ConfigService {
  public readonly MONGO_CONFIG = {
    type: 'mongodb',
    host: process.env.MONGO_URL || 'localhost',
    port: parseInt(process.env.PORT, 10) || 2001,
    database: process.env.MONDO_DB_NAME || 'local',
    // entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true' || false,
  };
}
