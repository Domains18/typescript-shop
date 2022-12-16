const CURRENCY_FORMAT = new Intl.NumberFormat( undefined, {
    currency : 'USD',
    style : 'currency',
    minimumFractionDigits : 2,
    maximumFractionDigits : 2
});

export function CurrencyFormat( value : number ) : string {
    return CURRENCY_FORMAT.format( value );
};