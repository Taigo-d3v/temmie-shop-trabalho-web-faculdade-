import type { ITemItem } from '../types/shop'
import temmieSprite from '../assets/temmie_sprite.png'
import bgShop from '../assets/bg_shop.png'

interface TemmieDialogProps {
  lastPurchasedItem: ITemItem | null
}

const genericLines = [
  'Obrigado por comprar algo com a Temmie!',
  'Temmie fica feliz quando você gasta seu G aqui.',
  'Volte sempre, ok? Temmie estará esperando.',
]

function TemmieDialog({ lastPurchasedItem }: TemmieDialogProps) {
  const message = lastPurchasedItem
    ? lastPurchasedItem.name.toLowerCase().includes('temmie flakes') && lastPurchasedItem.status === 'expensiv'
      ? 'OH NO! Temmie vai comer seu Tem Flake! Muito obrigado, querido humano!'
      : `Obrigada por comprar ${lastPurchasedItem.name}! Temmie ama vender coisas.`
    : 'Temmie está esperando você escolher um item para comprar.'

  return (
    <section
      className="temmie-dialog p-3 border rounded text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bgShop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center mb-3">
        <img src={temmieSprite} alt="Temmie" className="img-fluid" />
      </div>
      <div className="temmie-dialog-box p-3 rounded bg-black text-white">
        <p className="mb-0">{message}</p>
      </div>
    </section>
  )
}

export default TemmieDialog
