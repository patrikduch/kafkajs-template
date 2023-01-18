import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { HttpResponse } from "../../shared/core/core.dtos";
import { Repository } from "typeorm";
import { ProjectDetailItemDto } from "./dtos/project-detail-item.dto";
import { ProjectDetailEntity } from "./projectdetail.entity";

/**
 * @interface IProjectDetailService Contract interface for ProjectDetailService.
 */
interface IProjectDetailService {
    fetchProjectDetail(): Promise<HttpResponse<ProjectDetailItemDto>>;
}

/**
 * @class ProjectDetailService
 * @author Patrik Duch
 */
@Injectable()
export class ProjectDetailService implements IProjectDetailService {

    constructor(
        @InjectRepository(ProjectDetailEntity)
        private readonly repository: Repository<ProjectDetailEntity>
    ) {}

    /**
     * @function fetchProjectDetail Fetch basic information about project.
     * @author Patrik Duch
     * @returns Single object of type ProjectDetailItemDto.
     */
    async fetchProjectDetail(): Promise<HttpResponse<ProjectDetailItemDto>> {

        let entity: ProjectDetailEntity;
        entity = await this.repository.findOne();
    
        if (!entity) {
    
          const response = new HttpResponse<ProjectDetailItemDto>();
          response.error = 'No data';
        }
    
        const projectDetailDto = new ProjectDetailItemDto(entity.projectname);
        const response = new HttpResponse<ProjectDetailItemDto>();
        response.data = projectDetailDto;
        
        return response;
    }
}