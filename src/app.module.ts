import { Logger, Module, OnApplicationBootstrap } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectdetailModule } from "./modules/application/projectdetail/projectdetail.module";
import { typeormConfigAsync } from "./config/typeorm.config";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from "./modules/application/users/users.module";
import { CoreModule } from "./modules/shared/core/core.module";
import { ProjectDetailSeeder } from "./modules/application/projectdetail/projectdetail.seeder";
import { ProjectDetailEntity } from "./modules/application/projectdetail/projectdetail.entity";

const ENV = process.env.NODE_ENV;

/**
 * @class AppModule Entry app module.
 * @author Patrik Duch
 */
@Module({
  imports: [
    CoreModule,
    ConfigModule.forRoot({
      envFilePath: !ENV ? ".env" : `.env.${ENV}`,
      isGlobal: true, // shared for all modules
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: "schema.ggl",
    }),
    UsersModule,
    ProjectdetailModule,
    TypeOrmModule.forRootAsync(typeormConfigAsync),
    TypeOrmModule.forFeature([ProjectDetailEntity]),
    Logger,
  ],

  providers: [ProjectDetailSeeder, Logger],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly projectdetailSeeder: ProjectDetailSeeder) {}

  onApplicationBootstrap() {
    this.projectdetailSeeder.seed();
  }
}
