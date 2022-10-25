export const searchEmp = (items, term) => {
  if (term.length === 0) {
    return items;
  }

  return items.filter(
    (item) => item.name.toLowerCase().indexOf(term.toLowerCase(), 0) > -1
  );
};
