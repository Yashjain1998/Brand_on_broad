import React, { useState } from "react";
import Logomark from "../Assets/Logomark.png";
import { form_data } from "../data/form_data";

function inputType(el, handleFormChange, handlepropertychange, form) {
  switch (el.type) {
    case "select":
      return (
        <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
          <p className="text-break fs-4">{el.text}</p>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            name={el.name}
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
        <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto",}}>
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
            <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
            <p className="text-break fs-4">{el.text}</p>
            <div className="d-grid gap-2 col-2">
              <button className="btn btn-primary" type="button" onClick={()=>handlepropertychange(el.name, true)}>
                Yes
              </button>
              <button className="btn btn-primary" type="button" onClick={()=>handlepropertychange(el.name, false)}>
                No
              </button>
            </div>
          </div>
        );
    default:
      return (
        <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
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
  const [form, setForm] = useState({})

  const handleFormChange = (e) => {
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handlepropertychange=(key, value)=>{
    setForm((prev) => ({...prev, [key]: value}))
  }
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        height: "99.98vh",
        position: "relative",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "200px",
          textAlign: "center",
          paddingBock: "1.4rem",
          marginBottom: "5%",
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
        {form_data.map((el) => inputType(el, handleFormChange, handlepropertychange, form))}
      </div>
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "30px",
        }}
      >
        <button className="btn btn-primary" type="button">
          \
        </button>
        <button className="btn btn-primary" type="button">
          /
        </button>
        <button className="btn btn-primary" type="button" onClick={(e) => console.log(form)}>
          Truad form
        </button>
      </div>
    </div>
  );
}
