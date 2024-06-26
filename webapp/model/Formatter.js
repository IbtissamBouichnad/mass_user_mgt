// Formatter.js

sap.ui.define([], function () {
    "use strict";

    return {
        formatDateForDisplay: function (sDate) {
            if (!sDate) {
                return "";
            }

            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "dd/MM/yyyy"
            });

            return oDateFormat.format(new Date(sDate));
        }

        // Ajoutez d'autres fonctions de formatter ici si nécessaire
    };
});
