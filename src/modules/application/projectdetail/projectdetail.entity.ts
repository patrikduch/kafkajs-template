import { Column, Entity, PrimaryColumn} from "typeorm";

/**
 * @class ProjectDetailEntity DB entity that represens projectdetail relation.
 * @author Patrik Duch
 */
@Entity('projectdetail')
export class ProjectDetailEntity {
  @PrimaryColumn()
  id: number;
  @Column()
  projectname: string;
}