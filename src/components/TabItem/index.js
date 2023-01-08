import './index.css'

const TabItem = props => {
  const {tabItem, updateActiveTab} = props
  const {tabId, displayText} = tabItem

  const onClickUpdate = () => {
    updateActiveTab(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onClickUpdate}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
