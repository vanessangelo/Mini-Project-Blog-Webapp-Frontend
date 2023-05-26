import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CreateBlog } from '../../api/blog';
import { useSelector } from 'react-redux';
import AllCategories from '../../api/allcategories';

export default function WriteContentUser() {
  const [image, setImage] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [allCategory, setAllCategory] = useState([]);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    AllCategories()
    .then((resp) => {
        setAllCategory(resp.data);
    })
    .catch((err) => console.log(err))
  }, [])

  // Handle form submission
  const handleSubmit = async (values) => {
    alert("Ready to let the world see your creation?");

    const formData = new FormData();
    formData.append("data", JSON.stringify(values));
    formData.append("file", image[0]);

    try {
      CreateBlog(formData, token)
        .then((res) => {
          alert(`${res.data.message}`);
        });
    } catch (err) {
      setErrMsg("Error occurs during submission. Please try again later.");
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    content: Yup.string().max(255, 'Content must not exceed 255 characters').required('Content is required'),
    country: Yup.string().required('Country is required'),
    CategoryId: Yup.string().required('Category is required'),
    url: Yup.string(),
    keywords: Yup.string().required('Keywords are required'),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      country: "",
      CategoryId: "",
      url: "",
      keywords: "",
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const handleForm = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
  };

  const handleFile = (e) => {
    const files = e.target.files;
    setImage([...files]);
  };

  return (
    <div className="w-[48.5rem] h-full m-auto mt-5">
      <div className="blog">
        <div className="w-11/12 font-monts text-xl mx-2 my-4 underline decoration-2 ml-[0.90rem]">
          <p>Brew Your New Creation Here!</p>
        </div>
        <div className="box w-[44rem] bg-sage m-auto p-6 rounded flex flex-col">
          <form onSubmit={formik.handleSubmit}>
            <div className="img upload">
                <div className="font-fira text-sm pb-1">Upload your image here:</div>
                    <input type="file" id="image" name="image" onChange={handleFile} className='rounded-lg' required/>
                </div>
            <div className="title grid my-4">
              <label htmlFor="title" className="font-fira text-sm">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleForm}
                className="py-1 px-4 border-none border-olive rounded-lg"
              />
              {formik.errors.title && (
                <div className="error font-libre text-xs text-red-500">{formik.errors.title}</div>
              )}
            </div>
            <div className="content grid my-4">
              <label htmlFor="content" className="font-fira text-sm">Content (max. 255 characters):</label>
              <textarea
                type="text"
                id="content"
                name="content"
                onChange={handleForm}
                className="py-1 px-4 border-none border-olive border-2 rounded-lg"
              />
              {formik.errors.content && (
                <div className="error font-libre text-xs text-red-500">{formik.errors.content}</div>
              )}
            </div>
            <div className="category grid my-4">
              <label htmlFor="CategoryId" className="font-fira text-sm">Category</label>
              <select
                type="text"
                id="CategoryId"
                name="CategoryId"
                onChange={handleForm}
                className="py-1 px-4 border-none border-olive border-2 rounded-lg">
                <option>All Categories</option>
                {allCategory.map((post) => (
                        <option value={post.id} key={post.id}>
                          {post.name}
                        </option>
                    ))}
              </select>
              {formik.errors.CategoryId && (
                <div className="error font-libre text-xs text-red-500">{formik.errors.CategoryId}</div>
              )}
            </div>
            <div className="keywords grid my-4">
              <label htmlFor="keywords" className="font-fira text-sm">Keyword(s):</label>
              <input
                type="text"
                id="keywords"
                name="keywords"
                onChange={handleForm}
                className="py-1 px-4 border-none border-olive border-2 rounded-lg"
              />
              {formik.errors.keywords && (
                <div className="error font-libre text-xs text-red-500">{formik.errors.keywords}</div>
              )}
            </div>
            <div className="url grid my-4">
              <label htmlFor="url" className="font-fira text-sm">URL(optional):</label>
              <input
                type="text"
                id="url"
                name="url"
                onChange={handleForm}
                className="py-1 px-4 border-none border-olive border-2 rounded-lg"
              />
              {formik.errors.url && (
                <div className="error font-libre text-xs text-red-500">{formik.errors.url}</div>
              )}
            </div>
            <div className="country grid my-4">
              <label htmlFor="country" className="font-fira text-sm">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                onChange={handleForm}
                className="py-1 px-4 border-none border-olive border-2 rounded-lg"
              />
              {formik.errors.country && (
                <div className="error font-libre text-xs text-red-500">{formik.errors.country}</div>
              )}
            </div>
            <div className="button">
              <button type="submit" className="text-center font-fira bg-ivory py-2 px-3 rounded hover:bg-lightcho">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
