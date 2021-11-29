import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { RoleSeed } from '../seed/role.seed';

export class RoleSeed1637952942657 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const userRoleSeed: any[] = RoleSeed;
		for (let role of userRoleSeed) {
			const name = role.name as string
			let roleExists = await getRepository('role').createQueryBuilder('role')
				.where('role.name like :name', { name: `%${name}%` })
				.getOne();
			if (!roleExists) {
				await getRepository('role').save(role);
			}
		}
	}
	public async down(queryRunner: QueryRunner): Promise<void> { }
}
