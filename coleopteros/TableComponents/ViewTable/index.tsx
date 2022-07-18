import type { ViewTable } from "../types"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
import getPaginationFunction from "../utils/getPagination"

export default function ViewTableComponent(ViewTable: ViewTable) {
  const router = useRouter()
  const [pageIndex, setPageIndex] = useState(0)
  const [pagination, setPagination] = useState(getPaginationFunction(ViewTable.data, 10))
  const [search, setSearch] = useState("")

  useEffect(() => {
    setPageIndex(0)
    if(search === "") return setPagination(getPaginationFunction(ViewTable.data, 10))
    const parseSearch = search.trim().toLocaleLowerCase().replace(/\s+/g, '')

    const newData = ViewTable.data.filter(register => {
      let state  = false
      ViewTable.refs.map(ref => {
        if(register[ref].trim().toLocaleLowerCase().replace(/\s+/g, '').includes(parseSearch)) {
          return state = true
        }
      })
      return state
    })

    return setPagination(getPaginationFunction(newData, 10))
  }, [search])

  return(
    <div className="view-table-main-container">
      <h2 className="view-table-title">{ViewTable.icon} {ViewTable.title}</h2>

      {/** Search form */}
      <form className="view-table-form">
        <input
          className="form-component-generic-styles-for-inputs"
          autoComplete="off"
          type="text"
          name="search bar"
          placeholder="Buscar"
          style={{
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          }}
          value={search}
          onChange={e => setSearch(e.target.value)} />
      </form>

      {/** Table */}
      <table className="view-table-table">
        <thead>
          <tr>
            {ViewTable.headings.map((heading, i) => {
              return(
                <th key={i}>{heading}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {pagination.length > 0 && pagination[pageIndex].map((register, i) => {
            return(
              <tr key={i} onDoubleClick={() => {
                router.push(ViewTable.href(register))
              }}>
                {ViewTable.refs.map((ref, i) => {
                  return(
                    <td key={i}>
                      {register[ref]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="view-table-container-footer">
        <div>
          {pagination.length > 0 ? (
            <p className="view-table-showing">
              {`Mostrando ${pagination[pageIndex].length} de ${((pagination.length - 1)*10) + pagination[pagination.length - 1].length}`}
            </p>
          ) : (
            <p className="view-table-showing">
              {`Mostrando 0 de 0 registros`}
            </p>
          )}
        </div>

        {/** !!!!!!! REFACTORIZE THIS CODE !!!!!!! */}
        {/** !!!!!!! REFACTORIZE THIS CODE !!!!!!! */}
        {/** !!!!!!! REFACTORIZE THIS CODE !!!!!!! */}
        <div>
          <button className="buttonPagination" onClick={() => {
            if(!(pageIndex === 0)) return setPageIndex(pageIndex - 1)
          }} style={{
            borderTopLeftRadius: "3px",
            borderBottomLeftRadius: "3px",
            color: pageIndex === 0 && "gray"
          }}>Anterior</button>

          {[-2, -1, 0, 1, 2].map((index, i) => {
            const paginationLength = pagination.length - 1;

            if(i > paginationLength) return;
            if(pagination.length < 5) return <PaginationButton pageIndex={pageIndex} setPageIndex={setPageIndex} i={i} key={index} />
            if(pageIndex < 2) return <PaginationButton pageIndex={pageIndex} setPageIndex={setPageIndex} i={i} key={index} />
            if(pageIndex >= (paginationLength - 2)) return <PaginationButton pageIndex={pageIndex} setPageIndex={setPageIndex} i={paginationLength - (4 - i)} key={index} />

            return <PaginationButton pageIndex={pageIndex} setPageIndex={setPageIndex} i={index + pageIndex} key={index} />
          })}
              
          <button className="buttonPagination" onClick={() => {
            if(!(pageIndex === (pagination.length - 1))) return setPageIndex(pageIndex + 1)
          }} style={{
            borderTopRightRadius: "3px",
            borderBottomRightRadius: "3px",
            color: pageIndex === (pagination.length - 1) && "gray"
          }}>Siguiente</button>
        </div>
      </div>
    </div>
  )
}

function PaginationButton({pageIndex, setPageIndex, i}) {
  return(
    <button className={pageIndex === i ? "buttonPaginationSelected" : "buttonPagination"} onClick={() => {
      setPageIndex(i)
    }}>
      {i + 1}
    </button>
  )
}