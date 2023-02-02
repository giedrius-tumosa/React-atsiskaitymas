const Image = (props) => {
  return (
    <figure {...props.attributes}>
      <img {...props.attributes} />
    </figure>
  );
};

export default Image;
