import MUIDataTable from "mui-datatables";
import { Rate, Tooltip } from "antd";
import Image from "next/image";
const columns = [
  {
    name: "id",
    label: "รหัส",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "image",
    label: "รูป",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <Image
          src={value}
          objectFit="fill"
          alt={value}
          width="100%"
          height="100%"
          placeholder="blur"
          blurDataURL="loading.jpg"
        />
      ),
    },
  },
  {
    name: "title",
    label: "ชื่อ",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value: string, tableMeta, updateValue) => (
        <p className="overflow-ellipsis w-36">{value}</p>
      ),
    },
  },
  {
    name: "price",
    label: "ราคา",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "description",
    label: "คำอธิบาย",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value: string, tableMeta, updateValue) => (
        <p className="overflow-ellipsis w-60">{value}</p>
      ),
    },
  },
  {
    name: "category",
    label: "ประเภท",
    options: {
      filter: true,
      sort: false,
    },
  },

  {
    name: "rating",
    label: "ความนิยม",
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => (
        <Tooltip title={value + " ดาว"}>
          <Rate allowHalf disabled defaultValue={value.rate} />
        </Tooltip>
      ),
    },
  },
];

const options = {
  filterType: "checkbox",
};

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

export default function Muitable({ ItemShop }) {
  if(!ItemShop) return <p>data not found</p>
  return (
    <MUIDataTable
      className="z-0 text-lg"
      title={"Item shop"}
      data={ItemShop}
      columns={columns}
      options={options}
    />
  );
}
