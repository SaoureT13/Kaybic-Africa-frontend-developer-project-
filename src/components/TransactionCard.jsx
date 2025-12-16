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
                <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-green-500 bg-green-500 text-white font-outfit text-xs sm:text-sm font-medium shadow-sm">
                    Succès
                </span>
            );
        }
        return (
            <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-red-500 bg-red-500 text-white font-outfit text-xs sm:text-sm font-medium shadow-sm">
                Échoué
            </span>
        );
    };

    return (
        <div className="bg-[#EFF8FF] rounded-lg sm:rounded-card p-3 sm:p-4 mb-3 sm:mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:cursor-pointer">
            {/* Header Section - Responsive */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                {/* Left: Logo + Reference + Date */}
                <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0">
                        <img
                            src="/img/easytransfert_logo.png"
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 flex-1">
                        <div className="font-outfit text-sm sm:text-base md:text-lg font-semibold text-text-primary truncate">
                            {reference}
                        </div>
                        <div className="font-poppins text-xs sm:text-sm text-text-secondary">
                            {formatDate(created_at)}
                        </div>
                    </div>
                </div>

                {/* Center/Right: Badge + Amount - Responsive layout */}
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
                    <div className="flex-shrink-0">{getStatusBadge()}</div>
                    <div className="flex-shrink-0 text-right">
                        <div className="font-outfit text-lg sm:text-xl md:text-2xl font-bold text-text-primary whitespace-nowrap">
                            {formatAmount(amount)} F
                        </div>
                    </div>
                </div>
            </div>

            {/* Operators Section */}
            <div className="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-gray-200/50">
                <span className="inline-block items-center w-10 sm:w-12">
                    <img
                        src={`img/operators/${from_operator}_logo.png`}
                        className="rounded-sm w-full h-auto"
                        alt={from_operator}
                    />
                </span>
                <span className="inline-flex items-center flex-shrink-0">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="sm:w-6 sm:h-6"
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
                <span className="inline-block items-center w-10 sm:w-12">
                    <img
                        src={`img/operators/${to_operator}_logo.png`}
                        alt={to_operator}
                        className="rounded-sm w-full h-auto"
                    />
                </span>
            </div>
        </div>
    );
};

export default TransactionCard;
