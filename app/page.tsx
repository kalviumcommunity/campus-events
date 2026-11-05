import EventCard from "../components/EventCard";
import { events } from "../data/events";

// TODO Task 2: give each EventCard a key prop set to event.id.
// TODO Task 5: load RsvpPanel with dynamic from next/dynamic, using the import form and a loading message, and render it below the grid.
export default function Home() {
  return (
    <main>
      <h1>Campus Events</h1>
      <div>
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </main>
  );
}
