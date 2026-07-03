import { useState, useMemo } from 'react'
import MenuCard from './MenuCard'
import CategoryFilter from './CategoryFilter'
import menuItems from './menu-items.json'

const categories = ['All', "Coffee", "Tea", 'Food Menu', 'Juice',  "Drinks"]

const Menu = ({ language }) => {
  const [selected, setSelected] = useState('All')

  const visibleItems = useMemo(() => {
    if (selected === 'All') return menuItems
    return menuItems.filter((i) => i.category === selected)
  }, [selected])

  const handleChange = (cat) => {
    setSelected(cat)
    // instant, in-place jump to top (no animation)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  return (
    <>
      <CategoryFilter categories={categories} selected={selected} onChange={handleChange} />

      <section className="menu-grid" aria-label="Menu items">
        {visibleItems.map((item) => (
          <MenuCard key={item.id} item={item} language={language} />
        ))}
      </section>
    </>
  )
}

export default Menu
