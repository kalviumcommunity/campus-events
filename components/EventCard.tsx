// TODO Task 2: replace `any` with a typed prop that accepts one `event` of the Event type.
export default function EventCard({ event }: any) {
  return (
    <article>
      {/* TODO Task 4: replace this <img> with an Image from next/image. Keep src, alt, width and height. */}
      <img src={event.image} alt={event.name} width={300} height={200} />
      <h2>{event.name}</h2>
      <p>{event.day} · {event.venue}</p>
    </article>
  );
}
