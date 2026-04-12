export type TemShopStatus = 'expensiv' | 'on sale'

export interface ITemItem {
  id: number
  name: string
  price: number
  description: string
  status: TemShopStatus
}

export interface IPlayerInventory {
  gold: number
  items: ITemItem[]
}
