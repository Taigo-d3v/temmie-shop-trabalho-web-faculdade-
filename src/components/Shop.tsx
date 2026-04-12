import type { ITemItem } from '../types/shop'

interface ShopProps {
  items: ITemItem[]
  currentGold: number
  selectedIndex: number | null
  onPurchase: (item: ITemItem) => void
}

function Shop({ items, currentGold, selectedIndex, onPurchase }: ShopProps) {
  const heartCursorSrc = '/src/assets/heart_cursor.png'

  return (
    <section className="shop-section">
      <h2>Itens disponíveis</h2>
      <div className="shop-grid">
        {items.map((item, index) => {
          const canBuy = item.price <= currentGold
          const isSelected = selectedIndex === index

          return (
            <article
              key={item.id}
              className={`shop-card ${item.status.replace(' ', '-')} ${isSelected ? 'focused' : ''}`}
            >
              <h3>
                {item.name}
                {isSelected && (
                  <img
                    src={heartCursorSrc}
                    alt="Cursor de coração"
                    className="heart-cursor"
                  />
                )}
              </h3>
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
