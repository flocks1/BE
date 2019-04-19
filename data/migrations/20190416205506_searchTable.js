
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Searches', table => {
        table.increments('search_id');

        table.string('search_message').notNullable();

        table.integer('User').references('user_id').inTable('Users');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('Searches');
};
