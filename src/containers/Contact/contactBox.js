import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import Scrollbars from '../../components/utility/customScrollBar';
import ContactList from '../../components/contacts/contactList';
import EditView from '../../components/contacts/editView';
import { otherAttributes, demoAvatar } from './fakeData';
import {
  Contactbox,
  Content,
  FormControl,
  InputSearch,
  InputLabel,
  Button,
  Icon,
} from './contactBox.style';

const { setSelectedContact, updateContacts, setSearch } = actions;

class Contacts extends Component {
  addContact = () => {
    this.props.setSelectedContact({
      id: new Date().getTime(),
      avatar: demoAvatar,
      isFresh: true,
    });
  };

  render() {
    const {
      contacts,
      contactGroup,
      seletedContact,
      searchText,
      setSelectedContact,
      updateContacts,
      setSearch,
      height,
      widgetHeight,
      title,
      stretched,
    } = this.props;
    const editOptions = {
      contacts,
      seletedContact,
      otherAttributes,
      setSelectedContact,
      updateContacts,
    };
    const scrollHeight = widgetHeight || height - 280;
    return (
      <Contactbox stretched={stretched}>
        <Content>
          {title ? <h2 className="widgetTitle">{title}</h2> : ''}
          <FormControl>
            <InputLabel htmlFor="contactSearch">Search Contacts</InputLabel>
            <InputSearch
              id="contactSearch"
              alwaysDefaultValue
              onChange={setSearch}
              defaultValue={searchText}
            />
          </FormControl>

          <Button color="primary" aria-label="add" onClick={this.addContact}>
            <Icon>add</Icon>
          </Button>
          <Scrollbars style={{ height: scrollHeight }}>
            <ContactList
              contactGroup={contactGroup}
              setSelectedContact={setSelectedContact}
            />
          </Scrollbars>
          {seletedContact ? <EditView {...editOptions} /> : ''}
        </Content>
      </Contactbox>
    );
  }
}

const contactGrouping = contacts => {
  if (contacts.length > 0) {
    const contactGroup = {};
    const Unnamed = [];
    contacts.forEach(contact => {
      if (contact.name) {
        const fLetter = contact.name[0].toUpperCase();
        if (!contactGroup[fLetter]) {
          contactGroup[fLetter] = [];
        }
        contactGroup[fLetter].push(contact);
      } else {
        Unnamed.push(contact);
      }
    });
    if (Unnamed.length > 0) {
      contactGroup.Unnamed = Unnamed;
    }
    return contactGroup;
  }
};
function mapStateToProps(state) {
  const {
    contacts,
    seletedContact,
    filteredContacts,
    searchText,
  } = state.Contacts;
  return {
    height: state.App.height,
    contacts,
    searchText,
    contactGroup: contactGrouping(filteredContacts),
    seletedContact,
  };
}
export default connect(
  mapStateToProps,
  {
    setSelectedContact,
    updateContacts,
    setSearch,
  }
)(Contacts);
