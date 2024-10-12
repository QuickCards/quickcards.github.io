import Dexie from "dexie";

export class MyDexie extends Dexie {
  constructor(databaseName) {
    super(databaseName ?? "maindb");
    this.version(1).stores({
      wallets: "++id, type, attachments, data",
    });
  }
}

const db = new MyDexie();

export default db;
