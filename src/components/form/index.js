import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "./style.css";

const validationSchema = Yup.object().shape({
  employees: Yup.array().of(
    Yup.object().shape({
      firstname: Yup.string().required("firstname required"),
      lastname: Yup.string(),
      email: Yup.string().email("Invalid Email").required("email required"),
    })
  ),
});

const Signup = () => {
  const [employees, setEmployee]=useState([]);
  console.log('employee', employees);
 
  return (
    <>
      <Formik
        initialValues={{
          employees: [{ firstname: "", lastname: "", email: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setEmployee(values);
        }}
      >
        {(formik) => (
          <Form style={{ width: "50%", margin: "auto", marginBottom: "20px" }}>
            <div className="form-group">
              <h4 style={{textAlign:'center'}}>Add Multiple Employees</h4>
              <FieldArray
                name="employees"
                render={(arrayHelper) => {
                  return (
                    <div>
                      {formik.values.employees.map((employee, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && (
                            <div
                              className="form-group float-end"
                              style={{
                                position: "absolute",
                                right: "22%",
                                marginTop: "5px",
                                zIndex: 10,
                              }}
                            >
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => arrayHelper.remove(index)}
                              >
                                X
                              </button>
                            </div>
                          )}
                          <div className="mt-2" key={index}>
                            <div className="card" style={{ padding: 5 }}>
                              <div className="card-title" style={{textAlign:'center'}}>{`Employee ${
                                index + 1
                              }`}</div>
                              <div className="card-body">
                                <div className="form-group">
                                  <label
                                    htmlFor={`employees.${index}.firstname`}
                                  >
                                    First Name
                                  </label>
                                  <Field
                                    type="text"
                                    id={`employees.${index}.firstname`}
                                    className="form-control"
                                    name={`employees.${index}.firstname`}
                                    placeholder="Enter your firstname"
                                  />
                                  <ErrorMessage
                                    component="span"
                                    className="field_error"
                                    name={`employees.${index}.firstname`}
                                  />
                                </div>
                                <div className="form-group">
                                  <label
                                    htmlFor={`employees.${index}.lastname`}
                                  >
                                    Last Name
                                  </label>
                                  <Field
                                    type="text"
                                    id={`employees.${index}.lastname`}
                                    className="form-control"
                                    name={`employees.${index}.lastname`}
                                    placeholder="Enter your lastname"
                                  />
                                  <ErrorMessage
                                    component="span"
                                    className="field_error"
                                    name={`employees.${index}.lastname`}
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor={`employees.${index}.email`}>
                                    Email
                                  </label>
                                  <Field
                                    type="text"
                                    id={`employees.${index}.email`}
                                    className="form-control"
                                    name={`employees.${index}.email`}
                                    placeholder="Enter your email"
                                  />
                                  <ErrorMessage
                                    component="span"
                                    className="field_error"
                                    name={`employees.${index}.email`}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                      <div className="form-group float-end mt-2">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() =>
                            arrayHelper.insert(
                              formik.values.employees.length + 1,
                              { firstname: "", lastname: "", email: "" }
                            )
                          }
                        >
                          + Add Form
                        </button>
                      </div>
                    </div>
                  );
                }}
              ></FieldArray>
            </div>
            <div className="form-group float-start mt-2">
              <button type="submit" className="btn btn-primary btn-block mt-2">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </> 
  );
};

export default Signup;
