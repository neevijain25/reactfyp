import React, { useState, useMemo } from "react";
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
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
	}

	function handleImageChange(event) {
		const { name, files } = event.target;
		const file = files && files[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			setErrors((prev) => ({ ...prev, [name]: "Please select an image file" }));
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			setFormData((prev) => ({ ...prev, [name]: reader.result }));
			setPreview((prev) => ({ ...prev, [name]: reader.result }));
			setErrors((prev) => ({ ...prev, [name]: "" }));
		};
		reader.readAsDataURL(file);
	}

	function isFutureDate(iso) {
		if (!iso) return false;
		return new Date(iso).getTime() > Date.now();
	}

	function validateField(name, value) {
		switch (name) {
			case "fullName":
				return value.trim().length >= 3 ? "" : "Enter your full name";
			case "rollNo":
				return value.trim() ? "" : "Roll No is required";
			case "sapId":
				return /^[0-9]{8,12}$/.test(value.trim()) ? "" : "SAP ID must be 8-12 digits";
			case "semester":
				return value ? "" : "Select a semester";
			case "department":
				return value ? "" : "Select a department";
			case "dateOfBirth":
				return value && !isFutureDate(value) ? "" : "Select a valid date";
			case "email":
				return /.+@.+\..+/.test(value) ? "" : "Enter a valid email";
			case "phone":
				return /^\d{10}$/.test(value.trim()) ? "" : "Phone must be 10 digits";
			case "address":
				return value.trim().length >= 5 ? "" : "Address is too short";
			default:
				return "";
		}
	}

	function validateAll(data) {
		const nextErrors = {
			fullName: validateField("fullName", data.fullName),
			rollNo: validateField("rollNo", data.rollNo),
			sapId: validateField("sapId", data.sapId),
			semester: validateField("semester", data.semester),
			department: validateField("department", data.department),
			dateOfBirth: validateField("dateOfBirth", data.dateOfBirth),
			email: validateField("email", data.email),
			phone: validateField("phone", data.phone),
			address: validateField("address", data.address),
			image1: data.image1 ? "" : "Image 1 required",
			image2: data.image2 ? "" : "Image 2 required",
			image3: data.image3 ? "" : "Image 3 required",
		};
		setErrors(nextErrors);
		return Object.values(nextErrors).every((e) => !e);
	}

	const isFormValid = useMemo(() => validateAllOnTheFly(formData, errors), [formData, errors]);

	function validateAllOnTheFly(data, currentErrors) {
		const required = ["fullName","rollNo","sapId","semester","department","dateOfBirth","email","phone","address"];
		for (const key of required) {
			if (!data[key]) return false;
			if (currentErrors[key]) return false;
		}
		return Boolean(data.image1 && data.image2 && data.image3);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!validateAll(formData)) return;
		localStorage.setItem("asc_user_profile", JSON.stringify(formData));
		navigate("/dashboard");
	}

	return (
		<div className="signup-wrapper">
			<div className="signup-card">
				<h2>Student Signup</h2>
				<form onSubmit={handleSubmit} className="signup-form" noValidate>
					<div className="grid two">
						<label>
							<span>Full Name</span>
							<input name="fullName" value={formData.fullName} onChange={handleChange} aria-invalid={Boolean(errors.fullName)} required />
							{errors.fullName && <div className="error-text">{errors.fullName}</div>}
						</label>
						<label>
							<span>Roll No</span>
							<input name="rollNo" value={formData.rollNo} onChange={handleChange} aria-invalid={Boolean(errors.rollNo)} required />
							{errors.rollNo && <div className="error-text">{errors.rollNo}</div>}
						</label>
						<label>
							<span>SAP ID</span>
							<input name="sapId" value={formData.sapId} onChange={handleChange} aria-invalid={Boolean(errors.sapId)} required />
							{errors.sapId && <div className="error-text">{errors.sapId}</div>}
						</label>
						<label>
							<span>Semester</span>
							<select name="semester" value={formData.semester} onChange={handleChange} aria-invalid={Boolean(errors.semester)} required>
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
							{errors.semester && <div className="error-text">{errors.semester}</div>}
						</label>
						<label>
							<span>Department</span>
							<select name="department" value={formData.department} onChange={handleChange} aria-invalid={Boolean(errors.department)} required>
								<option value="" disabled>Select department</option>
								<option>I.T.</option>
								<option>Computer Science</option>
								<option>Electronics</option>
								<option>Mechanical</option>
								<option>Civil</option>
								<option>Other</option>
							</select>
							{errors.department && <div className="error-text">{errors.department}</div>}
						</label>
						<label>
							<span>Date of Birth</span>
							<input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} aria-invalid={Boolean(errors.dateOfBirth)} required />
							{errors.dateOfBirth && <div className="error-text">{errors.dateOfBirth}</div>}
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
							<input type="email" name="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} placeholder="name@example.com" required />
							{errors.email && <div className="error-text">{errors.email}</div>}
						</label>
						<label>
							<span>Phone No.</span>
							<input type="tel" name="phone" value={formData.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} placeholder="10 digits" />
							{errors.phone && <div className="error-text">{errors.phone}</div>}
						</label>
						<label className="full">
							<span>Address</span>
							<textarea name="address" value={formData.address} onChange={handleChange} aria-invalid={Boolean(errors.address)} rows={3} />
							{errors.address && <div className="error-text">{errors.address}</div>}
						</label>
					</div>

					<div className="section-title">Upload 3 face images (for automatic attendance)</div>
					<div className="image-row">
						<div className="image-field">
							<span>Image 1</span>
							<input type="file" accept="image/*" name="image1" onChange={handleImageChange} />
							{errors.image1 && <div className="error-text">{errors.image1}</div>}
							{preview.image1 && <img src={preview.image1} alt="img1" />}
						</div>
						<div className="image-field">
							<span>Image 2</span>
							<input type="file" accept="image/*" name="image2" onChange={handleImageChange} />
							{errors.image2 && <div className="error-text">{errors.image2}</div>}
							{preview.image2 && <img src={preview.image2} alt="img2" />}
						</div>
						<div className="image-field">
							<span>Image 3</span>
							<input type="file" accept="image/*" name="image3" onChange={handleImageChange} />
							{errors.image3 && <div className="error-text">{errors.image3}</div>}
							{preview.image3 && <img src={preview.image3} alt="img3" />}
						</div>
					</div>

					<div className="actions">
						<button type="button" className="secondary" onClick={() => navigate("/login")}>Back to Login</button>
						<button type="submit" disabled={!isFormValid} title={!isFormValid ? "Please complete the form correctly" : undefined}>Create Account</button>
					</div>
				</form>
			</div>
		</div>
	);
}