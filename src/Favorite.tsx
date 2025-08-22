import axios from "axios";
import { useEffect, useState } from "react";

interface FavoriteData {
  title: string;
  body: string;
  price: number;
  quantity: number;
}

const Favorite = () => {
  const [data, setData] = useState<FavoriteData | null>(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/favorite")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data); // faqat "data" obyektini olamiz
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">API dan kelgan javob:</h1>
      {data && (
        <div>
          <p><b>Title:</b> {data.title}</p>
          <p><b>Body:</b> {data.body}</p>
          <p><b>Price:</b> {data.price}</p>
          <p><b>Quantity:</b> {data.quantity}</p>
        </div>
      )}
    </div>
  );
};

export default Favorite;
