import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregandoAge_tableUser1731710858228 implements MigrationInterface {
    name = 'AgregandoAge_tableUser1731710858228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "age" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
    }

}
