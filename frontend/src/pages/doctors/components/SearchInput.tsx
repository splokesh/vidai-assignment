import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SearchInput = () => {
    return <Input addonBefore={<SearchOutlined />} placeholder="Search doctors by name" className="w-1/2" />;
};

export default SearchInput;
