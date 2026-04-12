import { useState } from 'react'
import './App.css'
import Inventory from './components/Inventory'
import Shop from './components/Shop'
import type { IPlayerInventory } from './types/shop'
import { temShopItems } from './mocks/items'

const initialInventory: IPlayerInventory = {
  gold: 500,
  items: [],
}

function App() {
  const [inventory] = useState<IPlayerInventory>(initialInventory)

  return (
    <>
      <header className="bg-light py-4 mb-4">
        <div className="container">
          <h1 className="mb-0">Tem Shop</h1>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <main className="col-12 col-lg-9 mb-4">
            <Shop items={temShopItems} />
          </main>

          <aside className="col-12 col-lg-3">
            <section className="mb-4 p-3 border rounded bg-white shadow-sm">
              <h2>Temmie</h2>
              <p>Caixa de diálogo da Temmie e o seu dashboard aparecerão aqui.</p>
              <p className="mb-0">Ouro disponível: <strong>{inventory.gold}G</strong></p>
            </section>

            <Inventory inventory={inventory} />
          </aside>
        </div>
      </div>

      <footer className="bg-light py-4 mt-4">
        <div className="container">
          <address />
        </div>
      </footer>
    </>
  )
}

export default App
