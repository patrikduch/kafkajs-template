import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { projectDetailData } from "./data/projectdetail.data";
import { ProjectDetailEntity } from "./projectdetail.entity";

/**
 * @class ProjectDetailSeeder Seeding functionality for ProjectDetail entity.
 * @author Patrik Duch
 */
@Injectable()
export class ProjectDetailSeeder {
  constructor(
    private readonly logger: Logger,
    @InjectRepository(ProjectDetailEntity)
     private readonly repository: Repository<ProjectDetailEntity>
  ) {}
  async seed() {
    return this.repository.findOne({
      projectname:  projectDetailData.projectname
    }).then((projectdetailDb) => {
      if (!projectdetailDb) {
       this.repository.save({
         id: projectDetailData.id,
         projectname: projectDetailData.projectname
       });

       this.logger.log("Successfuly completed seeding 'ProjectDetail' entity.")
      }
    }).catch(err => {
      this.logger.error(err);
      return Promise.reject(err)
    });
  }
}