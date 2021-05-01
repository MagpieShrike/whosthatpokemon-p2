import MongoClient from 'mongodb';

const URL = "mongodb+srv://HalieChalkley:UHXMD3Jo0mDX5ovh@cluster0.yuzwq.mongodb.net";

class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this. collection = null;
    };

    async connect( database, collection ) {
        this.connection = await MongoClient.connect( URL, { useUnifiedTopology: true } );
        this.database = this.connection.db( database );
        this.collection = this.database.collection( collection );
    };

    async createOne( ISBN, title, author, description ) {
        if ( this.collection != null ) {
            return await this.collection.insertOne( { "ISBN": ISBN, "title": title, "author": author, "description": description } );
        } else {
            return "could not connect to database";
        };
    };

    async readOne( ISBN ) {
        if ( this.collection != null ) {
            const result = await this.collection.findOne( { "ISBN": ISBN } );
            if ( result != null ) {
                return result;
            } else {
                return { "book": "not found" };
            }
        } else {
            return "could not connect to database";
        };
    };

     async readMany( query ) {
        if ( this.collection != null ) {
            const result = await this.collection.find( query ).toArray()
            .then((cursorArray) => {
                if ( cursorArray.length != 0 ) {
                    return { books: cursorArray };
                } else {
                    return { books: "none" };
                }
            });
            return result;
        } else {
            return "could not connect to database";
        }
    }

    async deleteOne( ISBN ) {
        if (this.collection != null) {
            const result = await this.collection.deleteOne( { "ISBN": ISBN } );
            return { "books": result.deletedCount };
        } else {
            return "could not connect to database";
        };
    };

    close() {
        if(this.collection != null) {
          this.connection.close();
        }
    }
};

export default Database;