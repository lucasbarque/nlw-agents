import { Link } from "react-router-dom";

export function CreateRoom() {
  return (
    <div>
      <div>Create room</div>
      <Link className="text-blue-500 hover:text-blue-700" to="/room">
        Acessar sala
      </Link>
    </div>
  );
}
