import HomeEventsItem from "../HomeEventsItem";

import "./styles.scss";

const HomeEvents = (props: { events: any[] }) => {
  const { events } = props;

  const eventsList = events.map((event) => (
    <HomeEventsItem key={event._id} imagePath={event.imagePath} />
  ));

  return (
    <section className="events">
      <div className="container">
        <h3 className="events-title">
          <span className="events-title__item">Наші</span>
          <span className="events-title__item">акції</span>
        </h3>
        <ul className="events-list">{eventsList}</ul>
        <div className="events-list-button-wrap">
          <button className="events-list-item__button">Всі акції</button>
        </div>
      </div>
    </section>
  );
};

export default HomeEvents;
