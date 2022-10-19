import React, { useEffect, useState } from 'react'
import {
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardHeader,
    CCardTitle,
    CCol,
    CForm,
    CFormInput,
    CFormSelect,
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleBottom, cilArrowCircleTop } from '@coreui/icons'
import axios from 'axios'
import { MdCall, MdDelete, MdEdit, MdMail } from 'react-icons/md'
import { BsPlusCircle, BsWhatsapp } from 'react-icons/bs'
import moment from 'moment/moment'
const url = 'https://yoga-power-node-api.herokuapp.com'
import { CountryList } from "src/components/CountryList";

const AllEnquires = () => {
    const [select, setSelect] = useState()
    const [followForm, setFollowForm] = useState()
    const [edit, setEdit] = useState()
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)

    const [Fullname, setFullName] = useState("");
    const [Emailaddress, setEmailAddress] = useState("");
    const [CountryCode, setCountryCode] = useState("");
    const [ContactNumber, setContactNumber] = useState("");
    const [Gander, setGander] = useState("");
    const [DateofBirth, setDateofBirth] = useState("");
    const [address, setAddress] = useState("");
    const [Area, setArea] = useState("");
    const [city, setCity] = useState("");
    const [Profession, setProfession] = useState("");


    const [StaffName, setStaffName] = useState("");
    const [CenterName, setCenterName] = useState("");
    const [CallStatus, setCallStatus] = useState("");
    const [Message, setMessage] = useState("");


    const [person_Name, setperson_Name] = useState("");
    const [Relation, setRelation] = useState("");
    const [CountryCode2, setCountryCode2] = useState("");
    const [ContactNumber2, setContactNumber2] = useState("");


    const [EnquiryDate, setEnquiryDate] = useState("");
    const [ServiceName, setServiceName] = useState("");
    const [Customertype, setCustomertype] = useState("");
    const [enquirytype, setEnquirytype] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [appointmentTime, setappointmentTime] = useState("");
    const [appointmentfor, setappointmentfor] = useState("");

    const saveEnquiry = (e) => { }

    let user = JSON.parse(localStorage.getItem('user-info'))
    console.log(user);
    const token = user.token;
    const username = user.user.username;
    const centerCode = user.user.centerCode;
    const [result1, setResult1] = useState([]);
    console.log(token);
    const [result, setResult] = useState([]);
    const [updateItem, setUpdateItem] = useState([]);
    useEffect(() => {
        getEnquiry()
        axios.get(`${url}/subservice/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setResult(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);

    function getEnquiry() {
        axios.get(`${url}/enquiryForm/all`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setResult1(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    function getUpdate(id) {
        axios.get(`${url}/enquiryForm/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                setUpdateItem(res.data)
                setFullName(res.data.Fullname)
                setEmailAddress(res.data.Emailaddress)
                setCountryCode(+res.data.CountryCode)
                setContactNumber(res.data.ContactNumber)
                setGander(res.data.Gander)
                setDateofBirth(moment(res.data.DateofBirth).format("MM DD YYYY"))
                setAddress(res.data.address)
                setArea(res.data.Area)
                setCity(res.data.city)
                setProfession(res.data.Profession)
                setStaffName(res.data.StaffName)
                setCenterName(res.data.CenterName)
                setCallStatus(res.data.CallStatus)
                setMessage(res.data.Message)
                setperson_Name(res.data.person_Name)
                setRelation(res.data.Relation)
                setCountryCode2(res.data.CountryCode2)
                setContactNumber2(res.data.ContactNumber2)
                setEnquiryDate(res.data.EnquiryDate)
                setServiceName(res.data.ServiceName)
                setCustomertype(res.data.Customertype)
                setEnquirytype(res.data.enquirytype)
                setappointmentDate(moment(res.data.DateofBirth).format("MM DD YYYY"))
                setappointmentTime(moment(res.data.appointmentTime, 'hh:mm').format("hh:mm A"))
                setappointmentfor(res.data.appointmentfor)
                setVisible1(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }


    function deleteEnquiry(id) {
        fetch(`${url}/enquiryForm/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getEnquiry()
            })
        })
    }

    const handleFollowup = (e) => {
        setFollowForm(e.target.id)
        setVisible(true)
    }

    const handleEnquiry = (e) => {
        setEdit(e.target.id)
        getUpdate(e.target.id)
    }
    return (
        <CRow>
            <CCol lg={12} sm={12}>
                <CCard className='mb-3 border-top-success border-top-3'>
                    <CCardHeader>
                        <strong className="mt-2">All Enquires <span className='float-end'>Total Member : {result1.length}</span></strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow className='d-flex justify-content-between'>
                            <CCol lg={4} sm={6} md={6}>
                                <CInputGroup className='mb-2'>
                                    <CFormSelect
                                        id="inputGroupSelect04"
                                        aria-label="Example select with button addon"
                                        value={select}
                                        onChange={(e) => setSelect(e.target.value)}
                                    >
                                        <option>Today</option>
                                        <option>Last Week</option>
                                        <option>Last Month</option>
                                        <option>Custom Date</option>
                                    </CFormSelect>
                                    {select === 'Custom Date' && (
                                        <CInputGroup className='mt-2 mb-2' >

                                            <CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                Form
                                            </CInputGroupText>
                                            <CFormInput
                                                type="date"
                                                required
                                            /><CInputGroupText
                                                component="label"
                                                htmlFor="inputGroupSelect01"
                                            >
                                                To
                                            </CInputGroupText>
                                            <CFormInput
                                                type="date"
                                                required
                                            />
                                            <CButton type="button" color="primary">
                                                Go
                                            </CButton>
                                        </CInputGroup>

                                    )}
                                    {select !== 'Custom Date' && (
                                        <CButton type="button" color="primary">
                                            Go
                                        </CButton>
                                    )}
                                </CInputGroup>
                            </CCol>
                            <CCol lg={6} sm={6} md={6}>
                                <CButtonGroup className=' mb-2 float-end'>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleBottom} />
                                        {' '}Import
                                    </CButton>
                                    <CButton color="primary">
                                        <CIcon icon={cilArrowCircleTop} />
                                        {' '}Export
                                    </CButton>
                                </CButtonGroup>
                            </CCol>
                        </CRow>
                        <CRow className='d-flex justify-content-between mb-2'>
                            <CCol lg={4} sm={12} md={12} className='mb-2'>
                                <CCard>
                                    <CCardHeader className='d-flex justify-content-center'>
                                        Enquiries
                                    </CCardHeader>
                                    <CCardBody className='d-flex justify-content-around'>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Enquiries: 0
                                            </CCardBody>
                                        </CCard>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Converted: 0
                                            </CCardBody>
                                        </CCard>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Archived/Lost: 0
                                            </CCardBody>
                                        </CCard>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                            <CCol lg={4} sm={12} md={12} className='mb-2'>
                                <CCard>
                                    <CCardHeader className='d-flex justify-content-center'>
                                        Follow Up
                                    </CCardHeader>
                                    <CCardBody className='d-flex justify-content-around'>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                FollowUps: 0
                                            </CCardBody>
                                        </CCard>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Trails: 0
                                            </CCardBody>
                                        </CCard>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Post Trails: 0
                                            </CCardBody>
                                        </CCard>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Sales: 0
                                            </CCardBody>
                                        </CCard>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                            <CCol lg={4} sm={12} md={12} className='mb-2'>
                                <CCard>
                                    <CCardHeader className='d-flex justify-content-center'>
                                        Trials
                                    </CCardHeader>
                                    <CCardBody className='d-flex justify-content-around'>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Trial Scheduled: 0
                                            </CCardBody>
                                        </CCard>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Trial Completed: 0
                                            </CCardBody>
                                        </CCard>
                                        <CCard style={{ margin: "2px" }}>
                                            <CCardBody style={{ padding: "5px" }}>
                                                Converted: 0
                                            </CCardBody>
                                        </CCard>
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </CRow>
                        <CRow className='mb-3'>
                            <CCol lg={2} md={6} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        All
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>Sep</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} md={6} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Service Category
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>2022</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} md={6} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Sub-Filter
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>2022</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol lg={3} md={6} sm={6} className='mb-2'>
                                <CInputGroup>
                                    <CInputGroupText
                                        component="label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Marketing
                                    </CInputGroupText>
                                    <CFormSelect id="inputGroupSelect01">
                                        <option>2022</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        <CModal visible={visible} onClose={() => setVisible(false)}>
                            <CModalHeader>
                                <CModalTitle>Prospect Form</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                {followForm}

                            </CModalBody>
                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setVisible(false)}>
                                    Close
                                </CButton>
                                <CButton color="primary">Save changes</CButton>
                            </CModalFooter>
                        </CModal>

                        <CModal size="xl" scrollable alignment="center" visible={visible1} onClose={() => setVisible1(false)}>
                            <CModalHeader style={{ backgroundColor: '#0B5345', color: 'white' }}>
                                <CModalTitle>Enquiry Form</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CForm onSubmit={saveEnquiry}>
                                    <CRow>
                                        <CCol lg={6} sm={12}>
                                            <CCardTitle>Personal Details</CCardTitle>
                                            <CRow>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Full name"
                                                        value={Fullname}
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        placeholder="Enter Name"
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="email"
                                                        id="exampleFormControlInput1"
                                                        label="Email address"
                                                        value={Emailaddress}
                                                        onChange={(e) => setEmailAddress(e.target.value)}
                                                        placeholder="name@example.com"
                                                        text="Must be 8-20 characters long."
                                                        aria-describedby="exampleFormControlInputHelpInline"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Currency"
                                                        label="Country Code"
                                                        value={CountryCode}
                                                        onChange={(e) => setCountryCode(e.target.value)}

                                                    >{CountryList.map((item, index) => (
                                                        <option key={index} value={item.dial_code}>{item.name} {item.dial_code}</option>
                                                    ))}
                                                    </CFormSelect>
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="number"
                                                        value={ContactNumber}
                                                        onChange={(e) => setContactNumber(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                        label="Contact Number"
                                                        placeholder="Enter Number"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Currency"
                                                        value={Gander}
                                                        onChange={(e) => setGander(e.target.value)}
                                                        label="Gander"
                                                        options={[
                                                            "Select Gender",
                                                            { label: "Male", value: "Male" },
                                                            { label: "Female", value: "Female" },
                                                            { label: "Other", value: "Other" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="date"
                                                        format="MM-dd-yyyy"
                                                        value={DateofBirth}
                                                        onChange={(e) => setDateofBirth(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                        label="Date of Birth"
                                                        placeholder="Enter Date"
                                                    />
                                                </CCol>
                                            </CRow>

                                            <CFormTextarea
                                                id="exampleFormControlTextarea1"
                                                label="Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                rows="2"
                                                text="Must be 8-20 words long."
                                            ></CFormTextarea>
                                            <CRow>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        value={Area}
                                                        onChange={(e) => setArea(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                        label="Area"
                                                        placeholder="Enter Locality"
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                        label="City"
                                                        placeholder="Enter City"
                                                    />
                                                </CCol>
                                            </CRow>

                                            <CFormInput
                                                className="mb-1"
                                                type="text"
                                                value={Profession}
                                                onChange={(e) => setProfession(e.target.value)}
                                                id="exampleFormControlInput1"
                                                label="Profession"
                                                placeholder="Enter Profession"
                                            />

                                            <CCardTitle>Schedule enquiry follow-up</CCardTitle>
                                            <CRow>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Staff Name"
                                                        label="Staff Name"
                                                        value={StaffName}
                                                        onChange={(e) => setStaffName(e.target.value)}
                                                        options={[
                                                            "Select Staff Name",
                                                            { label: "prabha", value: "prabha" },
                                                            { label: "sejal", value: "sejal" },
                                                            { label: "sonali", value: "sonali" },
                                                            { label: "None", value: "None" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Staff Name"
                                                        value={CenterName}
                                                        onChange={(e) => setCenterName(e.target.value)}
                                                        label="Center Name"
                                                        options={[
                                                            "Select Center",
                                                            { label: "V-mall Thakur Complex", value: "V-mall Thakur Complex" },
                                                            { label: "Station Kandivali East", value: "Station Kandivali East" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Call Status"
                                                        value={CallStatus}
                                                        onChange={(e) => setCallStatus(e.target.value)}
                                                        label="Call Status"
                                                        options={[
                                                            "Select Call Status",
                                                            { label: "Cold", value: "Cold" },
                                                            { label: "Warm", value: "Warm" },
                                                            { label: "Hot", value: "Hot" },
                                                        ]}
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CFormTextarea
                                                id="exampleFormControlTextarea1"
                                                label="Message"
                                                value={Message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                rows="2"
                                                text="Must be 8-20 words long."
                                            ></CFormTextarea>
                                        </CCol>

                                        <CCol lg={6} sm={12}>
                                            <CRow>
                                                <CCardTitle>Emergency contact</CCardTitle>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Name"
                                                        value={person_Name}
                                                        onChange={(e) => setperson_Name(e.target.value)}
                                                        placeholder="Enter Name"
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        type="text"
                                                        id="exampleFormControlInput1"
                                                        label="Relationship"
                                                        value={Relation}
                                                        onChange={(e) => setRelation(e.target.value)}
                                                        placeholder="Enter Relationship"
                                                    />
                                                </CCol>

                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Working Days"
                                                        value={CountryCode2}
                                                        onChange={(e) => setCountryCode2(e.target.value)}
                                                        label="Country Code"
                                                    >{CountryList.map((item, index) => (
                                                        <option key={index} value={item.dial_code}>{item.name} {item.dial_code}</option>
                                                    ))}
                                                    </CFormSelect>
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>

                                                    <CFormInput
                                                        className="mb-1"
                                                        type="number"
                                                        value={ContactNumber2}
                                                        onChange={(e) => setContactNumber2(e.target.value)}
                                                        id="exampleFormControlInput1"
                                                        label="Contact Number"
                                                        placeholder="Enter Number"
                                                    />
                                                </CCol>
                                            </CRow>
                                            <CRow>
                                                <CCardTitle>Lead Information</CCardTitle>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormInput
                                                        className="mb-1"
                                                        name="enquiry_date"
                                                        type="date"
                                                        id="exampleFormControlInput1"
                                                        value={EnquiryDate}
                                                        onChange={(e) => setEnquiryDate(e.target.value)}
                                                        label="Enquiry Date"
                                                        placeholder="Enter date"
                                                    />
                                                </CCol>

                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Service Name"
                                                        value={ServiceName}
                                                        onChange={(e) => setServiceName(e.target.value)}
                                                        label="Service Name"

                                                    >
                                                        <option>Select Service</option>
                                                        {result.map((item, index) => (
                                                            item.username === username && (
                                                                item.status === true && (
                                                                    <option key={index} value={item.id}>{item.selected_service} {item.sub_Service_Name}</option>
                                                                )
                                                            )
                                                        ))}
                                                    </CFormSelect>
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Customer type"
                                                        value={Customertype}
                                                        onChange={(e) => setCustomertype(e.target.value)}
                                                        label="Customer type"
                                                        options={[
                                                            "Select Customer type",
                                                            { label: "Self", value: "Self" },
                                                            { label: "Group", value: "Group" },
                                                            { label: "Couple", value: "Couple" },
                                                            { label: "Youth", value: "Touth" },
                                                            { label: "Kids", value: "Kids" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CFormSelect
                                                        className="mb-1"
                                                        aria-label="Select Enquiry Type"
                                                        value={enquirytype}
                                                        onChange={(e) => setEnquirytype(e.target.value)}
                                                        label="Enquiry Type"
                                                        options={[
                                                            "Select Enquiry Type",
                                                            { label: "Walk-In", value: "Walk-In" },
                                                            { label: "E-mail", value: "E-mail" },
                                                            { label: "Social Media", value: "Social Media" },
                                                            { label: "Website", value: "Website" },
                                                            { label: "Call Enquiry", value: "Call Enquiry" },
                                                        ]}
                                                    />
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CInputGroup className="mt-2">
                                                        <CInputGroupText className="mb-1">Appointment Date</CInputGroupText>
                                                        <CFormInput
                                                            className="mb-1"
                                                            type="date"
                                                            value={appointmentDate}
                                                            onChange={(e) => setappointmentDate(e.target.value)}
                                                            id="exampleFormControlInput1"
                                                        />
                                                    </CInputGroup>
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CInputGroup className="mt-2">
                                                        <CInputGroupText className="mb-1">Appointment Time</CInputGroupText>
                                                        <CFormInput
                                                            className="mb-1"
                                                            type="time"
                                                            id="exampleFormControlInput1"
                                                            value={appointmentTime}
                                                            onChange={(e) => setappointmentTime(e.target.value)}

                                                        />
                                                    </CInputGroup>
                                                </CCol>
                                                <CCol lg={6} md={6} sm={12}>
                                                    <CInputGroup className="mt-2">
                                                        <CInputGroupText className="mb-1">Enquiry For</CInputGroupText>
                                                        <CFormSelect
                                                            className="mb-1"
                                                            aria-label="Select"
                                                            value={appointmentfor}
                                                            onChange={(e) => setappointmentfor(e.target.value)}
                                                            options={[
                                                                "Select",
                                                                { label: "Appointment", value: "Appointment" },
                                                                { label: "Trial Session", value: "Trial Session" },
                                                            ]}
                                                        />
                                                    </CInputGroup>
                                                </CCol>
                                            </CRow>
                                        </CCol>
                                    </CRow>

                                </CForm>

                            </CModalBody>

                            <CModalFooter>
                                <CButton color="secondary" onClick={() => setVisible1(false)}>
                                    Close
                                </CButton>
                                <CButton type='submit' color="primary">Save changes</CButton>
                            </CModalFooter>
                        </CModal>
                        <CTable className='mt-3' align="middle" bordered style={{ borderColor: "#0B5345" }} hover responsive>
                            <CTableHead style={{ backgroundColor: "#0B5345", color: "white" }} >
                                <CTableRow >
                                    <CTableHeaderCell>Sr.No</CTableHeaderCell>
                                    <CTableHeaderCell>Enquiry ID</CTableHeaderCell>
                                    <CTableHeaderCell>Date</CTableHeaderCell>
                                    <CTableHeaderCell>Time</CTableHeaderCell>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell>Mobile</CTableHeaderCell>
                                    <CTableHeaderCell>Service</CTableHeaderCell>
                                    <CTableHeaderCell>Source</CTableHeaderCell>
                                    <CTableHeaderCell>Enquiry stage</CTableHeaderCell>
                                    <CTableHeaderCell>Call Status</CTableHeaderCell>
                                    <CTableHeaderCell>Last Call</CTableHeaderCell>
                                    <CTableHeaderCell>Addmission</CTableHeaderCell>
                                    <CTableHeaderCell>Assigned by</CTableHeaderCell>
                                    <CTableHeaderCell>Counseller</CTableHeaderCell>
                                    <CTableHeaderCell>Action</CTableHeaderCell>
                                    <CTableHeaderCell>Edit</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {result1.map((item, index) => (
                                    item.username === username && (
                                        <CTableRow key={index}>
                                            <CTableDataCell>{index + 1}</CTableDataCell>
                                            <CTableDataCell>{centerCode}ENQ{index + 10}</CTableDataCell>
                                            <CTableDataCell className='text-center'>{moment(item.appointmentDate).format("LL")}</CTableDataCell>
                                            <CTableDataCell>{moment(item.appointmentTime, "HH:mm").format("hh:mm A")}</CTableDataCell>
                                            <CTableDataCell>{item.Fullname}</CTableDataCell>
                                            <CTableDataCell>{item.ContactNumber}</CTableDataCell>
                                            <CTableDataCell>{item.ServiceName}</CTableDataCell>
                                            <CTableDataCell>{item.enquirytype}</CTableDataCell>
                                            <CTableDataCell>{item.appointmentfor}</CTableDataCell>
                                            <CTableDataCell>{item.CallStatus}</CTableDataCell>
                                            <CTableDataCell>{item.Message}</CTableDataCell>
                                            <CTableDataCell>-</CTableDataCell>
                                            <CTableDataCell>{item.StaffName}</CTableDataCell>
                                            <CTableDataCell>-</CTableDataCell>
                                            <CTableDataCell><a href={`tel:${item.CountryCode}${item.ContactNumber}`}><MdCall style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`https://wa.me/${item.ContactNumber}`}><BsWhatsapp style={{ cursor: 'pointer', markerStart: '10px' }} size='20px' /></a><a href={`mailto: ${item.Emailaddress}`}> <MdMail style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /></a> <BsPlusCircle id={item._id} style={{ cursor: 'pointer', markerStart: '10px' }} onClick={handleFollowup} /></CTableDataCell>
                                            <CTableDataCell><MdEdit id={item._id} style={{ cursor: 'pointer', markerStart: '10px' }} onClick={handleEnquiry} size='20px' /> <MdDelete style={{ cursor: 'pointer', markerStart: '10px' }} onClick={() => deleteEnquiry(item._id)} size='20px' /></CTableDataCell>
                                        </CTableRow>

                                    )
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol >
        </CRow >
    )
}

export default AllEnquires
