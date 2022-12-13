import { Event } from "../../types/Event";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Fragment } from "react";

type Props = {
  events: Event[];
};

const CustomTimeline = ({ events }: Props) => {
  const today: Date = new Date();

  const isEventDateAfterToday = (value: Event) => {
    const dateParts: string[] = value.data_fine.split("/");
    const date = new Date();
    date.setFullYear(+dateParts[0], +dateParts[1] - 1, +dateParts[2]);
    date.setUTCHours(21, 59, 0, 0);
    return date >= today;
  };

  return (
    <>
      {events.some(isEventDateAfterToday) && (
        <>
          <h3 className="homepage-subtitle text-light text-center my-5">
            Dove possiamo incontrarci
          </h3>
          <VerticalTimeline className="vertical-timeline-custom-line mt-2">
            {events.filter(isEventDateAfterToday).map((value) => (
              <Fragment key={value.nome_evento}>
                <VerticalTimelineElement
                  id={value.nome_evento}
                  className="vertical-timeline-element--work"
                  visible
                  contentStyle={{ background: "#326475", color: "#fff" }}
                  date={value.data_inizio + "   -   " + value.data_fine}
                  iconStyle={{ background: "#326475", color: "#fff" }}
                  icon={
                    <span
                      key={value.nome_evento}
                      className="material-symbols-outlined"
                    >
                      location_on
                    </span>
                  }
                >
                  <h3 className="vertical-timeline-element-title mb-3">
                    {value.nome_evento}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle mb-4">
                    {value.luogo}
                  </h4>
                  {value.descrizione !== "" && (
                    <p className="font-italic">{value.descrizione}</p>
                  )}
                </VerticalTimelineElement>
              </Fragment>
            ))}
          </VerticalTimeline>
        </>
      )}
      <h3 className="homepage-subtitle text-light text-center my-5">
        Dove sono stato
      </h3>
      <VerticalTimeline className="vertical-timeline-custom-line mt-2 mb-5">
        {events
          .filter((value) => {
            const dateParts: string[] = value.data_fine.split("/");
            const date = new Date();
            date.setFullYear(+dateParts[0], +dateParts[1] - 1, +dateParts[2]);
            date.setUTCHours(21, 59, 0, 0);
            return date < today;
          })
          .map((value) => (
            <Fragment key={value.nome_evento}>
              <VerticalTimelineElement
                id={value.nome_evento}
                className="vertical-timeline-element--work vertical-timeline-element-dark"
                visible
                contentStyle={{ background: "#ffefde", color: "black" }}
                date={value.data_inizio + "   -   " + value.data_fine}
                iconStyle={{ background: "#c29f7a", color: "#fff" }}
                icon={
                  <span
                    key={value.nome_evento}
                    className="material-symbols-outlined"
                  >
                    location_on
                  </span>
                }
              >
                <h3 className="vertical-timeline-element-title mb-3">
                  {value.nome_evento}
                </h3>
                <h4 className="vertical-timeline-element-subtitle mb-4">
                  {value.luogo}
                </h4>
                {value.descrizione !== "" && (
                  <p className="font-italic">{value.descrizione}</p>
                )}
              </VerticalTimelineElement>
            </Fragment>
          ))}
      </VerticalTimeline>
    </>
  );
};

export default CustomTimeline;
