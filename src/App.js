import React from "react"
// import "./App.css"
import "./App.scss"
import AppFilter from "./components/app-filter/App-filter"
import AppInfo from "./components/app-info/App-info"
import EmplouersAddForm from "./components/emplouers-add-form/Emplouers-add-form"
import EmplouersList from "./components/emplouers-list/Emplouers-list"
import SearchPanel from "./components/search-panel/Search-panel"

class App extends React.Component {
  state = {
    data: [
      { name: "John C.", maney: 800, cookie: false, star: true, id: 1 },
      { name: "Alex M.", maney: 3000, cookie: true, star: false, id: 2 },
      { name: "Carl W.", maney: 5000, cookie: false, star: false, id: 3 },
    ],
    term: "",
    filterAttribute: "all",
  }
  //
  //
  //
  // Удаление свойства обьекта
  // Использует поднятие
  onDlete = (id) => {
    this.setState({
      data: this.state.data.filter((item) => id !== item.id),
    })
  }
  //
  //
  //
  // Добавление
  // Использует поднятие
  // Берет самый большой id и делает +1
  setEmplouers = (obj) => {
    const idArr = this.state.data.map((a) => a.id)
    const maxId = idArr.sort((a, b) => b - a)[0]
    const employee = { ...obj, cookie: false, star: false, id: maxId + 1 }
    this.setState({
      data: [...this.state.data, employee],
    })
  }
  //
  //
  //
  // Перезапись свойства обьекта
  // Получаем id объекта на который кликнули из data
  setCookie = (id) => {
    // текущее состояние data
    this.setState(({ data }) => {
      // indexData индекс Объекта чей id совпадает с id поднятого объекта на который кликнули
      const indexData = data.findIndex((item) => item.id === id)
      // old объект на который кликнули
      const old = data[indexData]
      // Перезапись свойства (cookie) обьекта old
      const newItem = { ...old, cookie: !old.cookie }
      // Копия массива data, но у одного из обьекта изменилось свойство
      const newArr = [
        // Развернуть от начала до номера
        ...data.slice(0, indexData),
        newItem,
        ...data.slice(indexData + 1),
      ]
      // После кучи манипуляция мы перезаписываем data как newArr
      return {
        data: newArr,
      }
    })
  }
  //
  // Перезапись свойства обьекта
  // Другой вариант
  setStar = (id) => {
    const indexData = this.state.data.findIndex((item) => item.id === id)
    //
    this.setState(({ data }) => ({
      data: data.map((item, index) => {
        if (index === indexData) {
          return { ...item, star: !item.star }
        }
        return item
      }),
    }))
  }
  //
  //
  //
  // Фильтрация
  // term и data из App
  // фильтрует дата по значению term и возвращает новый массив
  onSearch = (data, term, filterAttribute) => {
    let sortData = data
    if (filterAttribute === "bigManey") {
      sortData = data.filter((item) => item.maney > 1000)
    }
    if (filterAttribute === "up") {
      sortData = data.filter((item) => item.cookie === true)
    }
    //
    //
    //
    if (term.length === 0) {
      return sortData
    }
    const filterData = sortData.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    )
    return filterData
  }
  //
  // Фильтрация
  // Получает строку из другово компонента
  // term в App изначально пуст, при изменении записывает в него строку
  onUpdate = (SearchComponentTerm) => {
    this.setState({ term: SearchComponentTerm })
  }
  //
  //
  //
  // По клику Сортировка
  onClickUpdate = (attribute) => {
    this.setState({
      filterAttribute: attribute[0],
    })
  }
  static onLog =()=>{
  }
  render() {

    // Фильтрация
    // Результат фильтрации data
    // data не меняется, меняется dataFilter, он и отрисовывается
    let dataFilter = this.onSearch(
      this.state.data,
      this.state.term,
      this.state.filterAttribute
    )
    return (
      <div className="App">
        {/* <Counter/> */}
        <AppInfo data={this.state.data} />
        <div className="search-panel">
          <SearchPanel onUpdate={this.onUpdate} />
          <AppFilter
            onClickUpdate={this.onClickUpdate}
            filterAttribute={this.state.filterAttribute}
          />
        </div>
        {/* onDlete функция с аргументом id */}
        <EmplouersList
          data={dataFilter}
          onDlete={this.onDlete}
          setCookie={this.setCookie}
          setStar={this.setStar}
        />
        <EmplouersAddForm
          data={this.state.data}
          setEmplouers={this.setEmplouers}
        />
      </div>
    )
  }
}
App.onLog()
export default App
