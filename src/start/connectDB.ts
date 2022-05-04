import mysql, { QueryOptions } from 'mysql';
import config from '../config/config';
import util from 'util';

const pool = mysql.createPool({
	host: config.mysql.host,
	port: config.mysql.port,
	user: config.mysql.user,
	password: config.mysql.pass,
	database: config.mysql.database,
	connectionLimit: 50,
});

// pool.getConnection(function(err :any,connection :any){
// 	if (err) {
// 	  console.log(err)
// 	  throw err;
// 	}   
	
// 	connection.on('error', function(err:any) {      
// 		  throw err;
// 		  return;     
// 	});
// });

const pool_query = util.promisify(pool.query).bind(pool);

class Database {
	load(sql: string): any {
		return pool_query(sql);
	}
	add(entity: any, tableName: string) {
		let query: QueryOptions = {
			sql: `insert into ${tableName} set ?`,
			values: [entity]
		};
		return pool_query(query);
	}
	del(condition: any, tableName: string){
		let query: QueryOptions = {
			sql: `delete from ${tableName} where ?`,
			values: [condition]
		};
		return pool_query(query)
	} 

  patch(entity: any, condition: any, tableName: string){
	let query: QueryOptions = {
		sql: `update ${tableName} set ? where ?`,
		values: [entity, condition]
	};
	return pool_query(query)
  } 
	
}
export const database = new Database();
