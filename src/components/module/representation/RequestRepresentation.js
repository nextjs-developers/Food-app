"use client";

import { representationSchema } from "@/core/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import UploadBox from "./UploadBox";
import { useRequestFranchise } from "@/core/services/mutations";
import toast from "react-hot-toast";

const Map = dynamic(() => import("./Map"), { ssr: false });

function RequestRepresentation() {
  const { mutate, isPending } = useRequestFranchise();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(representationSchema),
    defaultValues: {
      images: [],
    },
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onFilesSelected = (files) => {
    setValue("images", files, { shouldValidate: true });
    setUploadedFiles(files);
  };

  const addressHandler = ({ lat, lng, address }) => {
    setValue("address", address);
  };

  const onSubmit = (data) => {
   
    if (!uploadedFiles || uploadedFiles.length === 0) {
      return;
    }
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key !== "images") {
        formData.append(key, value);
      }
    });

    uploadedFiles.forEach((file) => {
      formData.append("images", file);
    });

    mutate(formData, {
      onSuccess: () => {
        reset();
        setUploadedFiles([]);
        toast.success('Your request has been successfully submitted!')
      },
      onError: (error) => {
        console.log("Error submitting form:", error);
        toast.error("Something went wrong while submitting your request. Please try again later!")
      },
    });
  };
  return (
    <div className="flex flex-col items-center gap-8 w-[calc(100%-9rem)] mx-auto p-8 border border-[#CBCBCB] my-12">
      <h3 className="text-2xl font-bold text-[#353535]">
        Representation Request Form
      </h3>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-15"
        >
          <div className="w-full">
            <h4 className="text-lg text-[#353535] my-4">
              Personal Details of the Applicant
            </h4>
            <div className="flex justify-between flex-wrap w-full">
              <div className="flex flex-col">
                <input
                  placeholder="First Name"
                  className="input w-[290px]"
                  {...register("first_name")}
                />
                {errors.first_name && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.first_name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Last Name"
                  className="input w-[290px]"
                  {...register("last_name")}
                />
                {errors.last_name && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.last_name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="National ID"
                  className="input w-[290px]"
                  {...register("national_id")}
                />
                {errors.national_id && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.national_id.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Phone Number"
                  className="input w-[290px]"
                  {...register("phone_number")}
                />
                {errors.phone_number && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.phone_number.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg text-[#353535] my-4">
              Applicant's Property Address
            </h4>
            <div className="grid grid-cols-3 gap-2 items-start">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="flex flex-col col-span-1">
                  <input
                    placeholder="Province"
                    className="input w-[382px]"
                    {...register("province")}
                  />
                  {errors.province && (
                    <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                      {errors.province.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col col-span-1">
                  <input
                    placeholder="City"
                    className="input w-[382px]"
                    {...register("city")}
                  />
                  {errors.city && (
                    <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                      {errors.city.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col col-span-2 col-start-2">
                  <textarea
                    placeholder="Address"
                    className="textarea w-[382px] h-[100px]"
                    {...register("address")}
                  />
                  {errors.address && (
                    <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                      {errors.address.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col col-span-1 row-start-2">
                  <input
                    placeholder="Region"
                    className="input w-[382px]"
                    {...register("region")}
                  />
                  {errors.region && (
                    <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                      {errors.region.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <Map addressHandler={addressHandler} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg text-[#353535] my-4">
              Applicant's Property Specifications
            </h4>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col">
                <input
                  placeholder="Type of Ownership"
                  className="input w-[382px]"
                  {...register("ownership_type")}
                />
                {errors.ownership_type && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.ownership_type.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Property Area (square meters)"
                  className="input w-[382px]"
                  {...register("area")}
                />
                {errors.area && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.area.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  placeholder="Age of Property"
                  className="input w-[382px]"
                  {...register("building_age")}
                />
                {errors.building_age && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.building_age.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-lg text-[#353535] my-4">
              Features of the applicant's property
            </h4>
            <div className="flex justify-between items-start w-full">
              <div>
                <p className="text-[#717171]">Applicant's Property:</p>
                <div className="grid grid-cols-2 gap-x-16 gap-y-2 mt-4 ">
                  <label className="label text-[#717171] text-sm">
                    <input
                      type="checkbox"
                      {...register("has_business_license")}
                      className="checkbox border-[#417F56] w-[16px] h-[16px] rounded-xs"
                    />
                    Has a business license
                  </label>
                  <label className="label text-[#717171] text-sm">
                    <input
                      type="checkbox"
                      {...register("has_kitchen")}
                      className="checkbox border-[#417F56] w-[16px] h-[16px] rounded-xs"
                    />
                    Has a kitchen
                  </label>
                  <label className="label text-[#717171] text-sm">
                    <input
                      type="checkbox"
                      {...register("has_parking")}
                      className="checkbox border-[#417F56] w-[16px] h-[16px] rounded-xs"
                    />
                    Has a parking lot
                  </label>
                  <label className="label text-[#717171] text-sm">
                    <input
                      type="checkbox"
                      {...register("has_warehouse")}
                      className="checkbox border-[#417F56] w-[16px] h-[16px] rounded-xs"
                    />
                    Has a warehouse
                  </label>
                </div>
              </div>
              <div>
                <p className="text-[#717171] mb-1.5">Property's Images</p>
                <UploadBox onFilesSelected={onFilesSelected} />
                {/* <input type="hidden" {...register("images")} />
                {errors.images && (
                  <span className="text-red-500 bg-red-200 mt-2 w-fit px-2 rounded-xl text-sm">
                    {errors.images.message}
                  </span>
                )} */}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-[#417F56] text-white text-base font-medium mt-[-40px]"
          >
            Submit Information
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestRepresentation;
