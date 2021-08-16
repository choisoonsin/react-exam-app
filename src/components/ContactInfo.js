import PropTypes from "prop-types";

function ContactInfo(props) {
  const gender = props.contact.genderCode === 1 ? "남" : "여";
  const contactStyle = {
    backgroundColor: "#60966f",
    margin: "5px",
    padding: "2px",
  };

  return (
    <div style={contactStyle} onClick={props.onClick}>
      <h3>
        {props.contact.name} ( {gender} )
      </h3>
      <span></span>
      {props.contact.phone}
      <br />
      {props.contact.address}
      {props.contact.isLike}
      <br />
    </div>
  );
}

ContactInfo.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genderCode: PropTypes.number.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
  }),
};

ContactInfo.propTypes = {
  contact: PropTypes.objectOf(function (
    props,
    propName,
    componentName,
    location,
    fullName
  ) {
    if (propName && propName === "phone") {
      if (
        /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/.test(
          props[propName]
        ) === false
      ) {
        return new Error(
          "Invalid prop `" +
            propName +
            "` supplied to" +
            " `" +
            componentName +
            "`. Validation failed."
        );
      }
    }
  }),
};

export default ContactInfo;
