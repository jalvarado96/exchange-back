import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserSeed } from '../Seed/user.seed';

export class UserSeed1637953355962 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userUserSeed: any = UserSeed;

		await getRepository('user').save(userUserSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
