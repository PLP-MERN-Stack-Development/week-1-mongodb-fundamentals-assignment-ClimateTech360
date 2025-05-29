const { MongoClient } = require("mongodb");

const uri = "mongodb://adminUser:Code198@localhost:27017/?authSource=admin";
const client = new MongoClient(uri);

async function runQueries() {
    try {
        await client.connect();
        const db = client.db("plp_bookstore");
        const books = db.collection("books");

        // 1. Find all memoirs
        const memoirs = await books.find({ genre: "Memoir" }).toArray();
        console.log("Memoirs:", memoirs);

        // 2. Find books published after 2000
        const recentBooks = await books.find({ published_year: { $gt: 2000 } }).toArray();
        console.log("Books after 2000:", recentBooks);

        // 3. Update the price of "Matigari"
        const update = await books.updateOne({ title: "Matigari" }, { $set: { price: 18.75 } });
        console.log("Price updated for Matigari:", update.modifiedCount);

        // 4. Delete "The River Between"
        const del = await books.deleteOne({ title: "The River Between" });
        console.log("Deleted 'The River Between':", del.deletedCount);

    } catch (err) {
        console.error("Query error:", err);
    } finally {
        await client.close();
    }
}

runQueries();