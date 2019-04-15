
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Users', table => {
        table.increments('user_id');

        table.string('username').unique().notNullable();

        table.string('password').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Users');
};
