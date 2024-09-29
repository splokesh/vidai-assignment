import { Button, Card, Rate, theme } from "antd";
import { Doctor } from "../types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDoctors } from "../context/DoctorsContext";

interface ActionButtonProps {
    icon: React.ReactNode;
    onClick: () => void;
}

interface DoctorCardProps {
    doctor: Doctor;
    index: number;
}
const ActionButton = ({ icon, onClick }: ActionButtonProps) => {
    return <Button className="border-none hover:border-none" icon={icon} onClick={onClick} variant="text" />;
}

const DoctorCard = ({ doctor, index }: DoctorCardProps) => {
    const { token } = theme.useToken();

    const handleEdit = () => {
        console.log("Edit");
    };
    const handleDelete = () => {
        console.log("Delete");
    };

    const borderWidth = `${index === 0 ? "1" : "0"}px 0px 1px 0px`;
    return (<Card styles={{ body: { padding: '10px 0px', border: `1px solid ${token.colorBorder}`, borderWidth, borderRadius: 0 } }} bordered={false}>
        <div className="flex flex-row items-center ">
            <div className="w-full">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>

                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <p className="text-gray-600">{doctor.specialty}</p>
                        <p className="text-gray-600">{doctor.location}</p>
                        {/* <p className="text-yellow-500">Rating: {doctor.rating}/5</p> */}
                    </div>
                    <div>
                        <p>{doctor.phone}</p>
                        <p>{doctor.email}</p>
                    </div>
                    <div>
                        <Rate value={doctor.rating} disabled />

                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <ActionButton icon={<EditOutlined style={{
                    color: "#1777ff"
                }} />} onClick={handleEdit} />
                <ActionButton icon={<DeleteOutlined style={{
                    color: "#eb2f95"
                }} />} onClick={handleDelete} />
            </div>
        </div>
    </Card>)
};

const DoctorsList = () => {
    const { doctors } = useDoctors();
    return <div>
        {doctors.map((doctor: Doctor, index: number) => <DoctorCard key={doctor._id} doctor={doctor} index={index} />)}
    </div>;
};

export default DoctorsList;
