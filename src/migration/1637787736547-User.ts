import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { UserSeed } from "../seeds/user.seed";

export class User1637787736547 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userSeed: any = UserSeed;
        await getRepository("User").save(UserSeed);
      }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
