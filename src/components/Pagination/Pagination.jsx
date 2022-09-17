import React from 'react'

function Pagination({propertyPerPage,totalProperty,paginate}) {
    const pageNumber = [];

    for (let index = 1; index <= Math.ceil(totalProperty/propertyPerPage); index++) {
        pageNumber.push(index)
    }

   
  return (
    <div className='Pagination'>
      {pageNumber.map((el,i)=>{
        return(
            <div className='Pagination__container' key={i}>
                <b  onClick={()=> {
                paginate(el)
                const alldoc = document.querySelectorAll('.Pagination__container');
                alldoc.forEach(el=> el.style.background ='transparent')
                alldoc[el - 1].style.background = '#1480bd'

            }}>{el}</b>
            </div>
        )
      })}
    </div>
  )
}

export default Pagination
