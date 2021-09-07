import * as mysql from 'mysql';
import * as promiseMysql from 'promise-mysql';

const connectionMysql = await mysql.createConnection({
            host: '[データベースのホスト]',
            user: '[ユーザーID]',
            password: '[パスワード]',
            database: '[データベース名]',
            multipleStatements: true
        });

const connectionPromiseMysql = await promiseMysql.createConnection({
            host: '[データベースのホスト]',
            user: '[ユーザーID]',
            password: '[パスワード]',
            database: '[データベース名]',
            multipleStatements: true
        });