

import { Card } from '../../components'
import { useState } from 'react'
import styles from '../../styles/account.module.scss'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const detail = [
	{
		id: 1,
		icon: 'crop_original',
		label: 'Intro',
		checked: true,
		isOpen: true
	},
	{
		id: 2,
		icon: 'people_alt',
		label: 'Profil Pengantin',
		checked: true,
		isOpen: false
	},
	{
		id: 3,
		icon: 'event_note',
		label: 'Rangkaian Acara',
		checked: true,
		isOpen: false
	},
	{
		id: 4,
		icon: 'today',
		label: 'Story',
		checked: true,
		isOpen: false
	},
	{
		id: 5,
		icon: 'collections',
		label: 'Galeri',
		checked: true,
		isOpen: false
	}
]

const Dashboard = () => {

	const [menu, setMenu] = useState(detail)

	const handleSwitch = (index) => {
		let tempMenu = menu
		tempMenu[index].checked = !tempMenu[index].checked
		setMenu(tempMenu)
	}

	const grid = 8;

	
	const getItemStyle = (isDragging, draggableStyle) => ({
		userSelect: "none",
		background: isDragging ? "#FFF4F4" : "white",
		transform: isDragging ? 'rotate(0deg)' : 'rotate(5deg)',
		...draggableStyle
	});

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
	
		return result;
	};

	const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      menu,
      result.source.index,
      result.destination.index
    );

		setMenu(items)
  }

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				Undangan
			</div>
			<div className={styles.twoColumn}>
				<div className={styles.card}>
					<DragDropContext onDragEnd={onDragEnd} >
						<Droppable droppableId="droppable">
							{(provided, snapshot) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{menu.map((item, index) => (
									<Draggable key={item.id} draggableId={item.id} index={index}>
										{(provided, snapshot) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												style={getItemStyle(
													snapshot.isDragging,
													provided.draggableProps.style
												)}
											>
												<Card handleSwitch={handleSwitch} data={item} key={index} id={index} />
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
						</Droppable>
					</DragDropContext>
				</div>
				<div className={styles.card}>
				</div>
			</div>
		</div>
	)
}

export default Dashboard