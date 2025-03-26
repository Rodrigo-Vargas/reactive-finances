import { Link } from "react-router";
import { Button } from "../../components/button";

export const HomePage = () => {
  return (
    <main>
      <Button>
        <Link to="/dashboard">Login</Link>
      </Button>
    </main>
  );
};
