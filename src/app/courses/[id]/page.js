import React from 'react'
import events from '../../data/EventData'
import CourseCard from '../../components/CourseCard'

async function DetailPage({ params }) {
  const { id } = await params;

  const event = events.find((event) => event.id == id);

  if (!event) {
    return <div>Event not found</div>;
  }

  return(
    <CourseCard
      id={event.id}
      imageSrc={event.imageSrc}
      title={event.title}
      date={event.date}
      location={event.location}
    />
  )
}

export default DetailPage;