import { useState, FC } from "react";
import { Card, Carousel, Divider, Button, Input, Tooltip, Rate } from "antd";
import Image from "next/image";
const { Search } = Input;
const { Meta } = Card;

export interface ItemShop {
  rawResponse: RawResponse[];
}

export interface RawResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number | string;
}

const Shop: FC<ItemShop> = ({ rawResponse }) => {
// export default ({rawResponse} : ItemShop) : JSX.Element=>{
  const [item, setItem] = useState(rawResponse);
  const onSearch = (value: string) => {
    console.log(value)
  };
  if (!Array.isArray(item)) return null;
  else
    return (
      <div className="w-full h-auto bg-gray-600">
        <Carousel
          autoplay
          className="py-6 mx-auto md:w-1/3 sm:w-full rounded-xl"
        >
          {rawResponse.map(
            (
              { id, title, price, description, category, image, rating },
              index
            ) => (
              <div
                className="relative text-center bg-white w-96 h-96 rounded-xl"
                key={index}
              >
                <Image
                  src={image}
                  width={300}
                  height={300}
                  alt={title}
                  blurDataURL="loading.jpg"
                  placeholder="blur"
                />
                <div className="absolute bottom-0 right-0 mr-20">
                  <div className="flex space-x-3 text-lg">
                    <span className="text-yellow-300 line-through ">
                      $ {price * 2}
                    </span>
                    <span className="font-bold text-yellow-700 ">
                      $ {price}
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </Carousel>
        <div className="bg-white ">
          <Divider />
          <div className="flex justify-between mx-3 my-6">
            <span className="text-2xl font-bold">item</span>
            <Search
              className="w-96 xs:w-30 md:w-30"
              placeholder="name , price"
              enterButton="search"
              size="large"
              onSearch={onSearch}
            />
          </div>

          <Divider />
          <div className="flex flex-wrap justify-center space-x-5 space-y-5 align-top">
            {item.map(
              (
                { id, title, price, description, category, image, rating },
                index
              ) => (
                <Card
                  key={index}
                  hoverable
                  className="w-96"
                  cover={
                    <Image
                      src={image}
                      width="100%"
                      height={250}
                      alt={title}
                      loading="lazy"
                      blurDataURL="loading.jpg"
                      placeholder="blur"
                    />
                  }
                >
                  <Rate disabled allowHalf defaultValue={rating.rate} />
                  <Meta title={title} description={description} className="h-32 overflow-hidden overflow-ellipsis " />
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    );
};
export default Shop