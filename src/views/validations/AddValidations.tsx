import useJobCategory from "../../services/data/jobCategory";
import { useEffect, useState } from "react";
import useValidation from "../../services/data/validation";
import { validationsData } from "../../utils/Index";
import Navbar from "../../components/Navbar";

export default function AddValidations() {
  const { category, index } = useJobCategory();
  const { storeValidations } = useValidation();
  const [experience, setExperience] = useState("no");
  const [validation, setValidation] = useState<validationsData>({
    job_category_id: "",
    job_position: "",
    society_id: "",
    validator_id: "",
    reason_accepted: "",
    validator_notes: "",
    work_experience: "",
  });

  useEffect(() => {
    index();
  }, []);

  function doStore(e: React.FormEvent) {
    e.preventDefault();
    storeValidations(validation);
  }

  return (
    <>
      <Navbar></Navbar>
      <main>
        <header className="jumbotron">
          <div className="container">
            <h1 className="display-4">Request Data Validation</h1>
          </div>
        </header>

        <div className="container">
          <form onSubmit={doStore}>
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Job Category</label>
                    <select
                      className="form-control-sm"
                      onChange={(e) =>
                        setValidation({
                          ...validation,
                          job_category_id: e.target.value,
                        })
                      }
                    >
                      {category.map((kategori, index) => (
                        <option key={index} value={kategori.id}>
                          {kategori.job_category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={5}
                    placeholder="Job position sparate with , (comma)"
                    value={validation.job_position}
                    onChange={(e) =>
                      setValidation({
                        ...validation,
                        job_position: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Work Experiences ?</label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="form-control-sm"
                    >
                      <option value="yes">Yes, I have</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  {experience == "yes" && (
                    <textarea
                      className="form-control"
                      cols={30}
                      rows={5}
                      placeholder="Describe your work experiences"
                      value={validation.work_experience}
                      onChange={(e) =>
                        setValidation({
                          ...validation,
                          work_experience: e.target.value,
                        })
                      }
                    ></textarea>
                  )}
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <div className="d-flex align-items-center mb-3">
                    <label className="mr-3 mb-0">Reason Accepted</label>
                  </div>
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={6}
                    value={validation.reason_accepted}
                    placeholder="Explain why you should be accepted"
                    onChange={(e) =>
                      setValidation({
                        ...validation,
                        reason_accepted: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
              </div>
            </div>

            <button className="btn btn-primary">Send Request</button>
          </form>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="text-center py-4 text-muted">
            Copyright &copy; 2023 - Web Tech ID
          </div>
        </div>
      </footer>
    </>
  );
}
