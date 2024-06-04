import React, { useState, useEffect } from "react";
import Logomark from "../Assets/Logomark.png";
import form_data from "../data/newformdata";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";

function inputType(el, handleFormChange, handlepropertychange, form) {
  switch (el.type) {
    case "select":
      return (
        <div
          className="border text-start mb-5 p-2"
          style={{ width: "50%", margin: "auto" }}
        >
          <p className="text-break fs-4">{el.text}</p>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            name={el.name}
            defaultValue={el.placeholder}
            onChange={(e) => handleFormChange(e)}
          >
            <option disabled>{el.placeholder}</option>
            {el.option.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          {/* <button className="btn btn-primary px-3" type="button">
            Ok
          </button> */}
        </div>
      );

    case "checkbox":
      return (
        <div
          className="border text-start mb-5 p-2"
          style={{ width: "50%", margin: "auto" }}
        >
          <p className="text-break fs-4">{el.text}</p>
          <ul className="list-group border-0 gap-3">
            {el.option.map((value, index) => {
              return (
                <li
                  className={`list-group-item border rounded ${
                    form.campaign === value ? "border-primary" : ""
                  }`}
                  onClick={() => handlepropertychange(el.name, value)}
                >
                  <span
                    className={
                      form.campaign === value
                        ? "border rounded px-2 py-1 me-2 bg-primary"
                        : "border rounded px-2 py-1 me-2"
                    }
                  >
                    {index}
                  </span>
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      );

    case "Boolean":
      return (
        <div
          className="border text-start mb-5 p-2"
          style={{ width: "50%", margin: "auto" }}
        >
          <p className="text-break fs-4">{el.text}</p>
          <div className="d-grid gap-2 col-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handlepropertychange(el.name, true)}
            >
              Yes
            </button>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handlepropertychange(el.name, false)}
            >
              No
            </button>
          </div>
        </div>
      );
    default:
      return (
        <div
          className="border text-start mb-5 p-2"
          style={{ width: "50%", margin: "auto" }}
        >
          <p className="text-break fs-4">{el.text}</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder={el.placeholder}
            name={el.name}
            aria-label="default input example"
            onChange={(e) => handleFormChange(e)}
          />
          {/* <button className="btn btn-primary px-3" type="button">
            Ok
          </button> */}
        </div>
      );
  }
}

function inputSwitch(el, handlepropertychange) {
  switch (el.type) {
    case "textArea":
      return (
        <textarea
          class="form-control"
          id="FormControlInput"
          rows="3"
          name={el.name}
          placeholder={el.placeholder}
          onChange={(e) => handlepropertychange(e.target.name, e.target.value)}
        ></textarea>
      );
    case "file":
      return (
        <input
          type={el.type}
          class="form-control"
          id="FormControlInput"
          placeholder={el.placeholder}
          name={el.name}
          onChange={(e) => handlepropertychange(e.target.name, e.target.files[0])}
        />
      );
    default:
      return (
        <input
          type={el.type}
          class="form-control"
          id="FormControlInput"
          placeholder={el.placeholder}
          name={el.name}
          onChange={(e) => handlepropertychange(e.target.name, e.target.value)}
        />
      );
  }
}

function formSection(object, handlepropertychange) {
  return (
    <div className="row m-auto mt-5" style={{ width: "60%" }}>
      <div className="col-6 h4">{object.section}</div>
      <div className="col-6">
        {object.input.map((el) => {
          return (
            <div className="mb-3 text-start p-2">
              <label for="ControlInput" class="form-label">
                {el.label}
              </label>
              {inputSwitch(el, handlepropertychange)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default function OnBorad_form() {
  const [cookie, setCookie] = useCookies(["user"]);
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlepropertychange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    // try {
    //   const response = await fetch("http://localhost:4001/brand", {
    //     method: "POST",
    //     body: JSON.stringify({ form }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const blob = await response.blob();
    //   const url = window.URL.createObjectURL(blob);
    //   const a = document.createElement('a');
    //   a.href = url;
    //   a.download = 'output.xlsx';
    //   document.body.appendChild(a);
    //   a.click();
    //   window.URL.revokeObjectURL(url);
    //   document.body.removeChild(a);
    //   navigate("/homepage");
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(form);
  };

  // useEffect(() => {
  //   if(!cookie.user){
  //     navigate("/")
  //   }
  // }, []);

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        height: "96vh",
        position: "relative",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "200px",
          textAlign: "center",
          paddingBock: "1.4rem",
          marginBlock: "2%",
        }}
      >
        <img
          src={Logomark}
          alt="TruAd Logo"
          style={{
            width: "50%",
            objectFit: "fill",
          }}
        />
      </div>
      <div
        style={{
          height: "70%",
          overflowY: "auto",
        }}
      >
        {form_data.map((el) =>
          // inputType(el, handleFormChange, handlepropertychange, form)
          formSection(el, handlepropertychange)
        )}
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end pe-4">
        {/* <button className="btn btn-primary" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
            />
          </svg>
        </button>
        <button className="btn btn-primary" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button> */}
        <button
          className="btn"
          type="button"
          onClick={handleSubmit}
          style={{
            background: "#2FBDA3",
            color: "white",
          }}
        >
          Truad form
        </button>
      </div>
    </div>
  );
}
