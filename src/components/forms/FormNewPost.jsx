import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import PostContext from "../../store/PostContext";
import { useEffect } from "react";

const FormNewPost = () => {
  const { addNewPost, postFetchErrors, setUserFetchErrors } = useContext(PostContext);

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
    setUserFetchErrors({ ...postFetchErrors, postError: "" });
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
      {postFetchErrors.postError && <p>{postFetchErrors.postError}</p>}
    </div>
  );
};

export default FormNewPost;
