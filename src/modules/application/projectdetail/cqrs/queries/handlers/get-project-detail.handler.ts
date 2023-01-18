import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { HttpResponse } from "src/modules/shared/core/core.dtos";
import { ProjectDetailItemDto } from "../../../dtos/project-detail-item.dto";
import { ProjectDetailService } from "../../../projectdetail.service";
import { GetProjectDetailQueryRequest } from "../requests/get-project-detail-query.request";

@QueryHandler(GetProjectDetailQueryRequest)
export class GetProjectDetailHandler
  implements IQueryHandler<GetProjectDetailQueryRequest> {
  constructor(private readonly projectdetailService: ProjectDetailService) {}

  execute(): Promise<HttpResponse<ProjectDetailItemDto>> {
    return this.projectdetailService.fetchProjectDetail();
  }
}
