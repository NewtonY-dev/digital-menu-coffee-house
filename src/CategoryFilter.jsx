const CategoryFilter = ({ categories = [], selected, onChange }) => {
  return (
    <div className="category-filter" role="tablist" aria-label="Categories">
      {categories.map((cat) => {
        const isActive = selected === cat
        return (
          <button
            key={cat}
            type="button"
            className={`category-pill ${isActive ? 'active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
