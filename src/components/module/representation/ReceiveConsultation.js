"use client";

import { consultationSchema } from "@/core/schema";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";
import { yupResolver } from "@hookform/resolvers/yup";

function ReceiveConsultation() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(consultationSchema) });

  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    setSubmittedData(data);
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="flex flex-col items-center gap-8 my-12">
      <h3 className="text-2xl font-bold text-[#353535]">
        Receiving Consultation
      </h3>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center gap-8"
      >
        <div className="w-[calc(100%-9rem)] flex gap-4">
          <div className="flex flex-col flex-1">
            <input
              placeholder="Full Name"
              className="input w-full block"
              {...register("fullName")}
            />
            {errors.fullName && (
              <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <input
              placeholder="Phone Number"
              className="input w-full block"
              {...register("phone")}
            />
            {errors.phone && (
              <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="flex flex-col flex-1">
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  calendarPosition="bottom"
                  className="green"
                  minDate={new Date()}
                  render={(value, openCalendar) => (
                    <input
                      onClick={openCalendar}
                      value={value || ""}
                      placeholder="Consultation Date"
                      readOnly
                      className="input w-full block"
                    />
                  )}
                />
              )}
            />
            {errors.date && (
              <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                {errors.date.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="btn bg-[#417F56] text-white text-base font-medium"
        >
          Request for Consultation
        </button>
      </form>
    </div>
  );
}

export default ReceiveConsultation;
