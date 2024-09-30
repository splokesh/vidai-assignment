import { Pagination } from "antd";
// import DoctorDetails from "./components/DoctorDetails";
import DoctorsList from "./components/DoctorsList";
import Filters from "./components/Filters";
import SearchInput from "./components/SearchInput";
import { DoctorsProvider } from "./context/DoctorsContext";
import { useDoctors } from "./hooks/useDoctors";

const Doctors = () => {
    const { page, limit, total } = useDoctors();
    return <div>
        <div className="flex flex-row mb-4 justify-between">
            <SearchInput />
            <Filters />
        </div>
        <DoctorsList />
        <Pagination className="mt-4" align="center" current={page} total={total} defaultPageSize={limit} pageSizeOptions={[10, 20, 50]} responsive onChange={(page, pageSize) => { console.log(page, pageSize, "page, pageSize"); }} />
    </div>;
};

const DoctorWithContext = () => <DoctorsProvider>
    <Doctors />
</DoctorsProvider>;

export default DoctorWithContext;