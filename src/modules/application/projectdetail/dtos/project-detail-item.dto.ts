import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/**
 * @class ProjectDetailItemDto DTO for fetching basic information about current project.
 * @author Patrik Duch
 */
export class ProjectDetailItemDto {

  constructor(name: string) {
    this.name = name;
  }

  @ApiProperty()
  @IsNotEmpty()
  name: string;
}