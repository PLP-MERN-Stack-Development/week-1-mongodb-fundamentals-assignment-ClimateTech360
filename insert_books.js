const { MongoClient } = require("mongodb");

const uri = "mongodb://adminUser:Code198@localhost:27017/?authSource=admin";
const client = new MongoClient(uri);

const books = [
  {
    title: "Weep Not, Child",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Historical Fiction",
    published_year: 1964,
    price: 11.99,
    in_stock: true,
    pages: 152,
    publisher: "Heinemann"
  },
  {
    title: "The River Between",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Literary Fiction",
    published_year: 1965,
    price: 10.50,
    in_stock: true,
    pages: 154,
    publisher: "Heinemann"
  },
  {
    title: "A Grain of Wheat",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Political Fiction",
    published_year: 1967,
    price: 13.00,
    in_stock: false,
    pages: 247,
    publisher: "Heinemann"
  },
  {
    title: "Petals of Blood",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Political Fiction",
    published_year: 1977,
    price: 14.75,
    in_stock: true,
    pages: 432,
    publisher: "Heinemann"
  },
  {
    title: "Devil on the Cross",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Satire",
    published_year: 1980,
    price: 12.99,
    in_stock: true,
    pages: 250,
    publisher: "Heinemann"
  },
  {
    title: "Matigari",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Political Allegory",
    published_year: 1987,
    price: 13.99,
    in_stock: false,
    pages: 180,
    publisher: "Heinemann"
  },
  {
    title: "Wizard of the Crow",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Magical Realism",
    published_year: 2006,
    price: 19.99,
    in_stock: true,
    pages: 768,
    publisher: "Harvill Secker"
  },
  {
    title: "Dreams in a Time of War",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Memoir",
    published_year: 2010,
    price: 15.99,
    in_stock: true,
    pages: 256,
    publisher: "Harvill Secker"
  },
  {
    title: "In the House of the Interpreter",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Memoir",
    published_year: 2012,
    price: 16.50,
    in_stock: true,
    pages: 240,
    publisher: "Pantheon Books"
  },
  {
    title: "Birth of a Dream Weaver",
    author: "Ngũgĩ wa Thiong'o",
    genre: "Memoir",
    published_year: 2016,
    price: 17.25,
    in_stock: true,
    pages: 256,
    publisher: "The New Press"
  }
];

async function insertBooks() {
  try {
    await client.connect();
    const db = client.db("plp_bookstore");
    const collection = db.collection("books");

    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books inserted successfully.`);
  } catch (err) {
    console.error("Insertion failed:", err);
  } finally {
    await client.close();
  }
}

insertBooks();