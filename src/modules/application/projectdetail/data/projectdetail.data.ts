/**
 * @type ProjectDetailSeedType Type annotation for projectdetail seed data.
 * @author Patrik Duch
 */
 type ProjectDetailSeedType = {
    id: number;
    projectname: string;
}

/**
 * Initial data for projectdetail entity.
 * @author Patrik Duch
 */
export const projectDetailData: ProjectDetailSeedType = {
    id: 1,
    projectname: 'Test web project with Nest.js by Patrik Duch'
};