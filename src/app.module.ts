import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RangeModule } from './range/range.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { ConfigEnum } from './enum/config.enum';
import { Type } from 'js-yaml';
import * as Joi from 'joi';
import { MongooseModule } from '@nestjs/mongoose';
import { Profile } from './user/profile.entity';
import { Logs } from './logs/logs.entity';
import { Roles } from './roles/roles.entity';

const envFilePath = `.env.${process.env.NODE_ENV}` || '.env';
console.log(envFilePath, ConfigEnum.DB_HOST);
@Module({
  imports: [
    UserModule,
    RangeModule,
    // MongooseModule.forRootAsync('mongodb://localhost:27017/test'),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().default(3306),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        DB_TYPE: Joi.string().valid('mysql', 'postgres').default('mysql'),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get(ConfigEnum.DB_TYPE),
          host: configService.get(ConfigEnum.DB_HOST),
          port: configService.get(ConfigEnum.DB_PORT),
          username: configService.get(ConfigEnum.DB_USERNAME),
          password: configService.get(ConfigEnum.DB_PASSWORD),
          database: configService.get(ConfigEnum.DB_DATABASE),
          entities: [User, Profile, Logs, Roles],
          synchronize: true,
        } as TypeOrmModuleOptions),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
