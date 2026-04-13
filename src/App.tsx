import { useEffect, useState } from 'react'
import './App.css'
import Inventory from './components/Inventory'
import Shop from './components/Shop'
import TemmieDialog from './components/TemmieDialog'
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [lastPurchasedItem, setLastPurchasedItem] = useState<ITemItem | null>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((current) => {
          if (current === null) {
            return 0
          }
          return Math.min(current + 1, temShopItems.length - 1)
        })
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((current) => {
          if (current === null) {
            return temShopItems.length - 1
          }
          return Math.max(current - 1, 0)
        })
      }

      if (event.key.toLowerCase() === 'z') {
        if (selectedIndex !== null) {
          handlePurchase(temShopItems[selectedIndex])
        }
      }

      if (event.key.toLowerCase() === 'x') {
        setSelectedIndex(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedIndex])

  function handlePurchase(item: ITemItem) {
    let purchased = false

    setPlayerData((previous) => {
      if (item.price > previous.gold) {
        return previous
      }

      purchased = true
      return {
        gold: previous.gold - item.price,
        items: [...previous.items, item],
      }
    })

    if (purchased) {
      setLastPurchasedItem(item)
    }
  }

  function handleCardClick(index: number, item: ITemItem) {
    if (selectedIndex === index) {
      handlePurchase(item)
      return
    }

    setSelectedIndex(index)
  }

  return (
    <>
      <header className=" ">
        <div className="container">
          <h1 className="mb-0">Tem Shop</h1>
        </div>
      </header>

      <div className="container">
        <div className="row">
          <main className="col-lg-9 mb-4">
            <Shop
              items={temShopItems}
              onPurchase={handlePurchase}
              onCardClick={handleCardClick}
              currentGold={playerData.gold}
              selectedIndex={selectedIndex}
            />
          </main>

          <aside className="col-12 col-lg-3">
            <TemmieDialog lastPurchasedItem={lastPurchasedItem} />
            <Dashboard gold={playerData.gold} itemCount={playerData.items.length} />
            <Inventory inventory={playerData} />
          </aside>
        </div>
      </div>

      <footer className="texto">
        <div className="rodape">
          <address>
            Tiago — 12 de abril de 2026 — Disciplina: Desenvolvimento de Software WEB - Prof. Alexandre Cláudio de Almeida
          </address>
        </div>
      </footer>
    </>
  )
}

export default App
