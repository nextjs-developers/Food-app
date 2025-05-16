const { object, string, mixed, boolean, array } = require("yup");

const consultationSchema = object({
  fullName: string()
    .required("Enter your name")
    .min(3, "Your name must have at least 3 characters"),
  phone: string()
    .required("Enter your phone number")
    .matches(/^((\+98|0)9\d{9})$/, "Enter a valid phone number"),
  date: mixed().required("Choose the date"),
});

const representationSchema = object({
  first_name: string()
    .required("Enter your name")
    .min(3, "Your name must have at least 3 characters"),
  last_name: string()
    .required("Enter your name")
    .min(3, "Your name must have at least 3 characters"),
  national_id: string()
    .required("Enter your national ID")
    .matches(/^[0-9]{10}$/),
  phone_number: string()
    .required("Enter your phone number")
    .matches(/^((\+98|0)9\d{9})$/, "Enter a valid phone number"),
  province: string()
    .required("Enter your province name")
    .min(3, "Your province must have at least 3 characters"),
  city: string()
    .required("Enter your city name")
    .min(3, "Your city must have at least 3 characters"),
  address: string()
    .required("Enter your address")
    .min(10, "Your city must have at least 10 characters"),
  region: string()
    .required("Enter your region")
    .min(1, "Your city must have at least 1 characters"),
  ownership_type: string()
    .required("Enter type of ownership")
    .min(3, "This field must have at least 3 characters"),
  area: string()
    .required("Enter area of your property")
    .min(1, "This field must have at least 1 characters"),
  building_age: string()
    .required("Enter age of your property")
    .min(1, "This field must have at least 1 characters"),
  has_business_license: boolean(),
  has_kitchen: boolean(),
  has_parking: boolean(),
  has_warehouse: boolean(),
  images: array()
    .of(
      mixed().test(
        "fileExists",
        "Please upload a file",
        (value) => value instanceof File
      )
    )
    .min(1, "Please upload at least one file"),
});

export { consultationSchema, representationSchema };
