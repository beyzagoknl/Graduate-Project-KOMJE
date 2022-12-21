import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEvent } from "../../hooks/useEvent";
import { useCancelEvent } from "../../hooks/useCancelEvent";
import "./eventPage.css";
import Accordion from "../../components/Accordion/Accordion";
import Spinner from "../../components/Spinner/Spinner";
import { generateLink, copyLink } from "../../util/utils";
import defaultEventImage from "/public/defaultEventImage.jpeg";
import FormInput from "../../components/Form/FormInput/FormInput";
import FormSingleChoice from "../../components/Form/FormInput/FormSingleChoice";
import FormMultipleChoice from "../../components/Form/FormInput/FormMultipleChoice";
import Button from "../../components/Button/Button";

const EventPage = () => {
  const { events } = useEvent();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { isLoading, isSuccess, cancelEvent, cancelFetch } =
    useCancelEvent(eventId);
  const event = events.find((event) => event._id === eventId);

  useEffect(() => {
    return () => cancelFetch();
  }, []);

  const getEventDetails = () => {
    if (event) {
      if (event.type === "WEDDING") {
        if (event.template === "DEFAULT") {
          return getWeddingDefault(event.templateDetails);
        }
      }
    }
  };

  const showResults = () => {
    navigate(`/result/${event._id}`);
  };

  return (
    <div className="event-page-container">
      {(isLoading || isSuccess) && <Spinner />}
      <div className="img-guest-box">
        <img
          className="event-img"
          src={event?.templateDetails?.images?.[0]?.url || defaultEventImage}
          alt={event?.templateDetails?.images?.[0]?.alt || "event image"}
        />
      </div>

      <div className="details">
        <Accordion title="Details">{getEventDetails()}</Accordion>
      </div>
      <div className="form">
        <Accordion title="Form">{getEventForm(event?.form)}</Accordion>
      </div>

      <div className="copy-link-group">
        <div className="shot-link">
          <FormInput disabled value={generateLink(event?.shortLink)} />
        </div>
        <Button
          label="Copy Link"
          type="button"
          disabled={isLoading}
          onClick={() => copyLink(event?.shortLink)}
        />
      </div>
      <div className="button-group">
        <Button
          onClick={showResults}
          label="Show Results"
          disabled={isLoading}
        />
        <Button
          onClick={cancelEvent}
          label="Cancel Event"
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default EventPage;

const getEventForm = (form) => {
  return (
    <div className="question-form">
      <form>
        {form?.map((question, index) => {
          return (
            <>
              {question.attributes.type === "text" && (
                <FormInput
                  key={question.key}
                  disabled
                  label={`${index + 1} - ${question.label}`}
                  required={question.attributes.required}
                  placeholder="free text"
                />
              )}
              {question.attributes.type === "email" && (
                <FormInput
                  key={question.key}
                  disabled
                  label={`${index + 1} - ${question.label}`}
                  required={question.attributes.required}
                  placeholder="email"
                />
              )}
              {question.attributes.type === "number" && (
                <FormInput
                  key={question.key}
                  disabled
                  label={`${index + 1} - ${question.label}`}
                  required={question.attributes.required}
                  placeholder="number"
                />
              )}
              {question.attributes.type === "singleChoice" && (
                <FormSingleChoice
                  key={question.key}
                  disabled
                  label={`${index + 1} - ${question.label}`}
                  required={question.attributes.required}
                  options={question.options}
                />
              )}
              {question.attributes.type === "multipleChoice" && (
                <FormMultipleChoice
                  key={question.key}
                  disabled
                  label={`${index + 1} - ${question.label}`}
                  required={question.attributes.required}
                  options={question.options}
                />
              )}
            </>
          );
        })}
      </form>
    </div>
  );
};

const getWeddingDefault = (details) => {
  const weddingDate = new Date(details.date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <div className="weddingDefault">
      <div className="item">
        <span className="title">Title:</span> {details.eventTitle}
      </div>
      <div className="item">
        <span className="title">Bride and Groom:</span> {details.brideName}&
        {details.groomName}
      </div>
      <div className="item">
        <span className="title">Date:</span> {weddingDate}
      </div>
      <div className="item">
        <span className="title">Address:</span> {details.address}
      </div>
      <div className="item">
        <span className="title">Contact:</span> {details.contactNumber} -{" "}
        {details.contactName}
      </div>
      <div className="item">
        <span className="title">PS:</span> {details.description}
      </div>
    </div>
  );
};
