export default function getPaginationFunction(
  data: any[],
  recordsPerPage: number
): any[] {
  
  // Get number of pages
  const length = (data.length)/recordsPerPage
  const numOfPages =  Math.ceil(length)

  // Page container
  let pages = []

  // Populate pages
  for(let i = 0; i < numOfPages; i++) {
    pages.push([])
    for(let j = 0; j < recordsPerPage; j++) {
      if(data[j + (i * recordsPerPage)]) {
        pages[i].push(data[j + (i * recordsPerPage)])
      }
    }
  }

  return pages
}