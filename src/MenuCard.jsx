const imageMap = import.meta.glob('./assets/img/*.{png,jpg,jpeg,svg}', {
  eager: true,
  as: 'url',
})

const MenuCard = ({ item, language = 'en' }) => {
  const title = language === 'am' ? item.name_am : item.name_en
  const imageUrl = imageMap[`./${item.image}`] || ''

  return (
    <article className="menu-card">
      <div className="menu-card-media">
        <img src={imageUrl} alt={title} className="menu-card-image" />
      </div>
      <div className="menu-card-body">
        <h2 className="menu-card-title">{title}</h2>
        <p className="menu-card-description">{item.description}</p>
      </div>
      <div className="menu-card-footer">
        <span className="menu-card-price">{item.price} Br</span>
      </div>
    </article>
  )
}

export default MenuCard
