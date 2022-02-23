import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../../../redux/auth-reducer/selectors";

import * as ROUTES from "../../../Routes";
import withLayout from "../../hoc/withLayout";

const Dashboard = () => {
  const { isAuthenticated, imageList } = useSelector(authSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.LOGIN);
    }
  }, [isAuthenticated]);

  return (
    <div className="container-xxl m-10">
      {imageList ? (
        imageList.map((image) => {
          return (
            <img
              className="img-fluid mb-4"
              src={image?.imageUrl}
              alt="Card cap"
              key={image?._id}
              style={{ width: "25rem" }}
            />
          );
        })
      ) : (
        <h1>No Gifs Found</h1>
      )}
    </div>
  );
};

export default withLayout(Dashboard);
