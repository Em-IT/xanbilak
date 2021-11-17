export interface BuyableItem {
  id: number,
  title: string,
  count?: number,
  isBought: boolean,
  description?: string,
  createDate: Date,
  updateDate?: Date,
  buyDate?: Date
}
