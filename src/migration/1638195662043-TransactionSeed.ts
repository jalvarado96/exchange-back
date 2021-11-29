import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { TransactionSeed } from '../Seed/transaction.seed';

export class TransactionSeed1638195662043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userTransactionSeed: any = TransactionSeed;

		await getRepository('transaction').save(userTransactionSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
