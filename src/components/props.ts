export interface DefaultProps {
	as?: string;
}
export interface MonthProps extends DefaultProps {
	monthFormat?: string;
}
export interface CalendarProps extends DefaultProps {
	startDate?: Date;
}
