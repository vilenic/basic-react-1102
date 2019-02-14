import { useState } from 'react'

export default () => {
  const [openArticleId, setOpenArticleId] = useState(null)
  const toggleOpenArticle = (id) => () => setOpenArticleId(id)

  return { openArticleId, toggleOpenArticle }
}
