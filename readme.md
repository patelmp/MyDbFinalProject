# Group13-SENG8071-Final_Project
# Online bookstore system
Here is our Project partner cum group member list: -

- Mahendra Patel (9006695)
- SWATI (8975520)
- Anish Reddy (8975571)

# Team members and the division of tasks among them.
These are the responsibilities allocated to each member of our team.
- Creating tables and designing database schema: Mahendra Patel is in charge of overseeing database schema design and facilitating team communication.
- Database Architect: Mahendra Patel is in charge of making sure that the data is accurate and developing the database schema.
- CRUD Operations: Swati carried out the CRUD actions and SQL queries.
- Data Analyst: Anish Reddy uses user data analysis to produce insights about the most well-liked genres and devoted clientele.
- Engineer for Quality Assurance (QA): Swati tests the system to make sure it meets requirements and is error-free.

# User Roles

- Customers: Look through books, buy them, write reviews.
- Writers: Take care of or manage their books.
- Publishers manage book listings.
- Data to Collect
- Details about a book, including its title, author, genre, price, cover image, and format (physical, e-book, or audio).
- Name, email address, and past purchases made by the customer.
- The author details their name, and area of expertise in the genre.
- Publisher details: name, number of contacts.
- Online Bookstore System Design

# Our Database Schema Table View 
- We will construct our database schema in heading 3.
- The tables and data types are shown here.
- Since our attribute is only used in camelCase in this SQL, PostgreSQL is unable to accept it because the marketing table always has the attribute written in small letters.
  
# Customers Table

|    Attribute          | Type                | Description          |
|-----------------------|---------------------|----------------------|
| custId 	            | SERIAL              | Primary Key          |
| fName	                | VARCHAR (50)	      | First Name           |
| lName	                | VARCHAR (50)	      | Last Name            |
| emailId	            | VARCHAR (100)	      | Email Address        |
| cellNumb	            | VARCHAR (20)	      | Phone Number         |
| custAddress	        | VARCHAR (500)	      | Customer address     |
| created	            | TIMESTAMP	          | DTTM                 |
| updated	            | TIMESTAMP	          | DTTM                 |

# Authors Table

|    Attribute          | Type                | Description          |
|-----------------------|---------------------|----------------------|
| authId	          | SERIAL	      | Author ID               |
| fName            	| VARCHAR (50)	| First Name              |
| lName            	| VARCHAR (50)	| Last Name               |
| biography	        | TEXT	        | Details about author's  |
| birthDate	        | DATE	        | Date of birthday        |
| nationality	      | VARCHAR (50)	| Its citizen status      |
| created	          | TIMESTAMP	    | DTTM                    |
| updated	          | TIMESTAMP	    | DTTM                    |

# Publishers Table

|    Attribute       | Type           | Description                     |
|--------------------|----------------|---------------------------------|
| publisherId        | SERIAL         | Unique identifier for publisher |
| name               | VARCHAR(100)   | Publisher name                  |
| publisherAddress   | VARCHAR(500)   | Publisher address               |
| websiteUrl         | VARCHAR(100)   | Website URL, if any             |
| created            | TIMESTAMP      | Created date and time           |
| updated            | TIMESTAMP      | Last updated date and time      |


# Books Table
  
|    Attribute       | Type            | Description                     |
|--------------------|-----------------|---------------------------------|
| bookId             | SERIAL          | Unique identifier for the book  |
| title              | VARCHAR(100)    | Book title                      |
| bookLanguage       | VARCHAR(20)     | Language of the book            |
| authId             | INTEGER         | Foreign key referencing Authors table |
| publisherId        | INTEGER         | Foreign key referencing Publishers table |
| genre              | VARCHAR(50)     | Book genre                      |
| publicationDate    | VARCHAR(50)     | Book publication date           |
| price              | DECIMAL(10, 2)  | Retail price of the book        |
| pageCount          | INTEGER         | Total number of pages           |
| isbn               | VARCHAR(20)     | ISBN number of the book         |
| bookDescription    | TEXT            | Details about the book          |
| created            | TIMESTAMP       | Created date and time           |
| updated            | TIMESTAMP       | Last updated date and time      |
| format             | VARCHAR(50)     | Format of the book (e.g., Physical, E-book, Audiobook) |



# Reviews Table

|    Attribute  | Type         | Description                                  |
|---------------|--------------|----------------------------------------------|
| reviewId      | SERIAL       | Unique identifier for the review             |
| custId        | INTEGER      | Foreign key referencing the Customers table  |
| bookId        | INTEGER      | Foreign key referencing the Books table      |
| rating        | SMALLINT     | Review rating (1-5)                          |
| reviewText    | TEXT         | Review text                                  |
| created       | TIMESTAMP    | Created date and time                        |
| updated       | TIMESTAMP    | Last updated date and time                   |

# Purchases Table

|    Attribute     | Type            | Description                                  |
|------------------|-----------------|----------------------------------------------|
| purchaseId       | SERIAL          | Unique identifier for the purchase           |
| custId           | INTEGER         | Foreign key referencing the Customers table  |
| bookId           | INTEGER         | Foreign key referencing the Books table      |
| purchaseDate     | DATE            | Date of purchase                             |
| totalPrice       | DECIMAL(10, 2)  | Total price of the purchase                  |
| paymentMethod    | VARCHAR(50)     | Payment method (e.g., Credit or Debit card)  |
| created          | TIMESTAMP       | Created date and time                        |
| updated          | TIMESTAMP       | Last updated date and time                   |



# This code block only contains our Query information.
` SQL
-- This is the code block which content all the sql information
-- Here, we are writing our Create Read, Update and Delete SQL queries
-- As a Project Lead, Mahendra Patel is responsile to design and define the database Schema
-- Creating table for Customers: -

CREATE TABLE Customers (
  custId SERIAL PRIMARY KEY,
  fName VARCHAR(50) NOT NULL,
  lName VARCHAR(50) NOT NULL,
  emailId VARCHAR(100) NOT NULL UNIQUE,
  cellNumb VARCHAR(20),
  custAddress VARCHAR(500),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--Creating table for Authors: -

CREATE TABLE Authors (
  authId SERIAL PRIMARY KEY,
  fName VARCHAR(50) NOT NULL,
  lName VARCHAR(50) NOT NULL,
  biography TEXT,
  birthDate DATE,
  nationality VARCHAR(50),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Creating table for Publishers: -

CREATE TABLE Publishers (
  publisherId SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  publisherAddress VARCHAR(500),
  websiteUrl VARCHAR(100),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Create the Books table (Migration Script)
CREATE TABLE Books (
  bookId SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  bookLanguage VARCHAR(20) NOT NULL,
  authId INTEGER NOT NULL REFERENCES Authors(authId),
  publisherId INTEGER NOT NULL REFERENCES Publishers(publisherId),
  genre VARCHAR(50) NOT NULL,
  publicationDate DATE NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  pageCount INTEGER,
  isbn VARCHAR(20),
  bookDescription TEXT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  format VARCHAR(50)
);

-- Creating a table for Books: -

CREATE TABLE Books (
  bookId SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  bookLanguage VARCHAR (20) NOT NULL,
  authId INTEGER NOT NULL REFERENCES Authors(authId),
  publisherId INTEGER NOT NULL REFERENCES Publishers(publisherId),
  genre VARCHAR(50) NOT NULL,
  publicationDate DATE NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  pageCount INTEGER,
  isbn VARCHAR(20),
  bookDescription TEXT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  format VARCHAR(50)
);

-- Creating a table for Reviews: -

CREATE TABLE Reviews (
  reviewId SERIAL PRIMARY KEY,
  custId INTEGER NOT NULL REFERENCES Customers(custId),
  bookId INTEGER NOT NULL REFERENCES Books(bookId),
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  reviewText TEXT,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Creating a table for Purchases: -

CREATE TABLE Purchases (
  purchaseId SERIAL PRIMARY KEY,
  custId INTEGER NOT NULL REFERENCES Customers(custId),
  bookId INTEGER NOT NULL REFERENCES Books(bookId),
  purchaseDate DATE NOT NULL,
  totalPrice DECIMAL(10, 2) NOT NULL,
  paymentMethod VARCHAR(50),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

-- End of, create table query
-- Below, begins the inserting of sample data into individual tables
--  Sample data collected by Anish Reddy
-- Inserting sample data into the Books table.

-- Insert at least three rows of data into the Books table (Migration)
INSERT INTO Books (title, bookLanguage, authId, publisherId, genre, publicationDate, price, pageCount, isbn, bookDescription, format)
VALUES
  ('The Great Gatsby', 'English', 1, 1, 'Fiction', '1925-04-10', 10.99, 180, '9780743273565', 'A novel set in the Jazz Age that tells the story of Jay Gatsby and his unrequited love for Daisy Buchanan.', 'Hardcover'),
  ('To Kill a Mockingbird', 'English', 2, 2, 'Fiction', '1960-07-11', 7.99, 281, '9780061120084', 'A novel about the serious issues of rape and racial inequality, told through the eyes of a young girl in the Deep South.', 'Paperback'),
  ('1984', 'English', 3, 3, 'Dystopian', '1949-06-08', 8.99, 328, '9780451524935', 'A dystopian novel set in a totalitarian society ruled by Big Brother.', 'Ebook');

INSERT INTO Books (title, bookLanguage, authId, publisherId, genre, publicationDate, price, pageCount, isbn, bookDescription,format) VALUES
('1984', 'English', 1, 1, 'Dystopian', '1949-06-08', 15.99, 328, '9780451524935', 'A dystopian social science fiction novel and cautionary tale.', 'physical books'),
('Pride and Prejudice', 'English', 2, 2, 'Romance', '1813-01-28', 12.99, 279, '9780141199078', 'A romantic novel of manners written by Jane Austen.', 'physical books'),
('The Adventures of Huckleberry Finn', 'English', 3, 3, 'Adventure', '1884-12-10', 14.99, 366, '9780143107323', 'A novel by Mark Twain, a sequel to The Adventures of Tom Sawyer.', 'physical books'),
('The Old Man and the Sea', 'English', 4, 1, 'Literary Fiction', '1952-09-01', 11.99, 127, '9780684830490', 'A short novel written by the American author Ernest Hemingway.', 'physical books'),
('Harry Potter and the Philosopher', 'English', 5, 2, 'Fantasy', '1997-06-26', 29.99, 223, '9780747532743', 'The first novel in the Harry Potter series and J.K. Rowlings debut novel.', 'physical books'),
('The Great Gatsby', 'English', 6, 3, 'Tragedy', '1925-04-10', 10.99, 180, '9780743273565', 'A 1925 novel written by American author F. Scott Fitzgerald.', 'physical books'),
('Murder on the Orient Express', 'English', 7, 1, 'Mystery', '1934-01-01', 9.99, 256, '9780062073501', 'A detective novel by English writer Agatha Christie featuring Hercule Poirot.', 'physical books'),
('A Tale of Two Cities', 'English', 8, 2, 'Historical', '1859-04-30', 13.99, 489, '9780141439600', 'A historical novel by Charles Dickens, set in London and Paris.', 'physical books'),
('War and Peace', 'Russian', 9, 3, 'Historical Fiction', '1869-01-01', 19.99, 1225, '9781400079988', 'A novel by the Russian author Leo Tolstoy.' ,'e-books'),
('One Hundred Years of Solitude', 'Spanish', 10, 1, 'Magical Realism', '1967-05-30', 18.99, 417, '9780060883287', 'A landmark 1967 novel by Colombian author Gabriel García Márquez.' ,'e-books'),
('To Kill a Mockingbird', 'English', 11, 2, 'Southern Gothic', '1960-07-11', 14.99, 281, '9780061120084', 'A novel by Harper Lee published in 1960.' ,'e-books'),
('Moby-Dick', 'English', 12, 3, 'Adventure', '1851-10-18', 11.99, 720, '9780142437247', 'A novel by Herman Melville.' ,'e-books'),
('The Hobbit', 'English', 13, 1, 'Fantasy', '1937-09-21', 14.99, 310, '9780547928227', 'A children fantasy novel by English author J. R. R. Tolkien.' ,'e-books'),
('Mrs Dalloway', 'English', 14, 2, 'Modernist', '1925-05-14', 13.99, 296, '9780156628709', 'A novel by Virginia Woolf that details a day in the life of Clarissa Dalloway.' ,'e-books'),
('The Raven', 'English', 15, 3, 'Poetry', '1845-01-29', 6.99, 64, '9780486266855', 'A narrative poem by Edgar Allan Poe.' ,'e-books'),
('Wuthering Heights', 'English', 16, 1, 'Gothic', '1847-12-01', 12.99, 416, '9780141439556', 'The only novel by Emily Brontë.' ,'e-books'),
('Ulysses', 'English', 17, 2, 'Modernist', '1922-02-02', 16.99, 730, '9780199535675', 'A modernist novel by Irish writer James Joyce.' ,'e-books'),
('The Time Machine', 'English', 18, 3, 'Science Fiction', '1895-01-01', 9.99, 118, '9780451528551', 'A science fiction novel by H. G. Wells.' ,'e-books'),
('The Picture of Dorian Gray', 'English', 19, 1, 'Philosophical Fiction', '1890-06-20', 10.99, 254, '9780141442464', 'A philosophical novel by Oscar Wilde.' ,'e-books'),
('Crime and Punishment', 'Russian', 20, 2, 'Psychological Fiction', '1866-01-01', 14.99, 671, '9780143107637', 'A novel by the Russian author Fyodor Dostoevsky.' ,'e-books'),
('Beloved', 'English', 21, 3, 'Historical Fiction', '1987-09-01', 12.99, 324, '9781400033416', 'A novel by the American writer Toni Morrison.' ,'e-books'),
('Desolación', 'Spanish', 22, 1, 'Poetry', '1922-01-01', 9.99, 256, '9789560003107', 'A book of poetry by the Chilean poet Gabriela Mistral.' 'e-books'),
('The Catcher in the Rye', 'English', 23, 2, 'Literary Fiction', '1951-07-16', 8.99, 277, '9780316769488', 'A novel by J. D. Salinger.' ,'e-books'),
('The Handmaid Tale', 'English', 24, 3, 'Dystopian', '1985-09-01', 15.99, 311, '9780385490818', 'A novel by Canadian author Margaret Atwood.' ,'e-books'),
('The House of the Spirits', 'Spanish', 25, 1, 'Magical Realism', '1982-01-01', 17.99, 481, '9780553383805', 'The debut novel of Isabel Allende.' ,'e-books'),
('Never Let Me Go', 'English', 26, 2, 'Science Fiction', '2005-03-03', 12.99, 288, '9781400078776', 'A dystopian science fiction novel by British author Kazuo Ishiguro.', 'audiobooks'),
('Runaway', 'English', 27, 3, 'Short Stories', '2004-11-17', 14.99, 352, '9781400077915', 'A book of short stories by Canadian author Alice Munro.', 'audiobooks'),
('My Name Is Red', 'Turkish', 28, 1, 'Historical', '1998-01-01', 13.99, 508, '9780375706851', 'A Turkish novel by writer Orhan Pamuk.', 'audiobooks'),
('Midnights Children', 'English', 29, 2, 'Historical Fiction', '1981-04-19', 16.99, 647, '9780812976533', 'A 1981 novel by British Indian author Salman Rushdie.', 'audiobooks'),
('The God of Small Things', 'English', 30, 3, 'Literary Fiction', '1997-04-01', 11.99, 321, '9780679457312', 'A novel by Indian writer Arundhati Roy.', 'audiobooks');

-- Inserting sample data into the Publishers table.

INSERT INTO Publishers (name, publisherAddress, websiteUrl) VALUES
('Penguin Random House', '1745 Broadway, New York, NY 10019, USA', 'www.penguinrandomhouse.com'),
('HarperCollins', '195 Broadway, New York, NY 10007, USA', 'www.harpercollins.com'),
('Simon & Schuster', '1230 Avenue of the Americas, New York, NY 10020, USA', 'www.simonandschuster.com'),
('Hachette Livre', '58 rue Jean Bleuzen, 92170 Vanves, France', 'www.hachette.com'),
('Macmillan Publishers', '120 Broadway, New York, NY 10271, USA', 'us.macmillan.com'),
('Scholastic', '557 Broadway, New York, NY 10012, USA', 'www.scholastic.com'),
('Bloomsbury', '50 Bedford Square, London WC1B 3DP, UK', 'www.bloomsbury.com'),
('Pearson Education', '80 Strand, London, WC2R 0RL, UK', 'www.pearson.com'),
('Wiley', '111 River Street, Hoboken, NJ 07030, USA', 'www.wiley.com'),
('Springer', 'Tiergartenstraße 17, 69121 Heidelberg, Germany', 'www.springer.com'),
('Oxford University Press', 'Great Clarendon Street, Oxford OX2 6DP, UK', 'global.oup.com'),
('Cambridge University Press', 'University Printing House, Shaftesbury Road, Cambridge, CB2 8BS, UK', 'www.cambridge.org'),
('McGraw-Hill Education', '2 Penn Plaza, New York, NY 10121, USA', 'www.mheducation.com'),
('Cengage', '200 Pier 4 Blvd, Suite 400, Boston, MA 02210, USA', 'www.cengage.com'),
('Routledge', '711 Third Avenue, New York, NY 10017, USA', 'www.routledge.com'),
('SAGE Publications', '2455 Teller Road, Thousand Oaks, CA 91320, USA', 'us.sagepub.com'),
('Elsevier', 'Radarweg 29, 1043 NX Amsterdam, Netherlands', 'www.elsevier.com'),
('Taylor & Francis', '2&4 Park Square, Milton Park, Abingdon, OX14 4RN, UK', 'www.taylorandfrancis.com'),
('Thomson Reuters', '3 Times Square, New York, NY 10036, USA', 'www.thomsonreuters.com'),
('Johns Hopkins University Press', '2715 North Charles Street, Baltimore, MD 21218, USA', 'www.press.jhu.edu'),
('University of California Press', '155 Grand Avenue, Suite 400, Oakland, CA 94612, USA', 'www.ucpress.edu'),
('Duke University Press', '905 W Main St, Durham, NC 27701, USA', 'www.dukeupress.edu'),
('MIT Press', '1 Rogers Street, Cambridge, MA 02142, USA', 'mitpress.mit.edu'),
('Stanford University Press', '485 Broadway, First Floor, Redwood City, CA 94063-8460, USA', 'www.sup.org'),
('University of Chicago Press', '1427 E. 60th Street, Chicago, IL 60637, USA', 'www.press.uchicago.edu'),
('Princeton University Press', '41 William Street, Princeton, NJ 08540, USA', 'press.princeton.edu'),
('Yale University Press', '302 Temple Street, New Haven, CT 06511, USA', 'yalebooks.yale.edu'),
('Columbia University Press', '61 W. 62nd Street, New York, NY 10023, USA', 'cup.columbia.edu'),
('Indiana University Press', '601 N Morton St, Bloomington, IN 47404, USA', 'iupress.org'),
('University of Texas Press', 'P.O. Box 7819, Austin, TX 78713-7819, USA', 'utpress.utexas.edu');

--Inserting sample data into the Customer table.

INSERT INTO Customers (fName, lName, emailId, cellNumb, custAddress) VALUES
('John', 'Doe', 'john.doe@example.com', '123-456-7890', '123 Main St, Anytown, USA'),
('Jane', 'Smith', 'jane.smith@example.com', '123-456-7891', '456 Elm St, Anytown, CHINA'),
('Michael', 'Johnson', 'michael.johnson@example.com', '123-456-7892', '789 Oak St, Anytown, CA'),
('Emily', 'Brown', 'emily.brown@example.com', '123-456-7893', '101 Maple St, Anytown, USA'),
('David', 'Williams', 'david.williams@example.com', '123-456-7894', '202 Pine St, Anytown, USA'),
('Sarah', 'Jones', 'sarah.jones@example.com', '123-456-7895', '303 Cedar St, Anytown, USA'),
('Daniel', 'Garcia', 'daniel.garcia@example.com', '123-456-7896', '404 Birch St, Anytown, USA'),
('Laura', 'Martinez', 'laura.martinez@example.com', '123-456-7897', '505 Spruce St, Anytown, CA'),
('Robert', 'Rodriguez', 'robert.rodriguez@example.com', '123-456-7898', '606 Ash St, Anytown, USA'),
('Sophia', 'Lopez', 'sophia.lopez@example.com', '123-456-7899', '707 Fir St, Anytown, USA'),
('James', 'Gonzalez', 'james.gonzalez@example.com', '123-456-7800', '808 Willow St, Anytown, USA'),
('Olivia', 'Hernandez', 'olivia.hernandez@example.com', '123-456-7801', '909 Redwood St, Anytown, ASUTRALIYA'),
('Ethan', 'Wilson', 'ethan.wilson@example.com', '123-456-7802', '1010 Alder St, Anytown, USA'),
('Isabella', 'Anderson', 'isabella.anderson@example.com', '123-456-7803', '1111 Cypress St, Anytown, USA'),
('Matthew', 'Thomas', 'matthew.thomas@example.com', '123-456-7804', '1212 Hickory St, Anytown, USA'),
('Ava', 'Taylor', 'ava.taylor@example.com', '123-456-7805', '1313 Poplar St, Anytown, USA'),
('Joshua', 'Moore', 'joshua.moore@example.com', '123-456-7806', '1414 Palm St, Anytown, USA'),
('Mia', 'Jackson', 'mia.jackson@example.com', '123-456-7807', '1515 Sycamore St, Anytown, USA'),
('Alexander', 'Martin', 'alexander.martin@example.com', '123-456-7808', '1616 Pine St, Anytown, USA'),
('Amelia', 'Lee', 'amelia.lee@example.com', '123-456-7809', '1717 Oak St, Anytown, USA'),
('Christopher', 'Perez', 'christopher.perez@example.com', '123-456-7810', '1818 Elm St, Anytown, USA'),
('Charlotte', 'Thompson', 'charlotte.thompson@example.com', '123-456-7811', '1919 Maple St, Anytown, USA'),
('Andrew', 'White', 'andrew.white@example.com', '123-456-7812', '2020 Birch St, Anytown, USA'),
('Harper', 'Harris', 'harper.harris@example.com', '123-456-7813', '2121 Cedar St, Anytown, USA'),
('Joseph', 'Sanchez', 'joseph.sanchez@example.com', '123-456-7814', '2222 Spruce St, Anytown, USA'),
('Evelyn', 'Clark', 'evelyn.clark@example.com', '123-456-7815', '2323 Ash St, Anytown, USA'),
('Benjamin', 'Ramirez', 'benjamin.ramirez@example.com', '123-456-7816', '2424 Fir St, Anytown, USA'),
('Abigail', 'Lewis', 'abigail.lewis@example.com', '123-456-7817', '2525 Willow St, Anytown, USA'),
('William', 'Robinson', 'william.robinson@example.com', '123-456-7818', '2626 Redwood St, Anytown, INDIA'),
('Ella', 'Walker', 'ella.walker@example.com', '123-456-7819', '2727 Alder St, Anytown, CHINA');

-- Inserting sample data into the Author's table.

INSERT INTO Authors (fName, lName, biography, birthDate, nationality) VALUES
('George', 'Orwell', 'English novelist and essayist', '1903-06-25', 'British'),
('Jane', 'Austen', 'English novelist known for her novels', '1775-12-16', 'British'),
('Mark', 'Twain', 'American writer, humorist, entrepreneur', '1835-11-30', 'American'),
('Ernest', 'Hemingway', 'American novelist and short story writer', '1899-07-21', 'American'),
('J.K.', 'Rowling', 'British author, best known for the Harry Potter series', '1965-07-31', 'British'),
('F. Scott', 'Fitzgerald', 'American novelist and short story writer', '1896-09-24', 'American'),
('Agatha', 'Christie', 'English writer known for her detective novels', '1890-09-15', 'British'),
('Charles', 'Dickens', 'English writer and social critic', '1812-02-07', 'British'),
('Leo', 'Tolstoy', 'Russian writer who is regarded as one of the greatest authors of all time', '1828-09-09', 'Russian'),
('Gabriel', 'Garcia Marquez', 'Colombian novelist and short story writer', '1927-03-06', 'Colombian'),
('Harper', 'Lee', 'American novelist known for To Kill a Mockingbird', '1926-04-28', 'American'),
('Herman', 'Melville', 'American novelist and poet', '1819-08-01', 'American'),
('J.R.R.', 'Tolkien', 'English writer, poet, and philologist', '1892-01-03', 'British'),
('Virginia', 'Woolf', 'English writer and modernist pioneer', '1882-01-25', 'British'),
('Edgar Allan', 'Poe', 'American writer, editor, and literary critic', '1809-01-19', 'American'),
('Emily', 'Brontë', 'English novelist and poet', '1818-07-30', 'British'),
('James', 'Joyce', 'Irish novelist and poet', '1882-02-02', 'Irish'),
('H.G.', 'Wells', 'English writer in many genres', '1866-09-21', 'British'),
('Oscar', 'Wilde', 'Irish poet and playwright', '1854-10-16', 'Irish'),
('Fyodor', 'Dostoevsky', 'Russian novelist, short story writer, and essayist', '1821-11-11', 'Russian'),
('Toni', 'Morrison', 'American novelist and Nobel Prize winner', '1931-02-18', 'American'),
('Gabriel', 'Mistral', 'Chilean poet-diplomat, educator, and humanist', '1889-04-07', 'Chilean'),
('J.D.', 'Salinger', 'American writer known for his novel The Catcher in the Rye', '1919-01-01', 'American'),
('Margaret', 'Atwood', 'Canadian poet, novelist, literary critic', '1939-11-18', 'Canadian'),
('Isabel', 'Allende', 'Chilean writer known for her novels', '1942-08-02', 'Chilean'),
('Kazuo', 'Ishiguro', 'British novelist, born in Nagasaki, Japan', '1954-11-08', 'British'),
('Alice', 'Munro', 'Canadian short story writer', '1931-07-10', 'Canadian'),
('Orhan', 'Pamuk', 'Turkish novelist, screenwriter, academic', '1952-06-07', 'Turkish'),
('Salman', 'Rushdie', 'British-Indian novelist and essayist', '1947-06-19', 'British-Indian'),
('Arundhati', 'Roy', 'Indian author best known for her novel The God of Small Things', '1961-11-24', 'Indian');


--- Inserting sample data into the Reviews table.

INSERT INTO Reviews (custId, booked, rating, review text) VALUES
(1, 1, 5, 'A haunting and profound book.'),
(2, 2, 4, 'A delightful read with excellent social commentary.'),
(3, 3, 5, 'An adventurous journey with deep themes.'),
(4, 4, 3, 'A well-written book but not my favorite.'),
(5, 5, 5, 'Magical and captivating.'),
(6, 6, 4, 'A tragic yet beautifully written story.'),
(7, 7, 4, 'A gripping mystery.'),
(8, 8, 5, 'An epic tale of love and sacrifice.'),
(9, 9, 5, 'A monumental piece of literature.'),
(10, 10, 4, 'A mesmerizing and complex narrative.'),
(11, 11, 5, 'A timeless classic.'),
(12, 12, 3, 'An intricate and demanding read.'),
(13, 13, 5, 'A wonderful and enchanting book.'),
(14, 14, 4, 'A powerful modernist work.'),
(15, 15, 4, 'A masterful piece of poetry.'),
(16, 16, 5, 'A dark and brooding masterpiece.'),
(17, 17, 4, 'A challenging but rewarding novel.'),
(18, 18, 5, 'A pioneering science fiction novel.'),
(19, 19, 4, 'A fascinating and thought-provoking story.'),
(20, 20, 5, 'A gripping psychological drama.'),
(21, 21, 5, 'A profound and moving narrative.'),
(22, 22, 4, 'A beautifully crafted book of poetry.'),
(23, 23, 4, 'A compelling and controversial novel.'),
(24, 24, 5, 'A powerful and prescient dystopian tale.'),
(25, 25, 4, 'A richly woven magical realist novel.'),
(26, 26, 4, 'A thought-provoking and emotional book.'),
(27, 27, 5, 'A brilliant collection of short stories.'),
(28, 28, 5, 'An intriguing historical novel.'),
(29, 29, 4, 'A vivid and imaginative narrative.'),
(30, 30, 5, 'A beautifully written and compelling story.');


-- Inserting sample data into the Purchases table.

INSERT INTO Purchases (custId, booked, purchase date, totalPrice, payment method) VALUES
(1, 1, '2023-01-01', 15.99, 'Credit Card'),
(2, 2, '2023-01-02', 12.99, 'Credit Card'),
(3, 3, '2023-01-03', 14.99, 'PayPal'),
(4, 4, '2023-01-04', 11.99, 'Credit Card'),
(5, 5, '2023-01-05', 29.99, 'Debit Card'),
(6, 6, '2023-01-06', 10.99, 'Credit Card'),
(7, 7, '2023-01-07', 9.99, 'PayPal'),
(8, 8, '2023-01-08', 13.99, 'Credit Card'),
(9, 9, '2023-01-09', 19.99, 'Credit Card'),
(10, 10, '2023-01-10', 18.99, 'Debit Card'),
(11, 11, '2023-01-11', 14.99, 'Credit Card'),
(12, 12, '2023-01-12', 11.99, 'PayPal'),
(13, 13, '2023-01-13', 14.99, 'Credit Card'),
(14, 14, '2023-01-14', 13.99, 'Debit Card'),
(15, 15, '2023-01-15', 6.99, 'Credit Card'),
(16, 16, '2023-01-16', 12.99, 'PayPal'),
(17, 17, '2023-01-17', 16.99, 'Credit Card'),
(18, 18, '2023-01-18', 9.99, 'Debit Card'),
(19, 19, '2023-01-19', 10.99, 'Credit Card'),
(20, 20, '2023-01-20', 14.99, 'Credit Card'),
(21, 21, '2023-01-21', 12.99, 'PayPal'),
(22, 22, '2023-01-22', 9.99, 'Credit Card'),
(23, 23, '2023-01-23', 8.99, 'Debit Card'),
(24, 24, '2023-01-24', 15.99, 'Credit Card'),
(25, 25, '2023-01-25', 17.99, 'PayPal'),
(26, 26, '2023-01-26', 12.99, 'Credit Card'),
(27, 27, '2023-01-27', 14.99, 'Debit Card'),
(28, 28, '2023-01-28', 13.99, 'Credit Card'),
(29, 29, '2023-01-29', 16.99, 'Credit Card'),
(30, 30, '2023-01-30', 11.99, 'PayPal');

-- End of the insert table query
-- Here is the beginning of Updating  the sample data into individual tables and testing all sample data
-- This all sample data collected by Swati

-- Update Authors Table

SET
fName = 'Mahendra',
lName = 'Patel',
biography = 'Updated biography text.',
birthDate = '2000-01-01',
nationality = 'UpdatedNationality',
updated = CURRENT_TIMESTAMP
WHERE
authId = 1;

-- Update Publishers Table

SET
name = 'Mahendra',
publisherAddress = ' Union St Waterloo CA',
websiteUrl = 'www.updatedpublisher.com',
updated = CURRENT_TIMESTAMP
WHERE
publisherId = 7;

-- Update Books Table

SET
title = 'My Life My Rules',
bookLanguage = 'Hindi',
authId = 1,
publisherId = 1,
genre = '3',
publicationDate = '2000-01-01',
price = 79.99,
pageCount = 777,
isbn = '9780000000000',
bookDescription = 'Updated description text.',
updated = CURRENT_TIMESTAMP
WHERE
bookId = 1;

-- Update Reviews Table

SET
custId = 2,
bookId = 9,
rating = 5,
reviewText = 'Updated review text.',
updated = CURRENT_TIMESTAMP
WHERE
reviewId = 1;

-- Update PURCHASES Table

SET TOTALPRICE = 79.99,
PAYMENTMETHOD = 'Credit Card CC'
WHERE PURCHASEID = 1;

--This is for deleting or dropping any table from the database.

Drop table PURCHASES; -- If the end user wants to drop or delete any of the tables he could use the same SQL just replace the table name.

-- We have successfully executed every query in our database and finished the CRUD process for all necessary tables.


CREATE TABLE Customers (
  custId SERIAL PRIMARY KEY,
  fName VARCHAR(50) NOT NULL,
  lName VARCHAR(50) NOT NULL,
  emailId VARCHAR(100) NOT NULL UNIQUE,
  cellNumb VARCHAR(20),
  custAddress VARCHAR(500),
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- Below, are the list of requirements that are to be satisfied for the Project.
-- As a the last part was tested by me (Mahendra Patel)
-- Q.1 Power writers (authors) with more than 10 books in the same genre published within the last 10 years.
-- Answer: -

SELECT
a.authId,
a.fName,
a.lName,
b.genre,
COUNT(b.bookId) AS book_count
FROM
Authors a
JOIN
Books b ON a.authId = b.authId
WHERE
b.publicationDate >= CURRENT_DATE - INTERVAL '10 years'
GROUP BY
a.authId, a.fName, a.lName, b.genre
HAVING
COUNT(b.bookId) > 10;

--By running this query, the user could fetch around single row sample data.

-- Q.2. Loyal Customers who have spent more than 10 dollars in the last year?
-- Answer: - 

SELECT
c.custId,
c.fName,
c.lName,
SUM(p.totalPrice) AS total_spent
FROM
Customers c
JOIN
Purchases p ON c.custId = p.custId
WHERE
p.purchaseDate >= CURRENT_DATE - INTERVAL '1 year'
GROUP BY
c.custId, c.fName, c.lName
HAVING
SUM(p.totalPrice) > 10.00;

-- By running this query, the user could fetch around 14 sample data.

-- Q.3 Well Reviewed books that have a better user rating than average
-- Ans: -

WITH average_rating AS (
SELECT AVG(rating) AS avg_rating
FROM Reviews
)
SELECT
b.bookId,
b.title,
AVG(r.rating) AS average_rating
FROM
Books b
JOIN
Reviews r ON b.bookId = r.bookId
GROUP BY
b.bookId, b.title
HAVING
AVG(r.rating) > (SELECT avg_rating FROM average_rating);

-- By running this query, the user could fetch around 14 sample data.

-- Q.4 The most popular genre by sales?
-- Ans: -

SELECT
b.genre,
COUNT(p.purchaseId) AS total_sales
FROM
Books b
JOIN
Purchases p ON b.bookId = p.bookId
GROUP BY
b.genre
ORDER BY
total_sales DESC
LIMIT 1;

-- By running this query, the user could fetch around 1 sample data.

-- Q.5 The 10 most recent posted reviews by Customers
-- Ans: -

SELECT
r.reviewId,
r.custId,
r.bookId,
r.rating,
r.reviewText,
r.created
FROM
Reviews r
ORDER BY
r.created DESC
LIMIT 10;

-- By running this query, the user could fetch around 10 sample data.

-- Here is the end of our code block which means the user has to execute all queries in PostgreSQL only as I am working into Oracle 12c and 19c databases which don’t support some attribute typer like text format
-- Oracle supports only CLOB in place of text this is just for information.
-- We have practically executed all Queries in PostgreSQL to verify any syntax error.


`

# This code block only contains typescript information.

# It includes our OnlineBookstoreSystemConnection, OnlineBooksStoreSystem, and OnlineBookstoreSystemCrudOperation files.

 ` typescript
<!--This is our OnlineBookstoreSystemConnection file-->
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

export default pool;

<!--OnlineBooksStoreSystem-->

import { Pool, QueryResult } from 'pg';
import pool from './OnlineBookstoreSystemConnection.';

// We have constantly maintained camelCase as per attribute.

interface OnlineBookstoreSystem {
  bookId: number;
  title: string;
  bookLanguage: string;
  authId: number;
  publisherId: number;
  genre: string;
  publicationDate: string;
  price: number;
  pageCount: number;
  isbn: string;
  bookDescription: string;
  created: Date;
  updated: Date;
  format: string;
}

export interface Books {
  create(book: OnlineBookstoreSystem): Promise<OnlineBookstoreSystem>;
  read(bookId: number): Promise<OnlineBookstoreSystem | null>;
  update(bookId: number, book: Partial<OnlineBookstoreSystem>): Promise<OnlineBookstoreSystem | null>;
  delete(bookId: number): Promise<boolean>;
}

export class BookStore implements Books {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async create(book: OnlineBookstoreSystem): Promise<OnlineBookstoreSystem> {
    const query = `
      INSERT INTO books (bookId, title, bookLanguage, authId, publisherId, genre, publicationdate, price, pageCount, isbn, bookDescription, created, updated, format)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *`;
    const values = [
      book.bookId, book.title, book.bookLanguage, book.authId, book.publisherId,
      book.genre, book.publicationdate, book.price, book.pageCount, book.isbn,
      book.bookDescription, book.created, book.updated, book.format
    ];

    const result: QueryResult = await this.pool.query(query, values);
    return result.rows[0];
  }

  async read(bookId: number): Promise<OnlineBookstoreSystem | null> {
    const query = 'SELECT * FROM books WHERE bookId = $1';
    const result: QueryResult = await this.pool.query(query, [bookId]);
    return result.rows[0] || null;
  }

  async update(bookId: number, book: Partial<OnlineBookstoreSystem>): Promise<OnlineBookstoreSystem | null> {
    const fields = Object.keys(book).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = Object.values(book);
    const query = `
      UPDATE books SET ${fields}
      WHERE bookId = $1
      RETURNING *`;
    const result: QueryResult = await this.pool.query(query, [bookId, ...values]);
    return result.rows[0] || null;
  }

  async delete(bookId: number): Promise<boolean> {
    const query = 'DELETE FROM books WHERE bookId = $1';
    const result: QueryResult = await this.pool.query(query, [bookId]);
    return result.rowCount > 0;
  }
}


<!--OnlineBookstoreSystemCrudOperation-->

import { BookStore } from './books';
import pool from './OnlineBookstoreSystemConnection';

async function main() {
  const bookStore = new BookStore();

  // Create a new book
  const newBook: OnlineBookstoreSystem = {
    bookId: 1,
    title: 'My Life My Rules',
    bookLanguage: 'Hindi',
    authId: 1,
    publisherId: 1,
    genre: 3,
    publicationDate: '2000-01-01',
    price: 79.99,
    pageCount: 777,
    isbn: '9780000000000',
    bookDescription: 'Updated description text.',
    created: new Date(),
    updated: new Date(),
    format: 'Hardcover'
  };

  const createdBook = await bookStore.create(newBook);
  console.log('Created a new Book:', createdBook);

  const readBook = await bookStore.read(createdBook.bookId);
  console.log('Reading a Book:', readBook);

  const updatedBook = await bookStore.update(createdBook.bookId, { price: 79.99 });
  console.log('Updated a Book:', updatedBook);

  const deletedBook = await bookStore.delete(createdBook.bookId);
  console.log('Deleted a Book:', deletedBook);
}

main().catch(console.error);

// Adding the missing BookStore.ts which is the main file to call into or import into another class.

import { Pool, QueryResult } from 'pg';
import pool from './OnlineBookstoreSystemConnection';
import { OnlineBookstoreSystem } from './OnlineBookstoreSystemInterface';

// File Name = BookStore.ts

export interface Books {
  create(book: OnlineBookstoreSystem): Promise<OnlineBookstoreSystem>;
  read(bookId: number): Promise<OnlineBookstoreSystem | null>;
  update(bookId: number, book: Partial<OnlineBookstoreSystem>): Promise<OnlineBookstoreSystem | null>;
  delete(bookId: number): Promise<boolean>;
}

export class BookStore implements Books {
  private pool: Pool;

  constructor() {
    this.pool = pool;
  }

  async create(book: OnlineBookstoreSystem): Promise<OnlineBookstoreSystem> {
    const query = `
      INSERT INTO books (bookId, title, bookLanguage, authId, publisherId, genre, publicationDate, price, pageCount, isbn, bookDescription, created, updated, format)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *`;
    const values = [
      book.bookId, book.title, book.bookLanguage, book.authId, book.publisherId,
      book.genre, book.publicationDate, book.price, book.pageCount, book.isbn,
      book.bookDescription, book.created, book.updated, book.format
    ];

    const result: QueryResult = await this.pool.query(query, values);
    return result.rows[0];
  }

  async read(bookId: number): Promise<OnlineBookstoreSystem | null> {
    const query = 'SELECT * FROM books WHERE bookId = $1';
    const result: QueryResult = await this.pool.query(query, [bookId]);
    return result.rows[0] || null;
  }

  async update(bookId: number, book: Partial<OnlineBookstoreSystem>): Promise<OnlineBookstoreSystem | null> {
    const fields = Object.keys(book).map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = Object.values(book);
    const query = `
      UPDATE books SET ${fields}
      WHERE bookId = $1
      RETURNING *`;
    const result: QueryResult = await this.pool.query(query, [bookId, ...values]);
    return result.rows[0] || null;
  }

  async delete(bookId: number): Promise<boolean> {
    const query = 'DELETE FROM books WHERE bookId = $1';
    const result: QueryResult = await this.pool.query(query, [bookId]);
    return result.rowCount > 0;
  }
}

 `
