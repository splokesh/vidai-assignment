import { Select } from "antd";

const Filters = () => {
    return <div className="flex flex-row gap-2">
        <Select placeholder="Select a filter" />
        <Select placeholder="Select a filter" />
    </div>;
};

export default Filters;
