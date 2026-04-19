export const formatPrice = (price: number) => `$${price.toFixed(2)}`;

export const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');