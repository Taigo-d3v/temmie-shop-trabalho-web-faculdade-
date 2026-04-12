import type { ITemItem } from '../types/shop'

interface ShopProps {
  items: ITemItem[]
  currentGold: number
  onPurchase: (item: ITemItem) => void
}

function Shop({ items, currentGold, onPurchase }: ShopProps) {
  return (
    <section className="shop-section">
      <h2>Itens disponíveis</h2>
      <div className="shop-grid">
        {items.map((item) => {
          const canBuy = item.price <= currentGold
          return (
            <article key={item.id} className={`shop-card ${item.status.replace(' ', '-')}`}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="shop-meta">
                <span>{item.price}G</span>
                <strong>{item.status}</strong>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={() => onPurchase(item)}
                disabled={!canBuy}
              >
                {canBuy ? 'Comprar' : 'Sem G suficiente'}
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Shop
