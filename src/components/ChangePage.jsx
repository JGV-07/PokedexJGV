import "/src/components/PokedexPage/styles/ChangePage.css";

const ChangePage = ({ pokePerPage, totalPoke, currentPage, paginate }) => {
  const numberPage = []
  for (let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
    numberPage.push(i)
  }

  const maxVisiblePages = 4; // Maximum number of pages visible at once
  const maxPages = Math.ceil(totalPoke / pokePerPage)
  const currentPageIndex = currentPage - 1;

  let startPage = Math.max(0, currentPageIndex - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(maxPages - 1, startPage + maxVisiblePages - 1)
  
   // We adjust the range of viewable pages to make sure the limits are not exceeded
  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(0, endPage - maxVisiblePages + 1);
  }

  const hasPreviousPage = currentPage > 1
  const hasNextPage = currentPage < maxPages;

  return (
    <nav>
      <div className="pagination">
        {hasPreviousPage && (
          <button className="pagination-btn first-page" onClick={() => paginate(1)}>
            &lt;&lt; {/* Botom to the first page */}
          </button>
        )}
        {hasPreviousPage && (
          <button className="pagination-btn previous-page" onClick={() => paginate(currentPage - 1)}>
            &lt; {/* Botom previous page */}
          </button>
        )}
        {numberPage.slice(startPage, endPage + 1).map((number) => (
          <button
            key={number}
            className={`${currentPage === number ? "active" : ""} pagination-btn`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        {hasNextPage && (
          <button className="pagination-btn next-page" onClick={() => paginate(currentPage + 1)}>
            &gt; {/* Botom next page */}
          </button>
        )}
        {hasNextPage && (
          <button className="pagination-btn last-page" onClick={() => paginate(maxPages)}>
            &gt;&gt; {/* Botom last page */}
          </button>
        )}
      </div>
    </nav>
  );
};

export default ChangePage
