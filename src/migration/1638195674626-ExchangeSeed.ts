import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { ExchangeSeed } from '../Seed/exchange.seed';

export class ExchangeSeed1638195674626 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userExchangeSeed: any = ExchangeSeed;

		await getRepository('exchange').save(userExchangeSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
