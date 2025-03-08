import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "PQJvaNd3IKtMDPUIRjLvNObw4rYbCF1ts2CCzW8Ma9PsJ4mbl5dScpUX";

const PicGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/curated?page=${page}&per_page=9`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setImages((prevImages) => [...prevImages, ...response.data.photos]); // اضافه کردن تصاویر جدید
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Image Gallery</h1>
      {}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
            {}
            {image.src ? (
              <img
                src={image.src?.medium}
                alt={image.alt || "Image"}
                className="w-full h-48 object-cover"
              />
            ) : (
              <p className="text-center text-gray-500">No Image Available</p>
            )}
          </div>
        ))}
      </div>

      {}
      <div className="text-center mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default PicGallery;
