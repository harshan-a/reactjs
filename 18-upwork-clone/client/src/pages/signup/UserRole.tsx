import { useState } from "react"
import { Link } from "react-router"

import clientIcon from "../../assets/icons/client-icon.svg"
import freelancerIcon from "../../assets/icons/freelancer-icon.svg"
import "./UserRole.css"

type UserRoleProps = {
  setUserRole: (role: "client" | "freelancer" | undefined) => void
}

export default function UserRole({ setUserRole }: UserRoleProps) {
  const [role, setRole] = useState<"client" | "freelancer" | undefined>(
    undefined
  )

  const rolesData: {
    img: string
    value: "client" | "freelancer"
    description: string
  }[] = [
    {
      img: clientIcon,
      value: "client",
      description: "I'm a client, hiring for a project",
    },
    {
      img: freelancerIcon,
      value: "freelancer",
      description: "I'm a freelancer, looking for work",
    },
  ]
  // console.log(userIcon)
  function handleRoleChange(value: "client" | "freelancer") {
    setRole(value)
  }

  function handleSettingUserRole() {
    setUserRole(role)
  }

  return (
    <div className="user-role-container">
      <h4>Join as a client or freelancer</h4>
      <div className="role-input-container">
        {rolesData.map((roleData, i) => {
          return (
            <div
              className={"card " + (role === roleData.value ? "checked" : "")}
              key={i}
              onClick={() => handleRoleChange(roleData.value)}>
              <img src={roleData.img} alt="" />
              <input
                type="radio"
                name="user-role"
                id={"user-role-" + i}
                value={roleData.value}
                checked={role === roleData.value}
                onChange={() => {}}
              />
              <p>{roleData.description}</p>
            </div>
          )
        })}

        {/* <label className="card" htmlFor="user-role-2">
          <img src={userIcon} alt="" />
          <input type="radio" name="user-role" id="user-role-2" />
          <p>I'm a client, hiring for a project</p>
        </label> */}
        {/* <div className="freelancer-container"></div> */}
      </div>
      <div className={!role ? "disabled" : ""}>
        <button
          className="green-btn conformation-btn"
          onClick={handleSettingUserRole}>
          {role
            ? role === "client"
              ? "Join as a Client"
              : "Apply as a Freelancer"
            : "Create Account"}
        </button>
      </div>
      <p>
        Already have an account? <Link to="/auth/login">Log In</Link>
      </p>
    </div>
  )
}
