import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabButton = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
