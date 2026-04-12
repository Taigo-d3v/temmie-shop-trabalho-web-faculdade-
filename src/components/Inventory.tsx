import type { IPlayerInventory } from '../types/shop'

interface InventoryProps {
  inventory: IPlayerInventory
}

function Inventory({ inventory }: InventoryProps) {
  return (
    <section className="inventory-section">
      <h2>Inventário do jogador</h2>
      <p>Ouro disponível: {inventory.gold}G</p>
      {inventory.items.length > 0 ? (
        <ul>
          {inventory.items.map((item) => (
            <li key={item.id}>{item.name} — {item.price}G</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum item comprado ainda.</p>
      )}
    </section>
  )
}

export default Inventory
