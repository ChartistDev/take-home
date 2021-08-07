function DisplayList(items, rows, page) {
  let pageStart, pageEnd, pageItems;
  page--;
  pageStart = rows * page;
  pageEnd = pageStart + rows;

  pageItems = items.slice(pageStart, pageEnd);
  return pageItems;
}

export default DisplayList;
