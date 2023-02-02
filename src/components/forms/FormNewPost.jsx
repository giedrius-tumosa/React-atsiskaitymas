import { useState } from "react";
import { nanoid } from "nanoid";

const FormNewPost = () => {
  const [formInputs, setFormInputs] = useState({
    postTitle: "",
    postDescription: "",
  });

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: nanoid(),
      postTitle: formInputs.postTitle,
      postDescription: formInputs.postDescription,
    };
    console.log(newPost); //TODO: delete
    setFormInputs({
      postTitle: "",
      postDescription: "",
    });
  };

  return (
    <div className="formNewPost">
      <form onSubmit={handleSubmit}>
        <div className="postTitleWrap">
          <label htmlFor="postTitle">Post title: </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            onChange={handleInputChange}
            value={formInputs.postTitle}
            required
            minLength={2}
            maxLength={50}
          />
        </div>

        <div className="postDescriptionWrap">
          <label htmlFor="postDescription">Description: </label>
          <textarea
            id="postDescription"
            name="postDescription"
            onChange={handleInputChange}
            value={formInputs.postDescription}
            required
            minLength={2}
            maxLength={250}
          />
        </div>

        <div className="buttonSubmit">
          <button type="submit">Add post</button>
        </div>
      </form>
    </div>
  );
};

export default FormNewPost;
