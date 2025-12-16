const TransactionCard = ({ transaction }) => {
    const {
        reference,
        amount,
        status,
        from_operator,
        to_operator,
        created_at,
    } = transaction;

    // Formater la date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: "numeric", month: "long", year: "numeric" };
        return date.toLocaleDateString("fr-FR", options);
    };

    // Formater le montant
    const formatAmount = (amount) => {
        return new Intl.NumberFormat("fr-FR").format(amount);
    };

    // Obtenir le badge de statut
    const getStatusBadge = () => {
        if (status) {
            return (
                <span className="inline-flex items-center px-4 py-1.5 rounded-2xl border-[1.5px] border-status-success bg-[#4CAF50] text-status-success font-outfit text-sm font-medium">
                    Succès
                </span>
            );
        }
        return (
            <span className="inline-flex items-center px-4 py-1.5 rounded-2xl border-[1.5px] border-status-failed bg-[#F44336] text-status-failed font-outfit text-sm font-medium">
                Échoué
            </span>
        );
    };

    return (
        <div className="bg-[#EFF8FF] rounded-card p-4 mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img src="/img/easytransfert_logo.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-outfit text-lg font-semibold text-text-primary">
                            {reference}
                        </div>
                        <div className="font-poppins text-base text-text-secondary">
                            {formatDate(created_at)}
                        </div>
                    </div>
                </div>

                <div className="flex-shrink-0 mx-4">{getStatusBadge()}</div>

                <div className="flex-shrink-0 text-right">
                    <div className="font-outfit text-2xl font-bold text-text-primary">
                        {formatAmount(amount)} F
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end gap-2 mt-2">
                <span className="inline-block items-center w-12">
                    <img
                        src={`img/operators/${from_operator}_logo.png`}
                        className="rounded-sm"
                        alt={from_operator}
                    />
                </span>
                <span className="inline-flex items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="flex-shrink-0"
                    >
                        <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <span className="inline-block items-center w-12">
                    <img
                        src={`img/operators/${to_operator}_logo.png`}
                        alt={to_operator}
                        className="rounded-sm"
                    />
                </span>
            </div>
        </div>
    );
};

export default TransactionCard;
