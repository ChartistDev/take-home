function CreatePagination(items, rows) {
  let pageCount = Math.ceil(items.length / rows);
  return pageCount;
}

export default CreatePagination;
