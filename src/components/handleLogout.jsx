const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");

  toast.success("Logged out successfully");

  navigate("/login");
};