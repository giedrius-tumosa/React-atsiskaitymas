import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import PostContext from "../../store/PostContext";
import { useEffect } from "react";
import ErrorMessage from "../other/ErrorMessage";

const FormNewPost = () => {
  const { addNewPost, postFetchErrors, setPostFetchErrors } = useContext(PostContext);

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
    addNewPost(newPost);
    setFormInputs({
      postTitle: "",
      postDescription: "",
    });
  };

  useEffect(() => {
    setPostFetchErrors({ ...postFetchErrors, postError: "" });
  }, []);

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
            maxLength={40}
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
            maxLength={100}
          />
        </div>

        <div className="buttonSubmit">
          <button type="submit">Add post</button>
        </div>
      </form>
      {postFetchErrors.postError && <ErrorMessage message={postFetchErrors.postError} />}
    </div>
  );
};

export default FormNewPost;
