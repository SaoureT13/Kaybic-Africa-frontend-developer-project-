import { mockTransactions } from "../mockData";

// Simule un délai réseau
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Simule une erreur aléatoire
const shouldSimulateError = () => Math.random() < 0.1;

export const transactionAPI = {
    // Récupère toutes les transactions
    async getTransactions() {
        await delay(1000);

        if (shouldSimulateError()) {
            throw new Error(
                "Erreur de connexion au serveur. Veuillez réessayer."
            );
        }

        return {
            success: true,
            data: mockTransactions,
            message: "Transactions récupérées avec succès",
        };
    },

    // Récupère une transaction par ID
    // TODO: Implémenter s'il reste du temps
    async getTransactionById(id) {
        await delay(500);

        if (shouldSimulateError()) {
            throw new Error("Impossible de récupérer la transaction.");
        }

        const transaction = mockTransactions.find((t) => t.id === id);

        if (!transaction) {
            throw new Error("Transaction introuvable.");
        }

        return {
            success: true,
            data: transaction,
            message: "Transaction trouvée",
        };
    },
};
