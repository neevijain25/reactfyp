import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const initialState = {
	fullName: "",
	rollNo: "",
	sapId: "",
	semester: "",
	department: "",
	dateOfBirth: "",
	religion: "",
	bloodGroup: "",
	motherTongue: "",
	email: "",
	phone: "",
	address: "",
	image1: null,
	image2: null,
	image3: null,
};

export default function Signup() {
	const [formData, setFormData] = useState(initialState);
	const [preview, setPreview] = useState({ image1: "", image2: "", image3: "" });
	const navigate = useNavigate();

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	function handleImageChange(event) {
		const { name, files } = event.target;
		const file = files && files[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			setFormData((prev) => ({ ...prev, [name]: reader.result }));
			setPreview((prev) => ({ ...prev, [name]: reader.result }));
		};
		reader.readAsDataURL(file);
	}

	function handleSubmit(event) {
		event.preventDefault();
		localStorage.setItem("asc_user_profile", JSON.stringify(formData));
		navigate("/dashboard");
	}

	return (
		<div className="signup-wrapper">
			<div className="signup-card">
				<h2>Student Signup</h2>
				<form onSubmit={handleSubmit} className="signup-form">
					<div className="grid two">
						<label>
							<span>Full Name</span>
							<input name="fullName" value={formData.fullName} onChange={handleChange} required />
						</label>
						<label>
							<span>Roll No</span>
							<input name="rollNo" value={formData.rollNo} onChange={handleChange} required />
						</label>
						<label>
							<span>SAP ID</span>
							<input name="sapId" value={formData.sapId} onChange={handleChange} required />
						</label>
						<label>
							<span>Semester</span>
							<select name="semester" value={formData.semester} onChange={handleChange} required>
								<option value="" disabled>Select semester</option>
								<option>I</option>
								<option>II</option>
								<option>III</option>
								<option>IV</option>
								<option>V</option>
								<option>VI</option>
								<option>VII</option>
								<option>VIII</option>
							</select>
						</label>
						<label>
							<span>Department</span>
							<select name="department" value={formData.department} onChange={handleChange} required>
								<option value="" disabled>Select department</option>
								<option>I.T.</option>
								<option>Computer Science</option>
								<option>Electronics</option>
								<option>Mechanical</option>
								<option>Civil</option>
								<option>Other</option>
							</select>
						</label>
						<label>
							<span>Date of Birth</span>
							<input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
						</label>
						<label>
							<span>Religion</span>
							<select name="religion" value={formData.religion} onChange={handleChange}>
								<option value="">Select religion</option>
								<option>HINDU</option>
								<option>MUSLIM</option>
								<option>CHRISTIAN</option>
								<option>SIKH</option>
								<option>BUDDHIST</option>
								<option>JAIN</option>
								<option>OTHER</option>
							</select>
						</label>
						<label>
							<span>Blood Group</span>
							<select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
								<option value="">Select blood group</option>
								<option>A+</option>
								<option>A-</option>
								<option>B+</option>
								<option>B-</option>
								<option>AB+</option>
								<option>AB-</option>
								<option>O+</option>
								<option>O-</option>
								<option>OTHER</option>
							</select>
						</label>
						<label>
							<span>Mother Tongue</span>
							<input name="motherTongue" value={formData.motherTongue} onChange={handleChange} placeholder="e.g. GUJARATI" />
						</label>
						<label className="full">
							<span>E-mail</span>
							<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" required />
						</label>
						<label>
							<span>Phone No.</span>
							<input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="10 digits" />
						</label>
						<label className="full">
							<span>Address</span>
							<textarea name="address" value={formData.address} onChange={handleChange} rows={3} />
						</label>
					</div>

					<div className="section-title">Upload 3 face images (for automatic attendance)</div>
					<div className="image-row">
						<div className="image-field">
							<span>Image 1</span>
							<input type="file" accept="image/*" name="image1" onChange={handleImageChange} required />
							{preview.image1 && <img src={preview.image1} alt="img1" />}
						</div>
						<div className="image-field">
							<span>Image 2</span>
							<input type="file" accept="image/*" name="image2" onChange={handleImageChange} required />
							{preview.image2 && <img src={preview.image2} alt="img2" />}
						</div>
						<div className="image-field">
							<span>Image 3</span>
							<input type="file" accept="image/*" name="image3" onChange={handleImageChange} required />
							{preview.image3 && <img src={preview.image3} alt="img3" />}
						</div>
					</div>

					<div className="actions">
						<button type="button" className="secondary" onClick={() => navigate("/login")}>Back to Login</button>
						<button type="submit">Create Account</button>
					</div>
				</form>
			</div>
		</div>
	);
}