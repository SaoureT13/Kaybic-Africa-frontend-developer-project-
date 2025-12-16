import { useState, useEffect } from "react";
import TransactionCard from "./TransactionCard";
import { transactionAPI } from "../services/api";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Charger les transactions au montage du composant
    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await transactionAPI.getTransactions();
            setTransactions(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Gérer le retry en cas d'erreur
    const handleRetry = () => {
        fetchTransactions();
    };

    // État de chargement
    if (loading) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="font-outfit text-3xl font-bold text-text-primary m-0">
                        Transactions
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center py-15 px-5 text-center">
                    <div className="w-12 h-12 border-4 border-divider border-t-primary rounded-full animate-spin mb-5"></div>
                    <p className="font-poppins text-lg text-text-secondary my-2">
                        Chargement des transactions...
                    </p>
                </div>
            </div>
        );
    }

    // État d'erreur
    if (error) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="font-outfit text-3xl font-bold text-text-primary m-0">
                        Transactions
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center py-15 px-5 text-center">
                    <div className="text-6xl mb-4">⚠️</div>
                    <h2 className="font-outfit text-2xl font-semibold text-text-primary m-0 mb-3">
                        Une erreur est survenue
                    </h2>
                    <p className="font-poppins text-lg text-text-secondary my-2">
                        {error}
                    </p>
                    <button
                        className="mt-5 px-8 py-3 bg-primary text-white border-none rounded-button font-outfit text-lg font-medium cursor-pointer transition-all hover:bg-primary/80 active:scale-[0.98]"
                        onClick={handleRetry}
                    >
                        Réessayer
                    </button>
                </div>
            </div>
        );
    }

    // État vide
    if (transactions.length === 0) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="font-outfit text-3xl font-bold text-text-primary m-0">
                        Transactions
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center py-15 px-5 text-center">
                    <div className="text-6xl mb-4">📭</div>
                    <h2 className="font-outfit text-2xl font-semibold text-text-primary m-0 mb-3">
                        Aucune transaction
                    </h2>
                    <p className="font-poppins text-lg text-text-secondary my-2">
                        Vous n'avez pas encore effectué de transactions.
                    </p>
                </div>
            </div>
        );
    }

    // État avec données
    return (
        <div className="max-w-3xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="font-outfit text-3xl font-bold text-text-primary m-0">
                    Transactions
                </h1>
            </div>

            <div className="flex flex-col">
                {transactions.map((transaction) => (
                    <TransactionCard
                        key={transaction.id}
                        transaction={transaction}
                    />
                ))}
            </div>
        </div>
    );
};

export default TransactionList;
