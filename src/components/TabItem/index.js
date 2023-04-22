import './index.css'

const TabItem = props => {
  const {tabDetails, tabSelected, isActive} = props
  const {displayText, tabId} = tabDetails

  function buttonClicked() {
    tabSelected(tabId)
  }
  const classes = isActive ? 'active-btn' : 'tab-btn'
  console.log(classes)

  return (
    <li className="tab-item-container ">
      <button
        onClick={buttonClicked}
        type="button"
        className={`${classes} tab-btn`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
