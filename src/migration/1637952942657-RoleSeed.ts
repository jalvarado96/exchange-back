import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { RoleSeed } from '../Seed/role.seed';

export class RoleSeed1637952942657 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const userRoleSeed: any = RoleSeed;

		await getRepository('role').save(userRoleSeed);
	}
	public async down(queryRunner: QueryRunner): Promise<void> { }
}
