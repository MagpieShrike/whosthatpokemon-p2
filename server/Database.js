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

    async createOne( id, name, nickname ) {
        if ( this.collection != null ) {
            return await this.collection.insertOne( { "id": id, "name": name, "nickname": nickname } );
        } else {
            return "could not connect to database";
        };
    };

    async readOne( name ) {
        if ( this.collection != null ) {
            const result = await this.collection.findOne( { "ISBN": ISBN } );
            if ( result != null ) {
                return result;
            } else {
                return { "pokemon": "not found" };
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
                    return { pokemon: cursorArray };
                } else {
                    return { pokemon: "none" };
                }
            });
            return result;
        } else {
            return "could not connect to database";
        }
    }

    async updateOne( name, nickname ) {
        if ( this.collection != null ) {
            const result = await this.collection.updateOne({"name": name}, {$set: {"nickname": nickname}});
            return { "nickname": nickname };

        } else {
            return "could not connect to database";
        };
    };

    async deleteOne( id ) {
        if (this.collection != null) {
            const result = await this.collection.deleteOne( { "id": id } );
            return { "pokemon": result.deletedCount };
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