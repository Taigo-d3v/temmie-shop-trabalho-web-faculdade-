import type { ITemItem } from '../types/shop'
import temmieSprite from '../assets/temmie_sprite.png'

interface TemmieDialogProps {
  lastPurchasedItem: ITemItem | null
}

function TemmieDialog({ lastPurchasedItem }: TemmieDialogProps) {
  const message = lastPurchasedItem
    ? lastPurchasedItem.name.toLowerCase().includes('temmie flakes') && lastPurchasedItem.status === 'expensiv'
      ? 'OH NO! Temmie vai comer seu Tem Flake! Muito obrigado, querido humano!'
      : `Obrigada por comprar ${lastPurchasedItem.name}! Temmie ama vender coisas.`
    : 'Temmie está esperando você escolher um item para comprar.'

  return (
    <section className="temmie-dialog rounded  ">
      <div className="text-center mb-3">
        <img src={temmieSprite} alt="Temmie" className="img-fluid" />
      </div>
      <div className="temmie-dialog-box p-3">
        <p className="mb-0">{message}</p>
      </div>
    </section>
  )
}

export default TemmieDialog
