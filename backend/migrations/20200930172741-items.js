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
  return db.createTable('Items', {
    id: { type: 'int', primaryKey: true, unsigned: true, unique: true, autoIncrement: true },
    user_name: { type: 'string' },
    title: { type: 'string' },
    description: { type: 'string' },
    URL: { type: 'string'  },
    price: { type: 'int', unsigned: true, defaultValue: 0 },
    forSale: { type: 'boolean', defaultValue: true },
    soldTo: { type: 'string'}
  });
};

exports.down = function (db) {
  return db.dropTable('Items');
};

exports._meta = {
  version: 1,
};
