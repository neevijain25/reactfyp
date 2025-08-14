import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

function useProfile() {
	return useMemo(() => {
		try {
			const raw = localStorage.getItem("asc_user_profile");
			return raw ? JSON.parse(raw) : null;
		} catch {
			return null;
		}
	}, []);
}

export default function Dashboard() {
	const profile = useProfile();
	const name = profile?.fullName || "Student Name";

	return (
		<div className="dash-page">
			<header className="topbar">
				<div className="brand">SHRI VILE PARLE KELAVANI MANDAL’S SHRI BHAGUBHAI MAFATLAL POLYTECHNIC & COLLEGE OF ENGINEERING</div>
				<nav className="nav">
					<Link to="/dashboard">HOME</Link>
					<a>ACCOUNT</a>
					<a>ACADEMIC</a>
					<a>NOTIFICATIONS</a>
					<Link to="/login">LOGOUT</Link>
				</nav>
			</header>

			<div className="dash-body">
				<aside className="profile-card">
					<div className="avatar">
						{profile?.image1 ? (
							<img src={profile.image1} alt="avatar" />
						) : (
							<div className="placeholder" />
						)}
					</div>
					<div className="kv">
						<div className="row"><span>Name :</span><strong>{name}</strong></div>
						<div className="row"><span>Roll No :</span><strong>{profile?.rollNo || ""}</strong></div>
						<div className="row"><span>SAP ID :</span><strong>{profile?.sapId || ""}</strong></div>
						<div className="row"><span>Sem :</span><strong>{profile?.semester || ""}</strong></div>
						<div className="row"><span>Dept. :</span><strong>{profile?.department || ""}</strong></div>
					</div>
				</aside>

				<main className="details">
					<div className="tabs">
						<button className="active">Basic Detail</button>
						<button>Attendance</button>
						<button>Time Table</button>
						<button>Feedback</button>
					</div>

					<div className="grid two details-grid">
						<div className="field"><span>Date Of Birth :</span><div>{profile?.dateOfBirth || ""}</div></div>
						<div className="field"><span>Religion :</span><div>{profile?.religion || ""}</div></div>
						<div className="field"><span>Blood Group :</span><div>{profile?.bloodGroup || ""}</div></div>
						<div className="field"><span>Mother Tongue :</span><div>{profile?.motherTongue || ""}</div></div>
						<div className="field full"><span>E-mail :</span><div>{profile?.email || ""}</div></div>
						<div className="field"><span>Phone No. :</span><div>{profile?.phone || ""}</div></div>
						<div className="field full"><span>Address :</span><div className="address-box">{profile?.address || ""}</div></div>
					</div>
				</main>
			</div>
		</div>
	);
}