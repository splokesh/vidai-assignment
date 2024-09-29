export type ObjectId = string;

export interface Doctor {
	_id: ObjectId;
	name: string;
	specialty: string;
	location: string;
	rating: number;
	phone: string;
	email: string;
}
