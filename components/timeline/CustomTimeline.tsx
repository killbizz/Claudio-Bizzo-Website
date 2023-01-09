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

  const isEventDateBeforeToday = (value: Event) => {
    const dateParts: string[] = value.data_fine.split("/");
    const date = new Date();
    date.setFullYear(+dateParts[0], +dateParts[1] - 1, +dateParts[2]);
    date.setUTCHours(21, 59, 0, 0);
    return date < today;
  };

  return (
    <>
      <h3 className="homepage-subtitle text-center my-5" style={{"color" : "white"}}>
        Dove possiamo incontrarci
      </h3>
      {events.some(isEventDateAfterToday) ? (
        <VerticalTimeline className="vertical-timeline-custom-line mt-2">
          {events.filter(isEventDateAfterToday).map((value) => (
            <Fragment key={value.nome_evento}>
              <VerticalTimelineElement
                id={value.nome_evento}
                className="vertical-timeline-element--work"
                visible
                contentStyle={{ background: "#326475", color: "#ffefde" }}
                date={
                  value.data_inizio.split("/").reverse().join("/") + ( 
                    value.data_inizio !== value.data_fine ? "   -   " + value.data_fine.split("/").reverse().join("/") : "")
                }
                iconStyle={{ background: "#326475", color: "#ffefde" }}
                icon={
                  <span
                    key={value.nome_evento}
                    className="material-symbols-outlined"
                  >
                    location_on
                  </span>
                }
              >
                <h3 className="vertical-timeline-element-title mb-4">
                  {value.nome_evento}
                </h3>
                <p className="vertical-timeline-element-subtitle mb-4 font-italic">
                  {value.luogo}
                </p>
                {value.descrizione !== "" && (
                  <p>{value.descrizione}</p>
                )}
              </VerticalTimelineElement>
            </Fragment>
          ))}
        </VerticalTimeline>
      ) : (
        <>
          <p className="text-center mt-3" style={{"color" : "black"}}>Nessun evento attualmente in programma.</p>
        </>
      )}
      <h3 className="homepage-subtitle text-center my-5" style={{"color" : "white"}}>
        Dove sono stato
      </h3>
      <VerticalTimeline className="vertical-timeline-custom-line mt-2 mb-5">
        {events.filter(isEventDateBeforeToday).map((value) => (
          <Fragment key={value.nome_evento}>
            <VerticalTimelineElement
              id={value.nome_evento}
              className="vertical-timeline-element--work vertical-timeline-element-dark"
              visible
              contentStyle={{ background: "#ffefde", color: "black" }}
              date={
                value.data_inizio.split("/").reverse().join("/") + ( 
                  value.data_inizio !== value.data_fine ? "   -   " + value.data_fine.split("/").reverse().join("/") : "")
              }
              iconStyle={{ background: "#c29f7a", color: "#ffefde" }}
              icon={
                <span
                  key={value.nome_evento}
                  className="material-symbols-outlined"
                >
                  location_on
                </span>
              }
            >
              <h3 className="vertical-timeline-element-title mb-4">
                {value.nome_evento}
              </h3>
              <p className="vertical-timeline-element-subtitle mb-4 font-italic">
                {value.luogo}
              </p>
              {value.descrizione !== "" && (
                <p>{value.descrizione}</p>
              )}
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default CustomTimeline;
