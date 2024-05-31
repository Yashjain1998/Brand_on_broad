import React, { useState } from "react";
import Logomark from "../Assets/Logomark.png";
import { form_data } from "../data/form_data";

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
                <li className={`list-group-item border rounded ${form.campaign === value?"border-primary":""}`} onClick={()=>handlepropertychange(el.name, value)}>
                  <span className={form.campaign === value? "border rounded px-2 py-1 me-2 bg-primary" : "border rounded px-2 py-1 me-2"}>{index}</span>
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

export default function OnBorad_form() {
  const [form, setForm] = useState({});

  const handleFormChange = (e) => {
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handlepropertychange=(key, value)=>{
    setForm((prev) => ({...prev, [key]: value}))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4001/brand", {
        method: "POST",
        body: JSON.stringify({form}),
        headers: {
          'Content-Type' : "application/json"
        }
      })

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }  
  }

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
          inputType(el, handleFormChange, handlepropertychange, form)
        )}
      </div>
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end pe-4"
      >
        <button className="btn btn-primary" type="button">
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
        </button>
        <button className="btn btn-primary" type="button" onClick={(e) => console.log(form)}>
          Truad form
        </button>
      </div>
    </div>
  );
}
