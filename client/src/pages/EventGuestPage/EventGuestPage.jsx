import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccordionGuestPage from "../../components/EventGuestPage/AccordionForGuestPage/AccordionGuestPage";
import EventGuestForm from "../../components/EventGuestPage/EventGuestForm/EventGuestForm";
import EventInfo from "../../components/EventGuestPage/EventInfo/EventInfo";
import Spinner from "../../components/Spinner/Spinner";
import { useEvent } from "../../hooks/useEvent";
import useFetch from "../../hooks/useFetch";
import "./EventGuestPage.css";
import defaultEventImage from "/public/defaultEventImage.jpeg";

function EventGuestPage() {
  const { event, getOneEvent } = useEvent();
  const [formValues, setFormValues] = useState();
  useEffect(() => {
    getOneEvent.perform();

    return () => getOneEvent.cancel();
  }, []);

  const onChange = (e, isMultipleChoice) => {
    setFormValues((formValues) => {
      if (isMultipleChoice) {
        if (!formValues) {
          formValues = {};
        }
        if (!formValues[e.target.name]) {
          formValues[e.target.name] = [e.target.value];
        }
        const oldValues = formValues?.[e.target.name];
        if (e.target.checked) {
          oldValues.push(e.target.value);
          const newValues = [...new Set(oldValues)];
          return { ...formValues, [e.target.name]: newValues };
        } else {
          const newValues = oldValues.filter(
            (value) => value !== e.target.value
          );
          return { ...formValues, [e.target.name]: newValues };
        }
      }
      return { ...formValues, [e.target.name]: e.target.value };
    });
  };

  const navigate = useNavigate();
  const onReceived = () => {
    navigate("/");
  };
  const POST_RESPONSE_ROUTE = "/response/";
  const { isLoading, performFetch } = useFetch(POST_RESPONSE_ROUTE, onReceived);

  const submit = async (e) => {
    e.preventDefault();

    const requestBody = {
      eventId: event._id,
      guestName: "",
      guestEmail: "",
      responses: Object.entries(formValues).map(([question, answer]) => {
        return {
          question,
          answer,
        };
      }),
    };

    requestBody.guestName = requestBody.responses.find(
      (item) => item.question === "question_1"
    ).answer;
    requestBody.guestEmail = requestBody.responses.find(
      (item) => item.question === "question_2"
    ).answer;

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    performFetch(options);
  };

  return (
    <div className="eventContainer">
      <div className="img-box-guestPage">
        <img
          className="event-img"
          src={event?.templateDetails?.images?.[0]?.url || defaultEventImage}
          alt={event?.templateDetails?.images?.[0]?.alt || "event image"}
        />
      </div>
      <div className="eventGuestPage-content">
        <AccordionGuestPage title="Details" isActive={true}>
          <EventInfo {...event?.templateDetails} className="information-box" />
        </AccordionGuestPage>
        <AccordionGuestPage title="Form" isActive={true}>
          <EventGuestForm
            formProps={event?.form}
            onChange={onChange}
            onSubmit={submit}
          />
        </AccordionGuestPage>
      </div>
      {isLoading ? <Spinner /> : <></>}
    </div>
  );
}

export default EventGuestPage;
