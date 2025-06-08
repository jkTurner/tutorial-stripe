export default function toCents(amount: number, factor = 100) {
    return Math.round(amount * factor);
}