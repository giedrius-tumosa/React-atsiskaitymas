const Heading = (props) => {
  switch (props.tag) {
    case "h1": {
      return <h1 {...props.attributes}>{props.textContent}</h1>;
    }
    case "h2": {
      return <h2 {...props.attributes}>{props.textContent}</h2>;
    }
    case "h3": {
      return <h3 {...props.attributes}>{props.textContent}</h3>;
    }
    case "h4": {
      return <h4 {...props.attributes}>{props.textContent}</h4>;
    }
    case "h5": {
      return <h5 {...props.attributes}>{props.textContent}</h5>;
    }
    case "h6": {
      return <h6 {...props.attributes}>{props.textContent}</h6>;
    }
    default: {
      return <h1 {...props.attributes}>{props.textContent}</h1>;
    }
  }
};

export default Heading;
