import EventCard from '../components/EventCard'
import events from '../data/EventData'

function EventList() {
    return (
    <div className="max-w-4xl mx-auto p-4"> 
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            imageSrc={event.imageSrc}
            title={event.title}
            date={event.date}
            location={event.location}
          />
        ))}
    </div>
    );
};
  
export default EventList;