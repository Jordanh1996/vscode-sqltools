import ConnectionCredentials from './connection-credentials';
import DatabaseInterface from './database-interface';

export default interface ConnectionDialect {
  connection: any;
  credentials: ConnectionCredentials;
  open(): Promise<any>;
  close(): Promise<any>;
  getTables(): Promise<DatabaseInterface.Table[]>;
  getColumns(): Promise<DatabaseInterface.TableColumn[]>;
  describeTable(tableName: string): Promise<any>;
  showRecords(tableName: string, limit: number): Promise<any>;
  query(query: string): Promise<any>;
}
