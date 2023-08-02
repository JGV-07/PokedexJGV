import "/src/components/PokedexPage/styles/ChangePage.css";

const ChangePage = ({ pokePerPage, totalPoke, paginate, currentPage }) => {

  const numberPage = [];

  for (let i = 1; i <= Math.ceil(totalPoke / pokePerPage); i++) {
    numberPage.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {numberPage.map((number) => (
          <button
            key={number}
            className={`${currentPage === number ? "active" : " "} pagination-btn`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ChangePage
