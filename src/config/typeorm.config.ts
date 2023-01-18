import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";

/**
 * @class TypeOrmConfig 
 */
export default class TypeOrmConfig {

  static getOrmConfig(config: ConfigService): TypeOrmModuleOptions 
  {
    return {

      type: 'postgres',
      host: config.get('DB_HOST'),
      port: config.get('DB_PORT'),
      username: config.get('DB_USERNAME'),
      password: config.get('DB_PASSWORD'),
      database: config.get('DB_NAME'),
      logging: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    };
  }
}


export const typeormConfigAsync: TypeOrmModuleAsyncOptions = {

  imports: [ConfigModule],

  useFactory: async (configService: ConfigService): 
  Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),

  inject: [ConfigService]
};

