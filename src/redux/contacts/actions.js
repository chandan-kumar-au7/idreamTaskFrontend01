export function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const actions = {
  CONTACT_SET_SELECTED: 'CONTACT_SET_SELECTED',
  UPDATE_CONATCTS: 'UPDATE_CONATCTS',
  SEARCH_CONTACT: 'SEARCH_CONTACT',
  setSelectedContact: seletedContact => ({
    type: actions.CONTACT_SET_SELECTED,
    seletedContact
  }),
  updateContacts: contacts => ({
    type: actions.UPDATE_CONATCTS,
    contacts: contacts.sort(ascendingSort)
  }),
  setSearch: searchText => ({
    type: actions.SEARCH_CONTACT,
    searchText
  })
};
export default actions;
