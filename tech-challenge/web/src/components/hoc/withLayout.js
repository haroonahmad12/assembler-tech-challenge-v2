import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { uploadResource } from "../../api/api-cloudinary";
import { saveImageData, signOut } from "../../redux/auth-reducer/actions";
import * as ROUTES from "../../Routes";
import { getCurrentUserToken } from "../../services/auth";
import "./withLayout.scss";

function withLayout(WrappedComponent) {
  function WrapperComponent({ ...props }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState("");

    const handleLogout = () => {
      dispatch(signOut());
      navigate(ROUTES.LOGIN);
    };

    const handleChangeFile = async (file) => {
      const token = await getCurrentUserToken();

      uploadResource(file, "image")
        .then((res) => {
          saveImageData(res.data.url, token, dispatch);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            Gifpie
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <form>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    onChange={(e) => {
                      handleChangeFile(e.target.files[0]);
                    }}
                  />
                  <label htmlFor="file">Upload a Gif</label>
                </form>
              </li>
            </ul>
            <form className="form-inline col-4 my-2 my-lg-0">
              <div className="input-group rounded w-100">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </form>
            <button
              type="button"
              className="btn btn-outline-danger ml-5"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </nav>
        <WrappedComponent {...props} />
      </>
    );
  }
  return WrapperComponent;
}

export default withLayout;
