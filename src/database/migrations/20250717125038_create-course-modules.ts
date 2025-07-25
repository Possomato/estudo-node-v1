import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("course_modules", (table) => {
    table.increments('id').primary(),
    table.text('name').notNullable(),
    table.integer('id_course').references('id').inTable('courses')
  })
}


export async function down(knex: Knex): Promise<void> {
}

