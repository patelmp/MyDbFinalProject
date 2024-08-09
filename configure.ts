import { DataSource } from "typeorm";
import { Book } from "./entities/Book"; // Ensure the correct path to our Book entity
import { Author } from "./entities/Author"; // We have an Author entity
import { Publisher } from "./entities/Publisher"; // We have a Publisher entity
import { Customer } from "./entities/Customer"; // We have a Customer entity
import { Review } from "./entities/Review"; //  Review entity
import { Purchase } from "./entities/Purchase"; // Purchase entity

export const AppDataSource = new DataSource({
  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'bookstore_database',
  entities: [Book, Author, Publisher, Customer, Review, Purchase],
  migrations: [__dirname + "/migrations/**/*.ts"],
  synchronize: false, // Set to false in production
  logging: false,
});

// Export the AppDataSource for use in other parts of your application
export const postgresDataSource = AppDataSource;
