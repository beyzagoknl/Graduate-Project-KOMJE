import React, { useState, useEffect } from "react";
import { useEvent } from "../../hooks/useEvent";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import Stepper from "../../components/Stepper/Stepper";
import EventDetailsForm from "../../components/CreateEvent/EventDetailsForm/EventDetailsForm";
import QuestionsForm from "../../components/CreateEvent/QuestionsForm/QuestionsForm";
import ImageForm from "../../components/CreateEvent/ImageForm/ImageForm";
import ShortLinkForm from "../../components/CreateEvent/ShortLinkForm/ShortLinkForm";
import { defaultQuestions } from "../../components/CreateEvent/data";

const CreateForm = () => {
  const [isEventCreated, setEventCreated] = useState(false);

  const onSuccess = () => {
    toast.success("Congrats! Invitation have created successfully!");
    setEventCreated(true);
  };

  const onError = (error) => {
    toast.error("Oops! Something went wrong." + error.msg);
  };

  const { event, create, error, isLoading, isSuccess } = useEvent(
    onSuccess,
    onError
  );
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [imageFile, setImageFile] = useState({
    file: [],
    filePreview: null,
  });

  const [values, setValues] = useState({
    eventTitle: "",
    brideName: "",
    groomName: "",
    date: "",
    address: "",
    description: "",
    contactNumber: "",
    contactName: "",
  });

  const [form, setForm] = useState(defaultQuestions);

  useEffect(() => {
    if (error) {
      toast.error(
        "Oops! Something went wrong. We cannot create your invitation."
      );
    }
    if (isSuccess) {
      toast.success("You have created your invitation successfully!");
    }
  }, [error, isSuccess]);

  const uploadImage = async () => {
    if (!imageFile.file || imageFile.file?.length === 0) return [];

    const data = new FormData();
    data.append("file", imageFile.file);
    data.append("upload_preset", "uploads");

    try {
      setIsImageUploading(true);

      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqcwuzmai/image/upload",
        data
      );
      setIsImageUploading(false);

      return [
        { url: uploadRes?.data?.url, alt: imageFile.file.name.split(".")[0] },
      ];
    } catch (error) {
      setIsImageUploading(false);
      toast.error("Oops! Something went wrong. We cannot upload image.");
    }
  };

  const createEvent = async () => {
    const { ...rest } = values;

    try {
      const images = await uploadImage();

      const requestBody = {
        isPrivate: false,
        type: "WEDDING",
        template: "DEFAULT",
        templateDetails: {
          ...rest,
          images,
        },
        form: form,
      };
      create.perform(requestBody);
      setEventCreated(true);
    } catch (error) {
      setIsImageUploading(false);
      toast.error(
        "Oops! Something went wrong. We cannot create your invitation."
      );
    }
  };

  return (
    <div className="create-form-page">
      {(isLoading || isImageUploading) && <Spinner />}
      <Stepper submitStep={2}>
        <EventDetailsForm
          label="Details"
          values={values}
          setValues={setValues}
        />
        <ImageForm
          label="Image"
          imageFile={imageFile}
          setImageFile={setImageFile}
        />
        <QuestionsForm
          label="Form"
          form={form}
          setForm={setForm}
          isEventCreated={isEventCreated}
          submitFunc={createEvent}
        />
        <ShortLinkForm
          label="Short link"
          shortLink={event?.shortLink}
          isLoading={isLoading || isImageUploading}
        />
      </Stepper>
    </div>
  );
};

export default CreateForm;
