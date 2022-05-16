fetch('https://swapi.py4e.com/api/films/')
  .then(result => result.json())
  .then(rowData => this.getList2(rowData.results));

function getList2(results){
  return results.map(
    (item)=> `
  <h3>${ item.title }</h3>`
  )
}
