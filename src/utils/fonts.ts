import { Montserrat, Yanone_Kaffeesatz, Roboto } from 'next/font/google'

export const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })
export const yanone_kaffeesatz = Yanone_Kaffeesatz({ subsets: ['latin', 'cyrillic'], weight: ['200', '300', '400', '500', '600', '700'] })
export const roboto = Roboto({ subsets: ['latin', 'cyrillic'], weight: ['100', '300', '400', '500', '700', '900'] })