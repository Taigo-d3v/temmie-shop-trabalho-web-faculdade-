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
    <div className="app-shell">
      <header className="app-header">
        <h1>Tem Shop</h1>
        <p>Bem-vindo à lojinha dos Temmies. Seu ouro disponível: {inventory.gold}G</p>
      </header>
      <main className="app-main">
        <Inventory inventory={inventory} />
        <Shop items={temShopItems} />
      </main>
    </div>
  )
}

export default App
