import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormSelect, CFormTextarea, CImage, CRow } from '@coreui/react'
import axios from 'axios'
import { ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileIcon from 'src/assets/images/avatars/profile_icon.png'
import { storage } from 'src/firebase'
import { v4 } from 'uuid'
const url = 'https://yoga-power-node-api.herokuapp.com'

const Recruitment = () => {
    const [step, setStep] = useState(1)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)
    const [Fullname, setFullname] = useState('')
    const [age, setAge] = useState('')
    const [ContactNumber, setContactNumber] = useState('')
    const [Designation, setDesignation] = useState('')
    const [Email, setEmail] = useState('')
    const [Gender, setGender] = useState('')
    const [resume, setResume] = useState(null)
    const [resumeUrl, setResumeUrl] = useState(null)
    const [Department, setDepartment] = useState('')
    const [Address, setAddress] = useState('')
    const [Area, setArea] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [state, setState] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [Anniversary, setAnniversary] = useState(null)
    const [Salary, setSalary] = useState('')
    const [joiningDate, setJoiningDate] = useState('')
    const [empCategory, setEmpCategory] = useState('')
    const [Source, setSource] = useState('')
    const [EmployeeID, setEmployeeID] = useState('')
    const [AttendanceID, setAttendanceID] = useState('')
    const [accountNo, setAccountNo] = useState(null)
    const [IFSCCode, setIFSCCode] = useState(null)
    const [PANNo, setPANNo] = useState(null)
    const [aadharNo, setAadharNo] = useState(null)
    const [PANcard, setPANcard] = useState(null)
    const [aadharcard, setAadharcard] = useState(null)
    const [PANcardUrl, setPANcardUrl] = useState(null)
    const [aadharcardUrl, setAadharcardUrl] = useState(null)
    const [grade, setgrade] = useState(null)
    const [comment, setComment] = useState(null)


    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;

    useEffect(() => {
        getDesignation()
        getStaff()
    }, [])

    const [staff, setStaff] = useState()
    function getStaff() {
        axios.get(`${url}/employeeForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setStaff(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const [result, setResult] = useState([])
    function getDesignation() {
        axios.get(`${url}/designation/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const saveRecruitment = (e) => {
        let data = {
            username: username,
            image: imageUrl,
            Fullname, EmailAddress, ContactNumber, Gander: Gender, DateofBirth: dateOfBirth, address: Address, Area, city, resume: resumeUrl, EmployeeCategory: empCategory, PinCode: pincode, State: state,
            PayoutType: Source, Grade: grade, Anniversary: Anniversary, JobDesignation: Designation, Department: Department, Salary: Salary, joiningDate: joiningDate, EmployeeID: EmployeeID, AttendanceID: AttendanceID,
            AccountNo: accountNo, IFSC: IFSCCode, PANCardNumber: PANNo, AadharNumber: aadharNo, PANCard: PANcardUrl, AadharCard: aadharcardUrl, status: false
        }

        fetch(`${url}/employeeForm/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                alert("successfully submitted")
                e.preventDefault();
                console.log("refresh prevented");
                navigate('/forms/member-form')
            })
        })
    }

    const imgRef = useRef(null)
    const handleImage = (e) => {
        setImage(e.target.files[0])
        const file = e.target.files[0]
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            imgRef.current.src = e.target.result
        }
        reader.readAsDataURL(file)
        console.log(file, image);
    }

    const UploadImage = () => {
        if (image == null) return;
        const imageRef = ref(storage, `images/${image.name + v4()}`)
        console.log(imageRef.fullPath);
        setImageUrl(imageRef.fullPath)

        uploadBytes(imageRef, image).then(() => {
            alert('image uploaded')
        })
    }
    console.log(imageUrl);

    const UploadResume = () => {
        if (resume == null) return;
        const resumeRef = ref(storage, `resume/${resume.name + v4()}`)
        console.log(resumeRef.fullPath);
        setResumeUrl(resumeRef.fullPath)
        uploadBytes(resumeRef, resume).then(() => {
            console.log('resume uploaded');
        })
    }

    const UploadDocument = () => {
        if (PANcard == null) return;
        if (aadharcard == null) return;
        const panRef = ref(storage, `document/pan/${PANcard.name + v4()}`)
        const aadharRef = ref(storage, `document/aadhar/${aadharcard.name + v4()}`)
        console.log(panRef.fullPath);
        setPANcardUrl(panRef.fullPath)
        console.log(aadharRef.fullPath);
        setAadharcardUrl(aadharRef.fullPath)

        uploadBytes(panRef, PANcard).then(() => {
            console.log('pan card uploaded');
        })

        uploadBytes(aadharRef, aadharcard).then(() => {
            console.log('aadhar card uploaded');
        })
    }

    return (
        <>
            <CRow className='mb-2 ms-2'>
                <CCard color={step == 1 ? 'primary' : 'success'} style={{ padding: '10px', color: '#ffffff', width: '100px', margin: '3px', cursor: 'pointer' }}
                    onClick={() => setStep(1)}
                >
                    Step-1
                </CCard>
                <CCard color={step == 2 ? 'primary' : 'success'} style={{ padding: '10px', color: '#ffffff', width: '100px', margin: '3px', cursor: 'pointer' }}
                    onClick={() => setStep(2)}
                >
                    Step-2
                </CCard>
            </CRow>
            {step === 1 &&
                <CCard>
                    <CCardHeader>
                        <CCardTitle>Recruitment Application</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol lg={3} sm={6} className='mt-2 mb-1' >
                                    <CImage className="mb-1" style={{ borderRadius: "100px" }} width={'200px'} src={ProfileIcon} />
                                </CCol>
                                <CCol lg={8} sm={6} className='mt-5'>
                                    <CFormInput
                                        className="mb-1 mr-3"
                                        type="file"
                                        onChange={handleImage}
                                        accept="image/*"
                                    />
                                    <CButton onClick={UploadImage}>Upload Image</CButton>

                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="Full name"
                                        value={Fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        placeholder="Enter Name"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        label="Contact Number"
                                        maxLength={10}
                                        value={ContactNumber}
                                        onChange={(e) => setContactNumber(e.target.value)}
                                        placeholder="Enter Contact Number"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg={5} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="email"
                                        id="exampleFormControlInput1"
                                        label="Email address"
                                        value={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@example.com"
                                        text="Must be 8-20 characters long."
                                        aria-describedby="exampleFormControlInputHelpInline"
                                    />
                                </CCol>
                                <CCol lg={4} md={6} sm={8}>
                                    <CFormSelect
                                        className="mb-1"
                                        aria-label="Select Currency"
                                        value={Gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        label="Gander"
                                        options={[
                                            "Select Gender",
                                            { label: "Male", value: "Male" },
                                            { label: "Female", value: "Female" },
                                            { label: "Other", value: "Other" },
                                        ]}
                                    />
                                </CCol>

                                <CCol lg={3} md={6} sm={4}>
                                    <CFormInput
                                        className="mb-1"
                                        type="number"
                                        id="exampleFormControlInput1"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        label="Age"
                                        placeholder="Enter Your Age"
                                    />
                                </CCol>
                            </CRow>
                            <CCol>
                                <CFormTextarea
                                    id="exampleFormControlTextarea1"
                                    label="Address"
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    rows="3"
                                    text="Must be 8-20 words long."
                                ></CFormTextarea>
                            </CCol>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        value={Area}
                                        onChange={(e) => setArea(e.target.value)}
                                        label="Area"
                                        placeholder="Enter Area"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        label="City"
                                        placeholder="Enter City"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        id="exampleFormControlInput1"
                                        value={pincode}
                                        maxLength={6}
                                        onChange={(e) => setPincode(e.target.value)}
                                        label="Pin Code"
                                        placeholder="Enter Pin Code"
                                    />
                                </CCol>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="text"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        id="exampleFormControlInput1"
                                        label="State"
                                        placeholder="Enter State"
                                    />
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol lg={6} md={6} sm={12}>
                                    <CFormInput
                                        className="mb-1"
                                        type="file"
                                        accept='pdf/*'
                                        onChange={(e) => setResume(e.target.files[0])}
                                        id="exampleFormControlInput1"
                                        label="Upload Resume"
                                        placeholder="Enter Upload Resume"
                                    />

                                    <CButton onClick={UploadResume}>Upload Resume</CButton>
                                </CCol>
                            </CRow>
                            <CButton className="mt-2" onClick={() => setStep(2)}>Next</CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            }
            {step === 2 &&
                <CCard>
                    <CCardHeader>
                        <CCardTitle>Recruitment Application</CCardTitle>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CRow>
                                <CCol lg={12} sm={12}>
                                    <CRow>
                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="date"
                                                id="exampleFormControlInput1"
                                                value={dateOfBirth}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                                label="Date of Birth"
                                                placeholder="Enter date"
                                            />
                                        </CCol>
                                        <CCol>
                                            <CFormInput
                                                className="mb-1"
                                                type="date"
                                                id="exampleFormControlInput1"
                                                value={Anniversary}
                                                onChange={(e) => setAnniversary(e.target.value)}
                                                label="Anniversary"
                                                placeholder="Enter Anniversary"
                                            />
                                        </CCol>

                                        <CCol xs={6}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Job Designation"
                                                value={Designation}
                                                onChange={(e) => setDesignation(e.target.value)}
                                                label="Job Designation"
                                            >
                                                {result.map((item, index) => (
                                                    item.username === username && (
                                                        item.status === true && (
                                                            <option key={index}>{item.jobDesignation}</option>
                                                        )
                                                    )
                                                ))}
                                            </CFormSelect>
                                        </CCol>
                                        <CCol xs={6}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Job Department"
                                                value={Department}
                                                onChange={(e) => setDepartment(e.target.value)}
                                                label="Department"
                                            >
                                                {result.map((item, index) => (
                                                    <option key={index}>{item.department}</option>
                                                ))}
                                            </CFormSelect>
                                        </CCol>
                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="number"
                                                value={Salary}
                                                onChange={(e) => setSalary(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Salary"
                                                placeholder="Enter Salary"
                                            />
                                        </CCol>

                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="date"
                                                value={joiningDate}
                                                onChange={(e) => setJoiningDate(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Date of Joining"
                                                placeholder="Enter Date of Joining"
                                            />
                                        </CCol>
                                    </CRow><CRow>
                                        <CCol>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Employee Category"
                                                value={empCategory}
                                                onChange={(e) => setEmpCategory(e.target.value)}
                                                label="Employee Category"
                                                options={[
                                                    "Select Employee Category",
                                                    { label: "Employee", value: "Employee" },
                                                    { label: "Consultant", value: "Consultant" },
                                                ]}
                                            />
                                        </CCol>
                                        <CCol>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Source"
                                                value={Source}
                                                onChange={(e) => setSource(e.target.value)}
                                                label="Source"
                                                options={[
                                                    "Select Source",
                                                    { label: "Social Media Refer", value: "Social Media Refer" },
                                                    { label: "Employee Refer", value: "Employee Refer" },
                                                ]}
                                            />
                                        </CCol>
                                    </CRow>
                                    <CRow>

                                        <CCol xs={6}>
                                            <CFormSelect
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                value={EmployeeID}
                                                onChange={(e) => setEmployeeID(e.target.value)}
                                                label="Employee ID"
                                                placeholder="Enter Employee ID"
                                            >
                                                <option>Select Id</option>
                                                <option>YogPowerEmp{staff.length + 1}</option>
                                            </CFormSelect>
                                        </CCol>
                                        <CCol xs={6}>
                                            <CFormSelect
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                value={AttendanceID}
                                                onChange={(e) => setAttendanceID(e.target.value)}
                                                label="Attendance ID"
                                                placeholder="Enter Attendance ID"
                                            >
                                                <option>Select Id</option>
                                                <option>YogPowerAtt{staff.length + 1}</option>
                                            </CFormSelect>
                                        </CCol>
                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="number"
                                                value={accountNo}
                                                onChange={(e) => setAccountNo(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Account No"
                                                placeholder="Enter Account No"
                                            />
                                        </CCol>
                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                value={IFSCCode}
                                                onChange={(e) => setIFSCCode(e.target.value)}
                                                label="IFSC"
                                                placeholder="Enter IFSC"
                                            />
                                        </CCol>

                                        <CCol xs={6}>
                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                id="exampleFormControlInput1"
                                                value={PANNo}
                                                onChange={(e) => setPANNo(e.target.value)}
                                                label="PAN Card"
                                                placeholder="Enter PAN Card"
                                            />
                                        </CCol>

                                        <CCol>
                                            <CFormInput
                                                className="mb-1"
                                                type="number"
                                                value={aadharNo}
                                                onChange={(e) => setAadharNo(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Aadhar Number"
                                                placeholder="Enter Aadhar Number"
                                            />
                                        </CCol>
                                    </CRow>

                                    <CCol>
                                        <CFormInput
                                            className="mb-1"
                                            type="file"
                                            id="exampleFormControlInput1"
                                            value={PANcard}
                                            onChange={(e) => setPANcard(e.target.value)}
                                            label="PAN Card"
                                            placeholder="Enter PAN Card"
                                        />
                                    </CCol>
                                    <CCol>
                                        <CFormInput
                                            className="mb-2"
                                            type="file"
                                            id="exampleFormControlInput1"
                                            value={aadharcard}
                                            onChange={(e) => setAadharcard(e.target.value)}
                                            label="Aadhar Card"
                                            placeholder="Enter Aadhar Card"
                                        />
                                    </CCol>
                                    <CCol>
                                        <CButton className='mb-1' onClick={UploadDocument}>Upload Document</CButton>
                                    </CCol>

                                    <CRow>
                                        <CCol xs={3}>
                                            <CFormSelect
                                                className="mb-1"
                                                aria-label="Select Grade"
                                                value={grade}
                                                onChange={(e) => setgrade(e.target.value)}
                                                label="Grade"
                                                options={[
                                                    "Select Grade",
                                                    { label: "Employee", value: "1" },
                                                    { label: "Consultant", value: "2" },
                                                ]}
                                            />
                                        </CCol>
                                        <CCol>
                                            <CFormInput
                                                className="mb-1"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                type="text"
                                                id="exampleFormControlInput1"
                                                label="Comments"
                                                placeholder="Add Comments"
                                            />
                                        </CCol>
                                    </CRow>
                                </CCol>
                            </CRow>
                            <CButton className="mt-2">Save</CButton>
                        </CForm>
                    </CCardBody>
                </CCard>
            }
        </>
    )
}

export default Recruitment
