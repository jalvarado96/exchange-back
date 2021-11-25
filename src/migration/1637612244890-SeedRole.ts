import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import {RoleSeed } from "../seeds/role.seed";

export class SeedRole1637612244890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
            const roleSeed: any = RoleSeed;
            await getRepository("Role").save(RoleSeed);
          }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    }

}



// import { UserPermissionSeed } from "../seed/permission.seed";
// import { RoleSeed } from "../seed/role.seed";

// export class SeedPermissionsAndRoles1556357483083
//   implements MigrationInterface {
//   public async up(_: QueryRunner): Promise<any> {
//     const permissions = await getRepository("permissions").save(
//       UserPermissionSeed
//     );
//     const userRoleSeed: any = RoleSeed;
//     userRoleSeed.permissions = permissions;
//     await getRepository("roles").save(userRoleSeed);
//   }

//   public async down(_: QueryRunner): Promise<any> {
//     // do nothing
//   }
// }