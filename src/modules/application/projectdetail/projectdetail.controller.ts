import { Controller, Get } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ApiTags } from "@nestjs/swagger";
import { HttpResponse } from "../../shared/core/core.dtos";
import { GetProjectDetailQueryRequest } from "./cqrs/queries/requests/get-project-detail-query.request";
import { ProjectDetailItemDto } from "./dtos/project-detail-item.dto";

/**
 * @class ProjectDetailController ProjectDetail API for project-detail data management.
 * @author Patrik Duch
 */
@ApiTags("ProjectDetail")
@Controller({
  path: "/projectdetail",
})
export class ProjectDetailController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getProjectDetails(): Promise<HttpResponse<ProjectDetailItemDto>> {
    return await this.queryBus.execute(new GetProjectDetailQueryRequest());
  }
}
