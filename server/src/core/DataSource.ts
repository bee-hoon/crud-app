import Database from "./Database";

const database = new Database();

const dataSource = database.newDataSource();

export default dataSource;
