import type { ITemItem } from '../types/shop'

export const temShopItems: ITemItem[] = [
  {
    id: 1,
    name: 'Temmie Flakes',
    price: 999,
    description: 'Pacote de Temmie Flakes. É crocante, fofo e um pouco caro.',
    status: 'expensiv',
  },
  {
    id: 2,
    name: 'Temmie Armor',
    price: 300,
    description: 'Armadura feita por Temmies. Pode não ser bonita, mas protege.',
    status: 'on sale',
  },
  {
    id: 3,
    name: 'Movie Ticket',
    price: 50,
    description: 'Ingresso para o cinema. Ainda mais emocionante quando você tem amigos.',
    status: 'on sale',
  },
  {
    id: 4,
    name: 'Temmie Village',
    price: 24999,
    description: 'Uma vila inteira para criançinhas Temmie. Muito cara, muito especial.',
    status: 'expensiv',
  },
]
