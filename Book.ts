import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from "typeorm";
import { Book } from './Book'; // Correct path based on your structure


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  title: string;

  @Column({ type: "varchar", length: 20, nullable: false })
  bookLanguage: string;

  @Column({ type: "int", nullable: false })
  authId: number;

  @Column({ type: "int", nullable: false })
  publisherId: number;

  @Column({ type: "varchar", length: 50, nullable: false })
  genre: string;

  @Column({ type: "date", nullable: false })
  publicationDate: string;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
  price: number;

  @Column({ type: "int", nullable: true })
  pageCount: number;

  @Column({ type: "varchar", length: 20, nullable: true })
  isbn: string;

  @Column({ type: "text", nullable: true })
  bookDescription: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  format: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updated: Date;
}
