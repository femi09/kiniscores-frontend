import React, { useState } from "react";
import femi from "../services/httpService";
import {kiniscoresApi} from '../config.json'

const AdminForm = () => {
  const [newsImage, setNewsImage] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [newsField, setNewsField] = useState({
    headline: "",
    subTitle: "",
    body: "",
    source: "",
    isFeatured: false,
  });
  const onFileChange = (e) => {
    let newsImage = e.target.files[0];
    setNewsImage(newsImage);
    setImgSrc(URL.createObjectURL(newsImage));
  };

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setNewsField({
      ...newsField,
      [e.target.name]: value,
    });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("newsImage", newsImage, newsImage.name);
    formData.append("headline", newsField.headline);
    formData.append("subTitle", newsField.subTitle);
    formData.append("body", newsField.body);
    formData.append("source", newsField.source);
    formData.append("isFeatured", newsField.isFeatured);
    console.log(formData.get("newsImage"));
    console.log(formData.get("headline"));
    console.log(formData.get("subTitle"));
    console.log(formData.get("body"));
    console.log(formData.get("source"));
    console.log(formData.get("isFeatured"));
    try {
      const res = await femi.post(
        `${kiniscoresApi}/news`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="w-1/2 mx-auto bg-blue-900 my-8">
        <h1 className="text-3xl font-semibold text-white  text-center mx-auto">
          KiniScores
        </h1>
        <form
          onSubmit={onFormSubmit}
          className="bg-white shadow-md rounded px-8 pb-8 mb-4"
        >
          <div className="pt-4 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="headline"
            >
              Headline
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="headline"
              type="text"
              placeholder="Headline"
              onChange={handleInputChange}
              value={newsField.headline}
            />
          </div>

          <div className="pt-4 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="subtitle"
            >
              Subtitle
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="subTitle"
              type="text"
              placeholder="Subtitle"
              value={newsField.subTitle}
              onChange={handleInputChange}
            />
          </div>

          <div className="pt-4 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newsImage"
            >
              NewsImage
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="newsImage"
              type="file"
              placeholder="NewsImage"
              onChange={onFileChange}
            />
            <img src={imgSrc} alt="" />
          </div>
          <div className="pt-4 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="body"
            >
              Body
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="body"
              row={10}
              col={30}
              type="text"
              placeholder="Body"
              value={newsField.body}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="pt-4 mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="source"
            >
              Source
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="source"
              type="text"
              placeholder="Source"
              value={newsField.source}
              onChange={handleInputChange}
            />
          </div>
          <div className="pt-4">
            <label className="md:w-2/3 block text-gray-700 font-bold">
              <input
                name="isFeatured"
                className="mr-2 leading-tight"
                type="checkbox"
                value={newsField.featured}
                onChange={handleInputChange}
              />
              <span className="text-sm">Featured</span>
            </label>
          </div>
          <div className="text-center">
            <button
              className="shadow bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Upload News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminForm;
