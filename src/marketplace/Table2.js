
import categories from "./categories.json"
import {
	createTable,
	useTableInstance,
	getCoreRowModel,
	getExpandedRowModel,
} from '@tanstack/react-table';
import { useState } from 'react';




const table = createTable();
const defaultData = [...categories];
const defaultColumns = [
	table.createGroup({
		header: 'Full Name',

		columns: [
			table.createDataColumn('firstName', {
				id: 'First Name',

				cell: ({ row, getValue }) => (
					<div>
						{' '}
						{<a href="#">{getValue()}</a>}
						{row.getCanExpand() ? (
							<button
								{...{
									onClick: row.getToggleExpandedHandler(),
									style: { cursor: 'pointer' },
								}}
							>
								{row.getIsExpanded() ? (
									<i class="fa-solid fa-chevron-down"></i>
								) : (
									<i class="fa-solid fa-chevron-down"></i>
								)}
							</button>
						) : null}
					</div>
				),

				header: (props) => (
					<>
						<button onClick={props.instance.getToggleAllRowsExpandedHandler()}>
							{props.instance.getIsAllRowsExpanded() ? '👇' : '👉'}
						</button>
					</>
				),
			}),
		],
	}),
];









const Table2 = () => {
	const [data, setData] = useState([...defaultData]);
	const [columns, setColumns] = useState([...defaultColumns]);
	const [expanded, setExpanded] = useState({});
	const instance = useTableInstance(table, {
		data,
		columns,
		state: {
			expanded: expanded,
		},
		onExpandedChange: setExpanded,
		getSubRows: (row) => row.subRows,
		getCoreRowModel: getCoreRowModel(),
		getExpandedRowModel: getExpandedRowModel(),
	});
	// console.log(instance.getRowModel());
	return (
		<div>
			<table  border={1}>
				<div>
					<table border={1}>
						<tbody>
							{instance.getRowModel().rows.map((row) => (
								<tr key={row.id} className={`depth-${row.depth}`}>
									{row.getVisibleCells().map((cell) => (
										<td key={cell.id}>{cell.renderCell()}</td>
									))}
								</tr>
							))}
						</tbody>
						
					</table>
				</div>
			</table>
		</div>
	);
};


export default Table2;