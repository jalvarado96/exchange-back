import {getRepository, MigrationInterface, QueryRunner} from "typeorm";
import { ExchangeSeed } from "../seeds/exchange.seed";

export class exchange1637870815934 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const exchanges: any = ExchangeSeed;
        await getRepository("exchange").save(ExchangeSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
