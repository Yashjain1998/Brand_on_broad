const formdata = [
  {
    section: "Company Information",
    input: [
      {
        label: "Company Name",
        type: "text",
        placeholder: "jatttnd",
        name: "companyName",
      },
      {
        label: "Company Website",
        type: "text",
        placeholder: "jatttnd.co",
        name: "companyWebsite",
      },
      {
        label: "Company Contact Number",
        type: "number",
        placeholder: "1234567890",
        name: "companyNumber",
      },
      {
        label: "Company Address",
        type: "textArea",
        placeholder: "text",
        name: "companyAddress",
      },
      { label: "City", type: "text", name: "city" },
      { label: "State", type: "text", name: "state" },
      { label: "Pincode", type: "number", name: "pincode" },
    ],
  },
  {
    section: "POC Information",
    input: [
      {
        label: "Name",
        type: "text",
        placeholder: "POC Name",
        name: "POC_Name",
      },
      {
        label: "Designation",
        type: "text",
        placeholder: "HR",
        name: "POC_Designation",
      },
      {
        label: "Email ID",
        type: "email",
        placeholder: "abc@gmail.com",
        name: "POC_Email",
      },
      {
        label: "phone Number",
        type: "number",
        placeholder: "1234567890",
        name: "POC_Number",
      },
    ],
  },
  {
    section:
      "Upload your company documents and agreements that we need to sign",
    input: [
      {
        label: "Agreement",
        type: "file",
        placeholder: "Agreement",
        name: "Agreement",
      },
      { label: "NDA", type: "file", placeholder: "NDA", name: "NDA" },
      {
        label: "Any addition",
        type: "file",
        placeholder: "Any addition",
        name: "additiondetails",
      },
    ],
  },
  {
    section: "Sign documents from truad",
    input: [
      {
        label: "Name",
        type: "text",
        placeholder: "POC Name",
        name: "POC_Name",
      },
      {
        label: "Designation",
        type: "text",
        placeholder: "HR",
        name: "POC_Designation",
      },
      {
        label: "Email ID",
        type: "email",
        placeholder: "abc@gmail.com",
        name: "POC_Email",
      },
      {
        label: "phone Number",
        type: "number",
        placeholder: "1234567890",
        name: "POC_Number",
      },
    ],
  },
];
export default formdata;
