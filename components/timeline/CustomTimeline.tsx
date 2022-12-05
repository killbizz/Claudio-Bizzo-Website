import { Event } from "../../types/Event";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type Props = {
  events: Event[];
};

const CustomTimeline = ({ events }: Props) => {
  return (
    <>
      <h3 className="homepage-subtitle text-light text-center my-5">
        Dove sono stato
      </h3>
      <VerticalTimeline
        className="vertical-timeline-custom-line mt-2"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-element-dark"
          contentStyle={{ background: "#ffefde", color: "black" }}
          date="2010 - 2011"
          iconStyle={{ background: "#c29f7a", color: "#fff" }}
          icon={<span className="material-symbols-outlined">location_on</span>}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-element-dark"
          contentStyle={{ background: "#ffefde", color: "black" }}
          date="2010 - 2011"
          iconStyle={{ background: "#c29f7a", color: "#fff" }}
          icon={<span className="material-symbols-outlined">location_on</span>}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work vertical-timeline-element-dark"
          contentStyle={{ background: "#ffefde", color: "black" }}
          date="2010 - 2011"
          iconStyle={{ background: "#c29f7a", color: "#fff" }}
          icon={<span className="material-symbols-outlined">location_on</span>}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h3 className="homepage-subtitle text-light text-center my-5">
        Dove possiamo incontrarci
      </h3>
      <VerticalTimeline
        className="vertical-timeline-custom-line mt-2 mb-5"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#326475", color: "#fff" }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: "#326475", color: "#fff" }}
          icon={<span className="material-symbols-outlined">location_on</span>}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#326475", color: "#fff" }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: "#326475", color: "#fff" }}
          icon={<span className="material-symbols-outlined">location_on</span>}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#326475", color: "#fff" }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: "#326475", color: "#fff" }}
          icon={<span className="material-symbols-outlined">location_on</span>}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default CustomTimeline;
