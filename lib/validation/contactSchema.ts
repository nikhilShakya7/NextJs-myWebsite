import * as yup from "yup" 
export const contactSchema=yup.object().shape(
    {
        name:yup.string().required("Name is required"),
        email:yup.string().email("Invalid Email").required("Email is required"),
        subject:yup.string().required("Please enter a subject"),
        message:yup.string().required("Please enter a message"),

        
    }
);