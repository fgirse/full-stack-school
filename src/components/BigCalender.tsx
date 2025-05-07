"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = ({
  data,
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  const [view, setView] = useState<"month" | "week" | "work_week" | "day" | "agenda">("work_week");

  const handleOnChangeView = (selectedView: "month" | "week" | "work_week" | "day" | "agenda") => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={data}
      defaultView={view} // Use lowercase string
      onView={handleOnChangeView} // Ensure the handler matches the expected type
    />
  );
};

export default BigCalendar;
