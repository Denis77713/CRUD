import React from "react"
import EmplouersListItem from "../emplouers-list-item/Emplouers-list-item"


const EmplouersList = ({ data, onDlete, setCookie, setStar }) => {
  const renderData = data.map((item, index) => {
    let { id, ...itemPage } = item
    if (id) {
      return (
        // map вернет в renderData компонент EmplouersListItem, А какой он будет описание в самом компоненте
        <EmplouersListItem
          // Далее пропсы
          data={data}
          key={id}
          index={index}
          {...itemPage}
          // Прокидываем функцию на конкретный итем (уровень ниже). Функция как аргумент принемает id из data
          onDlete={() => onDlete(id)}
          id={id}
          setCookie={()=>setCookie(id)}
          setStar={()=>setStar(id)}
        />
      )
    }
  })

  return <ul className="app-list list-group">{renderData}</ul>
}

export default EmplouersList
