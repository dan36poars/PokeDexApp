/**
 * load more details about pokemon
 */
btnLoadMore.onclick = () => {
  page += limit;
  const qtdRecordNextPage = page + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - page;
    loadPokemon(page, newLimit);
    btnLoadMore.parentElement.removeChild(btnLoadMore);
    finalMessage(pagination);
  } else {
    loadPokemon(page, limit);
  }
};
