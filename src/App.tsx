import { useState } from 'react'
import './App.css'
import Inventory from './components/Inventory'
import Shop from './components/Shop'
import type { IPlayerInventory, ITemItem } from './types/shop'
import { temShopItems } from './mocks/items'

const initialInventory: IPlayerInventory = {
  gold: 500,
  items: [],
}

function Dashboard({ gold, itemCount }: { gold: number; itemCount: number }) {
  return (
    <section className="mb-4 p-3 border rounded bg-white shadow-sm">
      <h2>Dashboard</h2>
      <p className="mb-2">Saldo atual: <strong>{gold}G</strong></p>
      <p className="mb-0">Itens comprados: <strong>{itemCount}</strong></p>
    </section>
  )
}

function App() {
  const [playerData, setPlayerData] = useState<IPlayerInventory>(initialInventory)

  function handlePurchase(item: ITemItem) {
    setPlayerData((previous) => {
      if (item.price > previous.gold) {
        return previous
      }

      return {
        gold: previous.gold - item.price,
        items: [...previous.items, item],
      }
    })
  }

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
            <Shop items={temShopItems} onPurchase={handlePurchase} currentGold={playerData.gold} />
          </main>

          <aside className="col-12 col-lg-3">
            <section className="mb-4 p-3 border rounded bg-white shadow-sm">
              <h2>Temmie</h2>
              <p>Caixa de diálogo da Temmie e o seu dashboard aparecerão aqui.</p>
            </section>
            <Dashboard gold={playerData.gold} itemCount={playerData.items.length} />
            <Inventory inventory={playerData} />
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
