"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1725069430999 = void 0;
class CreateUserTable1725069430999 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL
                
            );
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE IF EXISTS users;`);
    }
}
exports.CreateUserTable1725069430999 = CreateUserTable1725069430999;
