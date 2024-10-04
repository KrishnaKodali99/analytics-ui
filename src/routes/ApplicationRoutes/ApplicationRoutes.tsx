import { Navigate, Route, Routes } from "react-router-dom";

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/">
  			<Navigate to="/asms-analytics" />
			</Route>
    </Routes>
  );
};
