import { Event } from "../../types/Event";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { v4 as uuidv4 } from "uuid";

type Props = {
  events: Event[];
};

const CustomTimeline = ({ events }: Props) => {
  const today: Date = new Date();

  return (
    <>
      <h3 className="homepage-subtitle text-light text-center my-5">
        Dove sono stato
      </h3>
      <VerticalTimeline className="vertical-timeline-custom-line mt-2">
        {events
          .filter((value) => {
            const date = new Date(value.data_fine);
            // console.log("PAST : " + value.data_fine + " - " + date + " - " + today + " : " + (date < today));
            return date < today;
          })
          .map((value) => (
            <>
              <VerticalTimelineElement
                key={uuidv4()}
                className="vertical-timeline-element--work vertical-timeline-element-dark"
                contentStyle={{ background: "#ffefde", color: "black" }}
                date={value.data_inizio + "   -   " + value.data_fine}
                iconStyle={{ background: "#c29f7a", color: "#fff" }}
                icon={
                  <span className="material-symbols-outlined">location_on</span>
                }
              >
                <h3 className="vertical-timeline-element-title mb-3">
                  {value.nome_evento}
                </h3>
                <h4 className="vertical-timeline-element-subtitle mb-4">
                  {value.luogo}
                </h4>
                {value.descrizione !== "" && <p className="font-italic" >{value.descrizione}</p>}
              </VerticalTimelineElement>
            </>
          ))}
      </VerticalTimeline>
      <h3 className="homepage-subtitle text-light text-center my-5">
        Dove possiamo incontrarci
      </h3>
      <VerticalTimeline className="vertical-timeline-custom-line mt-2 mb-5">
        {events
          .filter((value) => {
            const date = new Date(value.data_fine);
            // console.log("FUTURE : " + value.data_fine + " - " + date + " - " + today + " : " + (date >= today));
            return date >= today;
          })
          .map((value) => (
            <>
              <VerticalTimelineElement
                key={uuidv4()}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#326475", color: "#fff" }}
                date={value.data_inizio + "   -   " + value.data_fine}
                iconStyle={{ background: "#326475", color: "#fff" }}
                icon={
                  <span className="material-symbols-outlined">location_on</span>
                }
              >
                <h3 className="vertical-timeline-element-title mb-3">
                  {value.nome_evento}
                </h3>
                <h4 className="vertical-timeline-element-subtitle mb-4">
                  {value.luogo}
                </h4>
                {value.descrizione !== "" && <p className="font-italic" >{value.descrizione}</p>}
              </VerticalTimelineElement>
            </>
          ))}
      </VerticalTimeline>
    </>
  );
};

export default CustomTimeline;
