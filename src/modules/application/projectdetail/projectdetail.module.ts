import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QueryHandlers } from "./cqrs/queries/handlers";
import { ProjectDetailController } from "./projectdetail.controller";
import { ProjectDetailEntity } from "./projectdetail.entity";
import { ProjectDetailService } from "./projectdetail.service";

/**
 * @class ProjectDetailModule ProjectDetail module contains all functional's part for to ProjectAPI to be functional.
 * @author Patrik Duch
 */

@Module({
  controllers: [ProjectDetailController],
  imports: [CqrsModule, TypeOrmModule.forFeature([ProjectDetailEntity])],
  providers: [ProjectDetailService, ...QueryHandlers],
})
export class ProjectdetailModule {}
