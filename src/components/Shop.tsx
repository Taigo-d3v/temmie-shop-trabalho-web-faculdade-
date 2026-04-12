import type { ITemItem } from '../types/shop'

interface ShopProps {
  items: ITemItem[]
}

function Shop({ items }: ShopProps) {
  return (
    <section className="shop-section">
      <h2>Itens disponíveis</h2>
      <div className="shop-grid">
        {items.map((item) => (
          <article key={item.id} className={`shop-card ${item.status.replace(' ', '-')}`}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="shop-meta">
              <span>{item.price}G</span>
              <strong>{item.status}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Shop
