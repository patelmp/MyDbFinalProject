import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class MakeBooksColumnsNullableExceptId1628000000002 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Make existing columns nullable
        await queryRunner.changeColumn("books", "title", new TableColumn({
            name: "title",
            type: "varchar",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "bookLanguage", new TableColumn({
            name: "bookLanguage",
            type: "varchar",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "authId", new TableColumn({
            name: "authId",
            type: "int",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "publisherId", new TableColumn({
            name: "publisherId",
            type: "int",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "genre", new TableColumn({
            name: "genre",
            type: "varchar",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "publicationDate", new TableColumn({
            name: "publicationDate",
            type: "date",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "price", new TableColumn({
            name: "price",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "pageCount", new TableColumn({
            name: "pageCount",
            type: "int",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "isbn", new TableColumn({
            name: "isbn",
            type: "varchar",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "bookDescription", new TableColumn({
            name: "bookDescription",
            type: "text",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "format", new TableColumn({
            name: "format",
            type: "varchar",
            isNullable: true
        }));
        await queryRunner.changeColumn("books", "created", new TableColumn({
            name: "created",
            type: "timestamp",
            isNullable: true,
            default: "CURRENT_TIMESTAMP"
        }));
        await queryRunner.changeColumn("books", "updated", new TableColumn({
            name: "updated",
            type: "timestamp",
            isNullable: true,
            default: "CURRENT_TIMESTAMP"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Revert changes (make columns not nullable)
        await queryRunner.changeColumn("books", "title", new TableColumn({
            name: "title",
            type: "varchar",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "bookLanguage", new TableColumn({
            name: "bookLanguage",
            type: "varchar",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "authId", new TableColumn({
            name: "authId",
            type: "int",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "publisherId", new TableColumn({
            name: "publisherId",
            type: "int",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "genre", new TableColumn({
            name: "genre",
            type: "varchar",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "publicationDate", new TableColumn({
            name: "publicationDate",
            type: "date",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "price", new TableColumn({
            name: "price",
            type: "decimal",
            precision: 10,
            scale: 2,
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "pageCount", new TableColumn({
            name: "pageCount",
            type: "int",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "isbn", new TableColumn({
            name: "isbn",
            type: "varchar",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "bookDescription", new TableColumn({
            name: "bookDescription",
            type: "text",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "format", new TableColumn({
            name: "format",
            type: "varchar",
            isNullable: false
        }));
        await queryRunner.changeColumn("books", "created", new TableColumn({
            name: "created",
            type: "timestamp",
            isNullable: false,
            default: "CURRENT_TIMESTAMP"
        }));
        await queryRunner.changeColumn("books", "updated", new TableColumn({
            name: "updated",
            type: "timestamp",
            isNullable: false,
            default: "CURRENT_TIMESTAMP"
        }));
    }
}
