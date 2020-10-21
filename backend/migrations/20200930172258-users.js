'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('Users', {
    id: { type: 'int', primaryKey: true, unsigned: true, unique: 'true', autoIncrement: true },
    name: { type: 'string', unique: 'true', notNull: true, length: 25 },
    email: { type: 'string' },
    password: { type: 'string' ,  notNull: true },
    cash_balance: { type: 'int', unsigned: true, defaultValue: 0 },
  });
};

exports.down = function (db) {
  return db.dropTable('Users');
};

exports._meta = {
  version: 1,
};
