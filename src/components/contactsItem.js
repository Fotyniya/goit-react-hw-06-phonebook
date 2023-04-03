import PropTypes from 'prop-types';

export const ContactsItem = ({item, onDelete})=> {

    return (
        <div>
            <span>{item.contact.name}: {item.contact.number}</span>
            <button type="button" onClick = {()=>onDelete(item.contact.id)}
            style={{ width: "120px", marginLeft: "20px"}}
            >Delete</button>
        </div>     
)};

ContactsItem.propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.shape().isRequired,
}