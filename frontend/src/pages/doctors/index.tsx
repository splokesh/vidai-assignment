import { Pagination } from "antd";
import DoctorDetails from "./components/DoctorDetails";
import DoctorsList from "./components/DoctorsList";
import Filters from "./components/Filters";
import SearchInput from "./components/SearchInput";
import { DoctorsProvider } from "./context/DoctorsContext";

const Doctors = () => {
    return <div>
        <div className="flex flex-row mb-4 justify-between">
            <SearchInput />
            <Filters />
        </div>
        <DoctorsList />
        <Pagination className="mt-4" align="center" current={1} total={50} defaultPageSize={10} pageSizeOptions={[10, 20, 50]} responsive onChange={() => { }} />
        <DoctorDetails />
    </div>;
};

const DoctorWithContext = () => <DoctorsProvider>
    <Doctors />
</DoctorsProvider>;

export default DoctorWithContext;