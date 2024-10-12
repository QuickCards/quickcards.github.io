import db from "./db";

export class WalletOperations {
  static async getById(id) {
    if (!id) return undefined;

    return await db.wallets.get(id);
  }

  static getObj(wallets, id) {
    return wallets.find((item) => item.id === id);
  }

  static async get() {
    return await db.wallets.toArray();
  }

  static async create(wallet) {
    return await db.transaction("rw", db.wallets, async () => {
      try {
        // const newWallet = { ...wallet, amount: 0 };
        const newWallet = {
          type: "CREDIT CARD",
          attachments: [
            {
              name: "file a",
              data: new Blob(),
            },
          ],
          data: {
            hi: "hello",
          },
        };
        const walletId = await db.wallets.add(newWallet);
        if (!walletId) throw new Error("Wallet creation failed");

        // gets updated wallet
        return await WalletOperations.getById(walletId);
      } catch (error) {
        console.log(error);
        throw error;
      }
    });
  }

  static async remove(id) {
    return await db.transaction("rw", db.wallets, async () => {
      try {
        const ret = await db.wallets.where("id").equals(id).delete();

        return id;
      } catch (error) {
        console.log(error);
        throw error;
      }
    });
  }

  static async edit(wallet) {
    return await db.transaction("rw", db.wallets, async () => {
      try {
        const ret = await db.wallets.update(wallet.id, {
          type: wallet.type,
          data: wallet.data,
          attachments: wallet.attachments,
        });

        // Gets the wallet
        const updatedWallet = await db.wallets.get(wallet.id);

        return ret === 1 && updatedWallet ? updatedWallet : null;
      } catch (error) {
        console.log(error);
        throw error;
      }
    });
  }

  static async destroy() {
    try {
      await db.wallets.clear();
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
